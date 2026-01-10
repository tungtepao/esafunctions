import esbuild from 'esbuild';
import fs from 'fs';

// 确保存在 dist 目录
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist', { recursive: true });
}

async function build() {
  try {
    console.log('开始打包所有依赖到 dist 目录...');

    // 打包主入口文件，包含所有依赖（包括 itty-router）
    // 这样可以确保在 serverless 环境中无需安装任何依赖
    await esbuild.build({
      entryPoints: ['src/index.ts'],
      bundle: true,
      platform: 'node',
      target: 'node24',
      format: 'esm',
      outfile: 'dist/index.js',
      external: [], // 不排除任何依赖，全部打包
      sourcemap: false,
      treeShaking: true,
      minify: false,
      logLevel: 'info',
      loader: {
        '.ts': 'ts'
      },
      // 确保 Node.js 模块解析正确
      resolveExtensions: ['.ts', '.js', '.json', '.node'],
      mainFields: ['module', 'main'],
      conditions: ['node', 'import']
    });

    console.log('✅ 打包完成！');
    console.log('📦 所有依赖（包括 itty-router）已打包到 dist/index.js，可直接部署到 serverless 环境');
  } catch (error) {
    console.error('❌ 打包失败:', error);
    process.exit(1);
  }
}

build();

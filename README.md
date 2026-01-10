# ESA Functions - Serverless 部署

## 构建项目

项目已配置为将所有依赖打包到单个文件，支持 serverless 环境部署。

```bash
pnpm build
```

构建完成后，`dist/index.js` 将包含所有依赖（包括 @midwayjs 框架、Node.js 内置模块等），可直接部署到 serverless 平台。

## 构建输出

- `dist/index.js` - 包含所有依赖的完整打包文件（约 563KB）
- `dist/index.d.ts` - 类型声明文件
- `dist/configuration.js` - 配置文件
- `dist/controller/` - 控制器文件

## Serverless 部署

由于所有依赖都已打包到 `dist/index.js`，你可以直接上传 `dist` 文件夹到 serverless 平台（如 Vercel、Cloudflare Workers、腾讯云 SCF 等）。

部署时只需确保：
- 运行环境为 Node.js 18 或更高版本
- 入口文件为 `dist/index.js`

## 文件结构

```
dist/
├── index.js          # 包含所有依赖的完整打包文件
├── index.d.ts        # 类型声明
├── configuration.js  # 配置文件
├── configuration.d.ts
└── controller/
    └── user.controller.js
```

## 注意事项

- 构建使用 esbuild 进行打包，tree-shaking 已启用，会移除未使用的代码
- 所有第三方依赖（@midwayjs/*）都已包含在打包文件中
- Node.js 内置模块（如 fs、path、util 等）也已打包，无需运行时环境提供

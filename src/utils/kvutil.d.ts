/**
 * KV 存储工具函数的类型声明
 */

/**
 * EdgeKV 命名空间
 */
export interface KVNamespace {
  // KV 命名空间的标识符
}

/**
 * KV 存储选项
 */
export interface KVOptions {
  /**
   * 过期时间（秒）
   */
  expirationTtl?: number;
  
  /**
   * 过期时间戳（毫秒）
   */
  expiration?: number;
  
  /**
   * 元数据
   */
  metadata?: Record<string, any>;
}

/**
 * 列出 KV 键的选项
 */
export interface KVListOptions {
  /**
   * 键名前缀过滤
   */
  prefix?: string;
  
  /**
   * 返回的最大数量
   */
  limit?: number;
  
  /**
   * 游标，用于分页
   */
  cursor?: string;
}

/**
 * KV 列表结果
 */
export interface KVListResult {
  keys: Array<{
    name: string;
    expiration?: number;
    metadata?: Record<string, any>;
  }>;
  list_complete: boolean;
  cursor?: string;
}

/**
 * EdgeKV 类
 */
declare class EdgeKV {
  constructor(options: { namespace: string });
  get(key: string, options?: { type: string }): Promise<string | null>;
}

/**
 * 从 KV 命名空间获取数据
 * @param kv - KV 命名空间
 * @param key - 键名
 * @returns 解析后的数据
 */
export function getFromKV(kv: string, key: string): Promise<any>;

/**
 * 将数据保存到 KV 命名空间
 * @param kv - KV 命名空间
 * @param key - 键名
 * @param data - 要保存的数据
 * @param options - 可选配置（如 expirationTtl）
 */
export function putToKV(kv: KVNamespace, key: string, data: any, options?: KVOptions): Promise<void>;

/**
 * 从 KV 命名空间删除数据
 * @param kv - KV 命名空间
 * @param key - 键名
 */
export function deleteFromKV(kv: KVNamespace, key: string): Promise<void>;

/**
 * 列出 KV 命名空间中的键
 * @param kv - KV 命名空间
 * @param options - 可选配置（如 prefix, limit）
 * @returns 键名数组
 */
export function listKeysFromKV(kv: KVNamespace, options?: KVListOptions): Promise<string[]>;

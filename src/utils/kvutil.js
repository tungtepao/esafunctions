/**
 * KV 存储工具函数
 */

/**
 * 从 KV 命名空间获取数据
 * @param {KVNamespace} kv - KV 命名空间
 * @param {string} key - 键名
 * @returns {Promise<any>} - 解析后的数据
 */
export async function getFromKV(kv, key) {
  try {
    const edgeKV = new EdgeKV({ namespace: kv });
    let getType = { type: "text" };
    let value = await edgeKV.get(key, getType);
    console.alert("get value from kv: key=",key,";value=",value)
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  } catch (error) {
    console.error(`Error getting key ${key} from KV:`, error);
    throw error;
  }
}

/**
 * 将数据保存到 KV 命名空间
 * @param {KVNamespace} kv - KV 命名空间
 * @param {string} key - 键名
 * @param {any} data - 要保存的数据
 * @param {object} options - 可选配置（如 expirationTtl）
 * @returns {Promise<void>}
 */
export async function putToKV(kv, key, data, options = {}) {
  try {
    const edgeKV = new EdgeKV({ namespace: kv });
    let getType = { type: "text" };
    let oldvalue = await edgeKV.get(key, getType);
    let data = await edgeKV.put(key, Number(oldvalue)+1);
    console.alert("put data:",data)
  } catch (error) {
    console.error(`Error putting key ${key} to KV:`, error);
    throw error;
  }
}

/*
序列化stringify后的数据保存到 KV 命名空间
*/
export async function putDataToKv(kv, key, data, options = {}) {
  try {
    const edgeKV = new EdgeKV({ namespace: kv });
    let putRespdata = await edgeKV.put(key, data);
    console.alert("put data:",putRespdata)
  } catch (error) {
    console.error(`Error putting key ${key} to KV:`, error);
    throw error;
  }
}

/**
 * 从 KV 命名空间删除数据
 * @param {KVNamespace} kv - KV 命名空间
 * @param {string} key - 键名
 * @returns {Promise<void>}
 */
export async function deleteFromKV(kv, key) {
  try {
    await kv.delete(key);
  } catch (error) {
    console.error(`Error deleting key ${key} from KV:`, error);
    throw error;
  }
}

/**
 * 列出 KV 命名空间中的键
 * @param {KVNamespace} kv - KV 命名空间
 * @param {object} options - 可选配置（如 prefix, limit）
 * @returns {Promise<string[]>}
 */
export async function listKeysFromKV(kv, options = {}) {
  try {
    const listResult = await kv.list(options);
    return listResult.keys.map(key => key.name);
  } catch (error) {
    console.error('Error listing keys from KV:', error);
    throw error;
  }
}

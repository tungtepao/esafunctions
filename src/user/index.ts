import { getFromKV,putToKV } from '../utils/kvutil.js';

export interface UserGetResponse {
  userid: string;
  name: string;
  totalAccess: any;
}

export interface UserPostRequest {
  name: string;
}

export interface UserPostResponse {
  code: number;
}

export class UserService {
  private readonly kvNamespace = 'web';

  // GET /user/{userid}
  async getUser(userid: string): Promise<UserGetResponse> {
    try {
      const result = await getFromKV(this.kvNamespace, 'totalAccess');
      return {
        userid: userid,
        name: 'test',
        totalAccess: result
      };
    } catch (error) {
      console.error('Error in getUser:', error);
      return {
        userid: userid,
        name: 'test',
        totalAccess: null
      };
    }
  }

  // POST /user
  async createUser(data: UserPostRequest): Promise<UserPostResponse> {
    try {
      // 这里可以添加实际的业务逻辑
      const result = await putToKV(this.kvNamespace, 'totalAccess', 1);
      console.alert("put to kv:",result);
      return {
        code: 200
      };
    } catch (e) {
      console.error('Error in createUser:', e);
      return {
        code: 400
      };
    }
  }
}

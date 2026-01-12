import { getFromKV ,putDataToKv} from '../utils/kvutil.js';

export interface UserInfo {
  userid: string;
  name: string;

  toJSON(): string;
}

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

export class UserInfoImpl implements UserInfo {
  userid: string;
  name: string;

  constructor(userid: string, name: string) {
    this.userid = userid;
    this.name = name;
  }

  toJSON(): string {
    return JSON.stringify({
      userid: this.userid,
      name: this.name
    });
  }

  static fromJSON(json: string): UserInfo {
    const data = JSON.parse(json);
    return new UserInfoImpl(data.userid, data.name);
  }
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
  async createUser(user: UserInfo): Promise<UserPostResponse> {
    try {
      // 这里可以添加实际的业务逻辑
      const result = await putDataToKv(this.kvNamespace, user.userid, user);
      console.log("put to kv:", result);
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


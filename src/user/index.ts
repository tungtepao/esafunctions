export interface UserGetResponse {
  userid: string;
  name: string;
}

export interface UserPostRequest {
  name: string;
}

export interface UserPostResponse {
  code: number;
}

export class UserService {
  // GET /user/{userid}
  async getUser(userid: string): Promise<UserGetResponse> {
    return {
      userid: userid,
      name: 'test'
    };
  }

  // POST /user
  async createUser(data: UserPostRequest): Promise<UserPostResponse> {
    return {
      code: 200
    };
  }
}

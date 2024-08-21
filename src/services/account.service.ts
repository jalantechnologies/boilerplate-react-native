import { AccessToken, APIResponse } from '../types';

import { APIService } from './api-service';

export class AccountService extends APIService {
  getAccount = async (userAccessToken: AccessToken): Promise<APIResponse> => {
    return this.get(
      `/accounts/${userAccessToken.accountId}`,
      this.getBearerTokenHeader(userAccessToken.token),
    );
  };

  updateAccount = async (
    firstName: string,
    lastName: string,
    userAccessToken: AccessToken,
  ): Promise<APIResponse> => {
    return this.patch(
      `/accounts/${userAccessToken.accountId}`,
      {
        firstName,
        lastName,
      },
      this.getBearerTokenHeader(userAccessToken.token),
    );
  };

  deleteAccount = async (userAccessToken: AccessToken): Promise<APIResponse> => {
    return this.delete(`/accounts/${userAccessToken.accountId}`);
  };
}

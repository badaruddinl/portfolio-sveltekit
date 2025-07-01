/** Types generated for queries found in "src/lib/sql/user/get-user.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetUser' parameters type */
export interface IGetUserParams {
  username?: string | null | void;
}

/** 'GetUser' return type */
export interface IGetUserResult {
  username: string;
}

/** 'GetUser' query type */
export interface IGetUserQuery {
  params: IGetUserParams;
  result: IGetUserResult;
}

const getUserIR: any = {"usedParamSet":{"username":true},"params":[{"name":"username","required":false,"transform":{"type":"scalar"},"locs":[{"a":45,"b":53}]}],"statement":"SELECT username FROM \"user\" WHERE username = :username"};

/**
 * Query generated from SQL:
 * ```
 * SELECT username FROM "user" WHERE username = :username
 * ```
 */
export const getUser = new PreparedQuery<IGetUserParams,IGetUserResult>(getUserIR);



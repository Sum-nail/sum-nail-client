import { client } from '..';
import { getProfileOutput } from './types';

// headers에 토큰 넣어야함
export const getProfile = async (): Promise<getProfileOutput> => {
  const { data } = await client.get<getProfileOutput>(`v1/user/profile`);
  return data;
};

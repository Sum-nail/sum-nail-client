import { client } from '..';
import { GetNailShopsOutput, GetShopDetailOutput } from './types';

export const getShops = async (): Promise<GetNailShopsOutput> => {
  const { data } = await client.get<GetNailShopsOutput>(`/v1/nail-shops`);
  return data;
};

export const getSearchingShop = async (hashtags: string, station: string) => {
  const { data } = await client.get<GetNailShopsOutput>(`v1/nail-shops/search?hashtags=${hashtags}&station=${station}`);
  return data;
};

export const getShopDetails = async (nailShopId: number) => {
  const { data } = await client.get<GetShopDetailOutput>(` v1/nail-shops/:${nailShopId}`);
  return data;
};

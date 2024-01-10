import { client } from '..';
import { GetHashTagsOutput, GetStationsOutput } from './types';

export const getHashTags = async (): Promise<GetHashTagsOutput> => {
  const { data } = await client.get<GetHashTagsOutput>(`/v1/hashtags`);
  return data;
};

export const getStations = async (station: string): Promise<GetStationsOutput> => {
  const { data } = await client.get<GetStationsOutput>(`v1/stations?keyword=${station}`);
  return data;
};

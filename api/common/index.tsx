import { client } from '..';
import { GetHashTagsOutput, GetStationsOutput, GetStationsRecordsOutput } from './types';

export const getHashTags = async (): Promise<GetHashTagsOutput> => {
  const { data } = await client.get<GetHashTagsOutput>(`/v1/hashtags`);
  return data;
};

export const getStations = async (station: string): Promise<GetStationsOutput> => {
  const { data } = await client.get<GetStationsOutput>(`v1/stations?keyword=${station}`);
  return data;
};

export const addStations = async (station: string) => {
  await client.post(`v1/user/search-station-history`, {
    stationName: station,
  });
};

export const getStationsRecords = async (): Promise<GetStationsRecordsOutput> => {
  const { data } = await client.get<GetStationsRecordsOutput>(`v1/user/search-station-history`);
  return data;
};

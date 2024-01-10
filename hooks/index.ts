//훅 관련 폴더입니당!
import { getShops, getSearchingShop, getShopDetails } from '@/api/nail-shops';
import { getStations } from '@/api/common';
import { useQuery } from '@tanstack/react-query';

export const useGetShops = () => {
  const { data } = useQuery({
    queryKey: ['Shops'],
    queryFn: () => getShops(),
  });
  return { list: data };
};

export const useGetSearchingShop = (hashtags: string, station: string) => {
  const { data } = useQuery({
    queryKey: ['SearchingShops', hashtags, station],
    queryFn: () => getSearchingShop(hashtags, station),
  });
  return { list: data };
};

export const useGetShopDetails = (nailShopId: number) => {
  const { data } = useQuery({
    queryKey: ['ShopsDetail', nailShopId],
    queryFn: () => getShopDetails(nailShopId),
  });
  return data;
};

export const useGetStations = (station: string) => {
  const { data } = useQuery({
    queryKey: ['Station', station],
    queryFn: () => getStations(station),
  });
  return data;
};

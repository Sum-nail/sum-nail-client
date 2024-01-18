'use client';
//상세보기 페이지 입니다!
import { getShopDetails } from '@/api/nail-shops';
// import { ShopDetail } from '@/api/nail-shops/types';
import DefaultBottomButton from '@/components/detail/DefaultBottomButton';
import DetailNav from '@/components/detail/DetailNav';
import ImageCarousel from '@/components/detail/ImageCarousel';
import NailCost from '@/components/detail/NailCost';
import NailInfo from '@/components/detail/NailInfo';
import OpeningHour from '@/components/detail/OpeningHour';
import StoreMap from '@/components/detail/StoreMap';
import ThisMonthNail from '@/components/detail/ThisMonthNail';

import styled from '@emotion/styled';

interface ShopDetail {
  nailshopId: number;
  nailshopName: string;
  detailImages: string[];
  location: string;
  hashTags: string[];
  businessHour: string;
  employeeNum: number;
  minimumPrice: number;
  maximumPrice: number;
  mapLat: number;
  mapLng: number;
  streetAddress: string;
  naverMapLink: string;
  reservationLink: string;
  monthlyNailLink: string;
}

function DetailPageContainer({
  nailshopId,
  nailshopName,
  detailImages,
  location,
  hashTags,
  businessHour,
  employeeNum,
  minimumPrice,
  maximumPrice,
  mapLat,
  mapLng,
  streetAddress,
  naverMapLink,
  reservationLink,
  monthlyNailLink,
}: ShopDetail) {
  return (
    <>
      <DetailNav />
      <ImageCarousel detailImages={detailImages} />
      <NailInfo />
      <StoreMap />
      <OpeningHour />
      <NailCost />
      <ThisMonthNail />
      <DefaultBottomButton />
    </>
  );
}

export default DetailPageContainer;

const DetailContainer = styled.div`
  overflow: scroll;
`;

'use client';
import LoginModal from '@/components/common/LoginModal';
import LongBottomButton from '@/components/common/LongBottomButton';
//상세보기 페이지 입니다!
import DefaultBottomButton from '@/components/detail/DefaultBottomButton';
import DetailNav from '@/components/detail/DetailNav';
import ImageCarousel from '@/components/detail/ImageCarousel';
import NailCost from '@/components/detail/NailCost';
import NailInfo from '@/components/detail/NailInfo';
import OpeningHour from '@/components/detail/OpeningHour';
import StoreMap from '@/components/detail/StoreMap';
import ThisMonthNail from '@/components/detail/ThisMonthNail';
import styled from '@emotion/styled';

function ShopDetailPage() {
  return (
    <DetailContainer>
      <DetailNav />
      <ImageCarousel />
      <NailInfo />
      <StoreMap />
      <OpeningHour />
      <NailCost />
      <ThisMonthNail />
      <DefaultBottomButton />
    </DetailContainer>
  );
}

export default ShopDetailPage;

const DetailContainer = styled.div`
  overflow: scroll;
`;

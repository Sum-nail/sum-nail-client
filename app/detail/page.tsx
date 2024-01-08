'use client';
//상세보기 페이지 입니다!
import DefaultBottomButton from '@/components/detail/DefaultBottomButton';
import DetailNav from '@/components/detail/DetailNav';
import ImageCarousel from '@/components/detail/ImageCarousel';
import NailInfo from '@/components/detail/NailInfo';
import styled from '@emotion/styled';

function ShopDetailPage() {
  return (
    <DetailContainer>
      <DetailNav />
      <DefaultBottomButton />
      <ImageCarousel />
      <NailInfo />
    </DetailContainer>
  );
}

export default ShopDetailPage;

const DetailContainer = styled.div`
  overflow: scroll;
`;

'use client';
//상세보기 페이지 입니다!
import DefaultBottomButton from '@/components/detail/DefaultBottomButton';
import DetailNav from '@/components/detail/DetailNav';
import ImageCarousel from '@/components/detail/ImageCarousel';

function ShopDetailPage() {
  return (
    <div>
      <DetailNav />
      <DefaultBottomButton />
      <ImageCarousel />
    </div>
  );
}

export default ShopDetailPage;

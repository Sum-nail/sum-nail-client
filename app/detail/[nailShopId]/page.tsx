'use client';
import { getShopDetails, getShops } from '@/api/nail-shops';
import { ShopDetail } from '@/api/nail-shops/types';
import DetailPageContainer from '@/components/detail/DetailPageContainer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

async function ShopDetailPage() {
  const router = useRouter();
  const [nailShopId, setNailShopId] = useState<string>('');

  useEffect(() => {
    const { nailShopId } = router.query;
    if (nailShopId) setNailShopId(nailShopId as string);
  }, [router.query]);

  const shopRes = await getShopDetails(Number(nailShopId));
  const { data: shopData } = shopRes;

  return <DetailPageContainer {...shopData} />;
}

export default ShopDetailPage;

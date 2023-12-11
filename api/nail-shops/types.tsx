export interface GetNailShopsOutput {
  status: number;
  message: string;
  data: {
    nailShops: NailShop[];
  };
}

export interface NailShop {
  nailShopId: number;
  nailShopName: string;
  location: string;
  hashtags: string[];
  titleImage: string;
}

export interface GetSearchingNailShopInput {
  hashtags: string;
  station: string;
}

export interface GetShopDetailOutput {
  status: number;
  message: string;
  data: ShopDetail;
}

export interface ShopDetail {
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

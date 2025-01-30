export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  currency: string;
  rating?: number;
  reviewCount?: number;
  isFavorite?: boolean;
  isOnSale?: boolean;
  salePrice?: number;
  freeShipping?: boolean;
  location?: string;
  sellerName?: string;
  sellerAvatarUrl?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  isLimitedStock?: boolean;
}

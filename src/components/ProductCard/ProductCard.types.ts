import { IProduct } from "@app/types";

export interface IProductCardProps {
  product: IProduct;
  onPress?: () => void;
  onFavoriteToggle?: (id: string) => void;
}

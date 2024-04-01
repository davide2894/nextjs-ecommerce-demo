interface IBaseProduct {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
}
export interface ICartItem extends IBaseProduct {
  cartId: string | null;
  productId: string;
  discountPercentage: number;
  quantity: number;
}

export interface IProduct extends IBaseProduct {
  description: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
}

export type Cart = {
  id: string;
  items: ICartItem[];
  subTotal: number;
  totalQuantity: number;
};

export type ProductToAdd = {
  id: number;
  quantity: number;
};

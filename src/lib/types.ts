interface BaseProduct {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
}
export interface CartItemData extends BaseProduct {
  cartId: string | null;
  productId: string;
  discountPercentage: number;
  quantity: number;
}

export interface Product extends BaseProduct {
  description: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
}

export type Cart = {
  id: string;
  items: CartItemData[];
  subTotal: number;
  totalQuantity: number;
};

export type ProductToAdd = {
  id: number;
  quantity: number;
};

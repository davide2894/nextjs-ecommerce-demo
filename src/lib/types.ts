interface IBaseProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  discountedPrice: number;
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

export interface ICartProduct extends IBaseProduct {
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

export type Cart = {
  products: ICartProduct[];
  quantity: number;
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type ProductToAdd = {
  id: number;
  quantity: number;
};

interface IBaseProduct {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
}

export interface IProduct extends IBaseProduct {
  description: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
}

export interface ICartItem extends IBaseProduct {
  cartId: string;
  productId: string;
  discountPercentage: number;
  quantity: number;
}

// export type Cart = {
//   id: string;
//   products: ICartProduct[];
//   quantity: number;
//   total: number;
//   discountedTotal: number;
//   userId: number;
//   totalProducts: number;
//   totalQuantity: number;
// };

export type Cart = {
  id: string;
  items: ICartItem[];
};

export type ProductToAdd = {
  id: number;
  quantity: number;
};

type CartItem = {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  discountPercentage: number;
  thumbnail: string;
  cartId: string;
};

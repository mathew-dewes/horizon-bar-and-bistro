export type UserCart = {
  id: string;
  cart_items: {
    id: string;
    quantity: number;
    products: {
      id: string;
      name: string;
      price: number;
      image_url: string | null;
    };
  }[];
};
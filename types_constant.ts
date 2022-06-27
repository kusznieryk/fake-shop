export const url = "https://api.escuelajs.co/api/v1/products?offset=0&limit=12"

interface itemOrig {
  title: string;
  price: number;
  id: number;
  descpription: string;
  images: string[];
}

export interface item extends itemOrig { }

export const url = "https://api.escuelajs.co/api/v1/products?"

interface itemOrig {
  title: string;
  price: number;
  id: number;
  description: string;
  images: string[];
}

export interface item extends itemOrig { }

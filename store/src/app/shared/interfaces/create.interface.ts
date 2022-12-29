export interface Create {
  name: string;
  author: string;
  price: number;
  description: string;
  extraInfo: {
    ololo: number;
    image: string;
  };
}

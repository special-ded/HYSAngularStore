export interface Order {
  name: string;
  phone: string;
  products: [
    {
      quantity: number;
      id: string;
      name: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface CreateOrder {
  name: string;
  phone: string;
  message: string;
  products: [
    {
      quantity: number;
      id: string;
      name: string;
    }
  ];
}

export interface UpdateOrder {
  name: string;
  phone: string;
  message: string;
  products: [
    {
      quantity: number;
      id: string;
      name: string;
    }
  ];
}

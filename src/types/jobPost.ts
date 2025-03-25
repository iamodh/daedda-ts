export type Condition = {
  date: string;
  company: string;
  workTime: [string, string];
};

export type Worker = {
  userId: number;
  orderId: number;
};

export type Extra = {
  address: string;
  condition: Condition;
  worker: Worker;
  state: string;
};

export type MainImage = {
  path: string;
  name: string;
  originalname: string;
};

export type JobPost = {
  name: string;
  price: number;
  quantity: number;
  content: string;
  extra: Extra;
  mainImages: MainImage[];
  show: boolean;
  shippingFees: number;
  seller_id: number;
  active: boolean;
  buyQuantity: number;
  createdAt: string;
  updatedAt: string;
};

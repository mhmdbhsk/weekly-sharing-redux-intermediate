declare module 'redux-persist/lib/storage';

type Item = {
  id: number;
  title: string;
  price: number;
  unit: string;
  stock: number;
  desc: string;
  total?: number;
};

type Data = Item[];

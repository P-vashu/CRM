declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
};

declare module "*.png";

declare type TODO = any

declare module "@emotion/styled" {
  import { CreateStyled } from '@emotion/styled/types/index';

  import { MyTheme } from '../../src/myTheme';
  export * from '@emotion/styled/types/index';
  const customStyled: CreateStyled<MyTheme>;
  export default customStyled;
}

declare type  Customer = {
  id: string;
  name: string;
  email: string;
  shippingAddress: string;
  billingAddress: string;
  mobile: string;
  phone: string;
  avatarUrl: string;
  hasItemInShoppingCart: boolean;
  membership: string;
}

declare type Agent = {
  id: string;
  name: string;
  role: string;
  status: string;
  company: string;
  email: string;
  mobile: string;
  avatarUrl: string;
  isVerified: boolean;
}

declare type Order = {
  id: string;
  name: string;
  amount: string;
  status: string;
  discount: string;
  avatarUrl: string;
  isDelayed: boolean;
  shippingAddress: string;
};


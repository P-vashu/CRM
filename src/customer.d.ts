declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
};


declare module "@emotion/styled" {
  import { CreateStyled } from '@emotion/styled/types/index';

  import { MyTheme } from '../../src/myTheme';
  export * from '@emotion/styled/types/index';
  const customStyled: CreateStyled<MyTheme>;
  export default customStyled;
}
import { withInstall } from '../utils';
import _CountTo from './CountTo';

export const CountTo = withInstall(_CountTo);
export default CountTo;
export { countToProps } from './CountTo';
export type { CountToProps } from './CountTo';

declare module 'vue' {
  export interface GlobalComponents {
    VanCountTo: typeof CountTo;
  }
}

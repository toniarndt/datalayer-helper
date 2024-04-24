/** @internal */
export interface DataLayer {
  [key: string | number]: string | string[] | number | number[] | DataLayer;
}

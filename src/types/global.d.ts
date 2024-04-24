import { DataLayer } from './data-layer';

declare global {
  interface Window {
    /**
     * The datalayer object
     */
    _datalayer: DataLayer;
  }
}

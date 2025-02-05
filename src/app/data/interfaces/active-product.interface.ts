import { Product } from "../models/product.model";

export interface ActiveProduct {
  product?: Product;
  variant?: number;
}
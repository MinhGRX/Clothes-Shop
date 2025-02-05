import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params, ActivatedRoute } from '@angular/router';

import { ProductsService } from 'src/app/data/services/products.service';
import { ProductListData } from 'src/app/data/store/product-list-data';

@Injectable({
  providedIn: 'root'
})
export class ProductListPageGuard implements CanActivate {

  constructor(private productsService: ProductsService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.productsService.dispatchLoadProducts(ProductListData);
    return true;
  }



}
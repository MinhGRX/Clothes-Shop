import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ProductsService } from 'src/app/data/services/products.service';
import { ProductListData } from 'src/app/data/store/product-list-data';

@Injectable({
  providedIn: 'root'
})
export class ProductPageGuard implements CanActivate {

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.productsService.dispatchLoadProducts(ProductListData);
    this.productsService.dispatchViewProduct(+next.params['id']);
    return true;
  }



}
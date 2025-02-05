import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { reducers } from './store/core.reducers';
import { CartService } from './services/cart.service';
import { CompareService } from './services/compare.service';
import { FavoriteService } from './services/favorite.service';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('core', reducers),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production, 
    }),
  ],
  exports: [

  ],
  providers: [
    CartService,
    CompareService,
    FavoriteService,
    ProductsService
  ]

})
export class DataModule { }
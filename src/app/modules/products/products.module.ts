import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { AddReviewComponent } from './components/products/add-review/add-review.component';
import { AddToCartComponent } from './components/products/add-to-cart/add-to-cart.component';
import { AddToCompareComponent } from './components/products/add-to-compare/add-to-compare.component';
import { AddToFavoriteComponent } from './components/products/add-to-favorite/add-to-favorite.component';
import { CarouselComponent } from './components/products/carousel/carousel.component';
import { DetailsComponent } from './components/products/details/details.component';
import { ColorpickComponent } from './components/products/colorpick/colorpick.component';
import { ReviewsComponent } from './components/products/reviews/reviews.component';
import { SizepickComponent } from './components/products/sizepick/sizepick.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';
import { RouterModule } from '@angular/router';
import { OtherProductsComponent } from './components/other-products/other-products.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductPageComponent } from './components/product-page.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddReviewComponent,
    AddToCartComponent,
    AddToCompareComponent,
    AddToFavoriteComponent,
    CarouselComponent,
    DetailsComponent,
    ColorpickComponent,
    ReviewsComponent,
    SizepickComponent,
    SimilarProductsComponent,
    OtherProductsComponent,
    ProductListPageComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    RouterModule
  ],
  exports: []
})
export class ProductsModule { }

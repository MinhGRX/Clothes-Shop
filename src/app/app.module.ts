import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { SharedModule } from './shared/shared.module';
import { AppFooterComponent } from './layouts/app-footer/app-footer.component';
import { AppHeaderComponent } from './layouts/app-header/app-header.component';
import { AppMainComponent } from './layouts/app-main/app-main.component';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from './modules/products/products.module';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { reducers } from './data/store/core.reducers';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppMainComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    DataModule,
    SharedModule,
    ProductsModule,
    // StoreModule.forRoot(reducers),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.gcpAuthClientId, { oneTapEnabled: false }),
          },
        ],
        onError: (error) => {
          console.log(error);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

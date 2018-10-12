import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HeaderComponent } from './public/header/header.component';
import { BannerComponent } from './public/banner/banner.component';
import { CategoryComponent } from './public/category/category.component';
import { FooterComponent } from './public/footer/footer.component';
import { BottomnavComponent } from './public/bottomnav/bottomnav.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GoodsComponent } from './pages/goods/goods.component';
import { CategoryallComponent } from './pages/categoryall/categoryall.component';
import { GoodsdetailsComponent } from './pages/goodsdetails/goodsdetails.component';
import { ShopcartComponent } from './pages/shopcart/shopcart.component';
import { UserregComponent } from './pages/userreg/userreg.component';
import { UserloginComponent } from './pages/userlogin/userlogin.component';
import { HelpComponent } from './pages/help/help.component';
import { MembercenterComponent } from './pages/membercenter/membercenter.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CategoryComponent,
    FooterComponent,
    BottomnavComponent,
    HomepageComponent,
    GoodsComponent,
    CategoryallComponent,
    GoodsdetailsComponent,
    ShopcartComponent,
    UserregComponent,
    UserloginComponent,
    HelpComponent,
    MembercenterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }

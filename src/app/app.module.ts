import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http/';
import { SalesDataService } from './Providers/sales-data.service';
import { SalesOrderDataService } from './Providers/sales-order-data.service';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseDataService } from './Providers/purchase-data.service';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseOrderDataService } from './Providers/purchase-order-data.service';
import { ProductComponent } from './product/product.component';
import { ProductDataService } from './Providers/product-data.service';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductCategoryDataService } from './Providers/product-category-data.service';
import { DesignComponent } from './design/design.component';
import { DesignDataService } from './Providers/design-data.service';
import { ColorComponent } from './color/color.component';
import { ColorDataService } from './Providers/color-data.service';
import { ImageComponent } from './image/image.component';
import { ImageDataService } from './Providers/image-data.service';
import { RoleComponent } from './role/role.component';
import { RoleDataService } from './Providers/role-data.service';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierDataService } from './Providers/supplier-data.service';
import { SalesDetailComponent } from './sales-detail/sales-detail.component';
import { SalesDetailDataService } from './Providers/sales-detail-data.service';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';
import { SalesOrderDetailDataService } from './Providers/sales-order-detail-data.service';
import { SalesPaymentComponent } from './sales-payment/sales-payment.component';
import { SalesPaymentDataService } from './Providers/sales-payment-data.service';
import { SalesReturnComponent } from './sales-return/sales-return.component';
import { SalesReturnDataService } from './Providers/sales-return-data.service';
import { SalesReturnDetailComponent } from './sales-return-detail/sales-return-detail.component';
import { SalesReturnDetailDataService } from './Providers/sales-return-detail-data.service';
import { CityComponent } from './city/city.component';
import { CityDataService } from './Providers/city-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    PurchaseComponent,
    SalesOrderComponent,
    PurchaseOrderComponent,
    ProductComponent,
    ProductCategoryComponent,
    DesignComponent,
    ColorComponent,
    ImageComponent,
    RoleComponent,
    SupplierComponent,
    SalesDetailComponent,
    SalesOrderDetailComponent,
    SalesPaymentComponent,
    SalesReturnComponent,
    SalesReturnDetailComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SalesDataService,
    PurchaseDataService,
    SalesOrderDataService,
    PurchaseOrderDataService,
    ProductDataService,
    ProductCategoryDataService,
    DesignDataService,
    ColorDataService,
    ImageDataService,
    RoleDataService,
    SupplierDataService,
    SalesDetailDataService,
    SalesOrderDetailDataService,
    SalesPaymentDataService,
    SalesReturnDataService,
    SalesReturnDetailDataService,
    CityDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { PurchaseOrderDetailComponent } from './purchase-order-detail/purchase-order-detail.component';
import { PurchaseOrderDetailDataService } from './Providers_exclusive/purchase-order-detail-data.service';
import { PurchaseDetailComponent } from './purchase-detail/purchase-detail.component';
import { PurchaseDetailDataService } from './Providers_exclusive/purchase-detail-data.service';
import { PurchasePaymentComponent } from './purchase-payment/purchase-payment.component';
import { PurchasePaymentDataService } from './Providers_exclusive/purchase-payment-data.service';
import { PurchaseReturnComponent } from './purchase-return/purchase-return.component';
import { PurchaseReturnDataService } from './Providers_exclusive/purchase-return-data.service';
import { PurchaseReturnDetailComponent } from './purchase-return-detail/purchase-return-detail.component';
import { PurchaseReturnDetailDataService } from './Providers_exclusive/purchase-return-detail-data.service';
import { UserMasterComponent } from './user-master/user-master.component';
import { UserMasterDataService } from './Providers_exclusive/user-master-data.service';

import { routing } from './app.routing';
import { SidebarmenuComponent } from './sidebarmenu.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCityComponent } from './add-city/add-city.component';
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
    CityComponent,
    PurchaseOrderDetailComponent,
    PurchaseDetailComponent,
    PurchasePaymentComponent,
    PurchaseReturnComponent,
    PurchaseReturnDetailComponent,
    UserMasterComponent,
    SidebarmenuComponent,
    AddProductComponent,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
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
    CityDataService,
    PurchaseOrderDetailDataService,
    PurchaseDetailDataService,
    PurchasePaymentDataService,
    PurchaseReturnDataService,
    PurchaseReturnDetailDataService,
    UserMasterDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

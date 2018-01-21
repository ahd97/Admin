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
import { AddSalesOrderComponent } from './add-sales-order/add-sales-order.component';
import { AddSalesOrderDetailComponent } from './add-sales-order-detail/add-sales-order-detail.component';
import { AddColorComponent } from './add-color/add-color.component';
import { AddDesignComponent } from './add-design/add-design.component';
import { AddImageComponent } from './add-image/add-image.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { AddPurchaseDetailComponent } from './add-purchase-detail/add-purchase-detail.component';
import { AddPurchaseOrderComponent } from './add-purchase-order/add-purchase-order.component';
import { AddPurchaseOrderDetailComponent } from './add-purchase-order-detail/add-purchase-order-detail.component';
import { AddPurchasePaymentComponent } from './add-purchase-payment/add-purchase-payment.component';
import { AddPurchaseReturnComponent } from './add-purchase-return/add-purchase-return.component';
import { AddPurchaseReturnDetailComponent } from './add-purchase-return-detail/add-purchase-return-detail.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { AddSalesPaymentComponent } from './add-sales-payment/add-sales-payment.component';
import { AddSalesReturnComponent } from './add-sales-return/add-sales-return.component';
import { AddSalesReturnDetailComponent } from './add-sales-return-detail/add-sales-return-detail.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateproductComponent } from './product/updateproduct.component';
import { UpdateProductCategoryComponent } from './product-category/update-product-category.component';
import { UpdateSalesComponent } from './sales/update-sales.component';
import { UpdateColorComponent } from './color/update-color.component';
import { UpdateCityComponent } from './city/update-city.component';
import { UpdateDesignComponent } from './design/update-design.component';
import { UpdateImageComponent } from './image/update-image.component';
import { UpdateRoleComponent } from './role/update-role.component';
import { UpdateSupplierComponent } from './supplier/update-supplier.component';
import { UpdatePurchaseComponent } from './purchase/update-purchase.component';
import { UpdatePurchaseDetailComponent } from './purchase-detail/update-purchase-detail.component';
import { UpdatePurchaseOrderComponent } from './purchase-order/update-purchase-order.component';
import { UpdatePurchaseOrderDetailComponent } from './purchase-order-detail/update-purchase-order-detail.component';
import { UpdatePurchasePaymentComponent } from './purchase-payment/update-purchase-payment.component';
import { UpdatePurchaseReturnComponent } from './purchase-return/update-purchase-return.component';
import { UpdatePurchaseReturnDetailComponent } from './purchase-return-detail/update-purchase-return-detail.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { UpdateSalesDetailComponent } from './sales-detail/update-sales-detail.component';
import { UpdateSalesOrderComponent } from './sales-order/update-sales-order.component';
import { UpdateSalesOrderDetailComponent } from './sales-order-detail/update-sales-order-detail.component';
import { UpdateSalesPaymentComponent } from './sales-payment/update-sales-payment.component';
import { UpdateSalesReturnComponent } from './sales-return/update-sales-return.component';
import { UpdateSalesReturnDetailComponent } from './sales-return-detail/update-sales-return-detail.component';
import { UpdateUserComponent } from './user-master/update-user.component';
import { ViewUserComponent } from './user-master/view-user.component';
import { ViewSupplierComponent } from './supplier/view-supplier.component';
import { ViewSalesReturnDetailComponent } from './sales-return-detail/view-sales-return-detail.component';
import { ViewSalesReturnComponent } from './sales-return/view-sales-return.component';
import { ViewSalesPaymentComponent } from './sales-payment/view-sales-payment.component';
import { ViewSalesOrderDetailComponent } from './sales-order-detail/view-sales-order-detail.component';
import { ViewSalesOrderComponent } from './sales-order/view-sales-order.component';
import { ViewSalesDetailComponent } from './sales-detail/view-sales-detail.component';
import { ViewSalesComponent } from './sales/view-sales.component';
import { ViewRoleComponent } from './role/view-role.component';
import { ViewPurchaseReturnDetailComponent } from './purchase-return-detail/view-purchase-return-detail.component';
import { ViewPurchaseReturnComponent } from './purchase-return/view-purchase-return.component';
import { ViewPurchasePaymentComponent } from './purchase-payment/view-purchase-payment.component';
import { ViewPurchaseOrderDetailComponent } from './purchase-order-detail/view-purchase-order-detail.component';
import { ViewPurchaseOrderComponent } from './purchase-order/view-purchase-order.component';
import { ViewPurchaseDetailComponent } from './purchase-detail/view-purchase-detail.component';
import { ViewPurchaseComponent } from './purchase/view-purchase.component';
import { ViewProductCategoryComponent } from './product-category/view-product-category.component';
import { ViewProductComponent } from './product/view-product.component';
import { ViewImageComponent } from './image/view-image.component';
import { ViewColorComponent } from './color/view-color.component';
import { ViewDesignComponent } from './design/view-design.component';
import { ViewCityComponent } from './city/view-city.component';
import { CompanyDataService } from './Providers/company-data.service';
import { CompanyComponent } from './company/company.component';
import { UpdateCompanyComponent } from './company/update-company.component';
import { ViewCompanyComponent } from './company/view-company.component';
import { AddCompanyComponent } from './add-company/add-company.component';

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
    AddCityComponent,
    AddSalesOrderComponent,
    AddSalesOrderDetailComponent,
    UpdateproductComponent,
    AddColorComponent,
    AddDesignComponent,
    AddImageComponent,
    AddProductCategoryComponent,
    AddPurchaseComponent,
    AddPurchaseDetailComponent,
    AddPurchaseOrderComponent,
    AddPurchaseOrderDetailComponent,
    AddPurchasePaymentComponent,
    AddPurchaseReturnComponent,
    AddPurchaseReturnDetailComponent,
    AddSupplierComponent,
    AddRoleComponent,
    AddSalesPaymentComponent,
    AddSalesReturnComponent,
    AddSalesReturnDetailComponent,
    AddUserComponent,
    UpdateSalesComponent,
    UpdateProductCategoryComponent,
    UpdateColorComponent,
    UpdateCityComponent,
    UpdateDesignComponent,
    UpdateImageComponent,
    UpdateRoleComponent,
    UpdateSupplierComponent,
    UpdatePurchaseComponent,
    UpdatePurchaseDetailComponent,
    UpdatePurchaseOrderComponent,
    UpdatePurchaseOrderDetailComponent,
    UpdatePurchasePaymentComponent,
    UpdatePurchaseReturnComponent,
    UpdatePurchaseReturnDetailComponent,
    HeaderComponent,
    FooterComponent,
    UpdateSalesDetailComponent,
    UpdateSalesOrderComponent,
    UpdateSalesOrderDetailComponent,
    UpdateSalesPaymentComponent,
    UpdateSalesReturnComponent,
    UpdateSalesReturnDetailComponent,
    UpdateUserComponent,
    ViewUserComponent,
    ViewSupplierComponent,
    ViewSalesReturnDetailComponent,
    ViewSalesReturnComponent,
    ViewSalesPaymentComponent,
    ViewSalesOrderDetailComponent,
    ViewSalesOrderComponent,
    ViewSalesDetailComponent,
    ViewSalesComponent,
    ViewRoleComponent,
    ViewPurchaseReturnDetailComponent,
    ViewPurchaseReturnComponent,
    ViewPurchasePaymentComponent,
    ViewPurchaseOrderDetailComponent,
    ViewPurchaseOrderComponent,
    ViewPurchaseDetailComponent,
    ViewPurchaseComponent,
    ViewProductCategoryComponent,
    ViewProductComponent,
    ViewImageComponent,
    ViewColorComponent,
    ViewDesignComponent,
    ViewCityComponent,
    CompanyComponent,
    UpdateCompanyComponent,
    ViewCompanyComponent,
    AddCompanyComponent
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
    UserMasterDataService,
    CompanyDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

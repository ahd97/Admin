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




@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    PurchaseComponent,
    SalesOrderComponent,
    PurchaseOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SalesDataService,PurchaseDataService,SalesOrderDataService,PurchaseOrderDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

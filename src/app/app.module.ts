import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http/';
import { SalesDataService } from './Providers/sales-data.service';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';
import { SalesUpdateComponent } from './sales-update/sales-update.component';



@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    SalesUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SalesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

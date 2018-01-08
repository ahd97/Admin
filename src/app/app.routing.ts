import { Routes,RouterModule } from '@angular/router';
import { UserMasterComponent } from './user-master/user-master.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CityComponent } from './city/city.component';
import { AddCityComponent } from './add-city/add-city.component';
const arr:Routes=[

    {path:'',redirectTo:'/user',pathMatch:'full'},
    {path:'user',component:UserMasterComponent},
    {path:'product',component:ProductComponent},
    {path:'city',component:CityComponent},
    {path:'add_product',component:AddProductComponent},
    {path:'add_city',component:AddCityComponent}
];
export const routing=RouterModule.forRoot(arr);
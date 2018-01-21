import { Component, OnInit } from '@angular/core';
import { AddCompany } from '../Model/add-company';
import { CityClass } from '../Model/city-class';
import { CityDataService } from '../Providers/city-data.service';
import { CompanyDataService } from '../Providers/company-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public _subscription:Subscription;
  id:number;
  company:AddCompany;
  city:CityClass[]=[];
  company_id:number;
  company_name:string='';
  address:string='';
  e_mail:string='';
  ph_no:number;
city_id:number;
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:CompanyDataService,public _city:CityDataService) { }

  ngOnInit() {
    this.getAllcity();
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['c_id'];

      }
    );
    this._data.getAllCompanyById(this.id).subscribe(
      (data: AddCompany[]) => {
        this.company_name = data[0].Company_name;
        this.address=data[0].Address;
        this.e_mail=data[0].E_mail;
        this.ph_no=data[0].Ph_no;
this.city_id=data[0].City_id;
      }
    );
  }
  onUpdate(){
    this.company=new AddCompany(null,this.company_name,this.address,this.e_mail,this.ph_no,this.city_id);
    
    this._data.updateCompany(this.id,this.company).subscribe(
      (data:any)=>{
        this._router.navigate(['company']);
      }
    );
  }
  getAllcity(){
    this._city.getAllcity().subscribe(
      (data:CityClass[])=>{
        this.city=data;
      }
    );

  }
}

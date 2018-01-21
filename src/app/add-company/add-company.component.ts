import { Component, OnInit } from '@angular/core';
import { AddCompany } from '../Model/add-company';
import { CompanyDataService } from '../Providers/company-data.service';
import { CityClass } from '../Model/city-class';
import { CityDataService } from '../Providers/city-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  public Company_id:number;
  public Company_name:string='';
  public Address:string='';
  public E_mail:string='';
  public Ph_no:number;
  public City_id:number;
  city:CityClass[]=[];
  constructor(public _data: CompanyDataService,public _router:Router,public _city:CityDataService) { }

  ngOnInit() {
    this.getAllcity();
  }
  onAdd() {
    this._data.addCompany(new AddCompany(0, this.Company_name,this.Address,this.E_mail,this.Ph_no,this.City_id)).subscribe(

      () => {
        this._router.navigate(['company']);
        console.log('thai gayu');
      }, function (err) {
        console.log(err);
      },
      function () {

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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { CityDataService } from '../Providers/city-data.service';
import { AddCityClass } from '../Model/add-city-class';


@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css']
})
export class UpdateCityComponent implements OnInit {
public _subscription:Subscription;
id:number;
city_id:number;
city_name:string='';
city:AddCityClass;
city1:AddCityClass[]=[];
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:CityDataService) { }

  ngOnInit() {
  
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['c_id'];

      }
    );
    this._data.getAllCityById(this.id).subscribe(
      (data: AddCityClass[]) => {
        this.city_name = data[0].City_name;
       

      }
    );
    }
   onUpdate(){
    this.city=new AddCityClass(null,this.city_name);
    //console.log(this.x);
    this._data.updatecity(this.id,this.city).subscribe(
      (data:any)=>{
        this._router.navigate(['city']);
      }
    );

}
getAllCity(){
  this._data.getAllcity().subscribe(
    (data:AddCityClass[])=>{
      this.city1=data;
    }
  );

}
}

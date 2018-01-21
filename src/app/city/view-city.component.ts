import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddCityClass } from '../Model/add-city-class';
import { CityDataService } from '../Providers/city-data.service';

@Component({
  selector: 'app-view-city',
  templateUrl: './view-city.component.html',
  styleUrls: ['./view-city.component.css']
})
export class ViewCityComponent implements OnInit {
  city: AddCityClass  []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:CityDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['c_id'];

      }
    );
    this._data.getAllCityById(this.id).subscribe((data: AddCityClass[])=>{
      this.city=data;
      console.log(data);
    },
    function(err){
      alert(err);
    },
    function(){
      console.log('done');
    }
  );
  }
  onBack(){
    this._router.navigate(['city']);

  }
  onUpdate(id){
    this._router.navigate(['update_city',id]);

  }
}

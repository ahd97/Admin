import { Component, OnInit } from '@angular/core';
import { AddCityClass } from '../Model/add-city-class';
import { CityDataService } from '../Providers/city-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
city_name:string='';
  constructor(public _data: CityDataService,public _router:Router) { }

  ngOnInit() {
  }
  onAdd() {
    this._data.addcity(new AddCityClass(0, this.city_name)).subscribe(

      () => {
        this._router.navigate(['city']);
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { AddCityClass } from '../Model/add-city-class';
import { CityDataService } from '../Providers/city-data.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
city_name:string='';
  constructor(public _data: CityDataService) { }

  ngOnInit() {
  }
  onAdd() {
    this._data.addcity(new AddCityClass(0, this.city_name)).subscribe(

      () => {
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
      }
    );
  }
}

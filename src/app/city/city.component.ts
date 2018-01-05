import { Component, OnInit } from '@angular/core';
import { CityClass } from '../Model/city-class';
import { CityDataService } from '../Providers/city-data.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city:CityClass[]=[];
  city1:CityClass[]=[];
  city_name:string='';
  constructor(public _data:CityDataService) { }

  ngOnInit() {
    this._data.getAllcity().subscribe((data: CityClass[]) => {
      this.city = data;
      this.city1 = data;
      console.log(data);
    },
      function (err) {
        alert(err);
      },
      function () {
        console.log('done');
      }
    );
  }
  onKeyup(item) {
    if (item != '') {
      this.city = this.city.filter((x) => x.City_name.startsWith(item));
    }
    else {
      this.city = this.city1;
    }
  }
  onDelete(item) {
    this._data.deletecity(item.City_id).subscribe(() => {

      this.city.splice(this.city.indexOf(item), 1);
    });
  }

}

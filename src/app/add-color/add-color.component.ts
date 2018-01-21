import { Component, OnInit } from '@angular/core';
import { AddColor } from '../Model/add-color-class';
import { ColorDataService } from '../Providers/color-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {
color_name:string='';
  constructor(public _data:ColorDataService,public _router:Router) { }

  ngOnInit() {
  }
  onAdd() {
    this._data.addColor(new AddColor(0, this.color_name)).subscribe(
      
            () => {
              this._router.navigate(['color']);
              console.log('thai gayu');
            }, function (err) {
                console.log(err);
            },
            function () {
              
            }
          );
        }
  }



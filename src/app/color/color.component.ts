import { Component, OnInit } from '@angular/core';
import { Color } from '../Model/color';
import { ColorDataService } from '../Providers/color-data.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
color:Color[]=[];
color1:Color[]=[];
color_name:string='';
  constructor(public _data:ColorDataService) { }

  ngOnInit() {
    this._data.getAllColor().subscribe((data: Color[]) => {
      this.color = data;
      this.color1 = data;
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
      this.color = this.color.filter((x) => x.Color_name.startsWith(item));
    }
    else {
      this.color = this.color1;
    }
  }
  onAdd() {
    this._data.addColor(new Color(0, this.color_name)).subscribe(

      () => {
      }, function (err) {

      },
      function () {

      }
    );
  }
  onDelete(item) {
    this._data.deleteColor(item.Color_id).subscribe(() => {

      this.color.splice(this.color.indexOf(item), 1);
    });
  }

}

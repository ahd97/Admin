import { Component, OnInit } from '@angular/core';
import { Design } from '../Model/design';
import { DesignDataService } from '../Providers/design-data.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
design:Design[]=[];
design1:Design[]=[];
design_name:string='';
  constructor(public _data:DesignDataService) { }

  ngOnInit() {
    this._data.getAllDesign().subscribe((data: Design[]) => {
      this.design = data;
      this.design1 = data;
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
      this.design = this.design.filter((x) => x.Design_name.startsWith(item));
    }
    else {
      this.design = this.design1;
    }
  }
  onAdd() {
    this._data.addDesign(new Design(0, this.design_name)).subscribe(

      () => {
      }, function (err) {

      },
      function () {

      }
    );
  }
  onDelete(item) {
    this._data.deleteDesign(item.Design_id).subscribe(() => {

      this.design.splice(this.design.indexOf(item), 1);
    });
  }

}

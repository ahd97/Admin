import { Component, OnInit } from '@angular/core';
import { AddDesignClass } from '../Model/add-design-class';
import { DesignDataService } from '../Providers/design-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-design',
  templateUrl: './add-design.component.html',
  styleUrls: ['./add-design.component.css']
})
export class AddDesignComponent implements OnInit {
  design_name: string = '';
  constructor(public _data: DesignDataService,public _router:Router) { }

  ngOnInit() {
  }
  onAdd() {
    this._data.addDesign(new AddDesignClass(0, this.design_name)).subscribe(

      () => {
        this._router.navigate(['design']);
        console.log('thai gayu');
      }, function (err) {
        console.log(err);
      },
      function () {

      }
    );
  }
}



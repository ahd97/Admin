import { Component, OnInit } from '@angular/core';
import { AddDesignClass } from '../Model/add-design-class';
import { DesignDataService } from '../Providers/design-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-update-design',
  templateUrl: './update-design.component.html',
  styleUrls: ['./update-design.component.css']
})
export class UpdateDesignComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  design_id:number;
  design_name:string='';
  design:AddDesignClass;

  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:DesignDataService) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['d_id'];

      }
    );
    this._data.getAllDesignById(this.id).subscribe(
      (data: AddDesignClass[]) => {
        this.design_name = data[0].Design_name;
       

      }
    );
  }
  onUpdate(){
    this.design=new AddDesignClass(null,this.design_name);
    //console.log(this.x);
    this._data.updateDesign(this.id,this.design).subscribe(
      (data:any)=>{
        this._router.navigate(['design']);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddDesignClass } from '../Model/add-design-class';
import { DesignDataService } from '../Providers/design-data.service';

@Component({
  selector: 'app-view-design',
  templateUrl: './view-design.component.html',
  styleUrls: ['./view-design.component.css']
})
export class ViewDesignComponent implements OnInit {
  design: AddDesignClass []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:DesignDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['d_id'];

      }
    );
    this._data.getAllDesignById(this.id).subscribe((data: AddDesignClass[])=>{
      this.design=data;
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
    this._router.navigate(['design']);

  }
  onUpdate(id){
    this._router.navigate(['update_design',id]);

  }
}

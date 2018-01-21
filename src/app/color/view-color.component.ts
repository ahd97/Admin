import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddColor } from '../Model/add-color-class';
import { ColorDataService } from '../Providers/color-data.service';

@Component({
  selector: 'app-view-color',
  templateUrl: './view-color.component.html',
  styleUrls: ['./view-color.component.css']
})
export class ViewColorComponent implements OnInit {
  color: AddColor []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:ColorDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['c_id'];

      }
    );
    this._data.getAllColorById(this.id).subscribe((data: AddColor[])=>{
      this.color=data;
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
    this._router.navigate(['color']);

  }
  onUpdate(id){
    this._router.navigate(['update_color',id]);

  }

}

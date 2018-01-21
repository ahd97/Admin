import { Component, OnInit } from '@angular/core';
import { AddColor } from '../Model/add-color-class';
import { ColorDataService } from '../Providers/color-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-color',
  templateUrl: './update-color.component.html',
  styleUrls: ['./update-color.component.css']
})
export class UpdateColorComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  color_id:number;
  color_name:string='';
  color:AddColor;
  
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:ColorDataService) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['c_id'];

      }
    );
    this._data.getAllColorById(this.id).subscribe(
      (data: AddColor[]) => {
        this.color_name = data[0].Color_name;
       

      }
    );
  }
  onUpdate(){
    this.color=new AddColor(null,this.color_name);
    //console.log(this.x);
    this._data.updateColor(this.id,this.color).subscribe(
      (data:any)=>{
        this._router.navigate(['color']);
      }
    );
  }
  }
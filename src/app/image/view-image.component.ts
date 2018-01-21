import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddImageClass } from '../Model/add-image-class';
import { ImageDataService } from '../Providers/image-data.service';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {
  image: AddImageClass []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:ImageDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['i_id'];

      }
    );
    this._data.getAllImageById(this.id).subscribe((data: AddImageClass[])=>{
      this.image=data;
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
    this._router.navigate(['image']);

  }
  onUpdate(id){
    this._router.navigate(['update_image',id]);

  }
}

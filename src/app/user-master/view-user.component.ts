import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddUserClass } from '../Model/add-user-class';
import { UserMasterDataService } from '../Providers_exclusive/user-master-data.service';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users:AddUserClass[]=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:UserMasterDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['u_id'];

      }
    );
    this._data.getAllUserById(this.id).subscribe((data:AddUserClass[])=>{
      this.users=data;
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
  onUpdate(id){
    this._router.navigate(['update_user',id]);

  }
  onBack(){
    this._router.navigate(['user']);

  }
}

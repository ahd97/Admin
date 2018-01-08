import { Component, OnInit } from '@angular/core';
import { UserMasterClass } from '../Model/user-master-class';
import { UserMasterDataService } from '../Providers_exclusive/user-master-data.service';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit {
  users:UserMasterClass[]=[];
  users1:UserMasterClass[]=[];

  constructor(public _data:UserMasterDataService) { }

  ngOnInit() {
    this._data.getAllUsers().subscribe((data:UserMasterClass[])=>{
      this.users=data;
      this.users1=data;
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
  onKeyup(item){
    if(item!='')
    {
   this.users= this.users.filter((x)=>x.User_name.search);
    }
    else{
      this.users=this.users1;
    }
  }
  onDelete(item) {
    this._data.deleteUser(item.User_id).subscribe(() => {

      this.users.splice(this.users.indexOf(item), 1);
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { Role } from '../Model/role';
import { RoleDataService } from '../Providers/role-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
role:Role[]=[];
role1:Role[]=[];
role_name:string='';
  constructor(public _data:RoleDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllRole().subscribe((data: Role[]) => {
      this.role = data;
      this.role1 = data;
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
      this.role = this.role.filter((x) => x.Role_name.startsWith(item));
    }
    else {
      this.role = this.role1;
    }
  }
  onDelete(item) {
    this._data.deleteRole(item.Role_id).subscribe(() => {

      this.role.splice(this.role.indexOf(item), 1);
    });
  }

  onView(id){
    this._router.navigate(['view_role',id]);

  }

}

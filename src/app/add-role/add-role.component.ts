import { Component, OnInit } from '@angular/core';
import { AddRoleClass } from '../Model/add-role-class';
import { RoleDataService } from '../Providers/role-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
role_name:string='';
  constructor(public _data:RoleDataService,public _router:Router) { }

  ngOnInit() {
  }
  onAdd() {
    this._data.addRole(new AddRoleClass(0, this.role_name)).subscribe(
      
            () => {
              this._router.navigate(['role']);
              console.log('thai gayu');
            }, function (err) {
                console.log(err);
            },
            function () {
              
            }
          );
        }

}

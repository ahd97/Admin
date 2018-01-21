import { Component, OnInit } from '@angular/core';
import { Company } from '../Model/company';
import { CompanyDataService } from '../Providers/company-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company:Company[]=[];
  company1:Company[]=[];
  company_name:string='';

  constructor(public _data:CompanyDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllCompany().subscribe((data: Company[]) => {
      this.company = data;
      this.company1 = data;
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
      this.company = this.company.filter((x) => x.Company_name.startsWith(item));
    }
    else {
      this.company = this.company1;
    }
  }
  onDelete(item) {
    this._data.deleteCompany(item.Company_id).subscribe(() => {

      this.company.splice(this.company.indexOf(item), 1);
    });
  }
  onView(id){
    this._router.navigate(['view_company',id]);

  }


}

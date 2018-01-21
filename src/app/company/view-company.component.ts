import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { Company } from '../Model/company';
import { CompanyDataService } from '../Providers/company-data.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {
  company: Company []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:CompanyDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['c_id'];

      }
    );
    this._data.getAllCompanyById(this.id).subscribe((data: Company[])=>{
      this.company=data;
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
    this._router.navigate(['company']);

  }
  onUpdate(id){
    this._router.navigate(['update_company',id]);

  }
}

import { Component, OnInit } from '@angular/core';
import { PurchaseClass } from '../Model/purchase-class';
import { PurchaseDataService } from '../Providers/purchase-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  
purchase:PurchaseClass[]=[];
purchase1:PurchaseClass[]=[];
  constructor(public _data:PurchaseDataService,public _router:Router) { }
 
  ngOnInit() {
    this._data.getAllPurchase().subscribe((data:PurchaseClass[])=>{
      this.purchase=data;
      this.purchase1=data;
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
   this.purchase= this.purchase.filter((x)=>x.Purchase_id==item);
    }
    else{
      this.purchase=this.purchase1;
    }
  }
      onDelete(item){
      this._data.deletePurchase(item.Purchase_id).subscribe(()=>{
  
        this.purchase.splice(this.purchase.indexOf(item),1);
      });
    }
    onView(id){
      this._router.navigate(['view_purchase',id]);
  
    }
    
  }
  


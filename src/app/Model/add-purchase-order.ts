export class AddPurchaseOrder {
    public constructor(public Purchase_order_id:number,
        public User_id:number,
        public Supplier_id:number,
        public Purchase_order_status:string,
    
        ){}
}

export class PurchaseOrderDetail {
    public constructor(public Purchase_order_id:number,
        public Product_name:string,
        public Received_date:string,
        public Qty_ordered:number,
        public Qty_received:number){}
}

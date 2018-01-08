export class SalesOrderDetail {
    public constructor(public Sales_order_id:number,
        public Product_name:string,
        public Qty_dispatched:number,
        public Qty_ordered:number){}
}

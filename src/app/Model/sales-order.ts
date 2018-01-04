export class SalesOrder {
    public constructor(public Sales_order_id:number,
        public User_id:number,
        public Customer_name:string,
        public Order_date:string,
        public Order_address:string,
        public City_id:number,
        public Order_status:string){}
}

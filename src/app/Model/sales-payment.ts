export class SalesPayment {
    public constructor(public Sales_payment_id:number,
        public Sales_id:number,
        public Sales_payment_date:string,
        public User_id:number,
        public Payment_type:string ){}
}
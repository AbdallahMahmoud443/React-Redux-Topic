export interface ICounterState {
    value:number,
    text:string
}

export interface IProduct{
    id:number;
    title:string;
    image:string;
    price:number;
    qty:number
}

export interface ICartSlice {
    cartItems:IProduct[]
}

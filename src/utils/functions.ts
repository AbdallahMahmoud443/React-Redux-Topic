import { IProduct } from './../interfaces/index';
export const addItemToCartFn = (cartItems:IProduct[],product:IProduct) =>{
    //** Product Exits in cart => increase Quantity */
    const exists = cartItems.find((item) => item.id === product.id);
    if(exists) {
        return cartItems.map(item => item.id  === product.id ? {...item,qty:item.qty +1 } : item) // return array of products
    }
    //** New Product Add Product to cart */
    return  [...cartItems,{...product,qty:1}]
} 
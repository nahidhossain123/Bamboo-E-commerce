import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{      
        cartItems:[],
        totalAmount:0,
        totalQuantity:0 
    },  
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item=>item.id === newItem.id);
            state.totalQuantity++;
            if(!existingItem)   
            {   
                state.cartItems.push({
                    id:newItem.id,  
                    price:newItem.price,
                    img:newItem.img,
                    quantity:1,
                    totalPrice:newItem.price
                })
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            }
            state.totalAmount = state.cartItems.reduce((total,item)=>{
                return total + Number(item.price) * Number(item.quantity);
            },0)
        },
        removeFromCart:(state,action)=>{
            const id = action.payload;
            const existingItem = state.cartItems.find(item=>item.id === id);
            state.totalQuantity--;  
            if(existingItem.quantity === 1)
            {
                state.cartItems = state.cartItems.filter(item=>item.id !== id);
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
            }
            state.totalAmount = state.cartItems.reduce((total,item)=>{
                return total + Number(item.price) * Number(item.quantity);
            },0)
        }, 
        clearCart:(state)=>{
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
        }   

    },
    extraReducers:()=>{
        
    }
})

export const {addToCart} = cartSlice.actions;   
import React from "react";

export const cartReducer = (state, action) => {




    switch (action.type) {
        case "AddToCart":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

        case "RemoveFromCart":
            return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id) };

        case "incQty":
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, qty: item.qty + 1 };
                    } else {
                        return item;
                    }
                })
            };

        case "decQty":
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action.payload.id && item.qty !== 1) {
                        return { ...item, qty: item.qty - 1 };
                    } else {
                        return item;
                    }
                })
            };


        case "category_filter":
            state.products = [...state.initialProducts];
            return {

                ...state,
                category: action.payload,
                products: state.products.filter((x) => {
                    if (x.category === action.payload) return x;
                    else return null;
                }),
                cart: [...state.cart]
            };




        case "reset":
            return {
                ...state,
                products: [...state.initialProducts],
                cart: [...state.cart],
                category: null



            }










        case "Price_high-low":
            return {
                ...state,
                products: state.products.sort((x, y) => { return (y.price - x.price) })
            }
        case "Price_low-high":
            return {
                ...state,
                products: state.products.sort((x, y) => { return (x.price - y.price) })
            }



        case "Rate_high-low":
            return {
                ...state,
                products: state.products.sort((x, y) => { return (y.rating.rate - x.rating.rate) })
            }
        case "Rate_low-high":
            return {
                ...state,
                products: state.products.sort((x, y) => { return (x.rating.rate - y.rating.rate) })
            }

        case "Search":
            return {
                ...state,
                products: state.initialProducts.filter((x) => { if (x.title.toLowerCase().includes(action.payload.toLowerCase())) { return x } }),
                category: null
            }








        default:
            return;
    }










}
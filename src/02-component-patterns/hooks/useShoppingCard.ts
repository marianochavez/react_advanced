import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCard = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductQuantityChange = ({ quantity, product }: { quantity: number, product: Product }) => {

        quantity === 0 ? setShoppingCart(shoppingCart => {
            const newShoppingCart = { ...shoppingCart };
            delete newShoppingCart[product.id];
            return newShoppingCart;
        }) : setShoppingCart(shoppingCart => {
            const newShoppingCart = { ...shoppingCart };
            newShoppingCart[product.id] = { ...product, quantity };
            return newShoppingCart;
        });
    };

    return {
        shoppingCart,
        onProductQuantityChange
    }
};
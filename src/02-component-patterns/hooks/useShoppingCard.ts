import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCard = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductQuantityChange = ({ quantity, product }: { quantity: number, product: Product }) => {


        setShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, quantity: 0 };

            if (Math.max(productInCart.quantity + quantity, 0) > 0) {
                productInCart.quantity += quantity;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart,
                }
            }

            // borrar producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;

            // quantity === 0 ? setShoppingCart(shoppingCart => {
            //   const newShoppingCart = { ...shoppingCart };
            //   delete newShoppingCart[product.id];
            //   return newShoppingCart;
            // }) : setShoppingCart(shoppingCart => {
            //   const newShoppingCart = { ...shoppingCart };
            //   newShoppingCart[product.id] = { ...product, quantity };
            //   return newShoppingCart;
            // });
        });

    };

    return {
        shoppingCart,
        onProductQuantityChange
    }
};
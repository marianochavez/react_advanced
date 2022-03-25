import { createContext, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";
import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {

  const { counter, increaseBy, maxQuantity, isMaxQuantityReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, increaseBy, product, maxQuantity }} >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          counter,
          isMaxQuantityReached,
          maxQuantity: initialValues?.maxQuantity,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  );
};

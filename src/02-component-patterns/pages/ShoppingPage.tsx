import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { useShoppingCard } from "../hooks/useShoppingCard";
import { products } from "../data/products";
import "../styles/custom-styles.css";


export const ShoppingPage = () => {

  const { shoppingCart, onProductQuantityChange } = useShoppingCard();

  return (
    <div>
      <h1>Patterns</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap",}}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductQuantityChange}
            value={shoppingCart[product.id]?.quantity || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">

        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{ width: "100px" }}
              value={product.quantity}
              onChange={onProductQuantityChange}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" style={{ display: "flex", justifyContent: "center" }} />
            </ProductCard>
          ))
        }

      </div>

      <div>
        <code>
          {JSON.stringify(shoppingCart, null, 2)}
        </code>
      </div>
    </div>
  );
};

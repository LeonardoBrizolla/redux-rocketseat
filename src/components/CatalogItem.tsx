import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCartRequest } from "../modules/cart/actions";
import { IProduct } from "../modules/cart/types";
import { IState } from "../store";

interface CatalogItemProps {
  product: IProduct;
}

function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span>
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: "red" }}>Falta de estoque</span>
      )}
    </article>
  );
}

export default CatalogItem;

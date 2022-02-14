import { useSelector } from "react-redux";
import { ICartItem } from "../modules/cart/types";
import { IState } from "../store";

function Cart() {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <td>{item.product.id}</td>
            <td>{item.product.title}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Cart;

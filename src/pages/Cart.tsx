import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { items, removeFromCart } = useCart();
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  return (
    <div className="container cart-page">
      <h1>장바구니</h1>
      {items.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.price.toLocaleString()}원</p>
                <p>수량: {item.quantity}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                삭제
              </button>
            </div>
          ))}
          <div className="cart-total">
            총 금액: {total.toLocaleString()}원
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
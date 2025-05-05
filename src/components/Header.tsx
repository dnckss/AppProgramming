import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  onAuthClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick }) => {
  const { items } = useCart();
  const { user, logout } = useAuth();
  
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">SAMSUNG</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {user ? (
            <>
              <span>{user.email}</span>
              <button onClick={logout}>로그아웃</button>
            </>
          ) : (
            <button onClick={onAuthClick} className="auth-button">
              <User size={24} />
            </button>
          )}
          <Link to="/cart" className="cart-icon">
            <ShoppingCart size={24} />
            {items.length > 0 && (
              <span className="cart-count">{items.length}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
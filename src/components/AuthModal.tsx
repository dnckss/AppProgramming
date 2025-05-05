import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, register } = useAuth();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      login(email, password);
    } else {
      register(email, password);
    }
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isLogin ? '로그인' : '회원가입'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">
            {isLogin ? '로그인' : '회원가입'}
          </button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? '회원가입하기' : '로그인하기'}
        </button>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default AuthModal
import React from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const Home: React.FC = () => {
  const { addToCart } = useCart();
  
  const products: Product[] = [
    {
      id: "s25",
      name: "갤럭시 S25",
      description: "갤럭시 s25",
      price: 100,
      image: "https://www.costco.co.kr/medias/sys_master/images/he2/h65/315598912552990.jpg",
      category: "mobile"
    },
    {
      id: "buzz3",
      name: "버즈3",
      description: "갤럭시 버즈 3 프로",
      price: 299999,
      image: "https://images.samsung.com/kdp/goods/2024/07/07/aa3e0609-b894-432f-87ea-d111bb690138.png?$944_550_PNG$",
      category: "mobile"
    },
    {
      id: "neoQLED",
      name: "Neo QLED 8K",
      description: "Neo QLED 8K",
      price: 10000000,
      image: "https://images.samsung.com/is/image/samsung/p6pim/us/qn65qn990ffxza/gallery/us-qled-qn990f-qn65qn990ffxza-545961327?$product-details-jpg$",
      category: "tv"
    },
    {
      id: "zfold",
      name: "z폴드",
      description: "갤럭시 z 폴드 6",
      price: 100000000,
      image: "https://images.samsung.com/sec/smartphones/galaxy-z-fold6/images/galaxy-z-fold6-features-kv.jpg?imbypass=true",
      category: "mobile"
    }
  ];

  return (
    <div className="container">
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-title">{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price.toLocaleString()}원</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              장바구니 담기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
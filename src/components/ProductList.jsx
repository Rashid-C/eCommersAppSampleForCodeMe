import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const products = [
  {
    id: 1,
    name: "A1 dressese",
    description: "Latest model with high-resolution colours",
    price: 599,
    image: "https://images.meesho.com/images/products/382895204/bcl9b_1200.jpg",
  },
  {
    id: 2,
    name: "Embroidered",
    description: "royalica Embroidered White Dress",
    price: 999,
    image: "https://images.meesho.com/images/products/319687495/xwzrg_400.webp",
  },
  {
    id: 3,
    name: "Fancy Latest",
    description: "Fancy Latest Women Dresses",
    price: 1049,
    image: "https://images.meesho.com/images/products/122796457/kla9k_512.webp",
  },
  {
    id: 4,
    name: "Partywear",
    description: "Trendy Partywear Women Dresses",
    price: 410,
    image: "https://images.meesho.com/images/products/389542474/edpok_400.webp",
  },
  {
    id: 5,
    name: "Royalica ",
    description: "Women Printed Pure Cotton",
    price: 358,
    image: "https://images.meesho.com/images/products/382895204/bcl9b_1200.jpg",
  },
  {
    id: 6,
    name: "FLORAL PRINT ",
    description: "women floral printed midi",
    price: 358,
    image: "https://images.meesho.com/images/products/425822949/jktth_400.webp",
  },
  {
    id: 7,
    name: "Smart Watch",
    description: "Fitness tracker and smartwatch in one",
    price: 358,
    image: "https://images.meesho.com/images/products/397637499/3k7ga_400.webp",
  },
  {
    id: 8,
    name: "White Watch",
    description: "Fitness tracker and white in one",
    price: 358,
    image: "https://images.meesho.com/images/products/397637499/3k7ga_400.webp",
  },
  {
    id: 9,
    name: "Kurtha",
    description: "Fitness tracker and kurtha in one",
    price: 358,
    image: "https://images.meesho.com/images/products/424521266/7gvl5_400.webp",
  },
  {
    id: 10,
    name: "Smart Watch",
    description: "Cute tracker and smart in one",
    price: 358,
    image: "https://images.meesho.com/images/products/397637499/3k7ga_400.webp",
  },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <TransitionGroup className="product-grid">
        {products.map((product) => (
          <CSSTransition key={product.id} classNames="slide" timeout={300}>
            <div className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ProductList;

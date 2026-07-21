import React, { useState } from 'react';
import './dashboard.css';

const products = [
  {
    id: 1,
    name: 'Classic Burger',
    category: 'Food',
    price: 12.99,
    rating: 4.5,
    image: './food.png',
    description: 'Juicy gourmet burger with fresh veggies and sesame bun.'
  },
  {
    id: 2,
    name: 'Fresh Milk',
    category: 'Dairy',
    price: 2.49,
    rating: 4.8,
    image: './milk.png',
    description: 'Pure and fresh whole milk, farm sourced daily.'
  },
  {
    id: 3,
    name: 'Basmati Rice',
    category: 'Groceries',
    price: 5.99,
    rating: 4.6,
    image: './rice.png',
    description: 'Premium long-grain basmati rice, aromatic and fluffy.'
  },
  {
    id: 4,
    name: 'Creamy Butter',
    category: 'Dairy',
    price: 3.29,
    rating: 4.7,
    image: './butter.png',
    description: 'Rich and creamy butter, perfect for cooking and baking.'
  },
  {
    id: 5,
    name: 'Casual Outfit',
    category: 'Clothes',
    price: 39.99,
    rating: 4.4,
    image: './clothes.png',
    description: 'Comfortable and stylish casual T-shirt and jeans set.'
  },
  {
    id: 6,
    name: 'Luxury Watch',
    category: 'Accessories',
    price: 199.99,
    rating: 4.9,
    image: './watch.png',
    description: 'Elegant stainless steel luxury wristwatch for any occasion.'
  },
  {
    id: 7,
    name: 'Kids Toy Set',
    category: 'Toys',
    price: 24.99,
    rating: 4.6,
    image: './toy.png',
    description: 'Fun colorful building blocks and toy cars for kids.'
  },
  {
    id: 8,
    name: 'White Sneakers',
    category: 'Footwear',
    price: 59.99,
    rating: 4.7,
    image: './shoes.png',
    description: 'Trendy and comfortable everyday white sneakers.'
  },
  {
    id: 9,
    name: 'Chocolate Fudge Cake',
    category: 'Food',
    price: 15.99,
    rating: 4.9,
    image: './cake.png',
    description: 'Decadent double-layered chocolate fudge cake, fresh baked.'
  },
  {
    id: 10,
    name: 'Cheddar Block Cheese',
    category: 'Dairy',
    price: 4.49,
    rating: 4.7,
    image: './cheese.png',
    description: 'Aged sharp yellow cheddar cheese blocks, rich in flavor.'
  },
  {
    id: 11,
    name: 'Extra Virgin Olive Oil',
    category: 'Groceries',
    price: 14.99,
    rating: 4.8,
    image: './oil.png',
    description: 'Premium cold pressed extra virgin olive oil, 100% natural.'
  },
  {
    id: 12,
    name: 'Classic Leather Jacket',
    category: 'Clothes',
    price: 89.99,
    rating: 4.6,
    image: './jacket.png',
    description: 'Timeless black leather biker jacket with premium steel zippers.'
  },
  {
    id: 13,
    name: 'Aviator Sunglasses',
    category: 'Accessories',
    price: 29.99,
    rating: 4.5,
    image: './sunglasses.png',
    description: 'Vintage polarized sunglasses offering full UV protection.'
  },
  {
    id: 14,
    name: 'Action Hero Figure',
    category: 'Toys',
    price: 19.99,
    rating: 4.4,
    image: './toy_figure.png',
    description: 'Collectible poseable action figure with interchangeable gear.'
  },
  {
    id: 15,
    name: 'Mesh Running Sneakers',
    category: 'Footwear',
    price: 79.99,
    rating: 4.7,
    image: './running_shoes.png',
    description: 'Lightweight breathable sports sneakers with cushioned sole.'
  },
  {
    id: 16,
    name: 'Organic Apple Juice',
    category: 'Food',
    price: 3.49,
    rating: 4.8,
    image: './juice.png',
    description: '100% organic cold-pressed apple juice with no added sugar.'
  },
  {
    id: 17,
    name: 'Free-Range Eggs',
    category: 'Groceries',
    price: 4.99,
    rating: 4.8,
    image: './eggs.png',
    description: 'Dozen farm fresh free-range grade-A large brown eggs.'
  },
  {
    id: 18,
    name: 'Sport Smartwatch',
    category: 'Accessories',
    price: 149.99,
    rating: 4.9,
    image: './smartwatch.png',
    description: 'Advanced sports smartwatch tracking workouts, steps, and sleep.'
  },
  {
    id: 19,
    name: 'Wireless Headphones',
    category: 'Accessories',
    price: 59.99,
    rating: 4.6,
    image: './headphones.png',
    description: 'Premium wireless Bluetooth over-ear headphones with noise cancelling.'
  },
  {
    id: 20,
    name: 'Pro Soccer Ball',
    category: 'Toys',
    price: 19.99,
    rating: 4.7,
    image: './soccer.png',
    description: 'Standard size-5 professional match soccer ball, durable design.'
  }
];

const categories = ['All', 'Food', 'Dairy', 'Groceries', 'Clothes', 'Accessories', 'Toys', 'Footwear'];

export default function Dashboard({ userEmail }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < full; i++) stars += '★';
    if (half) stars += '½';
    return stars;
  };

  return (
    <div className="dashboard-container">

      {/* Top Bar */}
      <div className="top-bar">
        <div>
          <h1 className="shop-title">My Store</h1>
          <p className="shop-subtitle">Welcome, <strong>{userEmail || 'Guest'}</strong> — browse our latest items</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`cat-btn ${activeCategory === cat ? 'cat-btn-active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filtered.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-img-wrapper">
              <img src={product.image} alt={product.name} className="product-img" />
              <span className="product-category-badge">{product.category}</span>
            </div>
            <div className="product-info">
              <h4 className="product-name">{product.name}</h4>
              <p className="product-desc">{product.description}</p>
              <div className="product-rating">
                <span className="stars">{renderStars(product.rating)}</span>
                <span className="rating-num">{product.rating}</span>
              </div>
              <div className="product-footer">
                <span className="product-price">${product.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

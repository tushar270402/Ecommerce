import React, { useState } from 'react';
import products from '../data/products'
import ProductCard from './ProductCard'
import "./ProductList.css"

export default function ProductList({addToCart}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Filter products by selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);
  return (
    <div>
      {/* Category Filter Dropdown */}
      <div className="category-filter">
        <label htmlFor="category-select">Filter by Category: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className='product-list'>
        {
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} />)
        }
      </div>
    </div>
      )
}

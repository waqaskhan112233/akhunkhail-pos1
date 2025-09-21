
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (prod) => {
    setCart([...cart, prod]);
  };

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Akhunkhail Mega Mart - POS</h1>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - Rs {p.price} ({p.stock} in stock)
            <button onClick={() => addToCart(p)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((c, i) => (
          <li key={i}>{c.name} - Rs {c.price}</li>
        ))}
      </ul>
      <h3>Total: Rs {total}</h3>
    </div>
  );
}

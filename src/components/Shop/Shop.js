import React, { useEffect, useState } from 'react';
import './Shop.css';
import data from '../../fakeData/products.JSON'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(response => response.json())
            .then(data => setProducts(data.slice(0, 10)));
    }, []);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>

            <div className="product-container">
                {
                    products.map(pd => <Product product={pd} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;
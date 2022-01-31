import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const sliceProducts = products.slice(0, 15);

    const [cart, setCart] = useState([]);

    const shopBtnHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop'>
            <div className='shop-details'>
                {
                    sliceProducts.map(pd => <Product
                        product={pd}
                        key={pd.key}
                        shopBtnHandler={shopBtnHandler}
                    ></Product>)
                }
            </div>

            <div className='shop-order-summary'>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
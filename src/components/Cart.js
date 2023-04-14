import React from 'react'
import Remove from '../img/remove.svg'
import Arrow from '../img/arrow.svg'
import one from '../img/sneakers/1.jpg'
import two from '../img/sneakers/2.jpg'

export const Cart = () => {
    return (
        <div className="overlay">
            <div className="cart">
                <h2 className="cart__title">Корзина<img src={Remove} alt="remove-btn" /></h2>
                <div className="cart__items">
                    <div className="cart__item">
                        <img className='cart__item-img' width={70} height={70} src={one} alt="Sneakers" />
                        <div className="cart__item-text">
                            <span>Мужские Кроссовки Nike Air Max 270</span>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='cart__item-btn' src={Remove} alt="remove-btn" />
                    </div>
                    <div className="cart__item">
                        <img className='cart__item-img' width={70} height={70} src={two} alt="Sneakers" />
                        <div className="cart__item-text">
                            <span>Мужские Кроссовки Nike Air Max 270</span>
                            <b>8 499 руб.</b>
                        </div>
                        <img className='cart__item-btn' src={Remove} alt="remove-btn" />
                    </div>
                </div>

                <div className="cart__price">
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className='green-button'>Оформить заказ <img src={Arrow} alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default Cart

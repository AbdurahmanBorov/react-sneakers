import React from 'react'
import './Cart.scss'
import Remove from '../../img/remove.svg'
import Arrow from '../../img/arrow.svg'


export const Cart = ({ onClose, removeCard, items = [] }) => {
    return (
        <div className="overlay">
            <div className="cart">
                <h2 className="cart__title">Корзина<img onClick={onClose} src={Remove} alt="remove-btn" /></h2>
                <div className="cart__items">
                    {items.map((obj) => (
                        <div className="cart__item">
                            <img className='cart__item-img' width={70} height={70} src={obj.imageUrl} alt="Sneakers" />
                            <div className="cart__item-text">
                                <span>{obj.name}</span>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img className='cart__item-btn' onClick={() => removeCard(obj.id)} src={Remove} alt="remove-btn" />
                        </div>
                    ))}
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

import React from 'react'
import './Card.scss'
import HeartUnliked from '../../img/heart-unliked.svg'
import Plus from '../../img/plus.svg'
import BtnChecked from '../../img/btn-checked.svg'
// import HeartLiked from './img/heart-liked.svg'


export const Card = ({price, id, name, imageUrl, onPlus, onFavorite}) => {
    const [isAdded, setIsAdded] = React.useState(false)

    const onCLickPlus = () => {
        onPlus({name, price, imageUrl, id});
        setIsAdded(!isAdded)
    }

    return (
        <div className="card">
            <img src={HeartUnliked} onClick={onFavorite} alt="heart" className='card__heart' />
            <img width={133} height={112} src={imageUrl} alt="sneakers" />
            <p>{name}</p>
            <div className='card__cont'>
                <div className='card__text'>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className='card__plus' src={isAdded ? BtnChecked : Plus} onClick={onCLickPlus} alt="btn"/>
            </div>
        </div>
    )
}

export default Card

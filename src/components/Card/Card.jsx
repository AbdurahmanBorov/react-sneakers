import React from 'react'
import ContentLoader from "react-content-loader"
import './Card.scss'
import HeartUnliked from '../../img/heart-unliked.svg'
import Plus from '../../img/plus.svg'
import BtnChecked from '../../img/btn-checked.svg'
import HeartLiked from '../../img/heart-liked.svg'


export const Card = ({price, id, name, imageUrl, onPlus, onFavorite, favorited = false, added = false, loading = false}) => {
    const [isAdded, setIsAdded] = React.useState(added)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onCLickPlus = () => {
        onPlus({name, price, imageUrl, id});
        setIsAdded(!isAdded)
    }

    const onCLickFavorite = () => {
        onFavorite({name, price, imageUrl, id});
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="card">
            {
                loading ? 
                <ContentLoader
                speed={2}
                width={150}
                height={200}
                viewBox="0 0 150 200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
                <rect x="0" y="105" rx="3" ry="3" width="150" height="15" />
                <rect x="0" y="124" rx="3" ry="3" width="93" height="15" />
                <rect x="0" y="162" rx="8" ry="8" width="80" height="24" />
                <rect x="118" y="154" rx="8" ry="8" width="32" height="32" />
            </ContentLoader> : 
            <>
                <img src={isFavorite ? HeartLiked : HeartUnliked} onClick={onCLickFavorite} alt="heart" className='card__heart' />
                <img width={133} height={112} src={imageUrl} alt="sneakers" />
                <p>{name}</p>
                <div className='card__cont'>
                    <div className='card__text'>
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                    </div>
                    <img className='card__plus' src={isAdded ? BtnChecked : Plus} onClick={onCLickPlus} alt="btn"/>
                </div>
            </>
            }
        </div>
    )
}

export default Card

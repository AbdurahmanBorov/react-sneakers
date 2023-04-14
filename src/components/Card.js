import React from 'react'
// import one from './img/sneakers/1.jpg'
import two from '../img/sneakers/2.jpg'
// import three from './img/sneakers/3.jpg'
// import four from './img/sneakers/4.jpg'
import HeartUnliked from '../img/heart-unliked.svg'
// import HeartLiked from './img/heart-liked.svg'


export const Card = () => {
    return (
        <div className="card">
            <img src={HeartUnliked} alt="heart" className='card__heart' />
            <img width={133} height={112} src={two} alt="sneakers" />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='card__cont'>
                <div className='card__text'>
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button className='card__button'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Card

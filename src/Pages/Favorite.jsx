import React from 'react'
import Card from '../components/Card/Card'

const Favorite = ({items = [ ], onAddToFavorite }) => {
    return (
        <div>
            <main className="main">
                <div className="main__content">
                    <div className='main__top'>
                        <h1 className='main__title'>Все pfrkflза</h1>
                    </div>
                    <div className='main__cards'>
                        {
                            items.map((obj, index) => (
                                <Card
                                key={index}
                                id={obj.id}
                                name={obj.name}
                                price={obj.price}
                                imageUrl={obj.imageUrl}
                                favorited={true}
                                onFavorite={onAddToFavorite}
                                />
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Favorite
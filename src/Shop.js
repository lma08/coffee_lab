import { useState } from 'react';
import './App.css';

function Shop({items}) {

const [showText, setShowText] = useState(false)
const showTextBtn = (element) => {
    element.showMore =! element.showMore;
    setShowText(!showText);
}

return (
    <div className='container'>
        {items.map ((element => {const {id, itemName, image, search, price, description, showMore}=element;
            return(
                <div key={id} className='item_card'>
                    <div className='item_info'>
                        <img className='imgItem' src={image} alt='item' width='220px'></img>
                    </div>
                    <div className='item_info'>
                        <h3>{itemName}</h3>
                    </div>
                    <div className='item_info'>
                        <p>{showMore ? description: description.substring(0,50)+'...'} <button className='btn_more' onClick={()=> showTextBtn(element)}>
                            {showMore ? 'show less' : 'show more'}</button>
                        </p>
                    </div>
                    <div className='item_info'>
                        <h4>{price}</h4>
                    </div>
                </div>
        )}))}
    </div>
);
}

export default Shop;

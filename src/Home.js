import { useState } from 'react';
import './App.css';
import Buttons from './Buttons';
import { data } from './data';
import Shop from './Shop';

function Home() {
    const [items, setItems] = useState(data);

    return (
    <div>
        <div className='text'>
            <h1>The Coffee Lab</h1>
            <h3>Start your day right!</h3>
        </div>
        <div className='container'>
            <Buttons data={data} setItems={setItems}/>
            <Shop items={items}/>
        </div>
    </div>
)
}

export default Home;
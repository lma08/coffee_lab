
function Buttons({data, setItems}) {

    const searchItem = search => {
        const newItems = [];
        data.forEach(item => {
            item.search.forEach (element => {
                if (element === search) {
                    newItems.push(item);
                    setItems(newItems);
                    }
            })
        })
    }

    return (
        <div>
            <button className='btn_search' onClick={() => searchItem('all')}>All Menu</button>
            <button className='btn_search' onClick={() => searchItem('hot_coffee')}>Hot Coffee</button>
            <button className='btn_search' onClick={() => searchItem('iced_coffee')}>Iced Coffee</button>
            <button className='btn_search' onClick={() => searchItem('hot_tea')}>Hot Tea</button>
            <button className='btn_search' onClick={() => searchItem('sandwich')}>Sandwiches</button>
            <button className='btn_search' onClick={() => searchItem('bakery')}>Bakery</button>
        </div>
    )
}

export default Buttons;
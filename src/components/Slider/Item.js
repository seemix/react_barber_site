import React from 'react';

const Item = (item) => {
    return (
        <div>
            <img src={item.image} alt={item.key}/>
        </div>
    );
};

export default Item;
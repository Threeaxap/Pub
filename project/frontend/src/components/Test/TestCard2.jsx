import React, { useState, useEffect } from 'react';
import { data } from '../../data/navigationbar';

const TestCard2 = () => {
    const [color, setColor] = useState(1);


    const Render = (item) => {
        if (color === 1) {
            return item.image_first_color
        } else if (color === 2) {
            return item.image_second_color
        }
    }


    return (
        <div>
            {data.test_products.filter(item =>(item.id == 1)).map(item =>(
                    <img key={item.id} src={Render(item)} alt="" />
                ))}
            <button onClick={() => setColor(1)}>Чёрный</button>
            <button onClick={() => setColor(2)}>Белый</button>
        </div>
    );
};

export default TestCard2;
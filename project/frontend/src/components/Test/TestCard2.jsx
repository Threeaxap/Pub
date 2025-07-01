import React, { useState, useEffect } from 'react';
import { data } from '../../data/navigationbar';

const TestCard2 = () => {
    const [color, setColor] = useState(1);

    
    useEffect(() => {
    }, [color]);

    const Render = () => {
        if (color === 1) {
            return <img src={item.image_first_color} alt="" />
        } else if (color === 2) {
            return <img src={item.image_second_color} alt="" />
        }
    }


    return (
        <div>
            {data.test_products.filter(item =>(item.id == 1)).map(item =>(
                    <img key={item.id} src={Render()} alt="" />
                ))}
            <button onClick={setColor(1)}>Чёрный</button>
            <button onClick={setColor(1)}>Белый</button>
        </div>
    );
};

export default TestCard2;
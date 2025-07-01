import React, { useState, useEffect } from 'react';

const TestCard2 = () => {
    const [color, setColor] = useState(false); // false = чёрный, true = красный

    // Эффект, срабатывающий при изменении `color`
    useEffect(() => {
        console.log(`Цвет изменился на: ${color ? 'красный' : 'чёрный'}`);
    }, []); // Зависимость от `color`

    return (
        <div 
            onClick={() => setColor(!color)} // Меняем color на противоположный при клике
            style={{ color: color ? 'red' : 'black' }} // Применяем цвет
        >
            
        </div> ? () : ()
    );
};

export default TestCard2;
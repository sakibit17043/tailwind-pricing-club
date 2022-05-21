import React from 'react';
import PriceOPtions from '../PriceOptions/PriceOPtions';

const Pricing = () => {
    const options = [
        { id: 1, name: 'Free', price: 0,
        benefits:[
            'lifetime free', 
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ] },
        { id: 2, name: 'Regular', price: 9.99,
        benefits:[
            'everything on free', 
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ] },
        { id: 3, name: 'Premium', price: 19.99,
        benefits:[
            'everything on Regular', 
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]
    },
    ]
    return (
        <div className='bg-indigo-300 mt-8 p-4'>
            <h2 className='text-5xl text-white font-mono mt-4'>Best Deals of the Town</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa aliquam praesentium et. Quam veritatis numquam autem porro beatae ad!</p>
            <div className='grid md:grid-cols-3 gap-4 m-4'>
                {
                    options.map(option => <PriceOPtions
                        key={option.id}
                        option={option}
                    ></PriceOPtions>)
                }
            </div>
        </div>
    );
};

export default Pricing;
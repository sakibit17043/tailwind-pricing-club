import {  ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import PricingBenefit from '../PricingBenefit/PricingBenefit';

const PriceOPtions = (props) => {
    const {name,price,benefits} = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h4 className='bg-indigo-300 text-xl font-bold rounded py-2' >{name}</h4>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits:</h3>
               {
                   benefits.map(benefit => <PricingBenefit
                   benefit = {benefit}
                   ></PricingBenefit>)
               }
              
            </div>
            <button className='flex justify-center text-white bg-green-500 w-full mt-6 py-2 rounded hover:text-green-700 font-bold'>
                   Buy Now
                   <ArrowNarrowRightIcon className='w-6 h-6 ml-2'></ArrowNarrowRightIcon>
               </button>
        </div>
    );
};

export default PriceOPtions;
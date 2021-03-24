import React, { useState } from 'react';
import { FeaturedContainer, FeaturedBtn, BtnsContainer, SliderBtn } from './Featured';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { productData } from './data'

const Featured = () => {
    const [featuredFood, setFeaturedFood] = useState(productData);
    const [index, setindex] = useState(1);

    const bgLeft = () => {
        if(index > 0) {
            setindex(index - 1);
        }
        else {
            setindex(featuredFood.length-1);
        }
    }
    const bgRight = () => {
        if(index < featuredFood.length-1) {
            setindex(index + 1);
        }
        else {
            setindex(0);
        } 
    }

    return (
        <FeaturedContainer bg={featuredFood[index].img}>
            <h3>Pizza of the Day</h3>
            <p>{featuredFood[index].desc}</p>
            <FeaturedBtn>Order now</FeaturedBtn>
            <BtnsContainer>
                <SliderBtn onClick={bgLeft}><AiFillLeftCircle /></SliderBtn>
                <SliderBtn onClick={bgRight}><AiFillRightCircle /></SliderBtn>
            </BtnsContainer>
        </FeaturedContainer>
    
    )
}

export default Featured;

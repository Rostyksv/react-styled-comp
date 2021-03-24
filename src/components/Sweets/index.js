import React from 'react'
import { SweetsContainer, SweetsH2, SweetsContent, SweetsElement, 
SweetsImg, 
SweetsTextCont, 
SweetsTextHeader, 
SweetsTextInfo, 
SweetsPrice,
SweetsBtn
} from './SweetsElements';
import { productDataTwo } from './data';

const Sweets = () => {
    return (
        <>
            <SweetsContainer>
                <SweetsH2>Choose your dessert</SweetsH2>
                <SweetsContent>
                        {productDataTwo.map((prod, i) => {
                            const { img, alt, name, desc, price, button } = prod;
                            return (
                                <SweetsElement key={i}>
                                    <SweetsImg src={img} alt={alt} />
                                    <SweetsTextCont>
                                        <SweetsTextHeader>{name}</SweetsTextHeader>
                                        <SweetsTextInfo>{desc}</SweetsTextInfo>
                                        <SweetsPrice>{price}</SweetsPrice>
                                        <SweetsBtn>{button}</SweetsBtn>
                                    </SweetsTextCont>
                                </SweetsElement>
                            )
                        })}
                </SweetsContent>
            </SweetsContainer>
        </>
    )
}

export default Sweets;

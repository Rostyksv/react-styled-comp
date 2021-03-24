import React from 'react'
import { FavoritesContainer, FavoritesH2, FavoritesContent, FavoritesElement, 
FavoritesImg, 
FavoritesTextCont, 
FavoritesTextHeader, 
FavoritesTextInfo, 
FavoritesPrice,
FavoritesBtn
} from './FavoritesElements';
import { productData } from './data';

const Favorites = () => {
    return (
        <>
            <FavoritesContainer>
                <FavoritesH2>Choose your favorite</FavoritesH2>
                <FavoritesContent>
                        {productData.map((prod, i) => {
                            const { img, alt, name, desc, price, button } = prod;
                            return (
                                <FavoritesElement key={i}>
                                    <FavoritesImg src={img} alt={alt} />
                                    <FavoritesTextCont>
                                        <FavoritesTextHeader>{name}</FavoritesTextHeader>
                                        <FavoritesTextInfo>{desc}</FavoritesTextInfo>
                                        <FavoritesPrice>{price}</FavoritesPrice>
                                        <FavoritesBtn>{button}</FavoritesBtn>
                                    </FavoritesTextCont>
                                </FavoritesElement>
                            )
                        })}
                </FavoritesContent>
            </FavoritesContainer>
        </>
    )
}

export default Favorites;

import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from './FormatPrice';

const Product = (element) => {
    const { id, name, price, image } = element;

    return (
        <ProductItem>
            <NavLink className='nav-link' to={`/singleProduct/${id}`}>
                <div className="product">
                    <div className='container'>
                        <img src={image} alt={name} />
                        <div className="overlay"></div>
                    </div>
                    {/* <figcaption className='caption'>{category}</figcaption> */}

                    <div className="cardData">
                        <h3>{name}</h3>
                        <p className="cardDataPrice">
                            <FormatPrice price={price} />
                        </p>
                    </div>
                </div>
            </NavLink>
        </ProductItem>

    )
}

const ProductItem = styled.section`
    max-width: 50rem;

    .container{
        position: relative;

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            background-color: ${({ theme }) => theme.colors.blackColor};
            opacity: 0.7;
            overflow: hidden;
            width: 0;
            height: 100%;
            transition: .5s ease;
        }

        &:hover .overlay {
            width: 100%;
        }
    }

    img{
        width: 100%;
        max-width: 22rem;
        min-width: 10rem;
    }

    .nav-link{
        &:link,
        &:visited{
            text-decoration: none;
        }   
    }

    .cardData{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h3{
            color: grey;
        }
        
        p{
            color: grey;
        }
    }
`;

export default Product

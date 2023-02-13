import React from 'react'
import { useProductContext } from '../Context/ProductContext';
import styled from 'styled-components';
import Product from './Product';
import { Button } from '../Styles/Button';
import { NavLink } from 'react-router-dom';

const FeaturedProducts = () => {

    const { isLoading, featuredProducts } = useProductContext();




    return (
        <Wrapper>
            <h2>Feature <span className='heading_text'>Products</span></h2>

            <div>
                {isLoading ? '...Loading' : <div className='products flexProperty'>
                    {
                        featuredProducts.map((element) => {
                            return <Product key={element.id} {...element} />
                        })
                    }
                </div>}
            </div>

            <Button className='btn'>
                <NavLink to='/products'>All Products</NavLink>
            </Button>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: 3rem auto;
    max-width: 70rem;
    /* padding: 1rem; */
    text-align: center;
    
    .nav-link{
        &:link,
        &:visited{
            text-decoration: none;
        }   
    }

    .container{
        position: relative;
    }

    img{
        width: 100%;
        max-width: 22rem;
        min-width: 10rem;
    }

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

    .container:hover .overlay {
        width: 100%;
    }


    h2{
        margin-bottom: 1.5rem;
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

    .products{
        justify-content: center;
        gap: 1rem;
    }

`;

export default FeaturedProducts

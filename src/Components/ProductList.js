import React from 'react';
import styled from 'styled-components';
import { useProductContext } from '../Context/ProductContext';
import Product from './Product';

const ProductList = () => {
    const { isLoading, allProducts } = useProductContext();

    if (isLoading) {
        return (<>
            <div>...Loading products</div>
            {/* {console.log('Loading all products')} */}
        </>
        )
    }
    
    {console.log(allProducts)}

    return (
        <Wrapper>
            <div className='productList flexProperty'>
                {
                    allProducts.map((element) => {
                        return <Product key={element.id} {...element} />
                    })  
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    max-width: 70rem;
    border: 1px solid red;

    .productList{
        gap: 1rem;
    }
`;



export default ProductList

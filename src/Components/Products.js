import React from 'react'
import styled from 'styled-components';
import Filter from './Filter';
import ProductList from './ProductList';

const Products = () => {
  return (
    <>
      <Wrapper className='allProducts flexProperty'>
        <Filter />
        {/* Hello World */}
        <ProductList />
      </Wrapper>

    </>
  )
}

const Wrapper = styled.section`
  outline: 2px solid green;
  align-items: flex-start;
  justify-content: space-evenly;
  
  .allProducts{
    background-color: red;
    /* width: 100vw; */

    .productList{
      max-width: 10rem;
      /* outline: 1px solid green; */
    }
  }
  
`;

// const Product = styled.section`

// `;

export default Products

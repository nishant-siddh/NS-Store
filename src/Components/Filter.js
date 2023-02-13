import React from 'react';
import styled from 'styled-components';
import { useProductContext } from '../Context/ProductContext';

const Filter = () => {
    const { allProducts } = useProductContext();
    let categoryArray = [];
    // const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
    // let uniqueArray;
    return (
        <>
            {/* Filter Section */}
            <FilterSection>
                <div className='filterSection flexProperty'>
                    <h3>Category- </h3>

                    {allProducts.map(element => {
                        // {categoryArray.push(element.category),
                        // [...new Set(categoryArray)]}

                        return (
                            <span key={element.id}>
                                <input type="checkbox" className='checkBox' id={element.category} />
                                <label htmlFor={element.category}>{element.category}</label>
                            </span>
                            // categoryArray.push(element.category)
                        )
                    })}
                    {console.log(categoryArray)}

                    {/* {console.log(uniqueArray, 'sort')} */}

                </div>
                {console.log(categoryArray)}

            </FilterSection>
        </>
    )
}

const FilterSection = styled.section`
.filterSection{
    outline: 1px solid red;
    /* background-color: green; */
    width: 20rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    /* outline: 1px solid yellow; */
}
    .checkBox{
        background-color: red;
        /* appearance: none; */
    }
    
    h3{
        font-weight: 600;
    }

`;

export default Filter

import React, { useState } from 'react';
import styled from 'styled-components';

const MyImages = ({ img }) => {

  console.log(img[0], 'zero');

  const [mainImage, setMainImage] = useState(() => img[0].url);
  console.log(mainImage, 'main');

  const handleClick = (elem) => {
    setMainImage(elem.url);
  }

  return (
    <Wrapper>
      {/* {console.log(mainImage)} */}
      <div className='productImagesColumn flexProperty'>

        {/* Small Images */}
        <div className='smallImages flexProperty'>
          {
            img.map((elem, index) => {
              return (
                <>
                  <img src={elem.url} key={index} alt={elem.filename} className='images' onClick={() => handleClick(elem)} />
                </>
              )
            })}
        </div>
        {/* {console.log('second')} */}

        {/* Main Image */}
        <div className='bigImage'>
          <img src={mainImage} className='image' alt='' />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .productImagesColumn{
    width: 100%;
    /* outline: 2px solid red;  */
    /* flex-direction: row-reverse; */
    gap: 1rem;

    .bigImage{
      img{
        width: 100%;
        /* height: 17rem; */
        max-width: 24rem;
      }
    }

    .smallImages{
      flex-direction: column;
      gap: 1.5rem;

      img{
        width: 100%;
        max-width: 7rem;

        &:hover{
          position: relative;
          animation: mover 0.3s linear;
        }

        @keyframes mover {
          0%{
            translate: 0;
          }
          100%{
            translate: 0 -10%;
          }
        }
      }
    }
  }

  @media (max-width: 1255px){
    .productImagesColumn{
      /* outline: 1px solid green; */
      flex-direction: column-reverse;

      .smallImages{
        flex-direction: row;
        gap: 1rem;

        img{
          width: 100%;
          max-width: 8rem;
        }
      }
    }
  }
  
  @media (max-width: 450px){
    .productImagesColumn{
      .smallImages{
        /* outline: 2px solid green; */
        gap: 0.7rem;
  
        img{
          width: 100%;
          max-width: 6rem;
        }
      }
    }
  }

  @media (max-width: 360px){
    .productImagesColumn{
      .smallImages{
        /* outline: 2px solid green; */
        gap: 0.5rem;
  
        img{
          width: 100%;
          max-width: 4rem;
        }
      }
    }
  }
`;

export default MyImages

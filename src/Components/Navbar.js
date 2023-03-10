import React, { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/_nsLogo2.jpg";

const Navbar = () => {

    const [menuIcon, setMenuIcon] = useState(false);

    return (
        <>
            <Wrapper>
                <div className={menuIcon ? 'navigationBar active' : 'navigationBar'}>
                    <NavLink to='/'><img src={logo} alt="Logo" className="logo" /></NavLink>
                    <ul className="navigationList flexProperty">
                        <li><NavLink className="nav-link" onClick={() => setMenuIcon(false)} aria-current="page" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-link" onClick={() => setMenuIcon(false)} to="/about">About</NavLink></li>
                        <li><NavLink className="nav-link" onClick={() => setMenuIcon(false)} to="/products">Product</NavLink></li>
                        <li><NavLink className="nav-link" onClick={() => setMenuIcon(false)} to="/contact">Contact Us</NavLink></li>
                        <li><NavLink className="nav-link" onClick={() => setMenuIcon(false)} to="/cart"><i className="fa-solid fa-cart-shopping"></i></NavLink></li>
                    </ul>

                    <div className="mobileMenuBtn">
                        <CgMenu className="mobileMenuIcon openMenuIcon" onClick={() => setMenuIcon(true)} />
                        <CgClose className="mobileMenuIcon closeMenuOutline" onClick={() => setMenuIcon(false)} />
                    </div>

                </div>
                <hr />
                {/* <hr style={{backgroundColor: `${(theme) => theme.colors.baseColor}`}} /> */}
            </Wrapper>
        </>
    );
}



const Wrapper = styled.nav`
    /* width: 100%;
    position: fixed;
    top: 0; */
    z-index: 999;
    
    .navigationBar {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        padding: 0 15px;
        background-color: ${({theme}) => theme.colors.blackColor};

        .navigationList {
            list-style: none;
            line-height: 35px;
            gap: 20px;
        }

        .nav-link {
            &:link,
            &:visited{
                display: inline-block;
                text-decoration: none;
                transition: color 0.2s linear;
            }
            
            &:hover,
            &:active{
                color: ${({ theme }) => theme.colors.baseColor};
            }
        }
    }

    .mobileMenuBtn{
        display: none;
        position: relative;
        cursor: pointer;

        .mobileMenuIcon{
            position: absolute;
            font-size: 1.5rem;
            top: 50%;
            right: 20%;
            translate: -20% -50%;
        }
    }

    .closeMenuOutline{
        /* position: fixed; */
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .logo{
        width: 10rem;
    }
    .navigationBar{    
        .navigationList{
            flex-direction: column;
            display: none;
        }
    }

    .mobileMenuBtn{
        display: inline-block;
        z-index: 9999;
    }

    .active .mobileMenuIcon{
        display: none;
    }

    .active .closeMenuOutline{
        display: inline-block;
    }

    .navigationBar{
        .navigationList{
            width: 45vw;
            height: 100vh;
            position: fixed;
            padding-top: 70px;
            top: 0;
            right: 0;
            background-color: ${({theme}) => theme.colors.baseColor};
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
            visibility: hidden;
            opacity: 0;
            /* translate: 0; */
            transition: all 0.2s linear;

        }

        .nav-link:hover{
            color: ${({theme}) => theme.colors.blackColor};
        }
    }

    .active .navigationList{
        visibility: visible;
        opacity: 1;
        /* translate: 0; */
        z-index: 999;
        transform-origin: right;
        transition: all 0.2s linear;
    }
}
`;


export default Navbar
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLink, 
    NavBtn,
    NavBtnLink,
    ImgWrap,
    Img
} from './NavbarElements';
import img from '../../images/logo80x80.png'

const Navbar = ({ toggle }) => {
    
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    };

    useEffect( () => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <IconContext.Provider value={{ color: '#050505'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <ImgWrap>
                        <Img src={img}/>
                        <NavLogo to='/' onClick={toggleHome}> somos.</NavLogo>
                    </ImgWrap>
                    
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink 
                                to='about'
                                smooth={true}
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80} 
                            >Características</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            to='discover'
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80} 
                            >Descubre</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            to='services'
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80} 
                            >Servicios</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            to='signup'
                            smooth={true}
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}  
                            >Regístrate</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavBtnLink to='/signin'>Iniciar sesión
                            </NavBtnLink>
                        </NavItem>
                        <NavItem>
                        <NavBtnLink to='/signup'>Regístrate</NavBtnLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        
    );
}

export default Navbar;
import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes, FaPizzaSlice} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Button} from '../../globalStyles';
import { Nav, 
    NavbarContainer, 
    NavLogo,  
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavItemBtn,
    NavBtnLink,
} from './Navbar.elements';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const [click,setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    const location = useLocation();

    const isActive = (path) => path === location.pathname;

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <FaPizzaSlice />
                        &nbsp;Mitch's Pizzeria
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click ? 'true' : undefined}>
                        <NavItem style={isActive('/') ? {borderBottom: '2px solid #fff'} : null}>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem style={isActive('/Pizza') ? {borderBottom: '2px solid #fff'} : null}>
                            <NavLinks to='/Pizza'>
                                Pizza
                            </NavLinks>
                        </NavItem>
                        <NavItem style={isActive('/Drinks') ? {borderBottom: '2px solid #fff'} : null}>
                            <NavLinks to='/Drinks'>
                                Drinks
                            </NavLinks>
                        </NavItem>
                        <NavItem style={isActive('/Dessert') ? {borderBottom: '2px solid #fff'} : null}>
                            <NavLinks to='/Dessert'>
                                Desserts
                            </NavLinks>
                        </NavItem>
                        <NavItem style={isActive('/Facts') ? {borderBottom: '2px solid #fff'} : null}>
                            <NavLinks to='/Facts'>
                                Facts
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/Cart'>
                                    <Button>Cart</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/Cart'>
                                    <Button>Cart</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
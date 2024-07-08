import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import './../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import logo from './../../../public/assetsProject/imges/LOGO.png' 

export default function NavBarCom() {
    const [isSticky, setIsSticky] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 900) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavLinkClick = () => {
        setExpanded(false);
    };

    const handleToggleFocus = (focused) => {
        const toggler = document.querySelector('.navbar-toggler-icon');
        if (toggler) {
            if (focused) {
                toggler.classList.add('navbar-toggler-icon-focus');
            } else {
                toggler.classList.remove('navbar-toggler-icon-focus');
            }
        }
    };

    return (
        <Navbar expand="lg" className={`bg-white ra-nav-Container ra-nav-comp ${isSticky ? 'rb-navbar-fixed' : 'rb-navbar-sticky'}`} expanded={expanded}>
            <Container fluid className='flex'>
                <Navbar.Brand className="rb-logo-nav" href="#"><img className='rb-logo' src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="navbarScroll"
                    onClick={() => setExpanded(!expanded)}
                    onFocus={() => handleToggleFocus(true)}
                    onBlur={() => handleToggleFocus(false)}
                />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link className='rb-nav-link' to={'/'} onClick={handleNavLinkClick}><h5>Home</h5></Link>
                        <Link className='rb-nav-link' to={'/Courses'} onClick={handleNavLinkClick}><h5>Courses</h5></Link>
                        <Link className='rb-nav-link' to={'/Blog'} onClick={handleNavLinkClick}><h5>Blog</h5></Link>
                        <h5>
                            <NavDropdown title="Page" className='rb-Dropdown-nav' id="navbarScrollingDropdown">
                                <NavDropdown.Item className='rb-NavDropdown' onClick={handleNavLinkClick}>
                                    <Link className='rb-nav-link' to={'/Contact'}>Contact</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item className='rb-NavDropdown' onClick={handleNavLinkClick}>
                                    <Link className='rb-nav-link' to={'/FAQs'}>FAQs</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </h5>
                        <Link className='rb-nav-link' to={'#'} onClick={handleNavLinkClick}><h5>LearnPress Add-On</h5></Link>
                        <Link className='rb-nav-link' to={'#'} onClick={handleNavLinkClick}><h5>Premium Theme</h5></Link>
                    </Nav>
                    <div className="d-flex">
                        <Link className='rb-log-reg' to={'/LoginRegister'} onClick={handleNavLinkClick}>Login/Register</Link>
                        <button className='rb-search'>
                            <FontAwesomeIcon className='rb-search-icon' icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

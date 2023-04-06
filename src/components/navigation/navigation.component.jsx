import { Fragment } from 'react'
import disneyLogo from '/src/disney-logo.svg'
import Navlinks from '../nav-links/nav-links.component';
import './navigation.styles.css'

function Navigation() {
    return (
        <div className='nav-bar'>
            <img className='logo' alt='disney-logo' src={disneyLogo} />
            <Navlinks />
        </div>

    );
};

export default Navigation;
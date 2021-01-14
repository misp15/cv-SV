import React from 'react';
import Link from './Link';
import '../../style/Header.css';

const Header = () => {

    return(
        <header className="item1">
            <Link href="/kontakt" className="links-header">
                kontakt
            </Link>
            <Link href="/cv" className="links-header">
                resumé
            </Link>
            <Link href="/" className="links-header">
                om
            </Link>           
        </header>
    );
};

export default Header;
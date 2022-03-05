import React from 'react';
import Link from 'next/link';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <div className={style.logo}>
            <h2>Hello</h2>
        </div>
        <div className={style.nav}>
            <Link href="/"><a>About</a></Link>
            <Link href="/user"><a>User</a></Link> 
        </div>
    </div>
  )
}

export default Navbar
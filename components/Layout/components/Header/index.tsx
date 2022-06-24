import React, {FC} from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import Link from "next/link";

const Header:FC = () => {
  return (<header className={styles.header}>
        <div className={styles.logo}/>
    <nav>
      <Link href={'/'}>
        <a>Главная</a>
      </Link>
      <Link href={'/users'}>
        <a>Пользователи</a>
      </Link>
    </nav>
    </header>);
};



export default Header;
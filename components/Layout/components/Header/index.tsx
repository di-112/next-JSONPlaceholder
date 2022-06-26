import React, {FC} from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import Link from "next/link";

const Header:FC = () => {
  return (<header className={styles.header}>
          <Image
              className={styles.logo}
              src={'/logo.png'}
              height={36}
              width={36}
          />
    <nav>
      <Link href={'/'}>
        <a>Главная</a>
      </Link>
      <Link href={'/users'}>
        <a>Пользователи</a>
      </Link>
      <Link href={'/photos'}>
        <a>Фотографии</a>
      </Link>
    </nav>
    </header>);
};



export default Header;
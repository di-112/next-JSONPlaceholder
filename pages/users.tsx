import type {NextPage} from 'next'
import Head from 'next/head'
import {IUser} from "../types/users";
import Link from "next/link";
import styles from "../styles/list.module.scss";

interface IUsers {
  users: IUser[]
}

const Users: NextPage<IUsers> = ({users}) => {
  return (
    <>
      <Head>
        <title>Пользователи</title>
        <meta name="description" content="Пользователи JSONPlaceholder" />
        <meta property="og:title" content="Пользователи JSONPlaceholder" />
        <meta
            property="og:description"
            content="Пользователи JSONPlaceholder"
        />
        <meta
            property="og:image"
            content="/logo.png"
        />
    </Head>
      <h1>
        Пользователи
      </h1>
      <div>
        {users.map(user => {
          return <div  key={user.id}>
            <Link
                href={'/users/' + user.id}
            >
              <a className={styles.item}>{user.id}. {user.name} {user.username} </a>
            </Link>
          </div>
        })}
      </div>
    </>
  )
}

export const getStaticProps = async () => {

  const data = await fetch('https://jsonplaceholder.typicode.com/users')

  const users = await data.json()

  return {
    props: {
      users
    }
  }
}

export default Users

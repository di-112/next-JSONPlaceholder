import React, {FC, useEffect} from 'react';
import {GetStaticPaths, GetStaticProps} from "next";
import {IUser} from "../../types/users";
import styles from '../../styles/list.module.scss'

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await fetch(process.env.API_HOST + '/users')
    const users : IUser[] = await data.json()

    const paths = users.map(user => ({
        params: {
            id: user.id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {

    const data = await fetch(process.env.API_HOST + '/users/'+ context.params?.id)

    if(!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
            revalidate: 5
        }
    }

    const user = await data.json()

    return {
        props: {
            user
        }
    }
}

interface IUserComponent {
    user: IUser
}

const User: FC<IUserComponent> = ({user}) => {

    return (
        <div className={styles.itemInfo}>
            <h1> {user.name} </h1>
                <div> Имя: {user.name} </div>
                <div> Email: {user.email} </div>
                <div> Телефон: {user.phone} </div>
                <div> Адрес: {user.address.city + user.address.street} </div>
                <div>Место работы: {user.company.name}</div>
        </div>
    );
};

export default User;
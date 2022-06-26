import React, {FC, useState} from 'react';
import Image from "next/image";
import {IPhoto} from "../../types/photo";
import {GetServerSideProps} from "next";
import {IUser} from "../../types/users";

interface IPhotoComponent {
    photo: IPhoto,
    author: IUser
}

const Photo:FC<IPhotoComponent> = ({photo, author}) => {

    return (
        <>
         <h1>{photo.title}</h1>
        <div className={'content'}>
        <Image
                src={photo.url + '.png'}
                blurDataURL={photo.thumbnailUrl + '.png'}
                placeholder={'blur'}
                width={350}
                height={350}
            />
            <h6>Автор: {author.name}</h6>
        </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const photo : IPhoto = await fetch(process.env.API_HOST + '/photos/' + context.params?.id).then(data => data.json())


    const author : IUser = await fetch(process.env.API_HOST + '/users/' + photo.id).then(data => data.json())

    return {
        props: {
            photo,
            author
        }
    }
}

export default Photo;
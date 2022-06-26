import type {NextPage} from 'next'
import Head from 'next/head'
import {IUser} from "../types/users";
import Image from 'next/image'
import Link from "next/link";
import styles from "../styles/photos.module.scss";
import {IPhoto} from "../types/photo";

interface IPhotos {
  photos: IPhoto[]
}

const Photos: NextPage<IPhotos> = ({photos}) => {
  return (
    <>
      <Head>
        <title>Фотографии</title>
        <meta name="description" content="Фотографии JSONPlaceholder" />
        <meta property="og:title" content="Фотографии JSONPlaceholder" />
        <meta
            property="og:description"
            content="Фотографии JSONPlaceholder"
        />
        <meta
            property="og:image"
            content="/logo.png"
        />
    </Head>
      <h1>
        Фотографии
      </h1>
      <div className={styles.photos}>
        {photos.map(photo => {
          return <div key={photo.id} className={styles.photo}>
            <Link
                href={'/photos/' + photo.id}
            >
              <a>
                <h3>{photo.title}</h3>
                <Image
                    width={150}
                    height={150}
                    src={photo.url + '.png'}
                    alt={photo.title}
                    placeholder={'blur'}
                    blurDataURL={photo.thumbnailUrl + '.png'}
                />
              </a>
            </Link>
          </div>
        })}
      </div>
    </>
  )
}

export const getStaticProps = async () => {

  const data = await fetch('https://jsonplaceholder.typicode.com/photos')

  const photos = await data.json()

  return {
    props: {
      photos: photos.filter((value: IUser,index: number) => index < 50)
    }
  }
}

export default Photos

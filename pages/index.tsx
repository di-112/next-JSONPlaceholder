import type {NextPage} from 'next'
import Head from 'next/head'
import Image from "next/image";
import mainImg from '/public/main.png'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
     <h1>
       Главная
     </h1>
        <div className={'contentWrapper'}>
           <Image
               src={mainImg}
               height={250}
               width={500}
               placeholder={'blur'}
           />
        </div>
        <style jsx>{`.contentWrapper {
              display: flex;
              justify-content: center;
              align-items: center;
            }`}
        </style>
    </>
  )
}

export default Home

import type {NextPage} from 'next'
import Head from 'next/head'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const ErrorPage: NextPage = () => {

  const router = useRouter()

  const [count, setCount] = useState(5)

  useEffect(()=>{

    setTimeout(()=>{
      if(count) {
        setCount(count - 1)
        if((count - 1) === 0 ) {
          router.push('/')
        }
      }
    }, 1000)
  }, [count])

  return (
    <>
      <Head>
        <title>Страница не найдена</title>
      </Head>
     <h1>
       Страница не найдена 404
     </h1>
      <div className={'count'}>{count}</div>
      <style jsx>
        {`
          .count {
              text-align: center;
              font-size: 25px;
              font-weight: 700;
          }        
`       }
      </style>
    </>
  )
}

export default ErrorPage

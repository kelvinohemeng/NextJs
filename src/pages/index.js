import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from 'comps/Navbar'
import Footer from 'comps/Footer'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Next App | Home</title>
      <meta name="keywords" content="learning next react etc" />
    </Head>
      <div>
        <h1 className={styles.title}> Homepage </h1>
        <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium cupiditate sed porro mollitia veniam fuga iure repellat id eius nostrum blanditiis suscipit commodi dolor, dignissimos ullam! Pariatur, in? Eos officia aliquam qui at consequuntur natus dolore quaerat esse accusantium, non impedit, quis cumque provident a fugiat reiciendis veritatis vel.</p>
        <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium cupiditate sed porro mollitia veniam fuga iure repellat id eius nostrum blanditiis suscipit commodi dolor, dignissimos ullam! Pariatur, in? Eos officia aliquam qui at consequuntur natus dolore quaerat esse accusantium, non impedit, quis cumque provident a fugiat reiciendis veritatis vel.</p>
        <Link href="./subpages">
          <p className={styles.btn}> See listings </p>
        </Link>
      </div>
    </>
  )
}

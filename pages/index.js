import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alforque | Homepage</title>
        <meta name='keywords' content='maus'/>
      </Head>

      <div >
      
        <h1 className={styles.title}>Hello! My name is</h1> 
        <div className="logo2">
                <Image src="/Antonio_Alforque-removebg-preview.png" width={220} height={170}/>
        </div>
        <h1 className={styles.title}>An IT student aspiring to become a Software Engineer</h1> 
        
        <Link href="/portfolio">
          <a className={styles.btn}>See Portfolio</a>
        </Link>
    
      </div>
    </>
      
  )
}

import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = '桑原 士門'
export const siteTitle = "Next.js blog"

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="vercel.svg" className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="vercel.svg" className={`${utilStyles.borderCircle}`}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
        
      </header>
      <main>{ children }</main>
      {!home && (
        <div>
          <Link href="/">ホームに戻る</Link>
        </div>
      )}
    </div>
  )
}

export default Layout
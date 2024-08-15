import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Layout from '../components/Layout'
import utilStyle from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          最強エンジニアを目指す筑波大生
        </p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.paddig1px}`}>
        <h2>📝エンジニアブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src='/' alt='アイコン画像1' className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
            </Link>
            <br />
            <small className={utilStyle.lightText}>August, 8, 2024</small>
          </article>
          <article>
            <Link href="/">
              <img src='/' alt='アイコン画像1' className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
            </Link>
            <br />
            <small className={utilStyle.lightText}>August, 8, 2024</small>
          </article>
          <article>
            <Link href="/">
              <img src='/' alt='アイコン画像1' className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
            </Link>
            <br />
            <small className={utilStyle.lightText}>August, 8, 2024</small>
          </article>
          <article>
            <Link href="/">
              <img src='/' alt='アイコン画像1' className={styles.thumbnailImage}/>
            </Link>
            <Link href="/">
            </Link>
            <br />
            <small className={utilStyle.lightText}>August, 8, 2024</small>
          </article>
        </div>
      </section>
    </Layout>
  )
}

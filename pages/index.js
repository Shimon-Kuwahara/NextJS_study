import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout'
import utilStyle from "../styles/utils.module.css"
import { getPostsData } from '../lib/post'

export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    }
  }

}

// export async function getServerSideProps(context) {
//   return {
//     props: {

//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>
          最強エンジニアを目指す筑波大生
        </p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.paddig1px}`}>
        <h2>📝エンジニアブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => {
            return (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} alt='アイコン画像1' className={styles.thumbnailImage}/>
                </Link>
                <Link href={`/posts/${id}`}>
                  <a className={utilStyle.boldText}>{title}</a>
                </Link>
                <br />
                <small className={utilStyle.lightText}>{date}</small>
              </article>
            )
          })}
          
         
        </div>
      </section>
    </Layout>
  )
}

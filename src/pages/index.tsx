import Head from 'next/head'
import styles from '../../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Senac Books</title>
      </Head>
      <h1>Hello</h1>
    </div>
  )
}

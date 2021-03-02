import Head from 'next/head'
import styles from '../../styles/pages/Home.module.css'

import { DadosProduto } from '../components/DadosProduto'
import { ImagensProduto } from '../components/ImagensProduto'

export default function cadastrarProduto() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Senac Books</title>
      </Head>
      <h1>Cadastrar Produto</h1>
      <DadosProduto />
      <br />
      <ImagensProduto />
    </div>
  )
}

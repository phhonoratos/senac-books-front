import Head from 'next/head'
import styles from '../styles/pages/CadastrarProduto.module.css'

import { DadosProduto } from '../components/DadosProduto'

export default function cadastrarProduto() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Senac Books</title>
      </Head>

      <h1>Cadastrar Produto</h1>

      <form action="">
        <DadosProduto />
        <br />
        <button className={styles.btnCancelar}>Cancelar</button>
        <button className={styles.btnCadastrar}>Cadastrar Produto</button>
      </form>
      <br />
    </div>
  )
}

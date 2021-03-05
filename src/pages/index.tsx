import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Senac Books</title>
      </Head>
      <h1>Teste</h1>
      <a href="cadastrarProduto">Cadastrar Produto</a>
      <br />
      <a href="listarProduto">Lista de Produtos</a>
      <a href="VisualizarProduto">Visualizar Produto</a>
    </div>
  )
}

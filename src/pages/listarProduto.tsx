import Head from 'next/head'
import styles from '../styles/pages/CadastrarProduto.module.css'
import {ListProduct} from '../components/ListProduct';

export default function listarProduto() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Senac Books</title>
      </Head>

      <h1>Lista de Produtos</h1>

      <form action="">
        <ListProduct />
        <br />
        
      </form>
      <br />
    </div>
  )
}

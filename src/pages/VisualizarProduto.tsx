import Head from 'next/head'
import styles from '../styles/pages/VisualizarProduto.module.css'

import { CaixaVisual } from '../components/CaixaVisual'
import { CaixaCompra } from '../components/CaixaCompra'

export default function VisualizarProduto() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Senac Books</title>
            </Head>

            <h1>Visualizar Produto</h1>

            <section className={styles.teste}>
                <section className={styles.teste2}>
                    <CaixaVisual />
                </section>
                <CaixaCompra />
            </section>
            <br />
        </div>
    );
}
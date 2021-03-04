import Head from 'next/head'
import styles from '../styles/pages/VisualizarProduto.module.css'

import { CaixaVisual } from '../components/CaixaVisual'

export default function VisualizarProduto() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Senac Books</title>
            </Head>
            <h1>Visualizar Produto</h1>
            <CaixaVisual />
        </div>
    );
}
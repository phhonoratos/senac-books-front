import styles from '../styles/components/CaixaCompra.module.css'

import { AiFillStar } from 'react-icons/ai'
import { AiFillPicture } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiMinus } from 'react-icons/fi'

export function CaixaCompra() {
    return (
        <article className={styles.container}>
            <strong>Título</strong>
            <p>Qtd Estrelas</p>
            <strong><AiFillStar /></strong>
            <div className={styles.boxInfo}>
                <div className={styles.boxImg}>
                    <AiFillPicture className={styles.imagem} />
                </div>
                <div className={styles.boxInfoText}>
                    <label>Autor: </label>
                    <label>Edição: </label>
                    <label>Ano: </label>
                    <label>Editora: </label>
                    <label>Qtd. Pág: </label>
                    <label>Dimensão:  x  x  cm</label>
                </div>
            </div>
            <div className={styles.qtdPreco}>
                <label className={styles.qtdLab}>Qtd. disponível: </label>
                <label className={styles.precoLab}>Preço: </label>
            </div>
            <div className={styles.qtdCompra}>
                <button><FiMinus className={styles.imgMenos} /></button>
                <label className={styles.qtdNum}>1</label>
                <button><AiOutlinePlus className={styles.imgMais} /></button>
            </div>
            <button className={styles.comprar}>Comprar</button>
        </article>
    );
}
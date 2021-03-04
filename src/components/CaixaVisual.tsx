import styles from '../styles/components/CaixaVisual.module.css'

import { AiFillPicture } from 'react-icons/ai'

export function CaixaVisual() {
    return (
        <article className={styles.container}>
                <div className={styles.mini1}>
                    <AiFillPicture className={styles.mini11} />
                </div>
                <div className={styles.imagemP}>
                    <AiFillPicture className={styles.ima3} />
                </div>
                <div className={styles.mini2}>
                    <AiFillPicture className={styles.mini22} />
                </div>
            <textarea className={styles.descricao}></textarea>
            <br />
        </article>
    );
}
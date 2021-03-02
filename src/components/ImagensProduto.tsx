import styles from '../../styles/components/ImagensProduto.module.css'

export function ImagensProduto() {
    return (
        <article className={styles.container}>
            <label className={styles.buscar1}>Buscar:</label>
            <input className={styles.buscar} type="text" />
            <br />
            <input className={styles.checkCapa} type="checkbox" name="img-capa" id="" />
            <label className={styles.capa}>Capa</label>
            <button className={styles.upload}>Upload</button>
            <br />
            <button className={styles.excluir}>Excluir Selecionado</button>
        </article>
    );
}
import styles from '../styles/components/ImagensProduto.module.css'

import { AiFillPicture } from 'react-icons/ai'

export function ImagensProduto() {
    return (
        <article className={styles.container}>
            <input className={styles.buscar} accept="image/*" type="file" placeholder="Pesquise o local da imagem" />
            <br />
            <input className={styles.checkCapa} type="checkbox" name="img-capa" id="" />
            <label className={styles.capa}>Capa</label>
            <button className={styles.upload}>Upload</button>
            <section>
                <input className={styles.checkImg1} type="checkbox" name="img-capa" id="" />
                <input className={styles.checkImg2} type="checkbox" name="img-capa" id="" />
            </section>
            <section className={styles.secImg}>
                <div className={styles.img1}><AiFillPicture className={styles.img11} /></div>
                <div className={styles.img2}><AiFillPicture className={styles.img22} /></div>
            </section>
            <button className={styles.excluir}>Excluir Selecionado</button>
        </article>
    );
}
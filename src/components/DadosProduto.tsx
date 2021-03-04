import styles from '../styles/components/DadosProduto.module.css'

import { ImagensProduto } from '../components/ImagensProduto'

export function DadosProduto() {
    return (
        <article className={styles.container}>
            <input className={styles.titulo} type="text" placeholder="Título" />
            <input className={styles.autor} type="text" placeholder="Autor" />
            <input className={styles.editora} type="text" placeholder="Editora" />
            <input className={styles.qtdPag} type="number" placeholder="Qtd Páginas" />
            <select className={styles.categoria} name="categoria" id="cat">
                <option value="Policial">Policial</option>
                <option value="Romance">Romance</option>
                <option value="Terror">Terror</option>
                <option value="Ficcao">Ficção</option>
                <option value="Culinaria">Culinária</option>
            </select>
            <input className={styles.ano} type="number" placeholder="Ano" />
            <input className={styles.edicao} type="text" placeholder="Edição" />
            <select className={styles.qtdEstrelas} name="estrelas" id="cat">
                <option value="1">1 estrela</option>
                <option value="2">2 estrelas</option>
                <option value="3">3 estrelas</option>
                <option value="4">4 estrelas</option>
                <option value="5">5 estrelas</option>
            </select>
            <select className={styles.status} name="status" id="cat">
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
            </select>
            <input className={styles.dimensao} type="text" placeholder="Dimensões do Produto" />
            <input className={styles.qtdEstoque} type="number" placeholder="Qtd Estoque" />
            <input className={styles.preco} type="number" placeholder="Preço" />
            <textarea className={styles.descricao} name="descricao" id="descricao" placeholder="Descrição do produto" />
            <br />
            <ImagensProduto />
        </article>
    );
}
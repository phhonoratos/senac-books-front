import styles from '../../styles/components/DadosProduto.module.css'

export function DadosProduto() {
    return (
        <article className={styles.container}>
            <label className={styles.titulo1}>Titulo:</label>
            <input className={styles.titulo} type="text" />
            <br />
            <label className={styles.autor1}>Autor:</label>
            <input className={styles.autor} type="text" />
            <br />
            <label className={styles.editora1}>Editora:</label>
            <input className={styles.editora} type="text" />
            <br />
            <label className={styles.categoria1}>Categoria:
                <select className={styles.categoria} name="categoria" id="cat">
                    <option value="Policial">Policial</option>
                    <option value="Romance">Romance</option>
                    <option value="Terror">Terror</option>
                    <option value="Ficcao">Ficção</option>
                    <option value="Culinaria">Culinária</option>
                </select>
            </label>
            <br />
            <label className={styles.qtdPag1}>Qtd pág:</label>
            <input className={styles.qtdPag} type="text" />
            <br />
            <label className={styles.ano1}>Ano:</label>
            <input className={styles.ano} type="number" value="1980"/>
            <br />
            <label className={styles.edicao1}>Edição:</label>
            <input className={styles.edicao} type="text" />
            <br />
            <label className={styles.qtdEstrelas1}>Qtd Estrelas:
                <select className={styles.qtdEstrelas} name="estrelas" id="cat">
                    <option value="1">1 estrela</option>
                    <option value="2">2 estrelas</option>
                    <option value="3">3 estrelas</option>
                    <option value="4">4 estrelas</option>
                    <option value="5">5 estrelas</option>
                </select>
            </label>
            <br />
            <label className={styles.status1}>Status:
                <select className={styles.status} name="status" id="cat">
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                </select>
            </label>
            <br />
            <label className={styles.qtdEstoque1}>Qtd Estoque:</label>
            <input className={styles.qtdEstoque} type="text" />
            <br />
            <label className={styles.preco1}>Preço:</label>
            <input className={styles.preco} type="text" />
            <br />
            <label className={styles.descricao1}>Descrição:</label>
            <textarea className={styles.descricao} name="descricao" id="descricao"></textarea>
        </article>
    );
}
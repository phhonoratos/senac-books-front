import { AiOutlineSearch } from 'react-icons/ai';
import styles from '../styles/components/ListProduct.module.css';
import Table from '../components/Table/Table';
import React from 'react';
import {FiChevronRight, FiChevronsRight, FiChevronLeft, FiChevronsLeft} from 'react-icons/fi';
import PagesManifestPlugin from 'next/dist/build/webpack/plugins/pages-manifest-plugin';

export function ListProduct() {
    let data = [
        {
            titulo: 'Aaaaaaa', Editora: 'bbbbbbb', Autor: 'ccccccc', categoria: 'ddddddd', QtdEtq: 'eeeeeee',
            Status: 'fffffff', Preço: 'ggggggg', 
            Editar: 'hhhhhhh', InativarReativar: 'iiiiiii', Visualizar:'jjjjjjj'
        }
    ];

    return (

        <article className={styles.container}>

            <input className={styles.titulo} type="text" placeholder="Título" />
            <button type="submit"><AiOutlineSearch className={styles.search} /></button>
            <br />

            <select className={styles.categoria} name="categoria" id="cat">
                <option value="Policial">Policial</option>
                <option value="Romance">Romance</option>
                <option value="Terror">Terror</option>
                <option value="Ficcao">Ficção</option>
                <option value="Culinaria">Culinária</option>
            </select>
            <br />
            <input className={styles.editora} type="text" placeholder="Editora" />
            <br />

            <button className={styles.button}>
                <a href="cadastrarProduto">Cadastrar Produto</a>
            </button>
            <br/>
            <Table data={data} />
            <div className={styles.buttonsLabel}>
            <button className={styles.buttonsLeft} type={'submit'}><FiChevronsLeft></FiChevronsLeft></button>
            <button className={styles.buttonLeft} type={'submit'}><FiChevronLeft></FiChevronLeft></button>
            <label className={styles.labelPags}>1</label>
            <button className={styles.buttonsRight} type={'submit'}><FiChevronRight></FiChevronRight></button>
            <button className={styles.buttonRight} type={'submit'}><FiChevronsRight></FiChevronsRight></button>
            </div>
            
        </article>


    );
}
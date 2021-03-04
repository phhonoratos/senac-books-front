import react from 'react';
import styles from '../../styles/components/ListProduct.module.css';

const Table = ({ data }) => {

    const keys = Object.keys(data[0]);
    const Row = ({ record }) => {

        const keys = Object.keys(record);
        return (
            <tr key={record.titulo}>
                {
                    keys.map(key => <td key={key}>{record[key]}</td>)
                }

            </tr>
        )
    }
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {
                        keys.map(key => <th key={key}>{key}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map(record => <Row record={record} />)
                }

            </tbody>
        </table>

    )
}

export default Table

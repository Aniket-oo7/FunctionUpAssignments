import styles from './scrollbar.module.css'

export default function Scrollbar ({data}) {

    return (
       
           <div className={styles.card}>
           <img src={data.img} className={styles.img} />
           <h4 className={styles.name}>{data.name}</h4>
           <p className={styles.post}>{data.post}</p>
           <p className={styles.exp}>{data.exp}</p> 
           </div>

    )
}
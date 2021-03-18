import styles from '../styles/components/SectionDownload.module.css'

export function SectionDownload(){
    return(
        <div className={styles.container}>
            <div className={styles.textZone}>
                <h2 className={styles.title}>Download the app now.</h2>
                <h4 className={styles.subtitle}>Available on your favorite store. Start your premium experience now</h4>
            </div>
            <div className={styles.btnZone}>
                <button>
                    Playstore
                </button>
                <button>
                    App store
                </button>
            </div>    
        </div>
    )
}
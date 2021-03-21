import styles from '../styles/components/Banner.module.css'

export function Banner(){
    return(
        <div className={styles.container}>
            <div className={styles.banner}>
                <div className={styles.areaTexto}>
                    <p className={styles.foodApp}>Food app</p>
                    <p className={styles.hungry}> Why stay hungry when <br/>
                        you can order form Bella Onojie
                    </p>
                    <p className={styles.Download}>
                        Download the bella onoje’s food app now on
                    </p>
                </div>

                <div className={styles.button}>
                    <button
                        type= 'button'
                        className={styles.playStore}
                    >

                        Playstore

                    </button>

                    <button
                        type= 'button'
                        className={styles.appStore}
                    >

                        App store

                    </button>
                       

                </div>
            </div>
            <img src="./double-mob.png" alt="double mobile"/>
        </div>
    )
}
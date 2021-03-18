import styles from '../styles/components/SectionMob.module.css'

export function SectionMob(props){
    let alinhar = 0;
    if(props.value.container === 'row-reverse'){
        alinhar = 17;
    }
    return(
        <div style={{flexDirection: props.value.container, marginLeft: `${alinhar}%`}} className={styles.container}>
            
            <img src={props.value.img} alt="mob"/>

            <div className={styles.textZone}>

                <span>{props.value.name}</span>
                <p className={styles.textTitle}>{props.value.textTitle}</p>
                <p className={styles.textSubTitle}>{props.value.textSubTitle}</p>

            </div>
        </div>
    )
}
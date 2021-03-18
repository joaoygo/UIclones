import { GrTwitter, GrFacebook, GrInstagram } from 'react-icons/gr'
import styles from '../styles/components/Footer.module.css'
export function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="./logo-navbar.png" alt="logo"/>
            </div>
            <div className={styles.social}>   
                <ul>
                    <li> <GrTwitter size={30} color={'#fa4a0c'} /> </li>
                    <li> <GrFacebook size={30} color={'#fa4a0c'} /> </li>
                    <li> <GrInstagram size={30} color={'#fa4a0c'} /> </li>
                </ul>
            </div>
            <p> Copywright 2020 Bella Onojie.com </p>
        </div>
    )
}
import styles from '../styles/components/Header.module.css'

export function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="./logo-navbar.png" alt="logo" />
            </div>

            <div className={styles.navbar}>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Faq</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
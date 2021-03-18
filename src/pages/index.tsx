import { Header } from "../components/Header";
import styles from '../styles/pages/Home.module.css'
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { SectionMob } from "../components/SectionMob";
import { SectionDownload } from "../components/SectionDownload";

export default function Home() {
  const valueSectionCreate = {
    name:  'Create an account', 
    textTitle: 'Create/login to an existing account to get started',
    textSubTitle: 'An account is created with your email and a desired password',
    container: 'row',
    img: './createAcc.png'
  }
  const valueSectionExplore = {
    name:  'Explore varieties', 
    textTitle: 'Shop for your favorites meal as e dey hot.',
    textSubTitle: 'Shop for your favorite meals or drinks and enjoy while doing it.',
    container: 'row-reverse',
    img: './explore.png'
  }
  const valueSectionCheckout = {
    name:  'Checkout', 
    textTitle: 'When you done check out and get it delivered.',
    textSubTitle: 'When you done check out and get it delivered with ease.',
    container: 'row',
    img: './checkout.png'
  }
  

  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <hr />
      <p>How the app works</p>
      <SectionMob value = {valueSectionCreate} />
      <SectionMob value = {valueSectionExplore} />
      <SectionMob value = {valueSectionCheckout} />
      <SectionDownload />
      <Footer />
    </div>
  )
  }

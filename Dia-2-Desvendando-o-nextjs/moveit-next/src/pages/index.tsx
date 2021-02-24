import { ExperienceBar } from "../components/ExperienceBar";
import Head from 'next/head'
import { Profile } from "../components/Perfil";
import styles from '../styles/components/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <ExperienceBar></ExperienceBar>

      <section>
        <div>
          <Profile />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}

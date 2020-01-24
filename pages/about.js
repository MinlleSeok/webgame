import { useState } from "react"
import styles from './index.module.css';
import { useRouter } from 'next/router';

function AboutPage() {
    const router = useRouter();

    return <div className={styles.about}>
        <h1 className={styles.head}>게임을 시작하지</h1>
        <h1 className={styles.head}>{router.query.name}</h1>
    </div>
  }
  
  export default AboutPage
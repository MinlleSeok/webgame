import { useState } from "react"
import styles from './index.module.css';
import Router from 'next/router';

function HomePage() {
    const [state, setState] = useState();
    const action = (e) => {
        e.preventDefault();

        Router.push({
            pathname: '/about',
            query: { name: state },
          });
    }
    return <div className={styles.home}>
        <form onSubmit={action}>
        <label>당신의 별명을 입력하새오</label>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
        <input type="submit" />
        </form>
    </div>
  }
  
  export default HomePage
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from 'pelte-counter';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      
      </Head>

      <main className={styles.main}>
      <my-counter  /> 
      </main>

      <footer className={styles.footer}>

          Powered by{' '}
    
      </footer>
    </div>
  );
}

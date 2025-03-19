import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <img src="https://blog-media.byjusfutureschool.com/bfs-blog/2022/07/04061815/Article-Page-3-1.jpg" alt="Bugless Battle"></img>
        <button>Login</button>
        <button>Register</button>
      </header>
      <div className={styles.title}>
        <h1>Bugless Battle</h1>
        <h3>Bugs happen... but not here</h3>
      </div>
      <button>Get Started</button>
    </>
  );
}

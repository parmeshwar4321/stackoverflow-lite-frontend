import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";
export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <NavBar />
      <SideBar/>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Welcome to <Link href="/">Stack Overflow</Link>
        </h1>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          <p className={styles.title}>Top Questions</p>
          <div>
            {" "}
            <button
              className={styles.btn}
              onClick={() => {
                router.push({
                  pathname: "/questions/ask",
                });
              }}
            >
              Ask Question
            </button>
          </div>
        </div>

        <div>
          <div> question1 </div>
          <div> question2 </div>
          <div> question3 </div>
          <div> question4 </div>
          <div> question5 </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

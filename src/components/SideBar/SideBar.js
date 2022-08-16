import Link from "next/link";
import Image from "next/image";
import profile from "../../assets/profile.svg";
import { useRouter } from "next/router";
import styles from "../../../styles/side.module.css";
const SideBar = () => {
  const router = useRouter();

  const { userId } = router.query;
  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <Link href="/"> Home </Link>{" "}
      </div>
      <div className={styles.title}>
        <Link href="/questions"> Questions </Link>{" "}
      </div>

      <div className={styles.title}>
        <Link href="/tags"> Tags </Link>{" "}
      </div>
      <div className={styles.title}>
        <Link href="/users"> Users </Link>{" "}
      </div>
      <div className={styles.title}>
        <Link href="/companies"> Companies </Link>{" "}
      </div>
    </div>
  );
};

export default SideBar;

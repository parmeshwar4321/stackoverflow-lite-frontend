import Link from "next/link";
import Image from "next/image";
import profile from "../../assets/profile.svg";
import { useRouter } from "next/router";
import styles from "../../../styles/nav.module.css";
const LargeScreen = () => {
  const router = useRouter();

  const userId = "62fb39e85e3fc62e4e7d1421";
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <Link href="/"> Stack Overflow </Link>{" "}
      </div>

      <div className={styles.title}>
        <Image src={profile} alt="profile" width={72} height={16} />
        <Link href={{ pathname: `/users/${userId}` }}>Profile</Link>
      </div>
    </nav>
  );
};

export default LargeScreen;

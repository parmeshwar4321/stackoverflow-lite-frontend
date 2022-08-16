import Link from "next/link";
import NavBar from "../../src/components/NavBar/NavBar";
import SideBar from "../../src/components/SideBar/SideBar";

export default function User() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <h1>user Profile</h1>
      <span>
        <Link href={{ pathname: `login` }}>log out</Link>
      </span>
    </div>
  );
}

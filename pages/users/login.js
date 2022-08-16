import styles from "../../styles/login.module.css";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    const config = {
      method: "post",
      url: "http://localhost:2021/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          router.push("/");
        }
      })
      .catch(function (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      });
  };

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch("/");
  }, []);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        <button
          onClick={() => {
            router.push({
              pathname: "login",
            });
          }}
        >
          Log in
        </button>
        <button
          onClick={() => {
            router.push({
              pathname: "signup",
            });
          }}
        >
          Sign up
        </button>
      </div>
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Login to Your Account</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.green_btn}>
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

import style from "./css/login.module.css";

export default function Login() {
  return (
    <div className={style.wrapper}>
      <main className={style.login_section}>
        <section className={style.form_container}>
          <form action="">
            <article className={style.email_input_wrapper}>
              <div className={style.user_icon_container}>
                {/* <img src="" alt="" />*/}
              </div>
              <div className={style.user_input_container}>
                <input type="email" placeholder="username or email" />
              </div>
            </article>
            <article className={style.password_input_container}>
              <div className={style.key_icon_container}>
                {/* <img src="" alt="" />*/}
              </div>
              <div className={style.password_input_container}>
                <input type="password" placeholder="password" />
              </div>
              <div className={style.eye_icon_container}>
                {/* <img src="" alt="" />*/}
              </div>
            </article>

            <label>
              <input type="checkbox" />
              <p>Remember me</p>
            </label>
            <button>Login</button>
          </form>
          <div className={style.asking_user}>
            <a>Register now</a>
            <a>Forgot password?</a>
          </div>
        </section>

        <section className={style.divider}>
          <div className={style.divider_left_line}></div>
          <div className={style.divider_between}>
            <p>or</p>
          </div>
          <div className={style.divider_right_line}></div>
        </section>

        <section className={style.alternative_login_methods}>
          <div className={style.facebook_method}></div>
          <div className={style.twitter_method}></div>
          <div className={style.google_method}></div>
        </section>
      </main>
      <section className={style.hero_image_section}>
        {/* bkg image*/}
      </section>
    </div>
  );
}

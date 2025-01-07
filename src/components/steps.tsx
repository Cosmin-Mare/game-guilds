import styles from "./steps.module.css"
export default function Steps() {
  return (
    <div className={styles.steps}>
      <h2 className={styles.stepsTitle}>How does it work?</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.stepCard}>
            <div className={styles.stepHeadingContainer}>
                <p className={styles.stepNumber}>1</p>
                <h3 className={styles.stepHeading}>
                    Make a Game!
                </h3>
            </div>
            <p className={styles.stepBody}>
                Unity is one of the best platforms to start your game dev journey, 
                because it is pretty versitile and doesn't have a very steep learning curve. Even if you're a 
                complete beginner, like I was 1 month before making <a href="#">this awesome beginner-friendly jam</a>, 
                you can still make a playable game in less than 1 hour! You can also build a team and work on games together!
            </p>
        </div>
        <div className={styles.stepCard}>
        <div className={styles.stepHeadingContainer}>
                <p className={styles.stepNumber}>2</p>
                <h3 className={styles.stepHeading}>
                    Upload to Github and Itch!
                </h3>
            </div>
            <p className={styles.stepBody}>
                You have to open source your game on Github, as well as upload it on Itch so people can play it! See <a href="#">this tutorial</a> for how to do that
            </p>
        </div>
        <div className={styles.stepCard}>
            <div className={styles.stepHeadingContainer}>
                <p className={styles.stepNumber}>3</p>
                <h3 className={styles.stepHeading}>
                    Get Your Grant!
                </h3>
            </div>
            <p className={styles.stepBody} style={{marginBottom: "1rem"}}>
                After open sourcing your project and uploading it on Itch, complete <a href="#">this form</a> to
                get your grant through <a href="#">HCB</a> to improve your game and publish it on major platforms!<sup><a href="#">*</a></sup>
            </p>
        </div>
        <div className={styles.infiniteContainer}>
        <svg viewBox="0 0 55 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.8446 5.76254C27.6728 5.76254 23.501 5.76254 19.3293 5.76254C16.0927 5.76254 11.0183 6.51206 9.31703 9.48932C7.60521 12.485 6.31335 15.4691 6.31335 19.0288C6.31335 22.2407 8.81641 24.8192 8.81641 27.7895" stroke="#997C70" stroke-width="3" stroke-linecap="round"/>
            <path d="M12.8213 25.787C12.9455 26.9051 17.1958 35.0785 15.3244 35.2986C10.8678 35.8229 4.89109 36.406 1.80785 32.295" stroke="#997C70" stroke-width="3" stroke-linecap="round"/>
            <path d="M24.3354 33.2962C24.5834 35.2807 36.8488 34.2974 38.3247 34.2974C40.7299 34.2974 43.1975 33.2086 45.3611 32.1837C47.6497 31.0996 48.4765 29.4369 50.3394 28.0398C51.7069 27.0141 52.8703 23.1465 52.8703 21.5318C52.8703 20.5472 53.2674 18.582 52.6199 17.805C52.0785 17.1553 50.9157 16.1355 50.8678 15.2742C50.6771 11.8423 46.0481 7.76498 42.858 7.76498" stroke="#997C70" stroke-width="3" stroke-linecap="round"/>
            <path d="M42.858 2.25826C41.3295 2.4111 39.843 4.0066 38.6306 4.87256C37.0567 5.9968 34.8266 6.9704 33.6245 8.5159C32.6178 9.81025 39.5015 14.3222 40.8556 14.7736" stroke="#997C70" stroke-width="3" stroke-linecap="round"/>
            <path d="M25.9581 22.0015C24.9123 22.0015 24.0359 22.5099 22.9922 22.5099C21.7818 22.5099 20.6838 22.5237 19.5178 22.2086C16.403 21.3668 15.4503 17.6095 15.4503 14.7985C15.4503 14.1606 17.0775 13.2188 17.6535 13.1885C18.9369 13.1209 20.031 13.3127 21.2126 13.7722C22.3432 14.2119 23.588 14.8251 24.4892 15.693C25.2342 16.4104 25.5404 18.1847 25.8263 19.1203C26.7384 22.1055 31.0164 24.4763 33.9801 24.5437C35.2613 24.5728 36.4965 23.7329 37.2944 22.7641C38.2814 21.5657 38.1606 20.2933 38.1606 18.7907C38.1606 16.8306 34.7344 15.7035 33.0857 15.9096C31.8708 16.0614 30.4378 16.9284 29.3477 17.4632C27.8001 18.2223 27.023 19.4719 26.1276 20.8151" stroke="#997C70" stroke-width="3" stroke-linecap="round"/>
            <path d="M45.1015 16.5377C44.9517 16.5939 44.9618 17.7439 44.95 17.9443C44.9147 18.5459 44.9675 19.1339 44.8678 19.7318" stroke="#997C70" stroke-linecap="round"/>
            <path d="M43.3097 18.4074C43.94 18.3832 44.5547 18.1436 45.1794 18.0568C45.9854 17.9449 46.7825 17.94 47.5945 17.94" stroke="#997C70" stroke-linecap="round"/>
            <path d="M47.205 16.8493C46.2088 17.1639 45.0323 17.8671 44.2013 18.5026C43.8329 18.7843 43.8399 19.5057 43.3876 19.7318" stroke="#997C70" stroke-linecap="round"/>
            <path d="M43.7771 16.8493C44.4413 17.7102 45.288 18.516 46.0364 19.2644" stroke="#997C70" stroke-linecap="round"/>
        </svg>
        </div>
        <div className={styles.stepCard}>
            <div className={styles.stepHeadingContainer}>
                <p className={styles.stepNumber}>4</p>
                <h3 className={styles.stepHeading}>
                    Improve your game and get another grant!
                </h3>
            </div>
            <p className={styles.stepBody}>
                After your first itteration, you will receive a grant to improve it. Then you can update it on Github and Itch
                and submit the form again, with the new game! <a href="#">Here</a> are the requirements for upgrading games. <br/>
                (p.s. you'll find that having a team is especially useful for this step)
            </p>
        </div>
      </div>
    </div>
  );
}
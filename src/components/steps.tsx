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
                you can set up a 3d environment with a prebuilt Unity character controller in
                under an hour and then customize your game from there! You can also build a team and work on games together!
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
        <div className={styles.repeatableCards}>
            <div className={styles.stepCard}>
                <div className={styles.stepHeadingContainer}>
                    <p className={styles.stepNumber}>3</p>
                    <h3 className={styles.stepHeading}>
                        Get Your Grant!
                    </h3>
                </div>
                <p className={styles.stepBody}>
                    After open sourcing your project and uploading it on Itch, complete <a href="#">this form</a> to
                    get your grant through <a href="#">HCB</a> to improve your game and publish it on major platforms!<sup><a href="#">*</a></sup>
                </p>
            </div>
            <div>
                <img src="/infinite.svg"></img>
            </div>
            <div className={styles.stepCard}>
                <div className={styles.stepHeadingContainer}>
                    <h3 className={styles.stepHeading}>
                        Improve your game!
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
    </div>
  );
}

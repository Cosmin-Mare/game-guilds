import styles from "./flag.module.css"

export default function Flag(){
    return (
        <a href="https://hackclub.com" className={styles.hcLogo}>
            <img src="/flag-orpheus-top.svg" alt="hackclub"/>
        </a>
    )
}


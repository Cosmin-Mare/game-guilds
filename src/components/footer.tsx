import styles from "./footer.module.css"

export default function Footer(){
    return (
        <div className={styles.footer}>
            <p>©{new Date().getFullYear()} <a href="https://hackclub.com">Hack Club</a></p>
            <p>Made with ♡ by @<a href="https://github.com/Cosmin-Mare">Cosmin-Mare</a>, @<a href="https://github.com/EerierGosling">Eeriergosling</a></p>
        </div>
    )
}
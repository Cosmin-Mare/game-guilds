"use client"
import styles from "./submit.module.css"

export default function SubmitButton(){
    return(
        <div className={styles.submitButtonContainer}>
            <button className={styles.submitButton} onClick={() => window.location.assign("https://airtable.com/appHyfZjPXrRXxVGl/pagm3aJtiGwB7NfJl/form")}>Submit your game!</button>
        </div>
    )
}


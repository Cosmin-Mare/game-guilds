"use client";

import { useState } from "react";
import styles from "./heading.module.css";

export default function Header() {
    const [email, setEmail] = useState("");
    const [feedbackMessage, setFeedbackMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevents the default form submission behavior
        // Process the form data here
        setFeedbackMessage(`Thank you for RSVPing, ${email}!`);
    };

    return (
        <div className={styles.header}>
            <div className={styles.headingContainer}>
                <img src="/wooden_sword_title.png" className={styles.woodenSword}></img>
                <img src="/logo.svg" className={styles.logo}/>
            </div>
            <h2>Build Unity games with your friends</h2>
            <h2>Receive grants to improve and publish them</h2>
            <section id="rsvp" className={styles.rsvp}>
                <h2>RSVP here for future updates!</h2>
                <form id="notifyForm" onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter your email address" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">RSVP</button>
                </form>
                <p id="feedbackMessage">{feedbackMessage}</p>
            </section>
            <div className={styles.buttonContainer}>
                <button>Get your grant!</button>
                <button>How to make a game?</button>
            </div>
        </div>
    );
}

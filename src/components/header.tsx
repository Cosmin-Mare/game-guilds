"use client";
import { useRef, useState } from "react";
import styles from "./header.module.css";
import Explosion from "react-canvas-confetti/dist/presets/explosion";
import { TConductorInstance, TDecorateOptionsFn } from "react-canvas-confetti/dist/types";


export default function Header() {
    const [email, setEmail] = useState("");
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const feedbackMessageRef = useRef<HTMLInputElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const controller = useRef<TConductorInstance>(null);

    const onInitHandler = ({ conductor }: { conductor: TConductorInstance }) => {
        controller.current = conductor;
      };
    
    const onShoot = () => {
        if(!controller.current) return;
        console.log(controller.current)
        controller.current.shoot();
    };

    function animateFeedbackMessage() {
        if(!feedbackMessageRef.current) return
        feedbackMessageRef.current.style.transform = "translate(0, 0)";
    }

    const decorateOptions : TDecorateOptionsFn = () => {
        return {
            particleCount: 100,
            angle: 90,
            spread: 180,
            decay: .92,
            gravity: 2.2,
            drift: 0,
            ticks: 600,
            origin: {x: .5, y: .7}
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (isSubmitting) {
            return;
        }
        setIsSubmitting(true);
        event.preventDefault();
        onShoot();
        fetch("/api/rsvp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => {
                if (response.ok) {
                    setFeedbackMessage("Thanks for RSVPing!");
                    animateFeedbackMessage()
                    setEmail("");
                    setIsSubmitting(false);
                } else {
                    setFeedbackMessage("Something went wrong. Please try again.");
                    animateFeedbackMessage()
                    setIsSubmitting(false);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setFeedbackMessage("Something went wrong. Please try again.");
                animateFeedbackMessage()
                setIsSubmitting(false);
            });
    };

    return (
        <div className={styles.header}>
            <div className={styles.headingContainer}>
                <img src="/wooden_sword_title.png" className={styles.woodenSword} alt="Wooden sword"/>
                <img src="/logo.svg" className={styles.logo} alt="GameGuilds logo"/>
            </div>
            <h2>Build Unity games with your friends</h2>
            <h2>Receive grants to improve and publish them</h2>
            <section id="rsvp" className={styles.rsvp}>
                <h2>RSVP here for future updates!</h2>
                <div className={styles.formContainer}>
                    <form id="notifyForm" onSubmit={handleSubmit}>
                        <input 
                            type="email"
                            name="email"
                            placeholder="orpheus@hackclub.com" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Explosion width={100} height={100} onInit={onInitHandler} decorateOptions={decorateOptions}/>
                        <button type="submit">RSVP</button>
                    </form>
                    <div className={styles.feedbackMessageContainer}>
                        <p id="feedbackMessage" className={styles.feedbackMessage} ref={feedbackMessageRef}>{feedbackMessage}</p>
                    </div>
                </div>
            </section>
            <div className={styles.buttonContainer}>
                <button>Get your grant!</button>
                <button>How to make a game?</button>
            </div>
        </div>
    );
}

import styles from "./contact.module.css";

const ContactForm = () => {
    return(
        <main>
            <div className={styles.container}>
                <h1>Get In Touch</h1>
                <p>Enter your message below or email me directly: <a href="mailto:zargarian.arne@gmail.com">zargarian.arne@gmail.com</a></p>
                <form>
                    <div className={styles.input}>
                        <input type="text" id="name" name="name" placeholder="Name" required/>
                    </div>
                    <div className={styles.input}>
                        <input type="email" id="email" name="email" placeholder="Email" required/>
                    </div>
                    <div className={styles.input}>
                        <textarea id="message" name="message" placeholder="Message" required/>
                    </div>
                    <div className={styles.button}>
                        <button type="submit">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default ContactForm;
'use client'
import styles from "./contact.module.css";
import { useState } from "react";

const ContactForm = () => {

    const [formData,setFormData] = useState<any>({
        name:'',
        email:'',
        message:''
    });
    const [loading,setLoading] = useState<boolean>(false)

    const handleChange = (e:any) =>{
        const { name, value } = e.target;
        setFormData((prevFormData:any) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
    
    const handleSubmit = async(e:any) => {
        e.preventDefault();
        setLoading(true);
        await fetch("/api/contact",{
            method:"POST",
            mode:"cors",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        }).then(()=>{
            alert("Message sent successfully!");
        }).catch((error)=>{
            console.log(error);
        });
        setLoading(false);
    }

    return(
        <main>
            <div className={styles.container}>
                <h1>Get In Touch</h1>
                <p>Enter your message below or email me directly: <a href="mailto:zargarian.arne@gmail.com">zargarian.arne@gmail.com</a></p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.input}>
                        <input value={formData.name} onChange={handleChange} type="text" id="name" name="name" placeholder="Name" required/>
                    </div>
                    <div className={styles.input}>
                        <input value={formData.email} onChange={handleChange} type="email" id="email" name="email" placeholder="Email" required/>
                    </div>
                    <div className={styles.input}>
                        <textarea value={formData.message} onChange={handleChange} id="message" name="message" placeholder="Message" required/>
                    </div>
                    <div className={styles.button}>
                        <button type="submit">{loading?"SENDING...":"SEND MESSAGE"}</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default ContactForm;
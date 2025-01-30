'use client';
import React, { useState } from "react";
import { db } from "../firebase/firebaseconfig";
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = ({ setSuccess }) => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const validatePhone = (phone) => {
        const re = /^\d{10}$/;
        return re.test(String(phone).toLowerCase());
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = {};

        if (!name) {
            errors.name = "Name is required";
        }
        if (!lastName) {
            errors.lastName = "Last name is required";
        }
        if (!phone) {
            errors.phone = "Phone is required";
        } else if (!validatePhone(phone)) {
            errors.phone = "Invalid phone number";
        }

        if (!email) {
            errors.email = "Email is required";
        } else if (!validateEmail(email)) {
            errors.email = "Invalid email address";
        }
        if (!message) {
            errors.message = "Message is required";
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const dataToSend = {
                    name,
                    lastName,
                    phone,
                    email,
                    message,
                }
          
                await addDoc(collection(db, 'contacts'), dataToSend);
                setSuccess(true);
                setName("");
                setLastName("");
                setPhone("");
                setEmail("");
                setMessage("");
            } catch (error) {
                console.error('Error al enviar formulario:', error);
                alert('Hubo un error al enviar el formulario. Detalles: ' + error.message);
            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-2">
                <p>Name:</p>
                <input
                    className={`input has-background-white ${errors.name ? 'is-danger' : 'is-primary'} has-text-black`}
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="help is-danger">{errors.name}</p>}
            </div>
            <div className="mt-2">
                <p>last name:</p>
                <input
                    className={`input has-background-white ${errors.lastName ? 'is-danger' : 'is-primary'} has-text-black`}
                    type="text"
                    placeholder="last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastName && <p className="help is-danger">{errors.lastName}</p>}
            </div>
            <div>
                <p>Phone:</p>
                <input
                    className={`input has-background-white ${errors.phone ? 'is-danger' : 'is-primary'} has-text-black`}
                    type="text"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            {errors.phone && <p className="help is-danger">{errors.phone}</p>}
            <div className="mt-2">
                <p>Email:</p>
                <input
                    className={`input has-background-white ${errors.email ? 'is-danger' : 'is-primary'} has-text-black`}
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="help is-danger">{errors.email}</p>}
            </div>
            <div>
                <p>Message:</p>
                <textarea
                    className={`textarea has-background-white ${errors.message ? 'is-danger' : 'is-primary'} has-text-black`}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && <p className="help is-danger">{errors.message}</p>}
            </div>
            <div className="der">
                <button className="button has-text-white is-primary mt-2 is-rounded pl-6 pr-6" type="submit">Send</button>
            </div>
        </form>
    );
};

export default ContactForm;
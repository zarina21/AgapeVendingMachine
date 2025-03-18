'use client';
import React, { useState } from "react";
import { db } from "../firebase/firebaseconfig";
import { collection, addDoc } from 'firebase/firestore';
import { sendMail } from "../utils/mail";

const ContactForm = ({ setSuccess }) => {
    const [form, setForm] = useState({
      name: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
   
    const onChangeForm = (key, value) => {
      setForm({
        ...form,
        [key]: value,
      });
    };
    
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

        if (!form.name) {
            errors.name = "Name is required";
        }
        if (!form.lastName) {
            errors.lastName = "Last name is required";
        }
        if (!form.phone) {
            errors.phone = "Phone is required";
        } else if (!validatePhone(phone)) {
            errors.phone = "Invalid phone number";
        }

        if (!form.email) {
            errors.email = "Email is required";
        } else if (!validateEmail(email)) {
            errors.email = "Invalid email address";
        }
        if (!form.message) {
            errors.message = "Message is required";
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const dataToSend = {
                  name: form.name,
                  lastName: form.lastName,
                  phone: form.phone,
                  email: form.email,
                  message: form.message,
                }
          
                await addDoc(collection(db, 'contacts'), dataToSend);
                sendMail(form);
                setForm({
                  name: '',
                  lastName: '',
                  phone: '',
                  email: '',
                  message: ''
                })
                setSuccess(true);
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
                    value={form.name}
                    onChange={(e) => onChangeForm('name', e.target.value)}
                />
                {errors.name && <p className="help is-danger">{errors.name}</p>}
            </div>
            <div className="mt-2">
                <p>last name:</p>
                <input
                    className={`input has-background-white ${errors.lastName ? 'is-danger' : 'is-primary'} has-text-black`}
                    type="text"
                    placeholder="last name"
                    value={form.lastName}
                    onChange={(e) => onChangeForm('lastName', e.target.value)}
                />
                {errors.lastName && <p className="help is-danger">{errors.lastName}</p>}
            </div>
            <div>
                <p>Phone:</p>
                <input
                    className={`input has-background-white ${errors.phone ? 'is-danger' : 'is-primary'} has-text-black`}
                    type="text"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => onChangeForm('phone', e.target.value)}
                />
            </div>
            {errors.phone && <p className="help is-danger">{errors.phone}</p>}
            <div className="mt-2">
                <p>Email:</p>
                <input
                    className={`input has-background-white ${errors.email ? 'is-danger' : 'is-primary'} has-text-black`}
                    type="email"
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={(e) => onChangeForm('email', e.target.value)}
                />
                {errors.email && <p className="help is-danger">{errors.email}</p>}
            </div>
            <div>
                <p>Message:</p>
                <textarea
                    className={`textarea has-background-white ${errors.message ? 'is-danger' : 'is-primary'} has-text-black`}
                    placeholder="Message"
                    value={form.message}
                    onChange={(e) => onChangeForm('message', e.target.value)}
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

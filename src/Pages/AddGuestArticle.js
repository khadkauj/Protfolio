import React, { useState } from "react";
import { database } from "../firebase";
import firebase from "firebase";

import "./AddGuestArticle.css";
const AddGuestArticle = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [title, settitle] = useState("");
    const [textArticle, settextArticle] = useState("");
    const sendToFirebase = (e) => {
        e.preventDefault();
        console.log(name, email);
        database.collection("Articles").add({
            articleTitle: title,
            articleText: textArticle,
            date: new Date(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };
    return (
        <div>
            <form className="form" onSubmit={sendToFirebase}>
                <input
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    className="form_textarea "
                    type="text"
                    required
                    autoFocus
                    placeholder="Name"
                />
                <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="form_textarea "
                    label="Email"
                    type="email"
                    required
                    placeholder="Email"
                />
                <input
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    className="form_textarea "
                    label="Title"
                    type="text"
                    required
                    placeholder="Article Title"
                />
                <textarea
                    value={textArticle}
                    onChange={(e) => settextArticle(e.target.value)}
                    className="form_textarea text"
                    rows="15"
                    type="text"
                    required
                    placeholder="Put down your story here..."
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddGuestArticle;

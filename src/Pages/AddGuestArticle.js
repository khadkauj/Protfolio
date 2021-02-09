import React, { useState } from "react";
import { database } from "../firebase";
import firebase from "firebase";

import "./AddGuestArticle.css";
import { useHistory } from "react-router-dom";
const AddGuestArticle = () => {
	const history = useHistory();
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [title, settitle] = useState("");
	const [textArticle, settextArticle] = useState("");
	const sendToFirebase = async (e) => {
		e.preventDefault();
		// console.log(name, email);
		await database.collection("Articles").add({
			name: name,
			email: email,
			articleTitle: title,
			articleText: textArticle,
			date: new Date(),
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		history.push("/Protfolio/Blogs");
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

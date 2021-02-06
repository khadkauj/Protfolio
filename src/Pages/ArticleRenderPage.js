import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase";
import { FacebookProvider, Like, ShareButton, Profile } from "react-facebook";

import "./ArticleRenderPage.css";
const ArticleRenderPage = () => {
    const [Article, setArticle] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        database.doc(`/Articles/${id}`).onSnapshot((snapshot) => setArticle(snapshot.data()));
    }, [id]);
    console.log("Article is :", Article);
    return (
        <div className="article">
            <div>
                {/* <FacebookProvider appId="1268503136884162" className="fb">
                    <Like href="http://www.facebook.com" colorScheme="dark" showFaces share>
                        Like
                    </Like>
                    <ShareButton href="http://www.facebook.com">Share</ShareButton>
                    <Profile>
                        {({ loading, profile }) => (
                            <div>
                                {profile?.picture}
                                {profile?.name}
                            </div>
                        )}
                    </Profile>
                </FacebookProvider> */}

                <span className="article_span">
                    Published on: {new Date(Article?.date?.toDate()).toUTCString().slice(0, 50)} By:
                    <strong className="article_span_strong">{Article?.name}</strong>
                </span>
                <h4 className="article__title">{Article?.articleTitle}</h4>
                <img src={`https://source.unsplash.com/collection/8806655/640*480`} alt="" className="article__image" />

                <p className="article__text">{Article?.articleText}</p>
            </div>
        </div>
    );
};

export default ArticleRenderPage;

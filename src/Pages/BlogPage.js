import React, { useEffect, useState } from "react";
import { Button, Card, CardActionArea, Grid } from "@material-ui/core";

import "./BlogPage.css";
import { Link, NavLink } from "react-router-dom";
import { database } from "../firebase";
const BlogPage = () => {
	const [Article, setArticle] = useState([]);

	useEffect(() => {
		database.collection("Articles").onSnapshot((snapshot) =>
			setArticle(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					key: doc.id,
					data: doc.data(),
				}))
			)
		);
	}, []);

	// console.log("Article", Article);
	return (
		<Grid container className="__blog">
			<Grid item xs={12} className="grid__header">
				<div>
					<h4>Blog Posts</h4>
					<hr className="hr" />
				</div>
				<Button size={"small"} variant="contained" className="guest__article">
					<NavLink to="/Protfolio/GuestArticle" className="navlink">
						Guest Article
					</NavLink>
				</Button>
			</Grid>
			<Grid container className="Blogs__grid" spacing={4}>
				{Article?.map((a_Article, i) => (
					<Grid key={a_Article?.id} item xs={12} sm={6} md={4} lg={4}>
						<Link to={`/Protfolio/Blogs/Guests/${a_Article?.id}`} className="A">
							<Card className="card">
								<CardActionArea>
									<figure>
										<img
											src={"https://source.unsplash.com/collection/8806655/800*600" + i}
											alt=""
											className="blog_grid_figure"
										/>
										<figcaption className="figure__caption">
											<span className="span__1">{a_Article?.data?.articleTitle}</span>
											<br />
											<span className="span__2">
												{a_Article?.data?.articleText?.slice(0, 20)}...
											</span>
										</figcaption>
									</figure>
								</CardActionArea>
								{/* <CardActions></CardActions> */}
							</Card>
						</Link>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};

export default BlogPage;

// You can place this code below and create an appropritae blog json or object file
// and use it to server blog post instead of using firebase
// {
//     Blogs?.map((blog, i) => (
//         <Grid key={i} item xs={12} sm={6} md={4} lg={4}>
//             <Card className="card">
//                 <CardActionArea>
//                     <figure>
//                         <img src={blog?.image + i + i} alt="" className="blog_grid_figure" />
//                         <figcaption className="figure__caption">
//                             <span className="span__1">{blog?.title}</span>
//                             <br />
//                             <span className="span__2"> {blog.description.slice(0, 20)}...</span>
//                         </figcaption>
//                     </figure>
//                 </CardActionArea>
//                 {/* <CardActions></CardActions> */}
//             </Card>
//         </Grid>
//     ));
// }

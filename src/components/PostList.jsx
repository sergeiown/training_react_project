import React from 'react';
import Post from "./Post";
import Counter from "./Counter";
import Clicker from "./Clicker";

const PostList = ({posts, title}) => {
	return (
		<div>
			<h1 style={{textAlign: "center"}}>
				{title}
			</h1>
			{posts.map(post => <Post post={post} key={post.id}></Post>)}
			
			<Counter></Counter>
			
			<Clicker></Clicker>
		</div>
	);
};

export default PostList;
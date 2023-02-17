import React, {useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: "Javascript ES5", body: "Description"},
		{id: 2, title: "Javascript ES6", body: "Description"},
		{id: 3, title: "Javascript ES7", body: "Description"},
	]);
	
	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	};
	
	return (
		
		<div className="App">
			
			<PostForm create={createPost}></PostForm>
			<PostList posts={posts} title={"Посты про JS"}></PostList>
		
		</div>
	
	);
}

export default App;

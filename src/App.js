import React, {useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: "Javascript ES5", body: "Description"},
		{id: 2, title: "Javascript ES6", body: "Description"},
		{id: 3, title: "Javascript ES7", body: "Description"}
	]);
	
	return (
		<div className="App">
			<PostList posts={posts} title={"Список постов 1"}></PostList>
		</div>
	);
}

export default App;

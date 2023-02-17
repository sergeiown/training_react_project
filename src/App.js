import React, {useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: "Javascript ES5", body: "Description"},
		{id: 2, title: "Javascript ES6", body: "Description"},
		{id: 3, title: "Javascript ES7", body: "Description"}
	]);
	
	return (
		<div className="App">
			<form>
				<input type="text" placeholder="название поста"/>
				<input type="text" placeholder="описание поста"/>
				<MyButton>Создать пост</MyButton>
			</form>
			<PostList posts={posts} title={"Посты про JS"}></PostList>
		</div>
	);
}

export default App;

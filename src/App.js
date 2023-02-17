import React, {useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: "Javascript ES5", body: "Description"},
		{id: 2, title: "Javascript ES6", body: "Description"},
		{id: 3, title: "Javascript ES7", body: "Description"},
	]);
	
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	
	const addNewPost = (e) => {
		e.preventDefault();
		
		const newPost = {
			id: Date.now(),
			title,
			body
		};
		console.log(newPost);
		
		setPosts([...posts, newPost]);
	};
	
	return (
		<div className="App">
			<form>
				
				<MyInput
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					placeholder="название поста"
				/>
				
				<MyInput
					value={body}
					onChange={(e) => setBody(e.target.value)}
					type="text"
					placeholder="полное описание поста"
				/>
				
				<MyButton onClick={addNewPost}>Создать пост</MyButton>
			</form>
			<PostList posts={posts} title={"Посты про JS"}></PostList>
		</div>
	);
}

export default App;

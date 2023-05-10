import React, { useEffect, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';

function App() {
    const [posts, setPosts] = useState([
        { id: Date.now(), title: 'Javascript ES7', body: 'Description3' },
        { id: Date.now() + 1, title: 'Javascript ES6', body: 'Description2' },
        { id: Date.now() + 2, title: 'Javascript ES5', body: 'Description1' },
    ]);

    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [isPostsLoading, setIsPostsLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);

        //scroll to the post with maximum id
        const maxId = Math.max(...posts.map((p) => p.id));
        const element = document.getElementById(maxId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    async function fetchPosts() {
        setIsPostsLoading(true);
        setTimeout(async () => {
            const posts = await PostService.getAll();
            // console.table(response.data);
            setPosts(posts);
            setIsPostsLoading(false);
        }, 1000);
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Create Post
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />

            <PostFilter filter={filter} setFilter={setFilter} />

            {isPostsLoading ? (
                <Loader />
            ) : (
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List of posts:'} />
            )}
        </div>
    );
}

export default App;

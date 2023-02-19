import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Myselect from './components/UI/select/Myselect';
import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';

function App() {
    const [posts, setPosts] = useState([
        { id: Date.now(), title: 'Javascript ES7', body: 'Description3' },
        { id: Date.now() + 1, title: 'Javascript ES6', body: 'Description2' },
        { id: Date.now() + 2, title: 'Javascript ES5', body: 'Description1' },
    ]);

    const [filter, setFilter] = useState({ sort: '', query: '' });

    const sortedPosts = useMemo(() => {
        // console.log('Sorting has worked');

        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].toString().localeCompare(b[filter.sort].toString()));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <div className="App">
            <PostForm create={createPost} />

            <hr style={{ margin: '15px 0' }} />

            <PostFilter filter={filter} setFilter={setFilter} />

            {sortedAndSearchedPosts.length ? (
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'} />
            ) : (
                <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
            )}
        </div>
    );
}

export default App;

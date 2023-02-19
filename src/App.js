import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Myselect from './components/UI/select/Myselect';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript ES7', body: 'Description3' },
        { id: 2, title: 'Javascript ES6', body: 'Description2' },
        { id: 3, title: 'Javascript ES5', body: 'Description1' },
    ]);

    const [selectedSort, setSelectedSort] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    };

    return (
        <div className="App">
            <PostForm create={createPost}></PostForm>
            <hr style={{ margin: '15px 0' }}></hr>
            <div>
                <Myselect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка по"
                    options={[
                        { value: 'title', name: 'По названию' },
                        { value: 'body', name: 'По описанию' },
                    ]}
                />
            </div>

            {posts.length ? (
                <PostList remove={removePost} posts={posts} title={'Посты про JS'} />
            ) : (
                <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
            )}
        </div>
    );
}

export default App;

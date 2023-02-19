import React, { useMemo, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Myselect from './components/UI/select/Myselect';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        { id: Date.now(), title: 'Javascript ES7', body: 'Description3' },
        { id: Date.now() + 1, title: 'Javascript ES6', body: 'Description2' },
        { id: Date.now() + 2, title: 'Javascript ES5', body: 'Description1' },
    ]);

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(() => {
        // console.log('Sorting has worked');

        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].toString().localeCompare(b[selectedSort].toString()));
        }
        return posts;
    }, [selectedSort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [searchQuery, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    };

    return (
        <div className="App">
            <PostForm create={createPost} />

            <hr style={{ margin: '15px 0' }} />

            <div>
                <MyInput
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={'поиск...'}
                />

                <Myselect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка по"
                    options={[
                        { value: 'title', name: 'По названию' },
                        { value: 'body', name: 'По описанию' },
                        { value: 'id', name: 'От старых к новым' },
                    ]}
                />
            </div>

            {posts.length ? (
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'} />
            ) : (
                <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
            )}
        </div>
    );
}

export default App;

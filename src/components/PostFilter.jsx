import React from 'react';
import MyInput from './UI/input/MyInput';
import Myselect from './UI/select/Myselect';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
                placeholder="поиск..."
            />

            <Myselect
                value={filter.sort}
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Сортировка по"
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                    { value: 'id', name: 'От старых к новым' },
                ]}
            />
        </div>
    );
};

export default PostFilter;

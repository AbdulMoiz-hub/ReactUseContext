import React from 'react'
import { useTagAddContext, useTagsContext } from '../Context/TagsContext';

const Third = () => {
    const tags = useTagsContext();
    const tagAdd = useTagAddContext();

    const handleClick = () => {
        // setTags((tags) => [...tags, {
        //     id: tags.length + 1,
        //     name: 'Added'
        // }])
        tagAdd('Added');
    }
    return (
        <>
            <div>Third</div>

            {
                tags.map((tag) => <p style={{
                    color: 'GrayText',
                    fontWeight: 'bold'
                }} key={tag.id}>{tag.name}</p>)
            }

            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Third
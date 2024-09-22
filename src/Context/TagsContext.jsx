import React, { useContext, useState } from 'react'

export const TagsContext = React.createContext();
export const TagAddContext = React.createContext();

export function useTagsContext() {
    return useContext(TagsContext);
}

export function useTagAddContext() {
    return useContext(TagAddContext);
}

export function TagsProvider({ children }) {
    const [tags, setTags] = useState([]);

    const addNewTag = (tagName) => {
        let newTag = { id: tags.length + 1, name: tagName };
        setTags((tags) => [...tags, newTag]);
    }

    return (
        <TagsContext.Provider value={tags}>
            <TagAddContext.Provider value={addNewTag}>
                {children}
            </TagAddContext.Provider>
        </TagsContext.Provider>
    );
}
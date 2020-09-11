import React from 'react';

import { Link } from 'gatsby';

export interface IAllTagsIndexProps {
    pageContext: {tags: Array<string>}
}

const allTagsIndex = ({ pageContext }: IAllTagsIndexProps) => {
   
    const { tags} = pageContext
    const strucTag = tags.map((tag, index: number) => {
     
        return <li key={ index }> <Link to={tag}> { tag } </ Link > </li >
    })

     return (
        <div>
            <div>
                <h2>All Tags</h2>
                <ul>
                    {strucTag}
                </ul>
            </div>
        </div>
     )
}

export default allTagsIndex
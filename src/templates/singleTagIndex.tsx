import React from 'react';

import {Link} from 'gatsby';

export interface ISingleTagsIndexProps {
    pageContext: { posts: [{ frontmatter: { path: string } }], tagName: string },
    posts: { frontmatter: { title: string, path: string } },
    data: any
}

const singleTagIndex = ({pageContext, data} : ISingleTagsIndexProps) => {
    const { posts, tagName } = pageContext
    const strucPost = posts.map((post, index) => {
        
        return <li key={index}> <Link to={post.frontmatter.path}>{post.frontmatter.title} </Link></li>
    })
    return(
        < div>
            <div>
                Posts about {tagName}
            </div>
            <div>
                <ul>
                    {strucPost}
                </ul>
            </div>
        </div>
    )
}

export default singleTagIndex
import React from 'react';
import {Link} from 'gatsby';

export interface IPostProps {
    data: {allMdx: {edges : any} }

}

const Posts = ({data}: IPostProps) =>{
  
        const {edges} = data.allMdx
        return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
            {edges.map(edge => {
                const {frontmatter} = edge.node
                return (
                    <Link key={frontmatter.title} to={frontmatter.path}>{frontmatter.title}</Link>
                   
                )
            })}
        </div>
        )

}

export default Posts
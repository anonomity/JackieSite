const path = require('path');


exports.createPages = (({graphql, actions}) => {
    const { createPage } = actions

    return new Promise((resolve, reject) =>  {
        const blogPostTemplate = path.resolve('src/templates/blogPost.tsx')

        resolve(
            graphql(
                `query{
                    allMdx{
                        edges{
                            node{
                                frontmatter{
                                    path
                                    tags
                                    title
                                }
                            }    
                        }
                     
                    }
                    }
                `
            ).then(result => {
                const page = result.data.allMdx.edges
                
                page.forEach(({node}) => {
                    const path = node.frontmatter.path
                    createPage({
                        path, 
                        component: blogPostTemplate,
                        context: {
                            pathSlug: path
                        }
                    })
                })
            })
        )
    })
})
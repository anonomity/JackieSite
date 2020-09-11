const path = require('path');

const createTagPages = (createPage, posts) => {
    const allTagsIndexTemplate = path.resolve('./src/templates/allTagsIndex.tsx')
    const singleTagIndexTemplate = path.resolve('./src/templates/singleTagIndex.tsx')

    const postsByTag = {}

    posts.forEach(({node}) => {
        if(node.frontmatter.tags){
            node.frontmatter.tags.forEach(tag => {
                if(!postsByTag[tag]){
                    postsByTag[tag] = []
                }
                postsByTag[tag].push(node)
            })
        }
    })
    const tags = Object.keys(postsByTag)

    createPage({
        path: '/tags',
        component: allTagsIndexTemplate,
        context: {
            tags: tags.sort()
        }
    })

    tags.forEach(tagName => {
        const posts = postsByTag[tagName]

        createPage({
            path: `/tags/${tagName}`,
            component: singleTagIndexTemplate,
            context: {
                posts,
                tagName
            }
        })
    })
}

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
                    createTagPages(createPage, page)
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
module.exports = {
  siteMetadata: {
    title: `Jackie Velez`,
    description: `My Programming Website`,
    author: `Jackelyn Velez`,
  },
   plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages/Lessons`
    //   }
    // },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
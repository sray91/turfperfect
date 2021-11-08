module.exports = {
  siteMetadata: {
    siteUrl: "https://www.turfperfectcharleston.com",
    title: "turfperfect",
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    }
  ],
};

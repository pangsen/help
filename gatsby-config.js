require("dotenv").config();
const queries = require("./src/utils/algolia");

const path = require('path');

const config = require("./config");

const plugins = [
  'gatsby-plugin-sitemap',
  'gatsby-transformer-remark',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
        component: require.resolve(`./src/templates/docs.js`)
    }
  },
  `gatsby-plugin-sass`,
  'gatsby-plugin-emotion',
  'gatsby-plugin-react-helmet',
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/content/`
    }
  },
  {
    resolve: 'gatsby-plugin-preconnect',
    options: {
      domains: ['https://wcbb1vvlrc-dsn.algolia.net'],
    },
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
      feeds: [
      {
      serialize: ({ query: { site, allMarkdownRemark } }) => {
        return allMarkdownRemark.edges.map(edge => {
          return Object.assign({}, edge.node.frontmatter, {
            description: edge.node.frontmatter.metaDescription,
            date: edge.node.frontmatter.date,
            url: site.siteMetadata.siteUrl + "/" + path.basename(edge.node.fileAbsolutePath, '.md'),
            guid: site.siteMetadata.siteUrl + "/" + path.basename(edge.node.fileAbsolutePath, '.md'),
            custom_elements: [{ "content:encoded": edge.node.excerpt }],
            })
          })
        },
        query: `
          {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] },
            ) {
              edges {
                node {
                  excerpt(truncate: true, pruneLength: 280)
                  html
                  frontmatter {
                    title
                    date(formatString: "YYYY/MM/DD")
                    metaDescription
                  }
                  fileAbsolutePath
                }
              }
            }
          }
        `,
        output: "/rss.xml",
        title: "SBCテクニカルサイト",
      },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1050,
            quality: 75,
            disableBgImageOnAlpha: true,
            withWebp: true,
          }
        },
        {
          resolve: 'gatsby-remark-copy-linked-files'
        }
      ],
      extensions: [".mdx", ".md"]
    }
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: ["UA-85904527-10"],
      pluginConfig: {
        head: true,
      },
    },
  }
];

// check and add algolia
if (config.header.search && config.header.search.enabled && config.header.search.algoliaAppId && config.header.search.algoliaAdminKey) {
  plugins.push({
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: config.header.search.algoliaAppId, // algolia application id
      apiKey: config.header.search.algoliaAdminKey, // algolia admin key to index
      queries,
      chunkSize: 10000, // default: 1000
    }}
  )
}
// check and add google tag manager
if (config.gatsby.gaTrackingId) {
  plugins.push({
    resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: config.gatsby.gaTrackingId,
        includeInDevelopment: false,
      },
  })
}
// check and add pwa functionality
if (config.pwa && config.pwa.enabled && config.pwa.manifest) {
  plugins.push({
      resolve: `gatsby-plugin-manifest`,
      options: {...config.pwa.manifest},
  });
  plugins.push({
    resolve: 'gatsby-plugin-offline',
    options: {
      appendScript: require.resolve(`./src/custom-sw-code.js`),
    },
  });
} else {
  plugins.push('gatsby-plugin-remove-serviceworker');
}

// check and remove trailing slash
if (config.gatsby && !config.gatsby.trailingSlash) {
  plugins.push('gatsby-plugin-remove-trailing-slashes');
}

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    logo: { link: config.header.logoLink ? config.header.logoLink : '/', image: config.header.logo }, // backwards compatible
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl,
  },
  plugins: plugins
};

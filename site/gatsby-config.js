require('dotenv').config()


module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      // ATTENTION: Match the theme name with the theme you're using
      resolve: '@elegantstack/gatsby-theme-flexiblog-personal',
      options: {
        siteUrl: process.env.URL || process.env.VERCEL_URL,
        sources: {
          contentful: true,
          local: false,
        }
      }
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'The real theme',
    name: 'Marco Ludena',
    description: 'My personal web ...',
    address: 'New York, NY',
    email: 'email@example.com',
    phone: '+1 (888) 888-8888',
    owner:{
      name: 'Marco Ludena',
      principalProfession: 'Software Architect',
      description: 'Product Builder | Tech Mentor'
    },
    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/gatsbyjs'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/gatsbyjs'
      },
      {
        name: 'Instagram',
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'About Me',
        slug: '/about'
      }
      // {
      //   name: 'Contact',
      //   slug: '/contact'
      // }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          },
          {
            name: 'Cv generator',
            slug: '/cvgenerator'
          },
          {
            name: 'Another',
            slug: '/another'
          },
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}

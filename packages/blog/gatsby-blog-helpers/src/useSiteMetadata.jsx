import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(siteMetadataQuery)
  console.log("Este es el site metadata", site)
  return site.siteMetadata
}

const siteMetadataQuery = graphql`
  query BlogSiteMetadataQuery {
    site {
      siteMetadata {
        title
        name
        description
        address
        email
        phone
        owner {
          name
          principalProfession
          description
        }
        headerMenu {
          name
          slug
        }
        footerMenu {
          title
          items {
            name
            slug
          }
        }
        social {
          name
          url
        }
      }
    }
  }
`
export default useSiteMetadata

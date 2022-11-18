import React from 'react'
import { useStaticQuery, graphql, Link as GLink } from 'gatsby'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import { Box, Text, Card, Flex, Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Section from '@components/Section'
import Seo from '@widgets/Seo'

/**
 * Shadow me to add your own content
 */

const styles = {
  imageWrapper: {
    borderRadius: `default`,
    overflow: `hidden`,
    position: `relative`
  },
  button: {
    display: [`none`, `block`],
    position: `absolute`,
    bottom: 4,
    right: 4
  },
  grid: {
    flexWrap: [`wrap`, null, `nowrap`],
    ' > div + div': {
      ml: [0, 0, 5]
    }
  },
  column: {
    flex: `auto`,
    flexBasis: [`full`, null, `1/2`]
  }
}

export default props => {
  // const data = useStaticQuery(aboutQuery)
  // const image = getImage(data.avatar)

  return (
    <Layout {...props}>
      <Seo title='Cv generator' />
      <Divider />
      <Stack>
        <Main>
          <PageTitle
            header='Cv generator'
            subheader='The future belongs to those who believe in the beauty of their dreams.'
          />
          <Divider />
          <Box sx={styles.imageWrapper}>
            {/* <Img image={image} /> */}
            <Button as={GLink} to='/contact' sx={styles.button}>
                Mi CV GENERATOR 123
            </Button>
          </Box>
        </Main>
      </Stack>
    </Layout>
  )
}

// const aboutQuery = graphql`
//   query AboutQuery {
//     avatar: file(absolutePath: { regex: "/about.(jpeg|jpg|gif|png)/" }) {
//       childImageSharp {
//         gatsbyImageData(
//           width: 1140
//           height: 500
//           transformOptions: { cropFocus: NORTH }
//         )
//       }
//     }
//   }
// `

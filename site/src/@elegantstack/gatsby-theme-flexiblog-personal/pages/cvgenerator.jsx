import React from 'react'
import { useStaticQuery, graphql, Link as GLink } from 'gatsby'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import { Box, Text, Card, Flex, Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Section from '@components/Section'
import Seo from '@widgets/Seo'
import { Avatar } from 'theme-ui'
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

    let data = {

        "nameProfile": "Alex Suquillo",
        "actualTitle": "Application Architect en Kushki",
        "imageProfile": "https://media-exp1.licdn.com/dms/image/C4E03AQEyIKoaaJk3tA/profile-displayphoto-shrink_400_400/0/1571071367384?e=1672272000&v=beta&t=IkiQAFG-iIrp0MGgS2_8n2DqfnF2EXIfjRAFi-YeQpg",
        "skills": [
        {
          "name": 'Python',
          "category": "Tool"
        },
        {
          "name": 'PySpark',
          "category": "Tool"
        }
        ],
        "aboutUs": "\n              Alex no ha publicado nada últimamenteAlex no ha publicado nada últimamente\n            ",
        "works": [
            {
                "workImage": "https://media-exp1.licdn.com/dms/image/C4E0BAQH6L_JTNCvqHA/company-logo_100_100/0/1548669466871?e=1674691200&v=beta&t=ggW-gdUXhi0kGMO6eGL65mipFTXggENHe2p6Q9ZZkPg",
                "placeWork": "Saturdays.AI",
                "timeWork": "mar. 2019 - actualidad · 3 años 8 meses",
                "location": "mar. 2019 - actualidad · 3 años 8 meses",
                "positions": [
                    {
                        "workPosition": "Comunity Member",
                        "workPositionTimeWork": "mar. 2019 - actualidad · 3 años 8 meses"
                    }
                ]
            },
            {
                "workImage": "https://media-exp1.licdn.com/dms/image/D4E0BAQFOZN2FhxrD4g/company-logo_100_100/0/1664636054724?e=1674691200&v=beta&t=zt5KzgfJtqetf5ptvL2m12GMwd17regspjm8gxljZyo",
                "placeWork": "Corporación GPF (Grupo Fybeca)",
                "timeWork": "jul. 2018 - ene. 2019 · 7 meses",
                "location": "jul. 2018 - ene. 2019 · 7 meses",
                "positions": [
                    {
                        "workPosition": "Auxiliar de Mantenimiento Electromecánico",
                        "workPositionTimeWork": "jul. 2018 - ene. 2019 · 7 meses"
                    }
                ]
            },
            {
                "workImage": "https://media-exp1.licdn.com/dms/image/C4E0BAQHjrtQ7in7xEA/company-logo_100_100/0/1660663988003?e=1674691200&v=beta&t=y2HtrWKwRzHTJ2SRbV2VG34-pw4XZxW9KjFjjmxBlwc",
                "placeWork": "SEIUS S.A.",
                "timeWork": "feb. 2018 - mar. 2018 · 2 meses",
                "location": "feb. 2018 - mar. 2018 · 2 meses",
                "positions": [
                    {
                        "workPosition": "Pasante de Ingeniería",
                        "workPositionTimeWork": "feb. 2018 - mar. 2018 · 2 meses"
                    }
                ]
            }
        ]
    }


  return (
    <Layout {...props}>
      <Seo title='Cv generator' />
      <Divider />
      <Stack>
        <Main>
          <PageTitle
            header='Cv generator aNTOHER GOOD THING'
            subheader='The future belongs to those who believe in the beauty of their dreams.'
          />
          <Divider />
          <div>Hola</div>
          <Avatar sx={{
              width: '100px',
              height: '100px',
            borderRadius: 99999}} src={data.imageProfile} />

            <Box>
              <Text>{data.nameProfile }</Text>
              <Text>{data.actualTitle }</Text>
            </Box>

          <Box sx={styles.imageWrapper}>
            {/* <Img image={image} /> */}
            <Button as={GLink} to='/contact' sx={styles.button}>
                Mi CV GENERATOR v2
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

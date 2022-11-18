import React from 'react'
import { Link } from 'gatsby'
import { Button, Box, Heading, Text } from 'theme-ui'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'

/**
 * Shadow me to add your own content
 */

const styles = {
  author: {
    display: `inline-block`,
    color: `alpha`
  },
  occupation: {
    mb: 4
  },
  specialty: {
    color: `text`,
    mb: 4
  }
}




export default () => {
  
  const { owner } = useSiteMetadata()
  console.log("El new owner", owner)


  return (
  <>
    <Heading variant='h1'>
      Hi, I'm <Text sx={styles.author}>
        {owner.name}
      </Text>
    </Heading>
    <Heading variant='h1' sx={styles.occupation}>
        {owner.principalProfession}
    </Heading>
    <Heading variant='h3' sx={styles.specialty}>
      {owner.description}
    </Heading>
    <Box variant='buttons.group'>
      {/* <Button as={Link} to='/contact'>
        Contact Me
      </Button> */}
      <Button variant='white' as={Link} to='/cvgenerator'>
        About Me
      </Button>
    </Box>
  </>
)}


import React from 'react'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import { getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage as Img } from 'gatsby-plugin-image'

const logoQuery = graphql`
  query WhatsappQuery {
    whatsapp: file(
      absolutePath: { regex: "/whatsapp.(jpeg|jpg|gif|png)/" }
      sourceInstanceName: { eq: "asset" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 150
          layout: CONSTRAINED
          quality: 100
          placeholder: NONE
        )
      }
    }
  }
`


const WhatsappFloating = props => {
  const { whatsapp } = useStaticQuery(logoQuery)
  const whatsappImage = getImage(whatsapp)
  console.log("whatsappImage", whatsappImage)
  return (
   <div class="float">
     <a  style ={{
       position:'fixed',
       width:'60px',
       height:'60px',
       bottom:'40px',
       right:'40px',
       backgroundColor:'white',
       color:'#FFF',
       borderRadius:'50px',
       textAlign:'center',
       fontSize:'30px',
       boxShadow: '2px 2px 3px #999',
       zIndex:'100'
     }} href="https://api.whatsapp.com/send?phone=51925967565&text=Hola Marco , vengo desde tu web."  target="_blank">
      <Img
        image={whatsappImage}
      />
      </a>
   </div> 



  )
}

export default WhatsappFloating

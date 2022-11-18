import React from 'react'
import { Box } from 'theme-ui'
import Navigation from '@components/Navigation'
import Drawer from '@components/Drawer'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'

const styles = {
  desktopMenu: {
    display: [`none`, null, `block`]
  },
  mobileMenu: {
    display: [`block`, null, `none`]
  },
  desktopMenuWrapper: {
    justifyContent: 'flex-end'
  }
}

export const HeaderMenu = ({ mobileMenu = {} }) => {
  const { headerMenu, owner } = useSiteMetadata()
  
  console.log("El headerMenu", headerMenu)
  console.log("El owner", owner)
  
  const desktopMenuNav = (
    <Navigation
      variant='horizontal'
      items={headerMenu}
      wrapperStyle={styles.desktopMenuWrapper}
    />
  )

  const mobileMenuNav = (
    <Drawer>
      <Navigation
        variant='vertical'
        headingProps={{ variant: 'h3' }}
        items={[
          {
            title: 'Main Menu',
            items: headerMenu
          },
          mobileMenu
        ]}
      />
    </Drawer>
  )

  return (
    <>
      <Box sx={styles.desktopMenu}>{desktopMenuNav}</Box>
      <Box sx={styles.mobileMenu}>{mobileMenuNav}</Box>
    </>
  )
}

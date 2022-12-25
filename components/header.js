import React from 'react'
import Link from 'next/link'
import { Box } from '@chakra-ui/react'
import MainMenu from './shared_components/main_menu'
import MainLogo from './shared_components/main_logo'
import Hamburger from "./shared_components/hamburger";

const Header = () => {
   return (
      <Box
         display='flex'
         justifyContent='space-between'
         alignItems='center'
         maxWidth='1440px'
         margin='0 auto'
         height={['67px','67px','67px','101px']}
         border='1px solid red'
      >
         <MainLogo />
         <MainMenu />
         <Box
             width='244px'
             height='100%'
             marginRight='33px'
             display={['none', 'none', 'none', 'flex']}
             justifyContent='center'
             alignItems='center'
             border='1px solid red'
             background='linear-gradient(100.96deg, #FF36EB -41.47%, #1BA2EE 104.91%)'
             backgroundClip='text'
             fontFamily='Inter'
             fontSize='20px'
             lineHeight='24px'
             fontWeight='600'
         >
            <Link href='/download-sator-app'>Download</Link>
         </Box>
         <Hamburger/>
      </Box >
   )
}

export default Header
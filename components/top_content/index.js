import React from 'react'
import { Box } from '@chakra-ui/react'
import Title from './title'
import Content from "./content";

const TopContent = () => {
   return (
      <Box maxWidth='100%'>
          <Title />
          <Content />
      </Box>
   )
}

export default TopContent
import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import MainButton from '../components/shared_components/main_button'
import Header from '../components/header'

const EnterTheNftMarketplace = () => {
    return (
        <Box
            fontSize='40px'
            background='linear-gradient(136.71deg, rgba(119, 162, 227, 0.14) 13.48%,
                        rgba(186, 158, 244, 0.14) 85.14%), #FFFFFF'
        >
            <Header/>
            <Box maxWidth='1440px' margin='0 auto' paddingBottom='40px'>
                <Text textAlign='center' color='darkblue' padding='30px'>
                    ~ ENTER THE NFT MARKETPLACE ~
                </Text>
                <MainButton href='/' text='<<< back to MAIN' fontSize='25px' backgroundColor='white' color='darkblue'/>
            </Box>
        </Box>
    )
}

export default EnterTheNftMarketplace
import React from 'react'
import {Box, Text} from '@chakra-ui/react'
import SocialIcons from '../shared_components/social_icons'
import ellipse from '../../assets/img/ellipse.png'
import MainButton from "../shared_components/main_button";

const Content = () => (
    <Box
        width='100%'
        background={`url(${ellipse.src}) no-repeat top`}
        marginTop={[0, '9px','9px', '12px']}
        padding='0 10px'
    >
        <Box
            width={['100%','100%','745px', null]}
            height={['54px', '132px', '67px', null]}
            margin={['0 auto', '-60px 0 auto', '0 auto', '0 auto']}
            display='flex'
            flexDirection={['column-reverse', null, 'row', null]}
            justifyContent={['center', 'space-between', null, null]}
            alignItems='center'
        >
            <MainButton
                height={['54px', '60px', '66px', '66px']}
                display={['none', 'flex', null, null]}
                href='download-sator-app'
                text='Download Sator App'
                marginTop={[0 , '-102px', '-58px', '-58px']}
                fontSize={['14px', '18px', '20px', '20px']}
            />
            <MainButton
                width={['268px', '361px', null, null]}
                height={['54px', '60px', '66px', '66px']}
                href='enter-the-nft-marketplace'
                text='Enter The NFT Marketplace'
                marginTop={['-55px', '-37px' , '-58px', '-58px']}
                fontSize={['14px', '18px', '20px', '20px']}
            />
        </Box>
        <SocialIcons
            margin={['0 auto' ,'0 auto 45px', '0 auto 35px','0 auto 19px']}
            height={['18px','18px','28px','28px']}
        />
        <Box
            maxWidth={[0 , '520px', '540px', '800px']}
            height={['81px','81px','85px','65px']}
            display='flex'
            justifyContent='center'
            alignItems='flex-end'
            margin='0 auto'
        >
            <Text
                display={['none', 'flex', null, null]}
                fontFamily='Avenir Next'
                fontWeight='400'
                fontSize='20px'
                lineHeight='27px'
                textAlign='center'
                color='#000000'
            >
                The Sator platform aligns content ecosystem participants in an open economy that increases value creation and distribution
            </Text>
        </Box>
    </Box>
)

export default Content
import React from 'react'
import Image from 'next/image'
import {Box, Heading} from '@chakra-ui/react'
import logo from '../../assets/img/sator-logo.svg'

const MainLogo = () => {
    return (
        <Box
            width={['84px', '84px', '84px', '148px']}
            display='flex'
            justifyContent='center'
            alignItems='center'
            marginLeft={['26px', '26px', '26px', '43px']}
        >
            <Box width={['22px', '22px', '22px', '36px']}
                 height={['22px', '22px', '22px', '36px']}
            >
                <Image
                    layout='responsive'
                    src={logo}
                    alt=''
                />
            </Box>
            <Heading
                fontFamily='Inter'
                fontStyle='normal'
                fontWeight='400'
                fontSize={['20px', '20px', '20px', '32px']}
                lineHeight={['22px', '22px', '28px', '36px']}
                background='linear-gradient(100.96deg, #FF36EB -41.47%, #1BA2EE 104.91%)'
                backgroundClip='text'
                marginLeft={['12px', '12px', '12px', '20px']}
            >
                Sator
            </Heading>
        </Box>
    )
}
export default MainLogo
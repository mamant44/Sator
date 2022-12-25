import React from 'react'
import Image from 'next/image'
import {Box, Heading} from '@chakra-ui/react'
import rhombusSmall from '../../assets/img/rhombus-small.svg'
import rhombusBig from '../../assets/img/rhombus-big.svg'

const TitleSator = () => {
    return (
        <Box
            width='100%'
            height={['60px', '155px', null, null]}
            margin={['50px 0 15px 0', '69px 0 0 0', '78px 0 0 0', '89px 0 0 0']}
            display='flex'
            justifyContent={['space-between', 'space-between', 'center', 'center']}
            alignItems='center'
            position='relative'
        >
            <Heading
                margin='0 auto'
                fontFamily='Inter'
                fontSize={['48px', '96px', '128px', null]}
                fontWeight='400'
                lineHeight='155px'
                background='linear-gradient(100.96deg, #FF36EB -41.47%, #1BA2EE 104.91%)'
                backgroundClip='text'
            >
                sator
            </Heading>
            <Box width={['17px', '28px', '43px', null]} height={['18px', '28px', '43px', null]} position='absolute'
                 left={['216px', '396px', '550px', '716px']} top={['14px', '48px', '70px', null]}>
                <Image
                    src={rhombusSmall}
                    alt='Rhombus-Small'
                />
            </Box>
            <Box width={['36px', '60px', '88px', null]} height={['37px', '60px', '88px', null]} position='absolute'
                 left={['228px', '416px', '580px', '746px']} top={['-15px', 0, null, null]}>
                <Image
                    src={rhombusBig}
                    alt='Rhombus-Big'
                />
            </Box>
        </Box>
    )
}

export default TitleSator
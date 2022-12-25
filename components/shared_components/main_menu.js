import React from 'react'
import Link from 'next/link'
import {Box} from '@chakra-ui/react'

const MainMenu = () => {
    return (
        <Box
            width='491px'
            marginLeft='100px'
            display={['none', null, null, 'flex']}
            justifyContent='space-between'
            alignItems='center'
            color='#4D4D4D'
            fontFamily='K2D'
            fontWeight='700'
            fontSize='18px'
            lineHeight='23px'
        >
            <Box>
                <Link href='/about'>About</Link>
            </Box>
            <Box>
                <Link href='/metaverse'>Metaverse</Link>
            </Box>
            <Box>
                <Link href='/ambassators'>AmbasSators </Link>
            </Box>
            <Box>
                <Link href='/news'>News</Link>
            </Box>
            <Box>
                <Link href='/careers'>Careers</Link>
            </Box>
        </Box>
    )
}

export default MainMenu
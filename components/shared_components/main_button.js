import React from 'react'
import Link from 'next/link'
import {Box, Text} from '@chakra-ui/react'

const MainButton = ({href, text, ...props}) => (
    <Box>
        <Link href={href}>
            <Text
                display='flex'
                alignItems='center'
                justifyContent='center'
                fontFamily='K2D'
                fontSize='20px'
                lineHeight='26px'
                fontWeight='600'
                cursor='pointer'
                border='2px solid blue'
                borderRadius='8px'
                width='361px'
                height='66px'
                backgroundColor='white'
                {...props}
            >
                {text}
            </Text>
        </Link>
    </Box>
)

export default MainButton
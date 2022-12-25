import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import TitleSator from "../shared_components/title_sator"

const Title = () => {
    const [isLessThan1280, isLessThan767, isLessThan480] = useMediaQuery(
        [
            '(max-width: 1280px)',
            '(max-width: 767px)',
            '(max-width: 480px)'
        ]
    )

    const subTitleText = (
        isLessThan767 ? 'Comprehensive web3 platform expanding linear content to metaverse'
            : 'Web3 entertainment network'
    )

    return (
        <Box>
            <Box
                width={['275px','480px', '650px','976px']}
                display='flex'
                margin='0 auto'
            >
                <Box
                    marginBottom={['61px','90px','76px','76px']}
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                >
                    <TitleSator />
                    <Text
                        width={['260px', '100%', '650px', '976px']}
                        fontFamily='K2D'
                        fontSize={['18px', '27px', '48px', '48px']}
                        fontWeight='700'
                        lineHeight={['23px','36px','47px', '60px']}
                        color='#000000'
                        textAlign='center'
                        marginBottom={[0 ,'40px', 0 , 0]}
                    >
                        {subTitleText}
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Title
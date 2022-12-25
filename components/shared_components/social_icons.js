import React from 'react'
import {Box} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import youtube from '../../assets/img/youtube.svg'
import discord from '../../assets/img/discord.svg'
import twitter from '../../assets/img/twitter.svg'
import instagram from '../../assets/img/instagram.svg'
import tiktok from '../../assets/img/tiktok.svg'
import subtract from '../../assets/img/subtract.svg'

const SocialIcons = ({...props}) => (
    <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        maxWidth={['268px', '280px', null, null]}
        cursor='pointer'
        {...props}
    >
        <Link href='1'>
            <Image src={youtube} alt=''/>
        </Link>
        <Link href='2'>
            <Image src={discord} alt=''/>
        </Link>
        <Link href='3'>
            <Image src={tiktok} alt=''/>
        </Link>
        <Link href='4'>
            <Image src={twitter} alt=''/>
        </Link>
        <Link href='5'>
            <Image src={instagram} alt=''/>
        </Link>
        <Link href='6'>
            <Image src={subtract} alt=''/>
        </Link>
    </Box>
)

export default SocialIcons
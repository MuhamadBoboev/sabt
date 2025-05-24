export const socialsData: Social[] = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/sabt.online.tj',
        image: '/assets/icons/instagram.svg',
    },
    // {
    //     name: 'TikTok',
    //     link: 'https://www.tiktok.com/@webrand.tj?_t=8qfp548nEEj&_r=1',
    //     image: '/assets/icons/tiktok.svg',
    // },
    {
        name: 'Telegram',
        link: 'https://t.me/onlinesabt',
        image: '/assets/icons/telegram.svg',
    },
    {
        name: 'WhatsApp',
        link: 'https://wa.me/992988645543',
        image: '/assets/icons/whatsapp.svg',
    },
    // {
    //     name: 'facebook',
    //     link: 'https://www.facebook.com/profile.php?id=61567095129939',
    //     image: '/assets/icons/facebook.svg',
    // }
]


interface Social {
    name: string
    link: string
    image: string
}
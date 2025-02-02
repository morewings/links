import {
    Envelope,
    TelegramLogo,
    LinkedinLogo,
    GithubLogo,
    FileText,
    YoutubeLogo,
    StackOverflowLogo,
    Calendar,
    DevToLogo,
    CodeBlock,
} from '@phosphor-icons/react/dist/ssr';

import type {Config} from '@/types';
import image from '@/card-image.jpg';

export const config: Config = {
    // Set your or company name
    title: 'Dima Vyshniakov',
    // Add a brief description to display below name
    bio: 'Developer and Open Source Enthusiast',
    // Select a background style
    background: 'fresh',
    cardImage: image,
    // Set your Google Analytics id to enable
    gaId: 'G-47GR0Q414J',
    // Localise sharing text
    shareTitle: 'Share link',
    // Set icon links to contact you to display below the header
    headerLinks: [
        {
            title: 'Email',
            id: 'email',
            url: 'mailto:morewings@gmail.com',
            icon: Envelope,
        },
        {
            title: 'Telegram',
            id: 'telegram',
            url: 'https://t.me/morewings',
            icon: TelegramLogo,
        },
    ],
    // Set main links
    mainLinks: [
        {
            id: 'cv',
            title: 'Download CV',
            url: 'https://docs.google.com/document/d/1UL0iSt4Ud-EEHUsT5XUimDLwmQpqPC72vdH8l9L-fNQ/edit?usp=sharing',
            icon: FileText,
        },
        {
            id: 'calendar',
            title: 'Book a call with me',
            url: 'https://zcal.co/morewings',
            icon: Calendar,
        },
        {
            id: 'devto',
            title: 'My articles on dev.to',
            url: 'https://dev.to/morewings',
            icon: DevToLogo,
        },
        {
            id: 'github',
            title: 'GitHub',
            url: 'https://github.com/morewings',
            icon: GithubLogo,
        },
        {
            id: 'linkedin',
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/dvishnyakov/',
            icon: LinkedinLogo,
        },
        {
            id: 'codersrank',
            title: 'CodersRank profile',
            url: 'https://profile.codersrank.io/user/morewings',
            icon: CodeBlock,
        },
        {
            id: 'youtube',
            title: 'Youtube channel',
            url: 'https://www.youtube.com/@morewings',
            icon: YoutubeLogo,
        },
        {
            id: 'stackoverflow',
            title: 'Stack Overflow profile',
            url: 'https://stackoverflow.com/users/528136/dima-vishnyakov',
            icon: StackOverflowLogo,
        },
    ],
    vCard: {
        firstName: 'Dima',
        lastName: 'Vyshniakov',
        title: 'Senior Front End Developer',
        email: 'morewings@gmail.com',
        note: 'Developer and Open Source Enthusiast',
    },
};

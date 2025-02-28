// Profile Folder
import user_image from './profile/user-image.png';
import profile_img from './profile/profile-img.png';
import header_bg_color from './profile/header-bg-color.png';
import Image from 'next/image'; // Import Image from Next.js
// Icon Folder
import code_icon from './icon/code-icon.png';
import code_icon_dark from './icon/code-icon-dark.png';
import edu_icon from './icon/edu-icon.png';
import edu_icon_dark from './icon/edu-icon-dark.png';
import project_icon from './icon/project-icon.png';
import project_icon_dark from './icon/project-icon-dark.png';
import vscode from './icon/vscode.png';
import firebase from './icon/firebase.png';
import figma from './icon/figma.png';
import git from './icon/git.png';
import mongodb from './icon/mongodb.png';
import right_arrow_white from './icon/right-arrow-white.png';
import logo from './icon/logo.png';
import logo_dark from './icon/logo_dark.png';
import mail_icon from './icon/mail_icon.png';
import mail_icon_dark from './icon/mail_icon_dark.png';
import download_icon from './icon/download-icon.png';
import hand_icon from './icon/hand-icon.png';
import moon_icon from './icon/moon_icon.png';
import sun_icon from './icon/sun_icon.png';
import arrow_icon from './icon/arrow-icon.png';
import arrow_icon_dark from './icon/arrow-icon-dark.png';
import menu_black from './icon/menu-black.png';
import menu_white from './icon/menu-white.png';
import close_black from './icon/close-black.png';
import close_white from './icon/close-white.png';
import web_icon from './icon/web-icon.png';
import mobile_icon from './icon/mobile-icon.png';
import ui_icon from './icon/ui-icon.png';
import graphics_icon from './icon/graphics-icon.png';
import right_arrow from './icon/right-arrow.png';
import send_icon from './icon/send-icon.png';
import right_arrow_bold from './icon/right-arrow-bold.png';
import right_arrow_bold_dark from './icon/right-arrow-bold-dark.png';
import phone_white from './icon/phone-white.png';
import document_black from './icon/document-black.png';
import laravel_logo from './icon/laravel-logo.png';
import tailwind_logo from './icon/tailwind-logo.png';
import react_logo from './icon/react-logo.png';
import typescript_logo from './icon/typescript-logo.png';
import github_white from './icon/github-white.png';
import github_black from './icon/github-black.png';
import laragon_logo from './icon/laragon-logo.svg';
import backend_icon_black from './icon/backend-icon-black.png';
import backend_icon_white from './icon/backend-icon-white.png';
import web_icon_black from './icon/web-icon-black.png';
import web_icon_white from './icon/web-icon-white.png';
import api_icon_black from './icon/api-icon-black.png';
import api_icon_white from './icon/api-icon-white.png';
import database_icon_black from './icon/database-icon-black.png';
import database_icon_white from './icon/database-icon-white.png';
import down_arrow_white from './icon/down-arrow-white.svg';
import down_arrow_black from './icon/down-arrow-black.svg';
import up_arrow_white from './icon/up-arrow-white.svg';
import up_arrow_black from './icon/up-arrow-black.svg';
import link_broken from './icon/link-broken.svg';
import link_accessable from './icon/link-accessable.svg';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    phone_white,
    document_black,
    laravel_logo,
    tailwind_logo,
    react_logo,
    typescript_logo,
    laragon_logo,
    github_black,
    github_white,
    web_icon_black,
    web_icon_white,
    backend_icon_black,
    backend_icon_white,
    api_icon_black,
    api_icon_white,
    database_icon_black,
    database_icon_white,
    down_arrow_white,
    down_arrow_black,
    up_arrow_white,
    up_arrow_black,
    link_broken,
    link_accessable,
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/assets/work-data/work-1.png',
        Linkicon: assets.link_accessable,
        link: ''
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/assets/work-data/work-2.png',
        Linkicon: assets.link_broken,
        link: ''
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/assets/work-data/work-3.png',
        Linkicon: assets.link_broken,
        link: ''
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/assets/work-data/work-4.png',
        Linkicon: assets.link_broken,
        link: ''
    },
]

export const infoList = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'languages',
        description: 'languagesDescription',
    }, {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'education',
        description: 'educationDescription',
    }, {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'projects',
        description: 'projectsDescription',
    },
];

export const serviceData = [
    {
        icon: assets.backend_icon_white,
        iconDark: assets.backend_icon_black,
        title: 'backendDevelopment',
        description: 'backendDescription',
        link: ''
    }, {
        icon: assets.web_icon_white,
        iconDark: assets.web_icon_black,
        title: 'webDevelopment',
        description: 'webDescription',
        link: ''
    }, {
        icon: assets.api_icon_white,
        iconDark: assets.api_icon_black,
        title: 'apiDevelopment',
        description: 'apiDescription',
        link: ''
    }, {
        icon: assets.database_icon_white,
        iconDark: assets.database_icon_black,
        title: 'databaseManagement',
        description: 'databaseDescription',
        link: ''
    },
];


export const toolsData = [
    assets.laravel_logo,
    assets.react_logo,
    assets.tailwind_logo,
    assets.typescript_logo,
    assets.laragon_logo,
    assets.github_white,
];

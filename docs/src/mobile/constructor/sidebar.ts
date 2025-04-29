// .vitepress/sidebars/week1.ts
import { DefaultTheme } from 'vitepress'

export const mobileConstructorSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: 'Описание',
        link: '/jp/week-1'
    },
    {
        text: 'Грамматика + разговорная часть',
        items: [
            { text: 'Видео-урок', link: '/jp/week-1/grammar' },
            { text: 'Аудио-примеры', link: '/jp/week-1/grammar/audio' },
            { text: 'Японские сенсеи', link: '/jp/week-1/grammar/sensei' },
        ]
    },
]

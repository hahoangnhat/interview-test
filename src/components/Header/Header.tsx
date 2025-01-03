'use client'

import { LogoIcon, MenuIcon } from '../Icons'
import { useTranslations } from 'next-intl'
import { v4 as uuidv4 } from 'uuid'
import dynamic from 'next/dynamic'

const LanguageSelect = dynamic(() => import('../Select/LanguageSelect'), { ssr: false })

interface IHeaderProps {
  onOpenSidebar: () => void
}

const Header = ({ onOpenSidebar }: IHeaderProps) => {
  const t = useTranslations('navigation')

  const navigations = [
    {
      id: uuidv4(),
      name: t('menu.about_us'),
      href: '#about-us',
    },
    {
      id: uuidv4(),
      name: t('menu.games'),
      href: '#games',
    },
    {
      id: uuidv4(),
      name: t('menu.partners'),
      href: '#partners',
    },
    {
      id: uuidv4(),
      name: t('menu.contact_us'),
      href: '#contact',
    },
  ]

  return (
    <header className="flex items-center justify-between px-4 py-5 md:px-20">
      <LogoIcon />

      <div className="hidden items-center gap-21 md:flex">
        {navigations.map((navigation) => (
          <a
            key={navigation.id}
            href={navigation.href}
            className="font-montsterrat text-sm font-bold text-white hover:opacity-60"
          >
            {navigation.name.toUpperCase()}
          </a>
        ))}
        <LanguageSelect />
      </div>

      <MenuIcon className="block cursor-pointer md:hidden" onClick={onOpenSidebar} />
    </header>
  )
}

export default Header

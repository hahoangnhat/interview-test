import classNames from 'classnames'
import { X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { v4 as uuidv4 } from 'uuid'
import dynamic from 'next/dynamic'

const LanguageSelect = dynamic(() => import('../Select/LanguageSelect'), { ssr: false })

interface ISidebarProps {
  className?: string
  onClose: () => void
}

const Sidebar = ({ className, onClose }: ISidebarProps) => {
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
    <div className={classNames('z-50 bg-white text-black', className)}>
      <div className="flex justify-between p-4">
        <LanguageSelect />
        <X className="h-10 w-10 cursor-pointer hover:opacity-60" onClick={onClose} />
      </div>

      <div className="mt-10 flex flex-col items-center px-4 font-montsterrat text-sm font-bold text-black *:w-full *:border-t *:border-t-custom-background-gray *:py-6 *:text-center">
        {navigations.map((navigation, index) => (
          <a
            key={navigation.id}
            href={navigation.href}
            className={classNames({
              'border-t-0': index === 0,
            })}
            onClick={onClose}
          >
            {navigation.name.toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

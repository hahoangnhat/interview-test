import { useTranslations } from 'next-intl'
import { CalendarTickIcon, FemaleWitchIcon, PenToolIcon, PeopleIcon, PinMapIcon } from '../Icons'
import { ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface IInfoProps {
  title: string
  description: string
  icon: ReactNode
}

const Info = ({ title, description, icon }: IInfoProps) => {
  return (
    <div className="flex w-full gap-5 md:w-100 md:gap-6">
      <div className="h-fit rounded-full bg-custom-light-blue p-3">{icon}</div>
      <div className="flex flex-col">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm text-custom-gray">{description}</div>
      </div>
    </div>
  )
}

const About = () => {
  const t = useTranslations()

  const infos = [
    {
      id: uuidv4(),
      title: t('about.label.24_hours_title'),
      description: t('about.label.24_hours_description'),
      icon: <CalendarTickIcon />,
    },
    {
      id: uuidv4(),
      title: t('about.label.design_title'),
      description: t('about.label.design_description'),
      icon: <PenToolIcon />,
    },
    {
      id: uuidv4(),
      title: t('about.label.team_title'),
      description: t('about.label.team_description'),
      icon: <PeopleIcon />,
    },
  ]

  return (
    <>
      <div id="about-us" className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2 md:px-20">
        <div className="flex flex-col gap-4 md:gap-10">
          <div className="font-playfair text-4xl font-black md:text-6xl">
            {t('navigation.menu.about_us')}
          </div>
          <div className="text-sm text-custom-gray">{t('about.description')}</div>

          <div className="flex flex-row gap-10 md:flex-col">
            <div className="flex flex-col">
              <div className="flex items-end text-4xl font-bold text-custom-blue md:text-7.5xl">
                <div>
                  600<span className="text-2.5xl">M</span>+
                </div>
              </div>
              <span className="text-2xl font-bold">{t('about.label.users')}</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-end text-4xl font-bold text-custom-blue md:text-7.5xl">
                135+
              </div>
              <span className="text-2xl font-bold">{t('about.label.games')}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 bg-custom-background-gray px-4 py-10 md:px-20">
          {infos.map((info) => (
            <Info key={info.id} {...info} />
          ))}
        </div>
      </div>
      <div className="mt-20 flex w-full flex-col items-center justify-center md:mt-40">
        <FemaleWitchIcon className="z-10 h-fit w-80 animate-bounce md:w-140" />
        <PinMapIcon className="h-fit w-full -translate-y-14 md:-translate-y-28" />
      </div>
    </>
  )
}

export default About

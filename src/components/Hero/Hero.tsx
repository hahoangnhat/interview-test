import { useTranslations } from 'next-intl'
import { Input } from '../Input'
import { ArrowRightIcon } from '../Icons'
import Countdown from 'react-countdown'

const Hero = () => {
  const t = useTranslations('hero')
  return (
    <div className="flex w-full items-center justify-center text-white">
      <div className="z-50 flex w-fit flex-col items-center justify-center rounded-full p-10 backdrop-blur-md md:p-28">
        <div className="text-center font-playfair text-4xl font-black md:text-7.5xl md:leading-relaxed">
          {t('label.getting_ready')}
        </div>
        <Countdown
          date={Date.now() + 31 * 24 * 60 * 60 * 1000}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="rounded-2.5 mt-4 flex items-center gap-3 rounded-2.5xl bg-white p-5 text-black md:gap-12">
              <div className="flex flex-col items-center">
                <span className="font-playfair text-4xl md:text-6xl">
                  {days.toString().padStart(2, '0')}
                </span>
                <span className="font-montsterrat font-bold">{t('label.days')}</span>
              </div>
              <div className="text-4xl md:text-6xl">:</div>
              <div className="flex flex-col items-center">
                <span className="font-playfair text-4xl md:text-6xl">
                  {hours.toString().padStart(2, '0')}
                </span>
                <span className="font-montsterrat font-bold">{t('label.hours')}</span>
              </div>
              <div className="text-4xl md:text-6xl">:</div>
              <div className="flex flex-col items-center">
                <span className="font-playfair text-4xl md:text-6xl">
                  {minutes.toString().padStart(2, '0')}
                </span>
                <span className="font-montsterrat font-bold">{t('label.minutes')}</span>
              </div>
              <div className="text-4xl md:text-6xl">:</div>
              <div className="flex flex-col items-center">
                <span className="font-playfair text-4xl md:text-6xl">
                  {seconds.toString().padStart(2, '0')}
                </span>
                <span className="font-montsterrat font-bold">{t('label.seconds')}</span>
              </div>
            </div>
          )}
        />

        <div className="mt-10 flex flex-col gap-8 md:mt-25">
          <div className="max-w-64 whitespace-pre-line break-words text-center font-montsterrat text-sm md:max-w-140 md:text-lg">
            {t('label.note')}
          </div>
          <Input
            placeholder={t('placeholder.email')}
            icon={<ArrowRightIcon className="text-black" />}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero

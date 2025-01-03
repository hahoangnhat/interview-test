import { useTranslations } from 'next-intl'
import {
  ArrowRightIcon,
  FacebookIcon,
  LinkedInIcon,
  LocationIcon,
  LogoIcon,
  PhoneIcon,
  TwitterIcon,
} from '../Icons'
import { Input } from '../Input'

const Footer = () => {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact">
      <div className="left-0 top-0 h-fit w-full bg-footer px-4 py-10 md:px-30 md:py-20">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-24">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <LogoIcon />
            <div className="flex gap-2">
              <TwitterIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-4 md:gap-10">
              <div className="text-2xl font-bold text-white">{t('label.address')}</div>
              <div className="flex gap-2">
                <LocationIcon className="shrink-0" />
                <div className="flex flex-col gap-1 font-montsterrat text-sm text-white">
                  <div>{t('label.address_1')}</div>
                  <div>{t('label.address_2')}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="shrink-0" />
                <div className="font-montsterrat text-sm text-white">{t('label.phone')}</div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-10">
              <div className="text-2xl font-bold text-white">{t('label.subscribe')}</div>
              <div className="flex flex-col gap-2">
                <div className="font-montsterrat text-sm text-white">{t('label.note')}</div>
                <Input
                  placeholder={t('placeholder.email')}
                  icon={<ArrowRightIcon className="text-white" />}
                  className="w-full border border-white !bg-transparent text-white placeholder:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-black py-7 font-montsterrat text-lg text-white">
        {t('copy_right', { year: currentYear })}
      </div>
    </footer>
  )
}

export default Footer

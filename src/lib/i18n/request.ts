import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { ELocale } from '@/constants'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as ELocale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: {
      navigation: (await import(`@/locales/${locale}/navigation.json`)).default,
      hero: (await import(`@/locales/${locale}/hero.json`)).default,
      about: (await import(`@/locales/${locale}/about.json`)).default,
      game: (await import(`@/locales/${locale}/game.json`)).default,
      partner: (await import(`@/locales/${locale}/partner.json`)).default,
      footer: (await import(`@/locales/${locale}/footer.json`)).default,
      language: (await import(`@/locales/${locale}/language.json`)).default,
    },
  }
})

'use client'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useTransition } from 'react'
import Select, { OptionProps, SingleValue, SingleValueProps, StylesConfig } from 'react-select'
import { UnitedStatesFlagIcon, VietnamFlagIcon } from '../Icons'
import './index.css'
import { usePathname, useRouter } from '@/lib/i18n/routing'
import { useParams } from 'next/navigation'
import { Check } from 'lucide-react'
import classNames from 'classnames'

type TOption = {
  value: string
  label: string
  icon: React.ReactNode
}

const customStyles: StylesConfig<TOption, false> = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#3b82f6' : state.isFocused ? '#93c5fd' : '#ffffff',
    color: state.isSelected ? '#ffffff' : '#000000',
  }),
  control: (provided) => ({
    ...provided,
    borderColor: '#6b7280',
    boxShadow: 'none',
    '&:hover': { borderColor: '#3b82f6' },
    width: '100px',
  }),
  input: (provided) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    width: '150px',
  }),
}

const LanguageOption: React.FC<OptionProps<TOption, false>> = ({
  data,
  innerRef,
  innerProps,
  isFocused,
  isSelected,
}) => {
  const backgroundColor = isSelected ? '#3b82f6' : isFocused ? '#93c5fd' : '#ffffff'

  const color = isSelected ? '#ffffff' : '#000000'

  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        backgroundColor,
        color,
        padding: '10px',
        cursor: 'pointer',
      }}
      className="flex w-full items-center gap-2"
    >
      <Check
        className={classNames('hidden opacity-0 md:block', {
          '!opacity-100': isSelected,
        })}
      />
      {data.icon}
      {data.label}
    </div>
  )
}

const CustomSingleValue: React.FC<SingleValueProps<TOption, false>> = ({ data }) => {
  return data.icon
}

const LanguageSelect = () => {
  const t = useTranslations('language')
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()
  const locale = useLocale()

  const languages: TOption[] = [
    {
      value: 'en',
      label: t('en'),
      icon: <UnitedStatesFlagIcon className="shrink-0" />,
    },
    {
      value: 'vi',
      label: t('vi'),
      icon: <VietnamFlagIcon className="shrink-0" />,
    },
  ]

  const [selectedLanguage, setSelectedLanguage] = useState<SingleValue<TOption>>(
    languages.find((l) => l.value === locale) ?? {
      value: 'en',
      label: t('en'),
      icon: <UnitedStatesFlagIcon className="shrink-0" />,
    },
  )

  const onChange = (value: SingleValue<TOption>) => {
    const nextLocale = value?.value ?? 'en'
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      router.replace({ pathname, params }, { locale: nextLocale })
    })
    setSelectedLanguage({
      value: value?.value ?? 'en',
      label: value?.label ?? t('en'),
      icon: value?.icon ?? <UnitedStatesFlagIcon className="shrink-0" />,
    })
  }

  return (
    <Select
      options={languages}
      value={selectedLanguage}
      onChange={onChange}
      components={{
        Option: LanguageOption,
        SingleValue: CustomSingleValue,
      }}
      styles={customStyles}
      isSearchable={false}
      isClearable={false}
      isDisabled={isPending}
    />
  )
}

export default LanguageSelect

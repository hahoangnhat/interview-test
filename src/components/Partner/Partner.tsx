import { useTranslations } from 'next-intl'
import Slider from 'react-slick'
import EAGameImage from '@/assets/images/ea-game-image.png'
import Image, { StaticImageData } from 'next/image'
import GameImage from '@/assets/images/game-image.png'
import FirstPowerUpImage from '@/assets/images/first-power-up-image.png'
import WaltDisneyImage from '@/assets/images/walt-disney-image.png'
import BookProGameShowImage from '@/assets/images/book-pro-game-show-image.png'
import SegaImage from '@/assets/images/sega-image.png'
import TwoKImage from '@/assets/images/2k-image.png'
import dynamic from 'next/dynamic'
import './index.css'

const NextButton = dynamic(() => import('../Icons/NextButton'), {
  ssr: false,
})

const PrevButton = dynamic(() => import('../Icons/PrevButton'), {
  ssr: false,
})

const settings = {
  dots: false,
  infinite: false,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <NextButton />,
  prevArrow: <PrevButton />,
}

const Partner = () => {
  const t = useTranslations('partner')

  const partners: StaticImageData[] = [
    EAGameImage,
    GameImage,
    FirstPowerUpImage,
    WaltDisneyImage,
    BookProGameShowImage,
    SegaImage,
    TwoKImage,
  ]

  return (
    <div
      id="partners"
      className="mt-10 flex flex-col items-center justify-center gap-20 bg-custom-light-gray py-30 md:mt-28"
    >
      <div className="font-playfair text-4xl md:text-6xl">{t('out_partners')}</div>

      <div className="w-full px-10">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <Image key={index} src={partner} alt="partner" />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Partner

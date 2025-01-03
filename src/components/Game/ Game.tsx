import { useTranslations } from 'next-intl'
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import ESpaceImage from '@/assets/images/e-space-image.png'
import PirateImage from '@/assets/images/pirate-image.png'
import MagicTreeImage from '@/assets/images/magic-tree-image.png'
import KinglandImage from '@/assets/images/kingland-image.png'
import WitchPartyImage from '@/assets/images/witch-party-image.png'
import AboriginesImage from '@/assets/images/aborigines-image.png'
import TheLastGameImage from '@/assets/images/the-last-game-image.png'
import RockyImage from '@/assets/images/rocky-image.png'
import CinderellaImage from '@/assets/images/cinderella-image.png'
import GDragonImage from '@/assets/images/g-dragon-image.png'
import BlueFireImage from '@/assets/images/blue-fire-image.png'
import EGyptGameImage from '@/assets/images/egypt-game-image.png'
import { ReactNode } from 'react'
import classNames from 'classnames'

interface ICardProps {
  id: string
  name: string
  description: string
  image: ReactNode
}

const Card = ({ name, description, image }: ICardProps) => (
  <div className="relative w-fit rounded-2.5xl font-montsterrat">
    {image}

    <div className="absolute bottom-0 left-0 flex w-full flex-col gap-3 px-4 pb-4 text-white md:px-10 md:pb-10">
      <div className="text-2xl font-bold md:text-5xl">{name}</div>
      <div className="text-sm">{description}</div>
    </div>
  </div>
)

const Game = () => {
  const t = useTranslations('game')

  const games = [
    {
      id: uuidv4(),
      name: t('e_space'),
      image: <Image src={ESpaceImage} alt={t('e_space')} />,
    },
    {
      id: uuidv4(),
      name: t('pirates'),
      image: <Image src={PirateImage} alt={t('pirates')} />,
    },
    {
      id: uuidv4(),
      name: t('magic_tree'),
      image: <Image src={MagicTreeImage} alt={t('magic_tree')} />,
    },
    {
      id: uuidv4(),
      name: t('kingland'),
      image: <Image src={KinglandImage} alt={t('kingland')} />,
    },
    {
      id: uuidv4(),
      name: t('witch_party'),
      image: <Image src={WitchPartyImage} alt={t('witch_party')} />,
    },
    {
      id: uuidv4(),
      name: t('aborigines'),
      image: <Image src={AboriginesImage} alt={t('aborigines')} />,
    },
    {
      id: uuidv4(),
      name: t('the_last_game'),
      image: <Image src={TheLastGameImage} alt={t('the_last_game')} />,
    },
    {
      id: uuidv4(),
      name: t('rocky'),
      image: <Image src={RockyImage} alt={t('rocky')} />,
    },
    {
      id: uuidv4(),
      name: t('cinderella'),
      image: <Image src={CinderellaImage} alt={t('cinderella')} />,
    },
    {
      id: uuidv4(),
      name: t('g_dragon'),
      image: <Image src={GDragonImage} alt={t('g_dragon')} />,
    },
    {
      id: uuidv4(),
      name: t('blue_fire'),
      image: <Image src={BlueFireImage} alt={t('blue_fire')} />,
    },
    {
      id: uuidv4(),
      name: t('egypt_game'),
      image: <Image src={EGyptGameImage} alt={t('egypt_game')} />,
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const generateChunkArray = (array: any, chunkSize: number) => {
    if (chunkSize <= 0) {
      throw new Error('Chunk size must be greater than 0')
    }

    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }

    return result
  }

  return (
    <div id="games" className="flex flex-col items-center gap-6 md:gap-10">
      <div className="px-2 text-center font-playfair text-4xl font-black md:text-6xl">
        {t('our_games')}
      </div>
      <div className="max-w-140 px-2 text-center font-montsterrat text-sm text-custom-gray">
        {t('note')}
      </div>
      <div className="grid grid-cols-2 px-2 md:grid-cols-4 md:px-0">
        {generateChunkArray(games, 3).map((chunk, index) => (
          <div
            key={index}
            className={classNames('hidden flex-col md:flex', {
              'mt-28': index % 2 !== 0,
            })}
          >
            {chunk.map((game: ICardProps) => (
              <Card
                key={game.id}
                id={game.id}
                name={game.name}
                description={t('description')}
                image={game.image}
              />
            ))}
          </div>
        ))}

        {generateChunkArray(games, games.length / 2).map((chunk, index) => (
          <div
            key={index}
            className={classNames('flex flex-col md:hidden', {
              'mt-28': index % 2 !== 0,
            })}
          >
            {chunk.map((game: ICardProps) => (
              <Card
                key={game.id}
                id={game.id}
                name={game.name}
                description={t('description')}
                image={game.image}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Game

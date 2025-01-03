'use client'
import { Header, Hero, Sidebar, WitchIcon } from '@/components'
import { Footer } from '@/components/Footer'
import classNames from 'classnames'
import { useState } from 'react'

interface IHomeLayoutProps {
  children: React.ReactNode
}

const HomeLayout = ({ children }: IHomeLayoutProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)

  return (
    <div className="relative">
      <div className="relative">
        <WitchIcon className="translate-x-1/5 absolute bottom-0 left-0 z-10 max-w-96 translate-y-2/3 md:translate-x-0 md:translate-y-1/3" />
        <div className="clip clip-path-ellipse relative h-full w-full bg-header">
          <Header onOpenSidebar={() => setOpenSidebar(true)} />
          <Hero />
          <div className="h-20"></div>
        </div>
      </div>
      <div className="mt-80 md:mt-0">{children}</div>
      <Footer />
      <Sidebar
        className={classNames('fixed left-0 top-0 hidden h-full w-full', {
          '!block': openSidebar,
        })}
        onClose={() => setOpenSidebar(false)}
      />
    </div>
  )
}

export default HomeLayout

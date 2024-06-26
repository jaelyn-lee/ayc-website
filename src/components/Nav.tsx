import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

export default function Nav() {
  const [toggled, setToggled] = useState(false)
  const matches = useMediaQuery('(min-width: 1280px)')

  return (
    <nav className="">
      <div className="flex justify-between mx-2 p-4">
        <img src="/ayc-logo.jpeg" alt="logo" width="100px" />
        {matches && (
          <div className="flex gap-6 font-bold text-lg">
            <a href="/">Home Page</a>
            <a href="/about-us">About Us</a>
            <a href="/service">Service</a>
            <a href="/missions">Missions</a>
            <a href="/updates">Updates</a>
            <a href="/contact">Contact</a>
            <a href="/youtube">Youtube</a>
          </div>
        )}
        {!matches && (
          <div className="space-y-1.5 cursor-pointer z-50">
            <div className="block h-0.5 w-8 bg-black"></div>
            <div className="block h-0.5 w-6 bg-black"></div>
            <div className="block h-0.5 w-4 bg-black"></div>
          </div>
        )}
      </div>
    </nav>
  )
}

import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

export default function Nav() {
  const [toggled, setToggled] = useState(false)
  const matches = useMediaQuery('(min-width: 1280px)')

  return (
    <nav className="mb-6">
      <div className="flex justify-between mx-2 px-6">
        <a href="/">
          <img src="/ayc-logo.jpeg" alt="logo" width="100px" />
        </a>
        <div className="flex justify-between items-center gap-8">
          {matches && (
            <div className="flex gap-6 font-semibold text-lg">
              <a href="/about-us">About Us</a>
              <a href="/service">Service</a>
              <a href="/missions">Missions</a>
              <a href="/updates">Updates</a>
              <a href="/contact">Contact</a>
              <a
                href="https://www.youtube.com/@aucklandyewonchurch3616"
                target="_blank"
              >
                Youtube
              </a>
            </div>
          )}
          <div className="space-y-1.5 cursor-pointer z-50">
            <div className="block h-0.75 w-8 bg-black"></div>
            <div className="block h-0.75 w-8 bg-black"></div>
            <div className="block h-0.75 w-8 bg-black"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

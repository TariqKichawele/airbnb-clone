import Image from 'next/image'
import Link from 'next/link'
import DesktopLogo from '../../public/airbnb-desktop.png';
import MobileLogo from '../../public/airbnb-mobile.webp';
import UserNav from './UserNav';
import SearchComponent from './SearchComponent';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full border-b'>
        <div className='flex items-center justify-between container mx-auto px-5 lg:px-10 py-5'>
            <Link href={'/'}>
                <Image 
                    src={DesktopLogo}
                    alt='desktop_logo'
                    className='w-32 hidden lg:block'
                />
                <Image 
                    src={MobileLogo}
                    alt='mobile_logo'
                    className='block lg:hidden w-12'
                />
            </Link>
           <SearchComponent />

            <UserNav />
        </div>
    </nav>
  )
}

export default Navbar
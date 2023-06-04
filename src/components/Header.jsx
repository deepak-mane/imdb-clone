import React from 'react'
import MenuItem from './MenuItem'
import {
    AiFillHome,
    AiOutlineFundProjectionScreen,
    AiFillPlaySquare
} from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { BiCameraMovie } from 'react-icons/bi'
import { GiWireframeGlobe } from 'react-icons/gi'
import { FaAward, FaLanguage } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { CgPlayListAdd } from 'react-icons/cg'
import { GoSignIn } from 'react-icons/go'
import Link from 'next/link'

// header color #121212
// body #000
export default function Header() {
    return (
        <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
            <div className='flex'>
                <MenuItem title='HOME' address='/' Icon={AiFillHome} />
                <MenuItem
                    title='ABOUT'
                    address='/about'
                    Icon={BsFillInfoCircleFill}
                />
                {/*  In Own Adv version add additonal menuitems
                
                 <MenuItem
                    title='MOVIES'
                    address='/movies'
                    Icon={BiCameraMovie}
                />
                <MenuItem
                    title='TV Shows'
                    address='/tvshows'
                    Icon={AiOutlineFundProjectionScreen}
                />
                <MenuItem
                    title='Awards & Events'
                    address='/awards'
                    Icon={FaAward}
                />
                <MenuItem title='Celebs' address='/' Icon={FiUsers} />
                <MenuItem
                    title='Community'
                    address='/community'
                    Icon={GiWireframeGlobe}
                /> */}
            </div>
            <div className=''>
                <Link href='/'>
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>
                            IMDb
                        </span>
                        <span className='text-xl hidden sm:inline'>
                            Clone
                        </span>
                    </h2>
                </Link>
                {/* 
                  In Own Adv version add additonal menuitems
                <MenuItem
                    title='Watchlist'
                    address='/watchlist'
                    Icon={CgPlayListAdd}
                />
                <MenuItem
                    title='Sign In'
                    address='/signin'
                    Icon={GoSignIn}
                />
                <MenuItem title='EN' address='#' Icon={FaLanguage} /> */}
            </div>
        </div>
    )
}

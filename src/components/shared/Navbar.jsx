import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import NavLink from '@/components/shared/NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div>

            </div>
            <ul className='flex justify-between items-center gap-4 text-gray-700'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/about'}>About</NavLink></li>
                <li><NavLink href={'/career'}>Career</NavLink></li>
            </ul>

            <div className='flex justify-center items-center gap-4'>
                <Image src={userAvatar} alt='User avatar' width={40} height={40}/>
                <button className='btn bg-purple-500 text-white'><Link href={'/login'}>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;
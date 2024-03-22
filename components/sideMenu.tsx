import Link from 'next/link'
import React from 'react'

export const SideMenu = () => {
  return (
    <ul>
        <Link href={'data'}>
        <li>Analytics</li>
        </Link>
        <Link href={'profile'}>

        <li>Profile</li>
        </Link>
        <Link href={'settings'}>
        <li>Settings</li>
        </Link>
    </ul>
  )
}

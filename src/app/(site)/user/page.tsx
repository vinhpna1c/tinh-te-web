'use client'
import React from 'react'
import Link from 'next/link'


import UserLayout from './container'
import { useState } from 'react'
import Tab1 from './tab1'
import Tab2 from './tab2'
import Tab3 from './tab3'



const tabs = [
  <Tab1 />,
  <Tab2 />,
  <Tab3 />
]
export default function Profile() {
  return (
    <UserLayout>
    </UserLayout >
  )
}
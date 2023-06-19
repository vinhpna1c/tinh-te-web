import React from 'react'
import Link from 'next/link'
import { AiFillEdit } from 'react-icons/ai'
type UserNavBarProps = {
  tabs: string[],
  selectedIndex?: number,
  onTapChanged?: (index:number)=>void,
}

export default function UserNavBar(props: UserNavBarProps) {
  const { tabs, selectedIndex,onTapChanged } = props;
  const selectedTab = (selectedIndex ?? 0) % tabs.length;
  return (
    <div></div>
  )
}

import React from 'react'

import LogoIcon from "@/public/Logo.png"
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
  return (
    <Link href="/"><Image src={LogoIcon} alt='cylax-logo'/></Link>
  )
}

export default Logo
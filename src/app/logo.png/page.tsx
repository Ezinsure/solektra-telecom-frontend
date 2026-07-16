import React from 'react'
import Image from 'next/image'

const LogoPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <Image src="/assets/logos/logo-dark.png" alt="Solektra Telecom Logo" width={400} height={400} />
        </div>
    )
}
export default LogoPage

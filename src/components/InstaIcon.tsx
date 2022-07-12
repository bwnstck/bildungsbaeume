import React from 'react'

import Image from 'next/image'

import Insta from '$images/insta.png'
import Data from '$meta/underConstruction.yml'

const InstaIcon = ({ text, style }: { text?: string; style?: any }) => {
  return (
    <div style={style}>
      {Data?.instaName?.trim().length && (
        <>
          {text && <p className="insta-text">{text}</p>}
          <a
            href={`https://www.instagram.com/${Data.instaName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-logo"
          >
            <Image src={Insta} alt="Instagram Logo" />
          </a>
        </>
      )}
    </div>
  )
}

export default InstaIcon

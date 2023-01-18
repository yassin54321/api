import React from 'react'
import { Button } from 'react-bootstrap'


const Footer = () => {
  return (
    <div>
        <iframe style={{opacity: '0.8'}} width="1400" height="650" src="https://www.youtube.com/embed/yoITH01zmZg?autoplay=1&mute=1" title="YouTube video player" ></iframe>
        <Button style={{backgroundColor:'#CD9D2B'}} onClick={()=> window.open("https://play.google.com/store/apps/details?id=eu.livesport.FlashScore_com&hl=en&gl=RU")}>download</Button>
    </div>
  )
}

export default Footer

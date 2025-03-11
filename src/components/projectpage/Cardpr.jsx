import React from 'react'
import cardpr from '../../style/proj.module.scss'
import card1 from '../../assets/img/Cardphoto/card1.png'
import card2 from '../../assets/img/Cardphoto/card2.png'
import card3 from '../../assets/img/Cardphoto/card3.png'
import card4 from '../../assets/img/Cardphoto/card4.png'
import card5 from '../../assets/img/Cardphoto/card5.png'
import card6 from '../../assets/img/Cardphoto/card6.png'
import card7 from '../../assets/img/Cardphoto/card7.png'
import card8 from '../../assets/img/Cardphoto/card8.png'
import { Link } from 'react-router'

const Cardpr = (black) => {
    const card=[card1,card2,card3,card4,card5,card6,card7,card8]
  return (
<>
<div >
    {card.map((card,index)=><Link key={index} to={`/projects/${index}`}><img key={index} className={cardpr.card} src={card} alt="card" /></Link>)}
</div>
</>

  )
}
export default Cardpr

import React from 'react'
import Contac from '../../style/contacts.module.scss'
import viber from '../../assets/img/Contacts/viber.png'
import whatsapp from '../../assets/img/Contacts/whatsapp.png'
import telegram from '../../assets/img/Contacts/telegram.png'
import vk from '../../assets/img/Contacts/vk.png'
import church from '../../assets/img/Contacts/church.png'
const Cont = ({black}) => {
    const image=[viber,whatsapp,telegram,vk]
  return (
    <div className={Contac.contfordiv}><div className={black==1?Contac.block12:Contac.block1}>
      
        <div className={black==1?Contac.block1txt12:Contac.block1txt}>
      
        <div className={Contac.block1txt2}>
                <h1 className={Contac.h1}>Жуковский</h1>
                <p>Адрес</p>
                <p>ул. Анохина, 7А, Жуковский</p>
            <div className={Contac.block1txt1}>
                <p>График работы:<p> 9:00 - 21:00</p></p>
                <p className={Contac.p}>+7 (915) 555-33-33</p>
              
            </div>
       </div>
       <div className={Contac.block1img}>
             {
                image.map((image,index)=><img key={index} className={Contac.image} src={image} alt="image" />)
             }

        </div>
             </div>
             <img className={Contac.block1line } src={church}/>
        </div>
        <iframe className={Contac.block2} src="https://yandex.ru/map-widget/v1/?um=constructor%3Aad4664304be80637ac92fb05f52a194b9f406ffb88b83b334f234a07e142b54c&amp;source=constructor" width="500" height="400" frameborder="0"/>
        
        
        </div>
  )
}

export default Cont
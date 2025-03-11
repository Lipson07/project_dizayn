import React from 'react'
import about from '../../style/about.module.scss'
import cont1 from '../../assets/img/containerphoto/Vector.png'
import vk from '../../assets/img/containerphoto/vk.png'
import tbank from '../../assets/img/containerphoto/tbank.png'
import wood_prime from '../../assets/img/containerphoto/wood prime.png'
import mts from '../../assets/img/containerphoto/mts.png'
import cont2 from '../../assets/img/containerphoto/Vector (1).png'
import cont3 from '../../assets/img/containerphoto/Group.png'
import cont4 from '../../assets/img/containerphoto/cont4.png'
import cont5 from '../../assets/img/containerphoto/cont5.png'
import cont6 from '../../assets/img/containerphoto/cont6.png'
import arrow from '../../assets/img/containerphoto/arrow.png'
import cluch from '../../assets/img/containerphoto/cluch.png'
import clock from '../../assets/img/containerphoto/clock.png'
import vk1 from '../../assets/img/containerphoto/vk1.png'
import tbank1 from '../../assets/img/containerphoto/tbank1.png'
import wood_prime1 from '../../assets/img/containerphoto/wood prime1.png'
import mts1 from '../../assets/img/containerphoto/mts1.png'
const Container = ({black}) => {
  return (
   <>
   {black==0  ?
   <>
    <div className={about.containerMini1}>
   
           <div className={about.block1}><h1 className={about.h1block1}><p className={about.pblock1}> &lt;4 тыс</p> выполненых проектов</h1>
           <img src={cont1} className ={about.imgblock1} alt="" />
           
           </div>
           <div className={about.blockpart}>
            <h1 className={about.h1blockpart}>наши партнеры</h1>
            <div className={about.blockpartimg}>
                <img src={tbank} alt="" />
                <img src={wood_prime} alt="" />
                <img src={vk} alt="" />
                <img src={mts} alt="" />
            </div>

           </div>
           <div className={about.block}>
           <h1 className={about.h1block1}><p className={about.pblock1}> &lt;16 лет</p>на рынке</h1>
           <img src={cont2} className ={about.imgblock1} alt="" />
           </div>
           <div className={about.block1}>
           <h1 className={about.h1block1}>
           <p className={about.pblock1}> &lt;6 тыс</p><p className={about.p1block1}>довольных семей</p></h1>
           <img src={cont3} className ={about.imgblock1} alt="" />
           </div>
           </div>
           <div className={about.containerMini2}>
               <div className={about.block2}><img className={about.imgblock2} src={cont4} alt=""/>
                <img className={about.imgblock2} src={cont5} alt=""/></div> 

                <img className={about.imgblock3} src={cont6} alt=""/>
           </div>
           </>:
           <>
           <div className={about.containerMini1}>

           <div className={about.block12}>
   <h1 className={about.h1block12}>
   <p className={about.pblock12}> &lt;6 тыс</p><p className={about.p1block12}>довольных</p>< p className={about.p1s}> семей</p></h1>
   <img src={arrow} className ={about.imgblock12} alt="" />
   </div>
   <div className={about.bl1}>
   <h1 className={about.h1block13}><p className={about.pblock1}> &lt;16 лет</p>на рынке</h1>
   <img src={clock} className ={about.imgblock13} alt="" />
   </div>
   <div className={about.blockpart1}>
    <h1 className={about.h1blockpart1}><p>наши</p><p> партнеры</p></h1>
    <div className={about.blockpartimg1}>
        <img src={tbank1} alt="" />
        <img src={wood_prime1} alt="" />
        <img src={vk1} alt="" />
        <img src={mts1} alt="" />
    </div>

   </div>

   <div className={about.block12}><h1 className={about.h1block12}><p  className={about.pblock12}> &lt;4 тыс</p> <p className={about.p1block12}>выполненых</p><p className={about.p1s}> проектов</p></h1>
   <img src={cluch} className ={about.imgblock12} alt="" />
   
   </div>
   </div>
   <div className={about.containerMini2}>
       <div className={about.block2}><img className={about.imgblock2} src={cont4} alt=""/>
        <img className={about.imgblock2} src={cont5} alt=""/></div> 

        <img className={about.imgblock3} src={cont6} alt=""/>
   </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>           }
           </>
  )
}
export  default Container


import { cardphoto,cardphoto1 } from "../../assets"
function Card({ indexphoto ,black}) {

    return (
        <div className="card">
             {indexphoto==0?<div className="cardtext"><h1 className="ctxt">ПОСТРОИМ ВАМ ТЁПЛЫЙ И ДОЛГОВЕЧНЫЙ ДОМ</h1>
             <div className="divinp"><input className="inputcard" type="tel" placeholder="7-XXX-XXX-XX-XX"/><button className="buttoncard">Позвоните мне</button></div>
             <h3>Нажав кнопку Вы даёте согласие с политикой конфиденциальности и даёте согласие на обработку персональных данных</h3>
             
             </div>:<div className="blocks">
                <div className="block1" >
                    <div className="blockfon1" style={black==1?{backgroundColor:"#232323"}:{backgroundColor:"white"}}></div>
                    <h3 className="blocktext" style={black==1?{color:"white"}:{color:"black"}}>Гарантия на все наши проекты 100 лет</h3>

                </div>
                <div className="block2">
                    <div className="blockfon2"style={black==1?{backgroundColor:"white"}:{backgroundColor:"#232323"}}></div>
                    <h3 className="blocktext1 "style={black==1?{color:"black"}:{color:"white"}}><p>Возможность</p> записаться на эксурсию <p>по нашим проектам</p></h3>
                </div>

             </div>

                }           

            <img src={indexphoto == 0 ? cardphoto : cardphoto1} alt="11" className="imgcard" />
           


        </div>






    )



}
export default Card

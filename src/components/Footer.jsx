import { footerline, footerline1 } from "../assets";
function Footer( {black,fon}){
    return(
        <div className="footerdiv">
            <img  className="footerline " src={black==1?footerline1:footerline}></img>
            <div className="footer"  style={black==1?{backgroundColor:"white",color:"black"} :{backgroundColor:"#232323",color:"white"}}>
                <div className="footertxt1"><h3 className="ftxt1">СК “ВЕКТОР” - профессиональная строительная компания<p>Основные направления: загородный девелопмент и индивидуальное</p>строительство</h3></div>
                <div className="footertxt2"><h3 className="ftxt2">Политика конфиденциальности</h3><h3 className="ftxt3"> Все права защищены, любое копирование данных запрещено</h3></div>


            </div>

        </div>


    )
}
export default Footer
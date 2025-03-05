import logodark from '../assets/img/full logo dark.svg'
import linedark from '../assets/img/Line 1.svg'
import smenatemisun from '../assets/img/Vector_11.svg'
function Header() {
    const cont=['Главная','Проекты','О нас','Контакты']
    return (

        <header>
        <div className="backhead"></div>
      <div className="headersod"><img alt="logo" src={logodark}  className="cont imgheader"/>
          <img className="linehead" src={linedark} />
      
      <div className="header-cont">   {
            cont.map(cont=><div className="cont">{cont}</div>)
        }
      </div>
      <img className="smenatemi" alt="smenatemi" src={smenatemisun} /></div> 
     
         </header>
    );
}
export default Header;
import photo from "../assets/img/cardphoto.png";
import photo2 from "../assets/img/303_ks-scaled 1.png"

import { cardphoto,cardphoto1 } from "../assets"
function Card({ indexphoto }) {

    return (
        <div className="card">
            <img src={indexphoto == 0 ? cardphoto : cardphoto1} alt="11" className="imgcard" />




        </div>






    )



}
export default Card

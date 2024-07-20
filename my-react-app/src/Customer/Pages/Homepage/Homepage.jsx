import Homesectioncarousel from "../../Components/Homesectioncarousel/Homesectioncarousel"
import Maincarousel from "../../Components/Maincarousel/Maincarousel"
import { menskurta } from "../../../Datas/Datas"
const Homepage = () => {
  return (
    <div>
        <div className="homecarousel">
            <Maincarousel/>
        </div>

        <div className="homesectioncrsl space-y-10">
          <Homesectioncarousel data={menskurta} Sectioname={'Mens Kurta'}/>
          <Homesectioncarousel data={menskurta} Sectioname={'Mens Kurta'}/>
          <Homesectioncarousel data={menskurta} Sectioname={'Mens Kurta'}/>
          <Homesectioncarousel data={menskurta} Sectioname={'Mens Kurta'}/>
          <Homesectioncarousel data={menskurta} Sectioname={'Mens Kurta'}/>
          
        </div>
    </div>
  )
}

export default Homepage
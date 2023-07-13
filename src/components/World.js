import React from 'react'
import Cardboard from './Cardboard';

import AlQasehran from '../images/Al-Qasehran-Desert.png';
import Andiheimr from '../images/Andiheimr-North-Village.png';
import Charmire from '../images/Charmire-Cliff.png';
import Levausar from '../images/Levausar-Statue.png';
import Pletver from '../images/Pletver-City.png';
import Rhaenus from '../images/Rhenus-City-Square.png';

function World() {
    return(
        
        <div className="origins">
            <div className="origins-head">
                <h3>World</h3>
                <p>Lorem ipsum dolor sit amet. Ex fuga voluptatem cum nemo dolores et reprehenderit expedita est quidem vitae est blanditiis repudiandae aut quae expedita non iure sequi. Qui veniam internos ad obcaecati velit cum voluptas unde sed asperiores ullam.
                In saepe expedita hic pariatur voluptatem 33 nihil voluptatem sed omnis rerum? Est quibusdam voluptates ex molestiae nostrum ut omnis aliquam non eius impedit in harum iste vel quis impedit. Et tempore iusto eos culpa architecto aut exercitationem iste cum quis sint.</p>
            </div>
            <Cardboard 
                header1="Al-Qasehran"
                header2="Andiheimr"
                header3="Charmire"
                header4="Levausar"
                header5="Pletver"
                header6="Rhaenus"
                img1={AlQasehran}
                img2={Andiheimr}
                img3={Charmire}
                img4={Levausar}
                img5={Pletver}
                img6={Rhaenus}
                link1="./World/Al-Qasehran"
                link2="./World/Andiheimr"
                link3="./World/Charmire"
                link4="./World/Levausar"
                link5="./World/Pletver"
                link6="./World/Rhaenus"
            />

        </div>
    )
}

export default World;
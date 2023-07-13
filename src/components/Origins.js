import React from "react";
import Cardboard from "./Cardboard";

//-------------------Images--------------------------------------
import Believer from '../images/Believer-Priest.png';
import Artist from '../images/Artist-Bard.png';
import Criminal from '../images/Criminal-Thief.png';
import Occultist from '../images/Occultist-Sorcerer.png';
import Primitive from '../images/Primitive-Shaman.png';
import Scholar from '../images/Scholar-Alchemist.png';

function Origins(){
    return(
        <div className="origins">
            <div className="origins-head">
                <h3>Origins</h3>
                <p>Lorem ipsum dolor sit amet. Ex fuga voluptatem cum nemo dolores et reprehenderit expedita est quidem vitae est blanditiis repudiandae aut quae expedita non iure sequi. Qui veniam internos ad obcaecati velit cum voluptas unde sed asperiores ullam.
                In saepe expedita hic pariatur voluptatem 33 nihil voluptatem sed omnis rerum? Est quibusdam voluptates ex molestiae nostrum ut omnis aliquam non eius impedit in harum iste vel quis impedit. Et tempore iusto eos culpa architecto aut exercitationem iste cum quis sint.</p>
            </div>
            <Cardboard 
                header1="Artist"
                header2="Believer"
                header3="Criminal"
                header4="Occultist"
                header5="Primitive"
                header6="Scholar"
                img1={Artist}
                img2={Believer}
                img3={Criminal}
                img4={Occultist}
                img5={Primitive}
                img6={Scholar}
                link1="./Origins/Artist"
                link2="./Origins/Believer"
                link3="./Origins/Criminal"
                link4="./Origins/Occultist"
                link5="./Origins/Primitive"
                link6="./Origins/Scholar"
            />
        </div>
    );
}

export default Origins
import React from 'react';
import RegionContent from './RegionContent';
import RhaenusImg1 from '../images/Rhenus-Capital-City.png';
import RhaenusImg2 from '../images/Rhenus-Plain.png';

function Rhaenus(){
    return(
        <div>
            <RegionContent 
                header="Rhaenus"
                img1={RhaenusImg1}
                img2={RhaenusImg2}
                txt="Lorem ipsum dolor sit amet. Ex fuga voluptatem cum nemo dolores et reprehenderit expedita est quidem vitae est blanditiis repudiandae aut quae expedita non iure sequi. Qui veniam internos ad obcaecati velit cum voluptas unde sed asperiores ullam.
                In saepe expedita hic pariatur voluptatem 33 nihil voluptatem sed omnis rerum? Est quibusdam voluptates ex molestiae nostrum ut omnis aliquam non eius impedit in harum iste vel quis impedit. Et tempore iusto eos culpa architecto aut exercitationem iste cum quis sint."
            />
        </div>
    )
}

export default Rhaenus
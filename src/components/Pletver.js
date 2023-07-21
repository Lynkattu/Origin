import React from 'react';
import RegionContent from './RegionContent';
import PletverImg1 from '../images/Pletver-City-Wide.png';
import PletverImg2 from '../images/Pletver-Lake.png'

function Pletver(){
    return(
        <div>
            <RegionContent 
                header="Andiheimr"
                img1={PletverImg1}
                img2={PletverImg2}
                txt="Lorem ipsum dolor sit amet. Ex fuga voluptatem cum nemo dolores et reprehenderit expedita est quidem vitae est blanditiis repudiandae aut quae expedita non iure sequi. Qui veniam internos ad obcaecati velit cum voluptas unde sed asperiores ullam.
                In saepe expedita hic pariatur voluptatem 33 nihil voluptatem sed omnis rerum? Est quibusdam voluptates ex molestiae nostrum ut omnis aliquam non eius impedit in harum iste vel quis impedit. Et tempore iusto eos culpa architecto aut exercitationem iste cum quis sint."
            />
        </div>
    )
}

export default Pletver
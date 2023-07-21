import React from 'react';
import RegionContent from './RegionContent';
import CharmieImg1 from '../images/Charmire-Village.png';
import CharmireImg2 from '../images/Charmire-Mansion.png';

function Charmire(){
    return(
        <div>
            <RegionContent 
                header="Charmire"
                img1={CharmieImg1}
                img2={CharmireImg2}
                txt="Lorem ipsum dolor sit amet. Ex fuga voluptatem cum nemo dolores et reprehenderit expedita est quidem vitae est blanditiis repudiandae aut quae expedita non iure sequi. Qui veniam internos ad obcaecati velit cum voluptas unde sed asperiores ullam.
                In saepe expedita hic pariatur voluptatem 33 nihil voluptatem sed omnis rerum? Est quibusdam voluptates ex molestiae nostrum ut omnis aliquam non eius impedit in harum iste vel quis impedit. Et tempore iusto eos culpa architecto aut exercitationem iste cum quis sint."
            />
        </div>
    )
}

export default Charmire
import React from 'react';
import RegionContent from './RegionContent';
import AndiheimrImg1 from '../images/Andiheimr-North-Village-Wide.png'
import AndiheimrImg2 from '../images/Andiheimr-Tribe.png'

function Andiheimr(){
    return(
        <div>
            <RegionContent 
                header="Andiheimr"
                img1={AndiheimrImg1}
                img2={AndiheimrImg2}
                txt="Lorem ipsum dolor sit amet. Ex fuga voluptatem cum nemo dolores et reprehenderit expedita est quidem vitae est blanditiis repudiandae aut quae expedita non iure sequi. Qui veniam internos ad obcaecati velit cum voluptas unde sed asperiores ullam.
                In saepe expedita hic pariatur voluptatem 33 nihil voluptatem sed omnis rerum? Est quibusdam voluptates ex molestiae nostrum ut omnis aliquam non eius impedit in harum iste vel quis impedit. Et tempore iusto eos culpa architecto aut exercitationem iste cum quis sint."
            />
        </div>
    )
}

export default Andiheimr
import React from "react";
import MainHeader from "./MainHeader";
import CharacterContent from './CharacterContent';
//images
import Character from '../images/DemonKnight.png';
import Headmaster from '../images/Pletver-University-Headmaster.png';
import Demoness from '../images/Demoness.png';
import Everfrost from '../images/Ice-Dwarf.png';
import Queen from '../images/Levausar-Queen.png';
import Sultan from '../images/Al-Qasehran-Sultan.png';
import Saint from '../images/SaintLich.png';

function Characters(){
    return(
        <div>
            <MainHeader 
                header="Characters" 
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores quos et impedit odio sit perspiciatis impedit."
                img={Character}
            />
            <CharacterContent
                header="Headmaster of the University of Pletver"
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores quos et impedit odio sit perspiciatis impedit. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo."
                img={Headmaster}
            />
            <CharacterContent
                header="Lady of deceitful contracts"
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores quos et impedit odio sit perspiciatis impedit. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo."
                img={Demoness}
            />
            <CharacterContent
                header="King Everfrost"
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores quos et impedit odio sit perspiciatis impedit. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo."
                img={Everfrost}
            />
            <CharacterContent
                header="Queen of Levausar"
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores quos et impedit odio sit perspiciatis impedit. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo."
                img={Queen}
            />
            <CharacterContent
                header="Puppet ruler of Al'Qasehran"
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores quos et impedit odio sit perspiciatis impedit. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo."
                img={Sultan}
            />
            <CharacterContent
                header="the Saint"
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores quos et impedit odio sit perspiciatis impedit. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo."
                img={Saint}
            />
        </div>
    )
}

export default Characters
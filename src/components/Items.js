import React from "react";
//components
import MainHeader from "./MainHeader";
import ItemContent from "./ItemContent copy";
//images
import ItemsImg from '../images/Items.png';
import NormalArmor from '../images/Normal-Chest-Knight-Armor.png';
import NormalWeapon from '../images/Normal-Waraxe-Greataxe.png';
import NormalTxt from '../images/Normal-item-txt.png';

import RunicArmor from '../images/Runic-Chest-Rune-Priest-Robe.png';
import RunicWeapon from '../images/Runic-Hammer-Dwarven-Hammer.png';
import RunicTxt from '../images/Rune-item-txt.png';

import CursedArmor from '../images/Cursed-Chest-Royal-Vestment.png';
import CursedWeapon from '../images/Cursed-Thrusting-Sword-Spectral-Rapier.png';
import CursedTxt from '../images/Cursed-item-txt.png';

import BlessedArmor from '../images/Blessed-Chest-Paladin-Breastplate.png';
import BlessedWeapon from '../images/Blessed-Staff-Druidic-Staff.png';
import BlessedTxt from '../images/Blessed-item-txt.png';

import ArtifactArmor from '../images/Artifact-Chest-Lich-Breastplate.png';
import ArtifactWeapon from '../images/Artifact-Straight-Sword-Apocalypse.png';
import ArtifactTxt from '../images/Artifact-item-txt.png';


function Items(){
    return(
        <div>
            <MainHeader 
                header="Items" 
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores quos et impedit odio sit perspiciatis impedit."
                img={ItemsImg}
            />

            <ItemContent
                header="Normal"
                img1={NormalArmor}
                img2={NormalWeapon}
                img3={NormalTxt}
                txt="Lorem ipsum dolor sit amet. Ex fuga voluptatem cum nemo dolores et reprehenderit expedita est quidem vitae est blanditiis repudiandae aut quae expedita non iure sequi. Qui veniam internos ad obcaecati velit cum voluptas unde sed asperiores ullam.
                In saepe expedita hic pariatur voluptatem 33 nihil voluptatem sed omnis rerum? Est quibusdam voluptates ex molestiae nostrum ut omnis aliquam non eius impedit in harum iste vel quis impedit. Et tempore iusto eos culpa architecto aut exercitationem iste cum quis sint."
            />

            <ItemContent
                header="Runic"
                img1={RunicArmor}
                img2={RunicWeapon}
                img3={RunicTxt}
                txt="Lorem ipsum dolor sit amet. Ex fuga voluptatem cum nemo dolores et reprehenderit expedita est quidem vitae est blanditiis repudiandae aut quae expedita non iure sequi. Qui veniam internos ad obcaecati velit cum voluptas unde sed asperiores ullam.
                In saepe expedita hic pariatur voluptatem 33 nihil voluptatem sed omnis rerum? Est quibusdam voluptates ex molestiae nostrum ut omnis aliquam non eius impedit in harum iste vel quis impedit. Et tempore iusto eos culpa architecto aut exercitationem iste cum quis sint."
            />

            <ItemContent
                header="Blessed"
                img1={BlessedArmor}
                img2={BlessedWeapon}
                img3={BlessedTxt}
                txt="Lorem ipsum dolor sit amet. Ex fuga voluptatem cum nemo dolores et reprehenderit expedita est quidem vitae est blanditiis repudiandae aut quae expedita non iure sequi. Qui veniam internos ad obcaecati velit cum voluptas unde sed asperiores ullam.
                In saepe expedita hic pariatur voluptatem 33 nihil voluptatem sed omnis rerum? Est quibusdam voluptates ex molestiae nostrum ut omnis aliquam non eius impedit in harum iste vel quis impedit. Et tempore iusto eos culpa architecto aut exercitationem iste cum quis sint."
            />

            <ItemContent
                header="Cursed"
                img1={CursedArmor}
                img2={CursedWeapon}
                img3={CursedTxt}
                txt="Lorem ipsum dolor sit amet. Ex fuga voluptatem cum nemo dolores et reprehenderit expedita est quidem vitae est blanditiis repudiandae aut quae expedita non iure sequi. Qui veniam internos ad obcaecati velit cum voluptas unde sed asperiores ullam.
                In saepe expedita hic pariatur voluptatem 33 nihil voluptatem sed omnis rerum? Est quibusdam voluptates ex molestiae nostrum ut omnis aliquam non eius impedit in harum iste vel quis impedit. Et tempore iusto eos culpa architecto aut exercitationem iste cum quis sint."
            />

            <ItemContent
                header="Artifact"
                img1={ArtifactArmor}
                img2={ArtifactWeapon}
                img3={ArtifactTxt}
                txt="Lorem ipsum dolor sit amet. Ex fuga voluptatem cum nemo dolores et reprehenderit expedita est quidem vitae est blanditiis repudiandae aut quae expedita non iure sequi. Qui veniam internos ad obcaecati velit cum voluptas unde sed asperiores ullam.
                In saepe expedita hic pariatur voluptatem 33 nihil voluptatem sed omnis rerum? Est quibusdam voluptates ex molestiae nostrum ut omnis aliquam non eius impedit in harum iste vel quis impedit. Et tempore iusto eos culpa architecto aut exercitationem iste cum quis sint."
            />
                
        </div>
    )
}

export default Items
import React from 'react';
//----------------------------Image files----------------------------------------------
import HeaderImg from '../images/EldritchForest.png';
import Separator from './Separator';
import Tavern from '../images/Levausar-Tavern.png';
import StoneTexture from '../images/Stone.png';
import Street from '../images/Andiheimr-South-Forest.png';
import Demon from '../images/DemonKnight.png';
import Items from '../images/Items.png';
//----------------------------react-components-----------------------------------------
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import MainContentVariation from './MainContentVariation';
import MainContentReversed from './MainContentReversed';
import Footer from './Footer';


function Home() {
    return(
        <div>
            <MainHeader 
                header="Origin"
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores quos et impedit odio sit perspiciatis impedit."
                img={HeaderImg}
            />
            <Separator/>
            <MainContentVariation
            header="World"
            txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
            Et voluptas voluptatem quo consequatur numquam At dolores."
            backImg={StoneTexture}
            img={Street}
            link="/World"
            btTxt="Explore"
            />
            <MainContent
                header="Origins and backgrounds"
                backImg={StoneTexture}
                img={Tavern}
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores quos et impedit odio sit perspiciatis impedit."
                link="/Origins"
                btTxt="Learn more"
            />

            <MainContentVariation
                header="Items"
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores."
                backImg={StoneTexture}
                img={Items}
                link="/Items"
                btTxt="Learn more"
            />

            <MainContentReversed
                header="Characters"
                backImg={StoneTexture}
                img={Demon}
                txt="Lorem ipsum dolor sit amet. Est rerum culpa ab fugiat magni eum saepe mollitia. Sit fugiat illo non reiciendis expedita eum recusandae officia ut accusamus consequatur et dolorem optio. Et debitis eligendi non vero impedit ea illo nesciunt ut ipsam sint vel magnam perferendis sit necessitatibus Quis est reiciendis consequuntur.
                Et voluptas voluptatem quo consequatur numquam At dolores quos et impedit odio sit perspiciatis impedit."
                link="/Characters"
                btTxt="Learn more"
            />

            <Separator/>
            <Footer/>
        </div>
    )
}

export default Home;
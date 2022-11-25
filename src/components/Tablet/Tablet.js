import React from 'react';
import Header from '../Shared/Header';





import Trending1 from './Trending1';
import Trending2 from './Trending2';
import Trending3 from './Trending3';
import Trending4 from './Trending4';

const Tablet = () => {
    return(
        <div>
<Header/>
{/* <!-- music class section start here --> */}
        <div class="music__class">
            <div class="container tablet__Container">
               <Trending1/>
                <Trending2/>
                <Trending3/>
                <Trending4/>
                
            </div>
        </div>
        {/* <!-- music class section end here --> */}
        </div>
    );
};
export default Tablet;
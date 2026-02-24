import React from "react";
// import { HashLink as Link } from 'react-router-hash-link';

class HomeInitial extends React.Component {

    render() {
        return (
            
            <div>
                {/* You can render <Route> and <NavTabs /> here */}
                <div className="home-initial" id="particles-js">
                    <div className="home-title pb-3">
                        <h1 className="title">Cognitive Science <wbr></wbr>Student&nbsp;Association</h1>
                        <h1 className="title pb-3">at UC San Diego</h1>
                    </div>
                </div>
            </div>
        )
    }

}
export default HomeInitial;


//    <div className="home-buttons">
//                         <div className="row justify-content-center justify-content-md-start"> 
//                             <div className="col-auto py-2 py-md-4">
//                                     <span>Learn More</span>
                                  
//                                 </Link>
//                             </div>
//                             <div className="col-auto py-2 py-md-4"> 
//                                 <Link to='/involvement' className='cta'>
//                                     <span>Get Involved</span>
                                  
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>

import React from 'react';
import Header from './Navigation/Header';
import Route from './Navigation/Route';
//Pages
import Resume from '../components/Pages/Resume';
import CoverLetter from '../components/Pages/CoverLetter';
import Contact from '../components/Pages/Contact';
//CSS
import '../style/Base.css';
import '../style/Responsive/700.css';
//Text
import Text from '../api/text';
//Image
import ProfilePic from '../images/IMG_4814.jpg';

const App = () => {
    console.log(Text);
    return(
        <div className="grid-container">
            <Header />
            <div className="item2">
                    <img src={ProfilePic} alt="profile pictue" />
            </div>
            <div className="item3">          
                <Route path="/cv">
                    <Resume text={Text[0].resume} />
                </Route>
                <Route path="/kontakt">
                    <Contact text={Text[0].contact} />
                </Route>
                <Route path="/">
                    <CoverLetter text={Text[0].coverletter} />
                </Route>
            </div>
        </div>
    );
};
export default App;
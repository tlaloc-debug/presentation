import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Facebook } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';
import { Globe } from 'react-bootstrap-icons';
import { TelephoneFill } from 'react-bootstrap-icons';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { useMediaQuery } from 'react-responsive';
import site from "./site.png"


function App() {

    const [scroll, setscroll] = useState(false);
    const [projects, setprojects] = useState(false);
    const [contact, setcontact] = useState(false);

    const matches = useMediaQuery({query: '(min-width:600px)'});

    useEffect (()=>{
        document.addEventListener("scroll", e => {
            if (document.scrollingElement.scrollTop >= 100){
               setscroll(true);
            } else {
               setscroll(false);
            }
        })
    },[])

    var classNames = require('classnames');
    var titleClasses = classNames({
        "titlecell": !matches,
        "titlepc": scroll,
      });
    var projectsClasses = classNames({
        "projectscell": !matches,
        "projectspc": scroll,
    });
    var contactClasses = classNames({
        "contactcell": !matches,
        "contactpc": scroll,
    });
    var socialClasses = classNames({
        "socialcell": !matches,
        "socialpc": scroll,
    });

    var homebackClasses = classNames({
        "home": true,
        "hometrans": projects ,
        "hometransmiddle": contact 
    });
    var projectsbackClasses = classNames({
        "projectsback": true,
        "projectstrans": projects,
        "projectstransmiddle": contact,
        
    });
    var contactbackClasses = classNames({
        "contactback": true,
        "contacttrans": projects,
        "contacttransmiddle": contact,
       
    });

    var homebackClassescell = classNames({
        "homecell": true,
        "hometranscell": projects ,
        "hometransmiddlecell": contact 
    });
    var projectsbackClassescell = classNames({
        "projectsbackcell": true,
        "projectstranscell": projects,
        "projectstransmiddlecell": contact,
        
    });
    var contactbackClassescell = classNames({
        "contactbackcell": true,
        "contacttranscell": projects,
        "contacttransmiddlecell": contact,
       
    });

    const showprojects = () => {
        setcontact(false);
        setprojects(true);
    }
    const showcontact = () => {
        setcontact(true);
        setprojects(false);
    }
    const showhome = () => {
        setcontact(false);
        setprojects(false);
    }
    
    const [showNote, setshowNote] = useState(false);

    const selectnote = () => {
        setshowNote(!showNote);
    }

    return (
        <div > 
            <div className={matches ? homebackClasses : homebackClassescell}>
                <div className={matches ? "aboutpc" : "aboutcell"}>
                    <div className={matches ? "ispc" : "iscell"}><h3>Hi, I'm a Mechatronic Engineer and FrontEnd Web Develloper</h3></div>
                    <h4>Skills:</h4>
                    <div><i>React, Responsive Design, PHP, MySQL, Node JS, C++, Git</i></div>
                    <h4>Academic:</h4>
                    <div>
                        <ul >
                            <li><i>Mechatronics Eng., MEX</i></li>
                            <li><i>DEP Soudage-Montage, CAN</i></li>
                        </ul>
                    </div>    
                    <h4>Lenguajes:</h4>
                    <div><i>English, French, Spanish</i></div>
                </div>
            </div>

            <div className={matches ? projectsbackClasses : projectsbackClassescell}>
                <div className={matches ? "workpc" : "workcell"}>
                    <div className={matches ? "ispc" : "iscell"}>
                        <div className={"horizontal"}><h2>Take a look at my projects</h2></div>
                        <div className={"horizontal"}><div>This is the project I'm currently working on:</div>
                        </div>
                    </div>
                    
                    <div className={"horizontal"} style={{width: "100%"}}><img src={site} alt="" className={matches ? "pc" : "cell"}/></div>
                    <div>
                        <h4>This site contains:</h4>
                        <div>Database query</div>
                        <div><i>- Node JS, express, axios, MySQL</i></div><br/>
                        <div>Basic ecommerce</div>
                        <div><i>- Persistent Cart Shop</i></div><br/>
                        <div>Basic Register / Log-in system</div>
                        <div><i>- bcryptjs, persistent Log-in</i></div><br/>
                    </div><br/>
                    <div className={"horizontal"}><b>Built using React JS</b></div>
                    <div className={"horizontal"}> 
                        <div className={"vertical"} style={{padding: "20px 0px"}}>
                            <div style={{padding: "0px 10px"}} onClick={selectnote}><Globe size={30}/>
                                <div className={showNote ? "note" : "out"} >Not available. Need to change from MySQL to Postgresql to meet server requirements. </div>
                            </div>
                            <div style={{padding: "0px 10px"}}><a href="https://github.com/tlaloc-debug/portfolio2" className={"slide"}><Github size={30}/></a></div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className={matches ? contactbackClasses : contactbackClassescell}>
                <div className={matches ? "sendpc" : "sendcell"}>
                    <div className={matches ? "ispc" : "iscell"}>
                        <div className={"horizontal"}><h2>Let me know you like my work</h2></div>   
                    </div>
                    <div className={"horizontal"} style={{marginTop: "100px"}}>
                        <div >
                            <div>
                                <TelephoneFill size={30}/>
                                <div style={{display: "inline-block", marginLeft: "20px"}}><i>514-717-6664</i></div>
                            </div><br/><br/>
                            <div>
                                <EnvelopeFill size={30}/>
                                <div style={{display: "inline-block", marginLeft: "20px"}}><i>pelondinho@hotmail.com</i></div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>

            <div className={matches ? "topnav" : "out"}>
                <div className={"vertical"} onClick={showhome}>ERICK DIAZ</div>
                <div>
                    <ul>
                        <li className={"top"} onClick={showprojects}>PROJECTS</li>
                        <li className={"top"} onClick={showcontact}>CONTACT</li>
                    </ul>
                </div>
                <div className={"vertical"}>
                    <div style={{padding: "0px 10px"}}><a href="https://www.facebook.com/people/Erick-Diaz/100046728112475" className={"top"}><Facebook size={30}/></a></div>
                    <div style={{padding: "0px 10px"}}><a href="https://github.com/tlaloc-debug" className={"top"}><Github size={30}/></a></div>
                </div>

            </div>

            <div className={titleClasses} onClick={showhome}>
                <div>
                    <h2>ERICK DIAZ</h2>
                </div>    
            </div>
            <div className={projectsClasses} onClick={showprojects}>
                PROJECTS
            </div>
            <div className={contactClasses} onClick={showcontact}>
                CONTACT
            </div>
            <div className={socialClasses}>
                <div style={{padding: "0px 10px", display: "inline-block"}}><a href="https://www.facebook.com/people/Erick-Diaz/100046728112475" className={"slide"}><Facebook size={30}/></a></div>
                <div style={{padding: "0px 10px", display: "inline-block"}}><a href="https://github.com/tlaloc-debug" className={"slide"}><Github size={30}/></a></div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
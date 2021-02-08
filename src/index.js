import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Facebook } from 'react-bootstrap-icons';
import { Github } from 'react-bootstrap-icons';
import { useMediaQuery } from 'react-responsive';


function App() {

    const [scroll, setscroll] = useState(false);
    const [projects, setprojects] = useState(false);
    const [contact, setcontact] = useState(false);

    const matches = useMediaQuery({query: '(min-width:600px)'});
    console.log(matches);

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

    return (
        <div > 
            <div className={matches ? homebackClasses : homebackClassescell}>
            </div>

            <div className={matches ? projectsbackClasses : projectsbackClassescell}>
            </div>

            <div className={matches ? contactbackClasses : contactbackClassescell}>
            </div>

            <div className={matches ? "topnav" : "out"}>
                <div className={"vertical"} onClick={showhome}>ERICK DIAZ</div>
                <div>
                    <ul>
                        <li onClick={showprojects}>PROJECTS</li>
                        <li onClick={showcontact}>CONTACT</li>
                    </ul>
                </div>
                <div className={"vertical"}>
                    <Facebook size={30}/>
                    <Github size={30}/>
                </div>

            </div>

            <div className={titleClasses} onClick={showhome}>
                <h3>ERICK DIAZ</h3>
            </div>
            <div className={projectsClasses} onClick={showprojects}>
                PROJECTS
            </div>
            <div className={contactClasses} onClick={showcontact}>
                CONTACT
            </div>
            <div className={socialClasses}>
                <Facebook size={30}/>
                <Github size={30}/>
            
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
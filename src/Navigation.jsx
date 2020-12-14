import React from 'react';


function Navigation(){
    return(
        <nav id="nav_bar">
            <h1>akarsh.me</h1>
            <ul>
                <li><a href="#" ><i className="fas fa-user"></i> <span>About</span></a></li>
                <li><a href="#" ><i className="fas fa-brain"></i> <span>Skills</span></a></li>
                <li><a href="#" ><i className="fas fa-cogs"></i> <span>Projects</span></a></li>
                <li><a href="#" ><i className="fas fa-trophy"></i> <span>Achievements</span></a></li>
                
            </ul>
        </nav>
    )
}

export default Navigation;
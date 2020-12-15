import React from 'react';

function Main(){
    return (
        <main id="main_sec">
            <div id="main1">
                <div id="div1">
                    <h4>Hi there!</h4>
                    <h1><span>I'm</span> Akarsh Malik</h1>
                    <div id="div1_ext">
                        <ul>
                            <li><i class="fas fa-map-marker-alt"></i> Haridwar, Uttarakhand</li>
                            <li><i class="fas fa-birthday-cake"></i> 20 years</li>
                            <li><i class="fas fa-user-graduate"></i> NIT Tiruchirappalli</li>
                        </ul>
                    </div>
                    <div id="footer">
                        <ul>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fab fa-github"></i></a></li>
                            <li><a href="#"><i className="fas fa-envelope"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div id="div2">
                    <h2 id="hello"><span>About Me</span></h2>
                    <p>I'm an Instrumentation and Control sophomore pursuing my b.tech in National Institute of Technology, Tiruchirappalli.</p>
                    <p>Currently a system administrator at <a href="#">Delta Force</a> (premiere coding club of NITT).</p>
                    <h3 style={{margin: "20px 10px 20px 10px"}}><span>Interests</span></h3>
                    <div id="interest_box">
                        <div id="box1">
                            <i className="fas fa-table-tennis"></i>
                            <hr></hr>
                            <h4>Sports</h4>
                            
                            <p>I love playing Badminton and T.T</p>
                        </div>
                        <div id="box2"><i className="fas fa-microphone-alt"></i>
                            <hr></hr>
                            <h4>Music</h4>
                            <p>I enjoy singing and playing guitar</p>
                        </div>
                        <div id="box3"><i className="fas fa-code"></i>
                        <hr></hr>
                            <h4>Coding</h4>
                            <p>I'm into coding since feb 2020</p>
                        </div>
                    </div>
                    <h2 id="hello2" style={{margin: "20px 10px 20px 10px"}}><span>Skills</span></h2>
                    <ul>
                        <li><i class="fas fa-tools"></i> <span>System Administration</span></li>
                        <li><i class="fas fa-dna"></i> <span>Machine Learning</span></li>
                        <li><i class="fas fa-file-code"></i> <span>Front-end Web Development</span></li>
                    </ul>
                    <h3 style={{margin: "20px 10px 20px 10px"}}><span>Programming Language</span></h3>
                    <div className="interest_box2">
                       <ul>
                           <li><i class="devicon-python-plain"></i> <span>Python</span></li>
                           <li><i class="devicon-cplusplus-plain"></i> <span>C++</span></li>
                           <li><i class="devicon-mysql-plain"></i> <span>MySql</span></li>
                           <li><i class="devicon-debian-plain"></i> <span>Bash</span></li>
                           <li><i class="devicon-html5-plain"></i> <span>HTML</span></li>
                           <li><i class="devicon-css3-plain"></i> <span>CSS</span></li>
                           <li><i class="devicon-javascript-plain"></i> <span>JavaScript</span></li>
                           <li><i class="devicon-react-original"></i> <span>React</span></li>
                           <li><i class="devicon-php-plain"></i> <span>PHP</span></li>
                           <li><i class="devicon-go-plain"></i> <span>Go</span></li>
                       </ul> 
                    </div>
                    <h3 style={{margin: "20px 10px 20px 10px"}}><span>Tools and Technologies</span></h3>
                    <div className="interest_box2">
                       <ul>
                           <li className="special"><i class="devicon-git-plain"></i> <span>Git</span></li>
                           <li className="special"><i class="devicon-docker-plain"></i> <span>Docker</span></li>
                           <li className="special"><i class="devicon-apache-plain"></i> <span>Apache</span></li>
                           <li className="special"><i class="devicon-linux-plain"></i> <span>Linux</span></li>
                           <li className="special"><i class="devicon-visualstudio-plain"></i> <span>VS Code</span></li>
                       </ul> 
                    </div>
                    <h2 id="hello3" style={{margin: "20px 10px 20px 10px"}}><span>Projects</span></h2>
                    <h3 style={{margin: "20px 10px 20px 10px"}}><span>Coming Soon....</span></h3>
                    <h2 id="hello4" style={{margin: "20px 10px 20px 10px"}}><span>Achievements</span></h2>
                    <h3 style={{margin: "20px 10px 20px 10px"}}><span>Coming Soon....</span></h3>
                </div>
            </div>
        </main>

    )
}

export default Main;
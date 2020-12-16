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
                            <li><a href="https://twitter.com/AkarshMalik" target="_blank"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/akarsh-malik-911221193/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/malikakarsh" target="_blank"><i className="fab fa-github"></i></a></li>
                            <li><a href="mailto:malikakarsh@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a></li>
                        </ul>
                    </div>
                    <h3 id="made_with" style={{margin: "20px 10px 20px 10px",opacity: "0.6",fontFamily: "Poiret One, cursive"}}>Made with <i id="heart" style={{color: "red", fontSize: "25px"}} class="fas fa-heart"></i> by Akarsh</h3>
                </div>
                <div id="div2">
                        <h2 id="hello"><span>About Me</span></h2>
                        <p>I'm an Instrumentation and Control sophomore pursuing my b.tech in National Institute of Technology, Tiruchirappalli.</p>
                        <p>Currently a system administrator at <a href="https://delta.nitt.edu/" target="_blank">Delta Force</a> (premiere coding club of NITT), I love reading about different web vulnerabilities and discovering bugs in web applications.</p>
                        <h3 style={{margin: "20px 10px 20px 10px"}}><span>Interests</span></h3>
                        <div id="interest_box">
                            <div id="box1">
                                <i className="fas fa-table-tennis"></i>
                                <hr></hr>
                                <h4>Sports</h4>
                                
                                <p>I love playing Badminton and T.T</p>
                            </div>
                            <div id="box2"><i className="fas fa-headphones-alt"></i>
                                <hr></hr>
                                <h4>Music</h4>
                                <p>I enjoy singing and playing guitar</p>
                            </div>
                            <div id="box3"><i className="fas fa-code"></i>
                            <hr></hr>
                                <h4>Coding</h4>
                                <p id="call_me">I'm into coding since feb 2020</p>
                            </div>
                        </div>
                    <h2 id="hello2" style={{margin: "20px 10px 20px 10px"}}><span>Skills</span></h2>
                    <ul>
                        <li><i class="fas fa-tools"></i> <span>System Administration</span></li>
                        <li><i class="fas fa-dna"></i> <span>Machine Learning</span></li>
                        <li><i class="fas fa-file-code"></i> <span>Front-end Web Development</span></li>
                        <li><i class="fas fa-bug"></i> <span>Bug Hunting</span></li>
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
                    <h3 id="call" style={{margin: "20px 10px 20px 10px"}}><span>Tools and Technologies</span></h3>
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
                    <div>
                        <div id="header_h2">
                            <h3 style={{margin: "20px 10px 20px 10px"}}>Extract <a href="https://github.com/malikakarsh/EXTRACT" target="_blank"><i id="arrow" class="fas fa-location-arrow"></i></a></h3>
                            <hr></hr>
                            <p>Extract is a primitive form of Google Tesseract which is used to extract texts from images. It is written in python using tensorflow.</p>
                            <p id="key_concept1">Key Concepts Used:</p>
                            <ul>
                                <li>Convolutional Neural Networks (CNN)</li>
                                <li>TensorFlow</li>
                                <li>OpenCV</li>
                                
                            </ul>
                        </div>

                        <div id="header_h3">
                            <h3 style={{margin: "20px 10px 20px 10px"}}>Face Recognition <a href="https://github.com/malikakarsh/Face-Recognition" target="_blank"><i id="arrow1" class="fas fa-location-arrow"></i></a></h3>
                            <hr></hr>
                            <p>Face Recognition uses haarcascade to detect face and Machine Learning to predict who the user is. It is written in python using Keras and Tkinter.</p>
                            <p id="key_concept2">Key Concepts Used:</p>
                            <ul>
                                <li>Convolutional Neural Networks (CNN)</li>
                                <li>Keras</li>
                                <li>OpenCV</li>
                                <li>Tkinter</li>
                            </ul>
                        </div>

                        <div id="header_h4">
                            <h3 style={{margin: "20px 10px 20px 10px"}}>Scanner <a href="https://github.com/malikakarsh/Scanner" target="_blank"><i id="arrow2" class="fas fa-location-arrow"></i></a></h3>
                            <hr></hr>
                            <p>A document scanner to scan sheets detecting its edges and converting them to a pdf file format. Written in python using OpenCV</p>
                            <p id="key_concept3">Key Concepts Used:</p>
                            <ul>
                                <li>Numpy</li>
                                <li>OpenCV</li>
                                <li>Tkinter</li>
                            </ul>
                        </div>

                        <div id="header_h5">
                            <h3 style={{margin: "20px 10px 20px 10px"}}>Socket Programming <a href="https://github.com/malikakarsh/Sysads-Task-3" target="_blank"><i id="arrow3" class="fas fa-location-arrow"></i></a></h3>
                            <hr></hr>
                            <p>A messaging app to connect to different users on CLI using TCP sockets and threading.</p>
                            <p id="key_concept4">Key Concepts Used:</p>
                            <ul>
                                <li>Threading</li>
                                <li>Sockets</li>
                            </ul>
                        </div>

                        <div id="header_h6">
                            <h3 style={{margin: "20px 10px 20px 10px"}}>DWoC Server Maintainer <a href="https://delta.nitt.edu/" target="_blank"><i id="arrow4" class="fas fa-location-arrow"></i></a></h3>
                            <hr></hr>
                            <p>Delta Winter of Code (DWoC) is a winter long program organised by Delta Force, the coding club of NIT Trichy.</p>
                            <p id="key_concept5">Key Concepts Used:</p>
                            <ul>
                                <li>System Administration</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                    </div>
                    <h2 id="hello4" style={{margin: "20px 10px 20px 10px"}}><span>Achievements</span></h2>
                    <div id="last1">
                        <h3 style={{margin: "20px 10px 20px 10px"}}>Hacktober Fest</h3>
                        <hr></hr>
                        <p>Accomplished the hacktober fest hosted by <a href="https://hacktoberfest.digitalocean.com/profile" target="_blank">Digital Ocean</a>.</p>
                    </div>
                    <div id="last2">
                        <h3 style={{margin: "20px 10px 20px 10px"}}>30 Days of Google Cloud</h3>
                        <hr></hr>
                        <p>Successfully  completed both the tracks (Machine Learning and Cloud Engineering) of <a href="https://www.qwiklabs.com/public_profiles/6bd87158-4009-4b76-b65e-609bf9efdd76" target="_blank">30 Days of Google Cloud</a>.</p>
                    </div>

                    <div id="last3">
                        <h3 style={{margin: "20px 10px 20px 10px"}}>MTA Introduction to Programming with Python </h3>
                        <hr></hr>
                        <p>Achieved Microsoft certification after taking the <a href="https://www.youracclaim.com/badges/dce65294-9961-433b-a5ab-922a59080d73?source=linked_in_profile" target="_blank">Introduction to Programming with Python</a> test.</p>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Main;
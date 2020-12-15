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
                    <h2>About Me</h2>
                    <p>I'm an Instrumentation and Control sophomore pursuing my b.tech in National Institute of Technology, Tiruchirappalli.</p>
                    <p>I'm a system administrator at <a href="#">Delta Force</a> (coding club of NITT).</p>
                    <h2 style={{margin: "20px 10px 20px 10px"}}>Interests</h2>
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
                </div>
            </div>
        </main>

    )
}

export default Main;
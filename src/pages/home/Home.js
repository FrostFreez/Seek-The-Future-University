import './Home.css';
import * as React from "react";

function Home() {

  let logged = false;

  return (
    <div className="home">
      <div className='header'>
        <div className="header1">
          {
            logged ? (
              <ul className='header1-list'>
                <li><a href='/'><span class="mag"></span></a></li>
                <li><a href='/'>APPLY NOW</a></li>
                <li><a href='/'>CONTACT US</a></li>
                <li><a href='/'>ACCESS ACCOUNT</a></li>
                <li><a href='/'><span class="user"></span></a></li>
              </ul>
            ) : (
              <ul className='header1-list'>
                <li><a href='/'><span class="mag"></span></a></li>
                <li><a href='/'>APPLY NOW</a></li>
                <li><a href='/'>CONTACT US</a></li>
                <li><a href='/'>SIGN IN</a></li>
              </ul>
            )
          }
        </div>
        <div className='header2'>
          <div className='header2-logo'>
            <img className='header2-img' src='https://i.imgur.com/WOLMk89.png' alt='SEEK THE FUTURE UNIVERSITY' />
          </div>
          <h1 className='header2-title'>SEEK THE FUTURE<br></br>UNIVERSITY</h1>
          <ul className='header2-list'>
            <li><a href='/'>Courses</a></li>
            <li><a href='/'>Volunteering</a></li>
            <li><a href='/'>News/Events</a></li>
            <li><a href='/'>Campus</a></li>
            <li><a href='/'>Housing</a></li>
            <li><a href='/'>Entrance Exam</a></li>
          </ul>
        </div>
      </div>
      <div className='pages'>
        <div className='courses'>
          <h2 className='courses-title'>SEEK THE FUTURE</h2>
          <div className='courses-list'>
            <a className='course' href='/'>
              <div className='course-content'>
                <div className='course-front'>
                  <h3 className='course-title'>Game developing</h3>
                  <img className='course-img' src='https://hips.hearstapps.com/hmg-prod/images/ps5-bundles-655f6506b008c.jpg' alt='' />
                </div>
                <div className='course-back'>
                <p className='course-back-text'>Access</p>
                  <p className='course-back-name'>Game Developing</p>
                  <p className='course-back-text'>course?</p>
                </div>
              </div>
            </a>
            <a className='course' href='/'>
              <div className='course-content'>
                <div className='course-front'>
                  <h3 className='course-title'>Game developing</h3>
                  <img className='course-img' src='https://hips.hearstapps.com/hmg-prod/images/ps5-bundles-655f6506b008c.jpg' alt='' />
                </div>
                <div className='course-back'>
                <p className='course-back-text'>Access</p>
                  <p className='course-back-name'>Game Developing</p>
                  <p className='course-back-text'>course?</p>
                </div>
              </div>
            </a>
            <a className='course' href='/'>
              <div className='course-content'>
                <div className='course-front'>
                  <h3 className='course-title'>Game developing</h3>
                  <img className='course-img' src='https://hips.hearstapps.com/hmg-prod/images/ps5-bundles-655f6506b008c.jpg' alt='' />
                </div>
                <div className='course-back'>
                <p className='course-back-text'>Access</p>
                  <p className='course-back-name'>Game Developing</p>
                  <p className='course-back-text'>course?</p>
                </div>
              </div>
            </a>
            <a className='course' href='/'>
              <div className='course-content'>
                <div className='course-front'>
                  <h3 className='course-title'>Game developing</h3>
                  <img className='course-img' src='https://hips.hearstapps.com/hmg-prod/images/ps5-bundles-655f6506b008c.jpg' alt='' />
                </div>
                <div className='course-back'>
                <p className='course-back-text'>Access</p>
                  <p className='course-back-name'>Game Developing</p>
                  <p className='course-back-text'>course?</p>
                </div>
              </div>
            </a>
            <a className='course' href='/'>
              <div className='course-content'>
                <div className='course-front'>
                  <h3 className='course-title'>Game developing</h3>
                  <img className='course-img' src='https://hips.hearstapps.com/hmg-prod/images/ps5-bundles-655f6506b008c.jpg' alt='' />
                </div>
                <div className='course-back'>
                <p className='course-back-text'>Access</p>
                  <p className='course-back-name'>Game Developing</p>
                  <p className='course-back-text'>course?</p>
                </div>
              </div>
            </a>
            <a className='course' href='/'>
              <div className='course-content'>
                <div className='course-front'>
                  <h3 className='course-title'>Game developing</h3>
                  <img className='course-img' src='https://hips.hearstapps.com/hmg-prod/images/ps5-bundles-655f6506b008c.jpg' alt='' />
                </div>
                <div className='course-back'>
                <p className='course-back-text'>Access</p>
                  <p className='course-back-name'>Game Developing</p>
                  <p className='course-back-text'>course?</p>
                </div>
              </div>
            </a>
            <a className='course' href='/'>
              <div className='course-content'>
                <div className='course-front'>
                  <h3 className='course-title'>Game developing</h3>
                  <img className='course-img' src='https://hips.hearstapps.com/hmg-prod/images/ps5-bundles-655f6506b008c.jpg' alt='' />
                </div>
                <div className='course-back'>
                <p className='course-back-text'>Access</p>
                  <p className='course-back-name'>Game Developing</p>
                  <p className='course-back-text'>course?</p>
                </div>
              </div>
            </a>
            <a className='course' href='/'>
              <div className='course-content'>
                <div className='course-front'>
                  <h3 className='course-title'>Game developing</h3>
                  <img className='course-img' src='https://hips.hearstapps.com/hmg-prod/images/ps5-bundles-655f6506b008c.jpg' alt='' />
                </div>
                <div className='course-back'>
                <p className='course-back-text'>Access</p>
                  <p className='course-back-name'>Game Developing</p>
                  <p className='course-back-text'>course?</p>
                </div>
              </div>
            </a>
            <a className='course' href='/'>
              <div className='course-content'>
                <div className='course-front'>
                  <h3 className='course-title'>Game developing</h3>
                  <img className='course-img' src='https://hips.hearstapps.com/hmg-prod/images/ps5-bundles-655f6506b008c.jpg' alt='' />
                </div>
                <div className='course-back'>
                  <p className='course-back-text'>Access</p>
                  <p className='course-back-name'>Game Developing</p>
                  <p className='course-back-text'>course?</p>
                </div>
              </div>
            </a>
            <a className='course' href='/'>
              <div className='course-content'>
                <div className='course-front'>
                  <h3 className='course-title'>Game developing</h3>
                  <img className='course-img' src='https://hips.hearstapps.com/hmg-prod/images/ps5-bundles-655f6506b008c.jpg' alt='' />
                </div>
                <div className='course-back'>
                  <p className='course-back-text'>Access</p>
                  <p className='course-back-name'>Game Developing</p>
                  <p className='course-back-text'>course?</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='duolingo'>
          <div className='duolingo-content'></div>
          <div className='duolingo-decoration'>
            <div className='duolingo-decoration-block1'></div>
            <div className='duolingo-decoration-block2'></div>
            <div className='duolingo-decoration-characters'><img className='duolingo-decoration-characters-image' src='https://imgur.com/X8RyrDh.png' alt='duolingo decoration characters'/> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

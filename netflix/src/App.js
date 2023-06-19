import './App.css';
import React from 'react';
import { BsGlobe } from 'react-icons/bs';

function App() {
  return (
    <div className="App">
     {/* navbar */}
     <nav className="navbar">
        <div className="navbar__brand">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="logo"
            className="brand__logo"
          />
        </div>

        <div className="navbar__nav__items">
          <div className="nav__item">
            <div className="dropdown__container">
              <i className="globe"><BsGlobe/></i>
              <select
                name="languages"
                id="languagesSelect"
                className="language__drop__down"
              >
                <option value="english" selected>English</option>
                <option value="hindi">हिन्दी</option>
              </select>
            </div>
          </div>

          <div clasclassNames="nav__item">
            <button className="signin__button">Sign in</button>
          </div>
        </div>
     </nav>
     <section className="hero">
        <div className="hero__bg__image__container">
        <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="logo"
            className="hero__bg__image"
          />
        </div>
        <div className="hero__bg__overlay"></div>

        <div className="hero__card">
          <h1 className="hero__title">
            Unlimited Movies TV, Shows and More.
          </h1>
          <p className="hero__subtitle">Watch anywhere and cancel anytime.</p>
          <p className="hero__description">
            Ready to watch? Enter your email to create or restart your
            membership .
          </p>

          <div className="email__form__container">
            <div className="form__container">
              <input type="email" className="email__input" placeholder=" " />
              <label className="email__label">Email Address</label>
            </div>
            <button className ="primary__button">
              Get Started <i class="fal fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      <section>
      <div className="feature">
          <div className="feature__details">
            <h3 className="feature__title">Enjoy on your TV.</h3>
            <h5 className="feature__sub__title">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h5>
          </div>
          <div className="feature__image__container">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="feature_image"
            className="feature__image"
          />
            <div className="feature__backgroud__video__container">
              <video autoplay="" loop="" muted="" className="feature__backgroud__video">
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

import React from 'react';

import './App.scss';
import imgProfile from '../src/assets/images/img_profile.jpg';
import appStore from '../src/assets/images/app-store.png';
import googlePlay from '../src/assets/images/google-play.png';

import Vproperty from '../src/assets/images/works/Vproperty.png';
import TiffanyShow from '../src/assets/images/works/TiffanyShow.png';
import Carfinn from '../src/assets/images/works/Carfinn.png';
import AnastasiaWeb from '../src/assets/images/works/Anastasia-web.png';
import LegendSiam from '../src/assets/images/works/LegendSiam.png';
import anatasiaMobile from '../src/assets/images/works/anatasia-mobile.png';
import PropAsst from '../src/assets/images/works/PropAsst.png';

import react from '../src/assets/images/stacks/react.png';
import reactNative from '../src/assets/images/stacks/react-native.png';
import nextjs from '../src/assets/images/stacks/nextjs.png';
import nodejs from '../src/assets/images/stacks/nodejs.png';
import firebase from '../src/assets/images/stacks/firebase.png';
import antdesign from '../src/assets/images/stacks/antdesign.png';
import bootsrap from '../src/assets/images/stacks/bootsrap.png';

const stacks = [
  {
    name: 'react',
    icon: react,
  },
  {
    name: 'reactNative',
    icon: reactNative,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
  {
    name: 'nodejs',
    icon: nodejs,
  },
  {
    name: 'firebase',
    icon: firebase,
  },
  {
    name: 'bootsrap',
    icon: bootsrap,
  },
  {
    name: 'antdesign',
    icon: antdesign,
  },
];

const myWorks = [
  {
    name: 'Vproperty',
    platform: 'web',
    description:
      'V Property Development is a leader in condominium development near the Bangkok BTS station.',
    image: Vproperty,
    link: { web: 'https://www.vproperty.co.th' },
  },
  {
    name: 'Tiffany Show',
    platform: 'web',
    description:
      "Tiffany's Show is the original transvestite cabaret show in Pattaya, a uniquely Thai production now in its 40th year.",
    image: TiffanyShow,
    link: { web: 'https://www.tiffany-show.co.th' },
  },
  {
    name: 'Carfinn',
    platform: 'web',
    description:
      'Carfinn International Company Limited is a company that operates a full range of car loan business.',
    image: Carfinn,
    link: { web: 'https://carfinn.com' },
  },
  {
    name: 'Anastasia Miaray',
    platform: 'web',
    description:
      'ANASTASIA MIARAY Awaken To Beauty by Restyling Your Eyebrows... Gracefully Perfect Arc',
    image: AnastasiaWeb,
    link: { web: 'http://anastasiath.herokuapp.com' },
  },
  {
    name: 'Legend Siam',
    image: LegendSiam,
    platform: 'web',
    description:
      'This new theme park in Pattaya is serves as Thai cultural showroom presenting local wisdom and identities from 77 provinces nationwide through art, traditions, beliefs, lifestyle, food, play and performances.',
    link: {},
  },
  {
    name: 'Anastasia Miaray Mobile App',
    image: anatasiaMobile,
    platform: 'app',
    description: '',
    link: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.anastasia',
      appStore: 'https://apps.apple.com/th/app/anastasia-miaray/id1494113883',
      web: '',
    },
  },
  {
    name: 'Property Assistant by TheAgent',
    image: PropAsst,
    platform: 'app',
    description: '',
    link: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.tenancy',
      appStore: 'https://apps.apple.com/us/app/prop-asst/id1315563657?ls=1',
      web: '',
    },
  },
];

function App() {
  return (
    <div className="App">
      <section id="banner">
        <div className="container" style={{ height: '100%' }}>
          <div className="info">
            <img
              className="profile-image"
              src={imgProfile}
              alt="Nutthayaporn"
            />
            <h1>Nutthayaporn Lewthanawat</h1>
            <h2>Full-Stack Developer</h2>
            <div className="stacks-block">
              {stacks.map((stack, index) => {
                const name = stack.name;
                const icon = stack.icon;
                return (
                  <div className="stack-item" key={index}>
                    <img src={icon} alt={name} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section id="works">
        <div className="container">
          {myWorks.map((myWork, index) => {
            const name = myWork.name;
            const description = myWork.description;
            const image = myWork.image;
            const link = myWork.link?.web;
            const googlePlayLink = myWork.link?.googlePlay;
            const appStoreLink = myWork.link?.appStore;
            const platform = myWork.platform;
            const isEven = index % 2 === 0;
            return (
              <div className="work-block" key={index}>
                <div className="row">
                  <div
                    className={`col-md-6 ${
                      isEven ? 'order-1 order-md-1' : 'order-1 order-md-2'
                    }`}
                  >
                    <img src={image} alt={name} />
                  </div>
                  <div
                    className={`col-md-6 ${
                      isEven ? 'order-2 order-md-2' : 'order-2 order-md-1'
                    }`}
                  >
                    <div className="work-info" style={{ padding: isEven ? '0 20px 0 0' : '0 0 0 30px' }}>
                      <h4>{name}</h4>
                      <h5>{description}</h5>
                      {link && platform === 'web' && (
                        <div className="link-button">
                          <a href={link} target="_blank">
                            <button>
                              <div className="background-layer" />
                              <span>Visit Website</span>
                            </button>
                          </a>
                        </div>
                      )}
                      {link && platform === 'app' && (
                        <div className="link-button">
                          <a href={appStoreLink} target="_blank">
                            <img src={appStore} alt="appStore" />
                          </a>
                          <a href={googlePlayLink} target="_blank">
                            <img src={googlePlay} alt="googlePlay" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;

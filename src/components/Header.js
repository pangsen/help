import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import './styles.css';
import config from '../../config.js';

import Loadable from 'react-loadable';
import LoadingProvider from './mdxComponents/loading';
import GitHubButton from 'react-github-btn';

import help from './images/help.svg';
import twitter from './images/twitter.svg';

const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

import Sidebar from './sidebar';

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}


const Header = ({ location }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={(data) => {

      const {
        site: {
          siteMetadata: { headerTitle, githubUrl, helpUrl, tweetText, headerLinks },
        },
      } = data;

      return (
        <div>
          <div className={'navBarWrapper'}>
            <nav className={'navBarDefault'}>
              <div className={'navBarHeader'}>
                <div
                  className={'headerTitle displayInline'}
                  dangerouslySetInnerHTML={{ __html: headerTitle }}
                />
                <span role="button" tabIndex="0" onClick={myFunction} onKeyDown={myFunction} className={'navBarToggle'}>
                  <span className={'iconBar'}></span>
                  <span className={'iconBar'}></span>
                  <span className={'iconBar'}></span>
                </span>
              </div>

              {isSearchEnabled ? (
                <div className={'searchWrapper hiddenMobile navBarUL'}>
                  <LoadableComponent collapse={true} indices={searchIndices} />
                </div>
              ) : null}
              {config.header.social ? (
              <ul
                className="socialWrapper visibleMobileView"
              >
                {headerLinks.map((link, key) => {
                  if (link.link !== '' && link.text !== '') {
                    return (
                      <li key={key}>
                        <a
                          className="sidebarLink"
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          dangerouslySetInnerHTML={{ __html: link.text }}
                        />
                      </li>
                    );
                  }
                })}
                {helpUrl !== '' ? (
                  <li>
                    <a href={helpUrl}>
                      <img src={help} alt={'Help icon'} />
                    </a>
                  </li>
                ) : null}

                {tweetText !== '' ? (
                  <li>
                    <a
                      href={'https://twitter.com/intent/tweet?&text=' + tweetText}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className={'shareIcon'} src={twitter} alt={'Twitter'} />
                    </a>
                  </li>
                ) : null}
                {tweetText !== '' || githubUrl !== '' ? (
                  <li className="divider hiddenMobile"></li>
                ) : null}
                {config.header.social ? (
                  <li className={'hiddenMobile'}>
                    <ul
                      className="socialWrapper"
                      dangerouslySetInnerHTML={{ __html: config.header.social }}
                    ></ul>
                  </li>
                ) : null}
                {githubUrl !== '' ? (
                  <li className={'githubBtn'}>
                    <GitHubButton
                      href={githubUrl}
                      data-show-count="true"
                      aria-label="Star on GitHub"
                    >
                      Star
                    </GitHubButton>
                  </li>
                ) : null}




              </ul>
            ) : null}

              <div id="navbar" className={'topnav'}>
                <div className={'visibleMobile'}>
                  <Sidebar location={location} />
                  <hr />
                    {isSearchEnabled ? (
                    <div className={'searchWrapper'}>
                      <LoadableComponent collapse={true} indices={searchIndices} />
                    </div>
                  ) : null}
                </div>
              </div>
            </nav>
          </div>
        </div>
      );
    }}
  />
);

export default Header;

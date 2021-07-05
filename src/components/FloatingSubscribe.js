import React, { Fragment, useState, useEffect } from 'react';
import './floatingStyles.scss';
// import SubscribeForm from './SubscribeForm'
import MarketoForm from './marketoform';
const marketoHost = 'https://page.hasura.io';

import closeSubscribe from "./images/close-subscribe.svg";

const FloatingSubscribe = ({ handleNewsletterClose, hideNewsletter, location }) => {
  // let styleShow;
  // if (isShowHideMobile === 'mobileHide') {
  //   styleShow = 'mobileHide'
  // } else if (isShowHideMobile === 'mobileShow') {
  //   styleShow = 'mobileShow'
  // };
  const [isAliId, setIsAliId] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const searchAliId = searchParams.get('aliId');

    if (searchAliId || searchAliId === '') {
      setIsAliId(true);
    }
  }, [location.search]);
  return (
    <Fragment>
      {!hideNewsletter ? (
        <div className={'floating-subscribe-wrapper'}>
          <div
            role="button"
            tabIndex="0"
            className="floating-subscribe-close"
            onClick={() => {
              handleNewsletterClose();
            }}
            onKeyDown={() => {
              handleNewsletterClose();
            }}
          >
            <img src={closeSubscribe} alt="Close" />
          </div>
          <h2>Alibaba Cloudを使ってみますか？</h2>
          <div className="post-subscription-description">
          SBクラウドのPSD・MSPをご利用いただけますと、Alibaba Cloudによるサービスを素早く構築してくれます。
          </div>
          {isAliId ? (
            <div className="subscribeNewsletterSuccess articleDesc fontBold">
              {/* <img src={newsletterSuccess} alt="Success" /> */}
              テクニカルサイト閲覧をありがとうございます。
            </div>
          ) : (
            <MarketoForm
              formId="1079"
              marketoHost={marketoHost}
              id="631-HMN-492"
              styleClass="marketoFormWrapper"
              marketoScriptId="mktoForms1"
            />
          )}
        </div>
      ) : null}
    </Fragment>
  );
};

export default FloatingSubscribe;

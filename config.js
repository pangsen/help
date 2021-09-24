const config = {
	"gatsby": {
		"pathPrefix": "/help/",
    "pathPrefix_remove_slash": "/help",
		"siteUrl": "https://sbcloud.github.io/help/",
		"gaTrackingId": null,
		"trailingSlash": false
	},
	"header": {
		"title": "<a href='https://sbcloud.github.io/help/'><img class='img-responsive' src='https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/TechnicalSite_4.png' alt='Learn logo' /></a>",
		"githubUrl": "https://sbcloud.github.io/help/",
		"helpUrl": "",
		"tweetText": "",
    "social": `<li>
    <a href="https://twitter.com/sbcloud_pr" target="_blank" rel="noopener">
      <div class="twitterBtn">
        <img src='https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/twitter-brands-block.svg' alt={'Twitter'}/>
      </div>
    </a>
        </li>
        <li>
    <a href="https://www.facebook.com/SBCloud/" target="_blank" rel="noopener">
      <div class="twitterBtn">
        <img src='https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/facebook.svg' alt={'facebook'}/>
      </div>
    </a>
  </li>
  <li>
    <a href="https://www.youtube.com/channel/UCLI7MTGFxKxjsEUH-oNvy8w" target="_blank" rel="noopener">
      <div class="twitterBtn">
        <img src='https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/youtube.svg' alt={'youtube'}/>
      </div>
    </a>
  </li>
  <li>
    <a href="https://www.slideshare.net/sbcloud" target="_blank" rel="noopener">
      <div class="twitterBtn">
        <img src='https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/slideshare.svg' alt={'slideshare'}/>
      </div>
    </a>
  </li>
  <li>
  <a href="https://sbcloud.github.io/help/rss.xml" target="_blank" rel="noopener">
    <div class="twitterBtn">
      <img src='https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/rss.svg' alt={'RSS'}/>
    </div>
  </a>
</li>`,
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
      enabled: true,
      indexName: 'technical.site.algolia',
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
      "/introduction",
      "/advisory",
      "/product_service",
      "/migration",
      "/DaaS",
      "/network-connect-case",
      "/usecase-serverless",
      "/usecase-computing",
      "/usecase-storage",
      "/usecase-network",
      "/usecase-Application",
      "/usecase-kubernetes",
      "/usecase-LogService",
      "/usecase-MaxCompute",
      "/usecase-Hologres",
      "/usecase-Elasticsearch",
      "/usecase-ClickHouse",
      "/usecase-DataLakeAnalytics",
      "/usecase-datav",
      "/usecase-security",
      "/usecase-media",
      "/usecase-iot",
      "/usecase-AI",
      "/developer-tools",
      "/Terraform",
      "/ICP"
		],
    	"collapsedNav": [
        "/introduction",
        "/advisory",
        "/product_service",
        "/migration",
        "/DaaS",
        "/network-connect-case",
        "/usecase-serverless",
        "/usecase-computing",
        "/usecase-storage",
        "/usecase-network",
        "/usecase-Application",
        "/usecase-kubernetes",
        "/usecase-LogService",
        "/usecase-MaxCompute",
        "/usecase-Hologres",
        "/usecase-Elasticsearch",
        "/usecase-ClickHouse",
        "/usecase-DataLakeAnalytics",
        "/usecase-datav",
        "/usecase-security",
        "/usecase-media",
        "/usecase-iot",
        "/usecase-AI",
        "/developer-tools",
        "/Terraform",
        "/ICP"
    	],
      "links":[{ text: 'お問い合わせ', link: 'https://www.sbcloud.co.jp/contact_jp/' },{ text: 'よくある質問はTSSへ', link: 'https://www.sbcloud.co.jp/service/about/ts/' }],
      "frontline": true,
      "ignoreIndex": true,
	},
	"siteMetadata": {
    "title": 'Alibaba Cloud テクニカルリファレンス',
    "description": 'SBクラウドによる Alibaba Cloud テクニカルリファレンスです',
    "ogImage": null,
    "docsLocation": 'https://github.com/sbcloud/help/tree/master/content',
    "favicon": 'https://www.sbcloud.co.jp/icon/favicon',
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Alibaba Cloud technical.site",
			"short_name": "AliCloud-technical.site",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;

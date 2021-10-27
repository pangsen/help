const config = {
	"gatsby": {
		"pathPrefix": "/help/",
    "pathPrefix_remove_slash": "/help",
		"siteUrl": "https://sbcloud.github.io/help/",
		"gaTrackingId": null,
		"trailingSlash": false
	},
	"header": {
		"title": "<a href='https://sbcloud.github.io/help/'><img class='img-responsive' src='https://raw.githubusercontent.com/sbcloud/help/master/src/components/images/TechnicalSite_5.png' alt='Learn logo' /></a>",
		"githubUrl": "https://sbcloud.github.io/help/",
		"helpUrl": "",
		"tweetText": "",
    "social": `
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
      enabled: false,
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
      "/WebApplication-tutorial",
      "/DataAnalytics-tutorial",
      "/network-connect-case",
      "/usecase-serverless",
      "/usecase-computing",
      "/usecase-storage",
      "/usecase-network",
      "/usecase-Database",
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
      "/usecase-3rdParty",
      "/ICP"
		],
    	"collapsedNav": [
        "/introduction",
        "/advisory",
        "/product_service",
        "/migration",
        "/DaaS",
        "/WebApplication-tutorial",
        "/DataAnalytics-tutorial",
        "/network-connect-case",
        "/usecase-serverless",
        "/usecase-computing",
        "/usecase-storage",
        "/usecase-network",
        "/usecase-Database",
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
        "/usecase-3rdParty",
        "/ICP"
    	],
      "links":[{ text: 'お問い合わせ', link: 'https://www.sbcloud.co.jp/contact_jp/' },{ text: 'よくある質問はTSSへ', link: 'https://www.sbcloud.co.jp/service/about/ts/' }],
      "frontline": true,
      "ignoreIndex": true,
	},
	"siteMetadata": {
    "title": 'Alibaba Cloud テクニカルリファレンス',
    "description": 'SoftBank による Alibaba Cloud テクニカルリファレンスです',
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

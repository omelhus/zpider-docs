const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://docs.zpider.io",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://www.on-it.no/wp-content/themes/on-it/style/images/on_it_logo.png",
		"logoLink": "/",
		"title": "Zpider eShop Docs",
		"githubUrl": "https://github.com/omelhus/zpider-docs",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction"
		],
		"links": [
			{ "text": "zpider.io", "link": "https://zpider.io"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Zpider eShop Help | ON IT",
		"description": "Documentation built with mdx. Powering learn.hasura.io ",
		"ogImage": null,
		"docsLocation": "https://github.com/omelhus/zpider-docs/tree/master/content",
		"favicon": "https://www.on-it.no/wp-content/themes/on-it/favicon.ico"
	},
};

module.exports = config;
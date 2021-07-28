// gatsby-config.js
module.exports = {
	siteMetadata: {
		title: `Lian Ariel Yoga`,
		description: `Lian Ariel Yoga.`,
		author: `@salemaziel`
	},
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Lian Ariel Yoga`,
				short_name: `Lian Ariel`,
				start_url: `/`,
				background_color: `#065f46`,
				theme_color: `#065f46`,
				display: `minimal-ui`,
				icon: `src/images/stock_circular_yoga_outlines/chakra-5628622_1920.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-gatsby-cloud`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};

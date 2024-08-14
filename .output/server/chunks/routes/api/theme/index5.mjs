import { d as defineEventHandler } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

var id = 1;
var content = {
	home_banner: {
		status: true,
		main_banner: {
			image_url: "/images/data/themes/paris/1.jpg",
			redirect_link: {
				link: "vegetables-fruits",
				link_type: "collection"
			}
		},
		sub_banner_1: {
			image_url: "/images/data/themes/paris/2.jpg",
			redirect_link: {
				link: "grocery-staples",
				link_type: "collection"
			}
		},
		sub_banner_2: {
			image_url: "/images/data/themes/paris/2.jpg",
			redirect_link: {
				link: "vegetables-fruits",
				link_type: "collection",
				product_ids: 19
			}
		}
	},
	featured_banners: {
		status: true,
		banners: [
			{
				redirect_link: {
					link: "vegetables-fruits",
					link_type: "collection"
				},
				status: true,
				image_url: "/images/data/themes/paris/3.jpg"
			},
			{
				redirect_link: {
					link: "vegetables-fruits",
					link_type: "collection"
				},
				status: true,
				image_url: "/images/data/themes/paris/3.jpg"
			},
			{
				redirect_link: {
					link: "vegetables-fruits",
					link_type: "collection"
				},
				status: true,
				image_url: "/images/data/themes/paris/3.jpg"
			},
			{
				redirect_link: {
					link: "vegetables-fruits",
					link_type: "collection"
				},
				status: true,
				image_url: "/images/data/themes/paris/3.jpg"
			}
		]
	},
	main_content: {
		status: true,
		sidebar: {
			status: true,
			categories_icon_list: {
				title: "Popular Categories",
				category_ids: [
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10
				],
				status: true
			},
			left_side_banners: {
				status: true,
				banner_1: {
					image_url: "/images/data/themes/paris/4.jpg",
					redirect_link: {
						link: "vegetables-fruits",
						link_type: "collection"
					}
				},
				banner_2: {
					image_url: "/images/data/themes/paris/5.jpg",
					redirect_link: {
						link: "vegetables-fruits",
						link_type: "collection"
					}
				}
			},
			sidebar_products: {
				title: "Trending Products",
				status: true,
				product_ids: [
					1,
					2,
					4,
					6
				]
			}
		},
		section1_products: {
			title: "Top Save Today",
			description: "Don't miss this opportunity at a special discount just for this week.",
			product_ids: [
				8,
				10,
				15,
				18,
				16,
				12
			],
			status: true
		},
		section2_categories_list: {
			image_url: null,
			title: "Bowse By Categories",
			description: "Uncover Hidden Gems and Culinary Delights",
			category_ids: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				10,
				9
			],
			status: true
		},
		section3_two_column_banners: {
			status: true,
			banner_1: {
				image_url: "/images/data/themes/paris/6.jpg",
				redirect_link: {
					link: "vegetables-fruits",
					link_type: "collection"
				}
			},
			banner_2: {
				image_url: "/images/data/themes/paris/6.jpg",
				redirect_link: {
					link: "vegetables-fruits",
					link_type: "collection"
				}
			}
		},
		section4_products: {
			title: "Fresh Veggies and Fruits",
			description: "Unlocking the Pantry: A Journey into Essential Veggies Staples",
			status: true,
			product_ids: [
				19,
				17,
				7,
				9,
				11,
				13
			]
		},
		section5_coupons: {
			image_url: "/images/data/themes/paris/7.jpg",
			redirect_link: {
				link: "vegetables-fruits",
				link_type: "collection"
			},
			status: true
		},
		section6_two_column_banners: {
			status: true,
			banner_1: {
				image_url: "/images/data/themes/paris/8.jpg",
				redirect_link: {
					link: "vegetables-fruits",
					link_type: "collection"
				}
			},
			banner_2: {
				image_url: "/images/data/themes/paris/9.jpg",
				redirect_link: {
					link: "vegetables-fruits",
					link_type: "collection",
					product_ids: "external_url"
				}
			}
		},
		section7_products: {
			title: "Our Best Seller",
			description: "A virtual assistant collects the products from your list.",
			status: true,
			product_ids: [
				6,
				10,
				2,
				3,
				8,
				1,
				4,
				7,
				12,
				11,
				9,
				18
			]
		},
		section8_full_width_banner: {
			image_url: "/images/data/themes/paris/10.jpg",
			redirect_link: {
				link: "vegetables-fruits",
				link_type: "collection"
			},
			status: true
		},
		section9_featured_blogs: {
			title: "Featured Blog",
			description: "Uncover Intriguing Highlights in Our Featured Blog",
			status: true,
			blog_ids: [
				10,
				14,
				23
			]
		}
	},
	news_letter: {
		title: "Join Our Newsletter And Get...",
		sub_title: "$20 discount for your first order",
		image_url: "/images/data/newsletter.jpg",
		status: true
	},
	products_ids: [
		19,
		1,
		2,
		4,
		6,
		8,
		10,
		15,
		18,
		16,
		12,
		17,
		7,
		9,
		11,
		13,
		3
	]
};
var slug = "paris";
const paris = {
	id: id,
	content: content,
	slug: slug
};

const index = defineEventHandler((event) => {
  return paris;
});

export { index as default };

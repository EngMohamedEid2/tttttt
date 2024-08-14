import { d as defineEventHandler } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

var id = 4;
var content = {
	home_banner: {
		status: true,
		bg_image_url: "/images/data/themes/rome/rome_07.png",
		main_banner: {
			image_url: "/images/data/themes/rome/1.jpg",
			redirect_link: {
				link: "vegetables-fruits",
				link_type: "collection"
			}
		},
		sub_banner_1: {
			image_url: "/images/data/themes/rome/2.jpg",
			redirect_link: {
				link: "vegetables-fruits",
				link_type: "collection"
			}
		},
		sub_banner_2: {
			image_url: "/images/data/themes/rome/3.jpg",
			redirect_link: {
				link: "vegetables-fruits",
				link_type: "collection"
			}
		},
		sub_banner_3: {
			image_url: "/images/data/themes/rome/3.jpg",
			redirect_link: {
				link: "vegetables-fruits",
				link_type: "collection"
			}
		}
	},
	categories_image_list: {
		title: "Shop By Categories",
		category_ids: [
			1,
			2,
			22,
			21,
			20,
			19,
			18,
			6
		],
		status: true
	},
	value_banners: {
		title: "Best Valuable Deals",
		status: true,
		banners: [
			{
				redirect_link: {
					link: "vegetables-fruits",
					link_type: "collection"
				},
				status: true,
				image_url: "/images/data/themes/rome/4.jpg"
			},
			{
				redirect_link: {
					link: "vegetables-fruits",
					link_type: "collection"
				},
				status: true,
				image_url: "/images/data/themes/rome/4.jpg"
			},
			{
				redirect_link: {
					link: "vegetables-fruits",
					link_type: "collection"
				},
				status: true,
				image_url: "/images/data/themes/rome/4.jpg"
			}
		]
	},
	categories_products: {
		title: "Our Products",
		status: true,
		category_ids: [
			6,
			5
		]
	},
	two_column_banners: {
		status: true,
		banner_1: {
			image_url: "/images/data/themes/rome/5.jpg",
			redirect_link: {
				link: "vegetables-fruits",
				link_type: "collection"
			}
		},
		banner_2: {
			image_url: "/images/data/themes/rome/5.jpg",
			redirect_link: {
				link: "vegetables-fruits",
				link_type: "collection"
			}
		}
	},
	slider_products: {
		status: true,
		product_slider_1: {
			title: "New Products",
			product_ids: [
				6,
				1,
				13
			],
			status: true
		},
		product_slider_2: {
			title: "Featured Products",
			product_ids: [
				12,
				18,
				19
			],
			status: true
		},
		product_slider_3: {
			title: "Best Seller",
			product_ids: [
				2,
				15,
				9
			],
			status: true
		},
		product_slider_4: {
			title: "Trending Products",
			product_ids: [
				8,
				10,
				14
			],
			status: true
		}
	},
	full_width_banner: {
		redirect_link: {
			link: "vegetables-fruits",
			link_type: "collection"
		},
		image_url: "/images/data/themes/rome/7.jpg",
		status: true
	},
	products_list_1: {
		title: "Top Products",
		status: true,
		product_ids: [
			4,
			7,
			15,
			17,
			16,
			1,
			20
		]
	},
	featured_blogs: {
		title: "Featured Blog",
		status: true,
		blog_ids: [
			24,
			23,
			20,
			22,
			21
		]
	},
	news_letter: {
		title: "Subscribe to the newsletter",
		sub_title: "Join our subscribers list to get the latest news, updates and special offers  delivered directly in your inbox.",
		image_url: "/images/data/newsletter.png",
		status: true
	},
	products_ids: [
		6,
		1,
		13,
		12,
		18,
		19,
		2,
		15,
		9,
		8,
		10,
		14,
		4,
		7,
		17,
		16,
		20
	]
};
var slug = "rome";
const rome = {
	id: id,
	content: content,
	slug: slug
};

const index = defineEventHandler((event) => {
  return rome;
});

export { index as default };

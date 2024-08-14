import { d as defineEventHandler } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

var id = 2;
var content = {
	home_banner: {
		status: true,
		main_banner: {
			image_url: "/images/data/themes/tokyo/1.jpg",
			redirect_link: {
				link: "biscuits-snacks",
				link_type: "collection"
			}
		},
		sub_banner_1: {
			image_url: "/images/data/themes/tokyo/2.jpg",
			redirect_link: {
				link: "grocery-staples",
				link_type: "collection"
			}
		},
		sub_banner_2: {
			image_url: "/images/data/themes/tokyo/2.jpg",
			redirect_link: {
				link: "daily-breakfast",
				link_type: "collection"
			}
		}
	},
	categories_icon_list: {
		image_url: "/images/data/themes/tokyo/3.jpg",
		category_ids: [
			1,
			2,
			3,
			4,
			5,
			6,
			8,
			9,
			10
		],
		status: true
	},
	coupons: {
		status: true,
		image_url: "/images/data/themes/tokyo/4.jpg",
		redirect_link: {
			link: "biscuits-snacks",
			link_type: "collection"
		}
	},
	featured_banners: {
		status: true,
		banners: [
			{
				redirect_link: {
					link: "biscuits-snacks",
					link_type: "collection",
					product_ids: null
				},
				image_url: "/images/data/themes/tokyo/5.jpg",
				status: true
			},
			{
				redirect_link: {
					link: "biscuits-snacks",
					link_type: "collection",
					product_ids: null
				},
				image_url: "/images/data/themes/tokyo/5.jpg",
				status: true
			},
			{
				redirect_link: {
					link: "biscuits-snacks",
					link_type: "collection",
					product_ids: null
				},
				image_url: "/images/data/themes/tokyo/5.jpg",
				status: true
			},
			{
				redirect_link: {
					link: 40,
					link_type: "product",
					product_ids: 40
				},
				image_url: "/images/data/themes/tokyo/5.jpg",
				status: true
			}
		]
	},
	main_content: {
		sidebar: {
			status: true,
			right_side_banners: {
				status: true,
				banner_1: {
					image_url: "/images/data/themes/tokyo/6.jpg",
					redirect_link: {
						link: "biscuits-snacks",
						link_type: "collection"
					}
				},
				banner_2: {
					image_url: "/images/data/themes/tokyo/7.jpg",
					redirect_link: {
						link: "biscuits-snacks",
						link_type: "collection"
					}
				}
			}
		},
		section1_products: {
			title: "Top Save Today",
			status: true,
			product_ids: [
				40,
				44,
				39,
				31,
				36
			]
		},
		section2_slider_products: {
			title: "Bakery Delights for Everyone",
			status: true,
			product_ids: [
				25,
				28,
				35,
				39,
				43,
				27,
				31,
				29,
				44
			]
		},
		section3_products: {
			title: "Your Daily Staples",
			status: true,
			product_ids: [
				26,
				29,
				43,
				41,
				44,
				34
			]
		},
		section4_products: {
			title: "Popular Snakes",
			status: true,
			product_ids: [
				41,
				37,
				35,
				31,
				27,
				22,
				25
			]
		}
	},
	full_width_banner: {
		image_url: "/images/data/themes/tokyo/8.jpg",
		status: true,
		redirect_link: {
			link: "grocery-staples",
			link_type: "collection"
		}
	},
	slider_products: {
		status: true,
		product_slider_1: {
			title: "Top Selling",
			product_ids: [
				25,
				26,
				27
			],
			status: true
		},
		product_slider_2: {
			title: "Trending Products",
			product_ids: [
				40,
				22,
				31
			],
			status: true
		},
		product_slider_3: {
			title: "Recently added",
			product_ids: [
				42,
				38,
				32
			],
			status: true
		},
		product_slider_4: {
			title: "Top Rated",
			product_ids: [
				45,
				43,
				41
			],
			status: true
		}
	},
	news_letter: {
		title: "Join Our Newsletter And Get...",
		sub_title: "$20 discount for your first order",
		image_url: "/images/data/newsletter-1.jpg",
		status: true
	},
	products_ids: [
		40,
		44,
		39,
		31,
		36,
		25,
		28,
		35,
		43,
		27,
		29,
		26,
		41,
		34,
		37,
		22,
		42,
		38,
		32,
		45
	]
};
var slug = "tokyo";
const tokyo = {
	id: id,
	content: content,
	slug: slug
};

const index = defineEventHandler((event) => {
  return tokyo;
});

export { index as default };

import { d as defineEventHandler } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

var id = 6;
var content = {
	home_banner: {
		status: true,
		main_banner: {
			image_url: "/images/data/themes/berlin/1.jpg",
			redirect_link: {
				link: "furniture",
				link_type: "collection"
			}
		},
		sub_banner_1: {
			image_url: "/images/data/themes/berlin/2.jpg",
			redirect_link: {
				link: "furniture",
				link_type: "collection"
			}
		}
	},
	services_banner: {
		status: true,
		services: [
			{
				title: "Free Shipping",
				sub_title: "Free Shipping world wide",
				status: true,
				image_url: "/images/data/themes/berlin/7.png"
			},
			{
				title: "24 x 7 Service",
				sub_title: "Online Service For 24 x 7",
				status: true,
				image_url: "/images/data/themes/berlin/8.png"
			},
			{
				title: "Online Pay",
				sub_title: "Online Payment Available",
				status: true,
				image_url: "/images/data/themes/berlin/9.png"
			},
			{
				title: "Festival Offer",
				sub_title: "Super Sale Upto 50% off",
				status: true,
				image_url: "/images/data/themes/berlin/10.png"
			},
			{
				title: "100% Original",
				sub_title: "100% Money Back",
				status: true,
				image_url: "/images/data/themes/berlin/11.png"
			}
		]
	},
	main_content: {
		status: true,
		sidebar: {
			status: true,
			categories_icon_list: {
				title: "Shop By Categories",
				category_ids: [
					22,
					20,
					19,
					18,
					17
				],
				status: true
			},
			right_side_banners: {
				status: true,
				banner_1: {
					redirect_link: {
						link: "furniture",
						link_type: "collection"
					},
					image_url: "/images/data/themes/berlin/3.jpg"
				}
			},
			sidebar_products: {
				title: "Modern Furniture",
				status: true,
				product_ids: [
					59,
					57,
					55
				]
			}
		},
		section1_products: {
			title: "Top Save Today",
			description: "Don't miss this opportunity at a special discount just for this week.",
			product_ids: [
				55,
				57,
				50,
				59,
				53,
				49
			],
			status: true
		},
		section2_categories_icon_list: {
			title: "Categories",
			description: "Top Categories Of The Week",
			image_url: "/images/data/themes/berlin/12.png",
			category_ids: [
				22,
				21,
				20,
				19,
				18,
				17,
				9
			],
			status: true
		},
		section3_two_column_banners: {
			status: true,
			banner_1: {
				image_url: "/images/data/themes/berlin/4.jpg",
				redirect_link: {
					link: "furniture",
					link_type: "collection"
				}
			},
			banner_2: {
				image_url: "/images/data/themes/berlin/4.jpg",
				redirect_link: {
					link: "furniture",
					link_type: "collection"
				}
			}
		},
		section4_products: {
			title: "Elegant Designs",
			description: "Crafting timeless, sophisticated furniture for your dream living spaces",
			status: true,
			product_ids: [
				49,
				50,
				47,
				57,
				69,
				72,
				77
			]
		}
	},
	full_width_banner: {
		image_url: "/images/data/themes/berlin/5.jpg",
		redirect_link: {
			link: "furniture",
			link_type: "collection"
		}
	},
	product_list_1: {
		title: "Furniture Collections",
		description: "Contemporary designs for stylish, comfortable living spaces.",
		status: true,
		product_ids: [
			59,
			57,
			55,
			53,
			50,
			47,
			77,
			74,
			72,
			70,
			69,
			61
		]
	},
	news_letter: {
		title: "Join Our Newsletter And Get...",
		sub_title: "$20 discount for your first order",
		image_url: "/images/data/newsletter.jpg",
		status: true
	},
	products_ids: [
		59,
		57,
		55,
		50,
		53,
		49,
		47,
		69,
		72,
		77,
		74,
		70,
		61
	]
};
var slug = "berlin";
const berlin = {
	id: id,
	content: content,
	slug: slug
};

const index = defineEventHandler((event) => {
  return berlin;
});

export { index as default };

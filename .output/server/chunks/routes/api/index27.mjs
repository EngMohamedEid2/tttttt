import { d as defineEventHandler } from './index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

var id = 1;
var options = {
	general: {
		site_title: "FastKart Marketplace: Where Vendors Shine Together",
		site_tagline: "Shop Unique, Sell Exceptional – FastKart's Multi-Vendor Universe.",
		cart_style: "cart_sidebar",
		back_to_top_enable: true,
		language_direction: "ltr",
		primary_color: "#0da487",
		mode: "light"
	},
	logo: {
		header_logo_id: 4,
		footer_logo_id: 4,
		favicon_icon_id: 2,
		favicon_icon: {
			id: 2,
			collection_name: "attachment",
			name: "favicon",
			file_name: "favicon.png",
			mime_type: "image/png",
			disk: "public",
			conversions_disk: "public",
			size: "416",
			created_by_id: "1",
			created_at: "2023-08-24T08:16:03.000000Z",
			updated_at: "2023-08-24T08:16:03.000000Z",
			original_url: "/images/data/favicon.png"
		},
		header_logo: {
			id: 4,
			collection_name: "attachment",
			name: "logo-dark",
			file_name: "logo-dark.png",
			mime_type: "image/png",
			disk: "public",
			conversions_disk: "public",
			size: "4997",
			created_by_id: "1",
			created_at: "2023-08-24T08:16:03.000000Z",
			updated_at: "2023-08-24T08:16:03.000000Z",
			original_url: "/images/data/logo-dark.png"
		},
		footer_logo: {
			id: 4,
			collection_name: "attachment",
			name: "logo-dark",
			file_name: "logo-dark.png",
			mime_type: "image/png",
			disk: "public",
			conversions_disk: "public",
			size: "4997",
			created_by_id: "1",
			created_at: "2023-08-24T08:16:03.000000Z",
			updated_at: "2023-08-24T08:16:03.000000Z",
			original_url: "/images/data/logo-dark.png"
		}
	},
	header: {
		sticky_header_enable: true,
		header_options: "basic_header",
		page_top_bar_enable: true,
		top_bar_content: [
			{
				content: "<strong class=\"me-1\">Welcome to Fastkart!</strong>Wrap new offers/gift every single day on Weekends.<strong class=\"ms-1\">New Coupon Code: FAST50</strong>"
			},
			{
				content: "Something you love is now on sale <strong>Buy Now!</strong>"
			},
			{
				content: "Your must-have item is calling – <strong>Buy Now!</strong>"
			}
		],
		page_top_bar_dark: false,
		support_number: "+1-555-186-5359",
		today_deals: [
			1,
			12,
			8
		],
		category_ids: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		]
	},
	footer: {
		footer_style: "light_mode",
		footer_copyright: true,
		copyright_content: "©2023 Fastkart All rights reserved",
		footer_about: "Discover convenience redefined at our multipurpose store. From fresh groceries to the latest fashion trends, find everything you need under one roof. Your one-stop shopping destination for a diverse range of products.",
		about_address: "1418 Riverwood Drive, CA 96052, US",
		about_email: "support@fastkart.com",
		footer_categories: [
			6,
			5,
			4,
			3,
			2,
			1
		],
		help_center: [
			{
				label: "My Account",
				link: "account/dashboard"
			},
			{
				label: "My Orders",
				link: "account/order"
			},
			{
				label: "Wishlist",
				link: "wishlist"
			},
			{
				label: "Compare",
				link: "compare"
			},
			{
				label: "FAQ's",
				link: "faq"
			},
			{
				label: "Contact Us",
				link: "contact-us"
			}
		],
		useful_link: [
			{
				label: "Home",
				link: "home"
			},
			{
				label: "Collections",
				link: "collections"
			},
			{
				label: "About",
				link: "about-us"
			},
			{
				label: "Blogs",
				link: "blogs"
			},
			{
				label: "Offers",
				link: "offer"
			},
			{
				label: "Search",
				link: "search"
			}
		],
		support_number: "+1-555-186-5359",
		support_email: "support@fastkart.com",
		play_store_url: "https://play.google.com/",
		app_store_url: "https://apple.com/",
		social_media_enable: true,
		facebook: "https://facebook.com/",
		instagram: "https://instagram.com/",
		twitter: "https://twitter.com/",
		pinterest: "https://pinterest.com/"
	},
	collection: {
		collection_layout: "collection_category_slider",
		collection_banner_image_url: "/images/data/banner.png"
	},
	product: {
		product_layout: "product_thumbnail",
		is_trending_product: true,
		banner_enable: true,
		banner_image_url: "/images/data/banner-1.png",
		safe_checkout: true,
		safe_checkout_image: "/images/data/payments.png",
		secure_checkout: true,
		secure_checkout_image: "/images/data/secure_payments.png",
		encourage_order: true,
		encourage_max_order_count: 50,
		encourage_view: true,
		encourage_max_view_count: 50,
		sticky_checkout: true,
		sticky_product: true,
		social_share: true,
		shipping_and_return: "<p>Shipping and Returns are integral parts of your shopping experience, and we aim to make them as smooth as possible. We prioritize efficient shipping, striving to deliver your orders promptly within the estimated delivery window, typically ranging from 5 to 7 days. We understand that sometimes your purchase may not meet your expectations, so we offer a straightforward return policy. If you find yourself unsatisfied with your order, eligible items can be returned within 30 days of purchase, ensuring you have ample time to make a decision. Our commitment is to ensure your satisfaction and convenience throughout your shopping journey with us, and we're here to assist you every step of the way.</p><p><strong>Our Shipping Commitment:</strong></p><ul><li>Timely and reliable delivery within 5-7 days.</li><li>Real-time tracking for your orders.</li><li>Exceptional packaging to ensure your items arrive in perfect condition.</li></ul><p>&nbsp;</p><p><strong>Our Hassle-Free Returns:</strong></p><ul><li>Eligible items can be returned within 30 days.</li><li>Easy return initiation through our website.</li><li>Prompt processing of returns for a hassle-free experience.</li></ul><p>&nbsp;</p><p>We understand that your shopping needs may vary, and we are here to accommodate them while providing exceptional service.</p>"
	},
	blog: {
		blog_style: "grid_view",
		blog_sidebar_type: "left_sidebar",
		blog_author_enable: true,
		read_more_enable: true
	},
	seller: {
		about: {
			status: true,
			title: "Become a seller on Fastkart...",
			description: "Ready to showcase your products to the world? Join our dynamic marketplace and become a seller at our thriving multipurpose store. With a diverse customer base and a wide range of categories including groceries, fashion, electronics, and more, you'll have the perfect platform to reach a vast audience.\n\nAs a seller, you'll benefit from our user-friendly interface, seamless payment processing, and dedicated support to ensure your products shine. Whether you're a local artisan or a growing brand, our store provides the visibility and tools you need to succeed.\n\nTap into our established customer traffic, set up your shop with ease, and let your products take center stage. Join us in creating a shopping experience that caters to every need and taste. Your journey to success starts here – become a seller at our multipurpose store today!",
			image_url: "/images/data/banner-2.jpg"
		},
		services: {
			status: true,
			service_1: {
				title: "Lowest Cost",
				description: "Unlock quality at the lowest cost, exceeding expectations.",
				image_url: "/images/data/service.png"
			},
			service_2: {
				title: "Lowest Cost",
				description: "Unlock quality at the lowest cost, exceeding expectations.",
				image_url: "/images/data/service-2.png"
			},
			service_3: {
				title: "Dedicated Pickup",
				description: "Enjoy the convenience of dedicated pickup services for your orders.",
				image_url: "/images/data/service-3.png"
			},
			service_4: {
				title: "Most Approachable",
				description: "We take pride in being the most approachable choice for your needs.",
				image_url: "/images/data/service-4.png"
			}
		},
		steps: {
			status: true,
			title: "Doing Business on Fastkart is really easy",
			step_1: {
				title: "List Your Products & Get Support Provider",
				description: "Elevate your business by listing your products with us. Experience dedicated support services for your growth."
			},
			step_2: {
				title: "Receive orders & Schedule a pickup",
				description: "Effortlessly receive orders and schedule pickups for ultimate convenience. Your business is simplified."
			},
			step_3: {
				title: "Receive quick payment & grow your business",
				description: "Receive swift payments, fuel the growth of your business seamlessly, and watch your ventures thrive."
			}
		},
		start_selling: {
			status: true,
			title: "Start Selling",
			description: "Fastkart marketplace is India's leading platform for selling online. Be it a manufacturer, vendor or supplier, simply sell your products online on Fastkart and become a top ecommerce player with minimum investment. Through a team of experts offering exclusive seller workshops, training, seller support and convenient seller portal, Fastkart focuses on educating and empowering sellers across India. Selling on Fastkart.com is easy and absolutely free. All you need is to register, list your catalogue and start selling your products."
		},
		store_layout: "basic_store",
		store_details: "basic_store_details"
	},
	contact_us: {
		contact_image_url: "/images/data/contact-us.png",
		detail_1: {
			label: "Phone",
			icon: "ri-phone-line",
			text: "(+1) 618 190 496"
		},
		detail_2: {
			label: "Email",
			icon: "ri-mail-line",
			text: "support@fastkart.com"
		},
		detail_3: {
			label: "London Office",
			icon: "ri-map-pin-line",
			text: "Cruce Casa de Postas 29"
		},
		detail_4: {
			label: "Bournemouth Office",
			icon: "ri-building-line",
			text: "Visitación de la Encina 22"
		}
	},
	error_page: {
		error_page_content: "The page you are looking for could not be found. The link to this address may be outdated or we may have moved the since you last bookmarked it.",
		back_button_enable: true,
		back_button_text: "Back To Home"
	},
	seo: {
		meta_tags: "FastKart Marketplace: Where Vendors Shine Together",
		meta_title: "Online Marketplace, Vendor Collaboration, E-commerce Platform",
		meta_description: "Discover FastKart Marketplace – a vibrant online platform where vendors unite to showcase their products, creating a diverse shopping experience. Explore a wide range of offerings and connect with sellers on a single platform.",
		og_title: "FastKart Marketplace: Uniting Vendors for Shopping Excellence",
		og_description: "Experience a unique shopping journey at FastKart Marketplace, where vendors collaborate to provide a vast array of products. Explore, shop, and connect in one convenient destination.",
		og_image_id: 4,
		og_image: {
			id: 4,
			collection_name: "attachment",
			name: "logo-dark",
			file_name: "logo-dark.png",
			mime_type: "image/png",
			disk: "public",
			conversions_disk: "public",
			size: "4997",
			created_by_id: "1",
			created_at: "2023-08-24T08:16:03.000000Z",
			updated_at: "2023-08-24T08:16:03.000000Z",
			original_url: "/images/data/logo-dark.png"
		}
	},
	about_us: {
		about: {
			status: true,
			content_left_image_url: "https://laravel.pixelstrap.net/fastkart/storage/1480/about_1.jpg",
			content_right_image_url: "https://laravel.pixelstrap.net/fastkart/storage/1481/about_2.jpg",
			sub_title: "About Us",
			title: "We Make Organic Food In Market",
			description: "Just a few seconds to measure your body temperature. Up to 5 users! The battery lasts up to 2 years. There are many variations of passages of Lorem Ipsum available.We started in 2019 and haven't stopped smashing it since. A global brand that doesn't sleep, we are 24/7 and always bringing something new with over 100 new products dropping on the monhtly, bringing you the latest looks for less.",
			futures: [
				{
					icon: "https://laravel.pixelstrap.net/fastkart/storage/1484/delivery.svg",
					title: "Free delivery for all orders"
				},
				{
					icon: "https://laravel.pixelstrap.net/fastkart/storage/1483/leaf.svg",
					title: "Only fresh foods"
				}
			]
		},
		clients: {
			status: true,
			sub_title: "What We Do",
			title: "We Are Trusted By Clients",
			content: [
				{
					icon: "https://laravel.pixelstrap.net/fastkart/storage/1488/buy.svg",
					title: "Products Sales",
					description: "Some coffee shops have a seating area, while some just have a spot to order and then go somewhere else to sit down. The coffee shop that I am going to."
				},
				{
					icon: "https://laravel.pixelstrap.net/fastkart/storage/1487/work.svg",
					title: "Business Years",
					description: "A coffee shop is a small business that sells coffee, pastries, and other morning goods. There are many different types of coffee shops around the world."
				},
				{
					icon: "https://laravel.pixelstrap.net/fastkart/storage/1486/user.svg",
					title: "Happy Customers",
					description: "My goal for this coffee shop is to be able to get a coffee and get on with my day. It's a Thursday morning and I am rushing between meetings."
				}
			]
		},
		team: {
			status: true,
			sub_title: "Our Creative Team Fastkart",
			title: "Fastkart Team Member",
			members: [
				{
					profile_image_url: "https://laravel.pixelstrap.net/fastkart/storage/1490/user_4.jpg",
					name: "Betty J. Turner",
					designation: "CEO, Company",
					description: "Fondue stinking bishop goat. Macaroni cheese croque monsieur cottage cheese.",
					instagram: "https://instagram.com/",
					twitter: "https://twitter.com/",
					pinterest: "https://pinterest.com/",
					facebook: "https://www.facebook.com/"
				},
				{
					profile_image_url: "https://laravel.pixelstrap.net/fastkart/storage/1492/user_6.jpg",
					name: "Alfredo S. Rocha",
					designation: "Sr. Project Manager",
					description: "camembert de normandie. Bocconcini rubber cheese fromage frais port-salut.",
					instagram: "https://instagram.com/",
					twitter: "https://twitter.com/",
					pinterest: "https://pinterest.com/",
					facebook: "https://www.facebook.com/"
				},
				{
					profile_image_url: "https://laravel.pixelstrap.net/fastkart/storage/1491/user_3.jpg",
					name: "Constance K. Whang",
					designation: "Jr. Project Manager",
					description: "camembert de normandie. Bocconcini rubber cheese fromage frais port-salut.",
					instagram: "https://instagram.com/",
					twitter: "https://twitter.com/",
					pinterest: "https://pinterest.com/",
					facebook: "https://www.facebook.com/"
				},
				{
					profile_image_url: "https://laravel.pixelstrap.net/fastkart/storage/1494/user_1.jpg",
					name: "Gwen J. Geiger",
					designation: "Designer",
					description: "cheese on toast mozzarella bavarian bergkase smelly cheese cheesy feet.",
					instagram: "https://instagram.com/",
					twitter: "https://twitter.com/",
					pinterest: "https://pinterest.com/",
					facebook: "https://www.facebook.com/"
				}
			]
		},
		testimonial: {
			status: true,
			sub_title: "Latest Testimonials",
			title: "What People Say",
			reviews: [
				{
					title: "Disappointing Experience",
					profile_image_url: "https://laravel.pixelstrap.net/fastkart/storage/1490/user_4.jpg",
					name: "Betty J. Turner",
					review: "I had high hopes for this product, but it fell short of my expectations. It constantly crashes and lacks essential features. I wouldn't recommend it.",
					designation: "CEO, Company"
				},
				{
					title: "Disappointing Experience",
					profile_image_url: "https://laravel.pixelstrap.net/fastkart/storage/1492/user_6.jpg",
					name: "Alfredo S. Rocha",
					review: "I bought this product on a budget, and it exceeded my expectations. The quality is impressive for the price. I'm delighted with my purchase.",
					designation: "Sr. Project Manager"
				},
				{
					title: "Top Quality, Beautiful Location",
					profile_image_url: "https://laravel.pixelstrap.net/fastkart/storage/1491/user_3.jpg",
					name: "Constance K. Whang",
					review: "I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness. There, now he's trapped in a book I wrote: a crummy world of plot holes and spelling errors! As an interesting side note.",
					designation: "Jr. Project Manager"
				},
				{
					title: "Excellent Customer Service",
					profile_image_url: "https://laravel.pixelstrap.net/fastkart/storage/1494/user_1.jpg",
					name: "Gwen J. Geiger",
					review: "I encountered a minor issue with my purchase, and the customer service team was quick to resolve it. Their prompt and friendly support made me a happy customer!",
					designation: "Designer"
				}
			]
		},
		blog: {
			status: true,
			blog_ids: [
				24,
				23,
				22,
				21,
				18,
				20
			]
		}
	}
};
const themeOptions = {
	id: id,
	options: options
};

const index = defineEventHandler((event) => {
  return themeOptions;
});

export { index as default };

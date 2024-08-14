import { d as defineEventHandler } from './index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

var data = [
	{
		id: 12,
		name: "Organic Oranges",
		short_description: "Premium Quality: Our oranges are sourced from the finest orchards, ensuring you receive the freshest and highest quality fruit.",
		description: "<p>Indulge in the vibrant and tangy goodness of our premium fresh oranges. Sourced from the finest orchards, our oranges are a testament to quality and flavor. Each orange is meticulously handpicked to ensure that you receive a fruit that's at the peak of its juiciness and taste.</p><p>Our oranges boast a tantalizing balance of sweet and tangy flavors, making them a delightful treat for your taste buds. Bursting with natural vitamins, especially vitamin C, these juicy treasures are a great way to boost your immune system and maintain overall health.</p><p>Whether enjoyed as a quick and refreshing snack or incorporated into your favorite recipes, our fresh oranges add a burst of color and flavor to your meals. Their succulent texture and invigorating aroma make them a versatile ingredient in both savory and sweet culinary creations.</p><p>By choosing our premium fresh oranges, you're not only indulging in a delectable fruit but also supporting sustainable and responsible agriculture practices. Join us in savoring the pure essence of nature's bounty with every bite of our succulent, premium fresh oranges.</p>",
		type: "classified",
		unit: "1 KG",
		weight: 2500,
		quantity: 9,
		price: 3,
		sale_price: 2.79,
		discount: 7,
		is_featured: 1,
		shipping_days: null,
		is_cod: "0",
		is_free_shipping: 0,
		is_sale_enable: 0,
		is_return: 0,
		is_trending: 1,
		is_approved: 1,
		sale_starts_at: null,
		sale_expired_at: null,
		sku: "FRUIT05",
		is_random_related_products: 1,
		stock_status: "in_stock",
		meta_title: "Organic Oranges",
		meta_description: "Premium Quality: Our oranges are sourced from the finest orchards, ensuring you receive the freshest and highest quality fruit.",
		product_thumbnail_id: 65,
		product_meta_image_id: "65",
		size_chart_image_id: null,
		estimated_delivery_text: null,
		return_policy_text: null,
		safe_checkout: 0,
		secure_checkout: 1,
		social_share: 1,
		encourage_order: 1,
		encourage_view: 1,
		slug: "organic-oranges",
		status: 1,
		store_id: 4,
		created_by_id: "1",
		tax_id: 1,
		deleted_at: null,
		created_at: "2023-08-24T12:32:12.000000Z",
		updated_at: "2023-09-21T06:03:19.000000Z",
		orders_count: 6,
		reviews_count: 2,
		can_review: false,
		rating_count: 3.5,
		order_amount: 1103.09,
		review_ratings: [
			0,
			1,
			0,
			0,
			1
		],
		related_products: [
			15,
			6,
			9,
			3,
			20,
			43
		],
		cross_sell_products: [
		],
		product_thumbnail: {
			id: 65,
			collection_name: "attachment",
			name: "Orange_1",
			file_name: "Orange_1.png",
			mime_type: "image/png",
			disk: "public",
			conversions_disk: "public",
			size: "92250",
			created_by_id: "1",
			created_at: "2023-08-24T12:31:12.000000Z",
			updated_at: "2023-08-24T12:31:12.000000Z",
			original_url: "https://laravel.pixelstrap.net/fastkart/storage/65/Orange_1.png"
		},
		product_galleries: [
			{
				id: 66,
				collection_name: "attachment",
				name: "Orange_2",
				file_name: "Orange_2.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "88260",
				created_by_id: "1",
				created_at: "2023-08-24T12:31:12.000000Z",
				updated_at: "2023-08-24T12:31:12.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/66/Orange_2.png"
			},
			{
				id: 67,
				collection_name: "attachment",
				name: "Orange_3",
				file_name: "Orange_3.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "86184",
				created_by_id: "1",
				created_at: "2023-08-24T12:31:12.000000Z",
				updated_at: "2023-08-24T12:31:12.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/67/Orange_3.png"
			},
			{
				id: 68,
				collection_name: "attachment",
				name: "Orange_4",
				file_name: "Orange_4.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "88217",
				created_by_id: "1",
				created_at: "2023-08-24T12:31:12.000000Z",
				updated_at: "2023-08-24T12:31:12.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/68/Orange_4.png"
			}
		],
		product_meta_image: {
			id: 65,
			collection_name: "attachment",
			name: "Orange_1",
			file_name: "Orange_1.png",
			mime_type: "image/png",
			disk: "public",
			conversions_disk: "public",
			size: "92250",
			created_by_id: "1",
			created_at: "2023-08-24T12:31:12.000000Z",
			updated_at: "2023-08-24T12:31:12.000000Z",
			original_url: "https://laravel.pixelstrap.net/fastkart/storage/65/Orange_1.png"
		},
		size_chart_image: null,
		reviews: [
			{
				id: 2,
				product_id: 12,
				consumer_id: 21,
				store_id: 3,
				review_image_id: null,
				rating: 5,
				description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
				created_at: "2023-09-29T12:27:04.000000Z",
				updated_at: "2023-09-29T12:27:04.000000Z",
				deleted_at: null,
				review_image: null,
				consumer: {
					id: 21,
					name: "Sarah Davis",
					email: "sarah.customer@example.com",
					country_code: "1",
					phone: 5551885359,
					profile_image_id: "1465",
					system_reserve: "0",
					status: 1,
					created_by_id: null,
					email_verified_at: null,
					created_at: "2023-09-29T06:13:13.000000Z",
					updated_at: "2023-09-29T06:13:13.000000Z",
					deleted_at: null,
					orders_count: 7,
					role: {
						id: 2,
						name: "consumer",
						guard_name: "web",
						system_reserve: "1",
						created_at: "2023-08-24T08:16:03.000000Z",
						updated_at: "2023-08-24T08:16:03.000000Z",
						pivot: {
							model_id: "21",
							role_id: "2",
							model_type: "App\\Models\\User"
						}
					},
					point: {
						id: 5,
						consumer_id: 21,
						balance: 153.43
					},
					wallet: {
						id: 3,
						consumer_id: 21,
						balance: 0
					},
					address: [
						{
							id: 6,
							title: "Home",
							user_id: "21",
							street: "4105 Park Street",
							city: "San Jose",
							pincode: "95110",
							is_default: 0,
							country_code: "1",
							phone: 4088023009,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						},
						{
							id: 7,
							title: "Office",
							user_id: "21",
							street: "4106 Park Street",
							city: "San Jose",
							pincode: "95110",
							is_default: 0,
							country_code: "1",
							phone: 4088023009,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						}
					],
					vendor_wallet: null,
					profile_image: {
						id: 1465,
						collection_name: "attachment",
						name: "Group 427320141",
						file_name: "Group-427320141.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "8384",
						created_by_id: "1",
						created_at: "2023-09-30T09:27:07.000000Z",
						updated_at: "2023-09-30T09:27:07.000000Z",
						original_url: "https://laravel.pixelstrap.net/fastkart/storage/1465/Group-427320141.png"
					},
					payment_account: null
				}
			},
			{
				id: 20,
				product_id: 12,
				consumer_id: 20,
				store_id: 3,
				review_image_id: null,
				rating: 2,
				description: "This is one of the worst purchases I've made. The item looks nothing like the pictures, and the functionality is a joke. I feel misled and dissatisfied.",
				created_at: "2023-09-29T13:30:54.000000Z",
				updated_at: "2023-09-29T13:30:54.000000Z",
				deleted_at: null,
				review_image: null,
				consumer: {
					id: 20,
					name: "Rome Doe",
					email: "rome.customer@example.com",
					country_code: "1",
					phone: 5571875359,
					profile_image_id: "1466",
					system_reserve: "0",
					status: 1,
					created_by_id: null,
					email_verified_at: null,
					created_at: "2023-09-29T06:08:29.000000Z",
					updated_at: "2023-09-29T06:08:29.000000Z",
					deleted_at: null,
					orders_count: 8,
					role: {
						id: 2,
						name: "consumer",
						guard_name: "web",
						system_reserve: "1",
						created_at: "2023-08-24T08:16:03.000000Z",
						updated_at: "2023-08-24T08:16:03.000000Z",
						pivot: {
							model_id: "20",
							role_id: "2",
							model_type: "App\\Models\\User"
						}
					},
					point: {
						id: 4,
						consumer_id: 20,
						balance: 111.58
					},
					wallet: {
						id: 2,
						consumer_id: 20,
						balance: 0
					},
					address: [
						{
							id: 8,
							title: "Home",
							user_id: "20",
							street: "10 Hill Street",
							city: "Toledo",
							pincode: "43615",
							is_default: 0,
							country_code: "1",
							phone: 4197792517,
							country_id: 840,
							state_id: 3790,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3790,
								name: "Ohio",
								country_id: "840",
								created_at: "2023-08-24T08:16:44.000000Z",
								updated_at: "2023-08-24T08:16:44.000000Z"
							}
						}
					],
					vendor_wallet: null,
					profile_image: {
						id: 1466,
						collection_name: "attachment",
						name: "Group 427320142",
						file_name: "Group-427320142.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "8067",
						created_by_id: "1",
						created_at: "2023-09-30T09:27:07.000000Z",
						updated_at: "2023-09-30T09:27:07.000000Z",
						original_url: "https://laravel.pixelstrap.net/fastkart/storage/1466/Group-427320142.png"
					},
					payment_account: null
				}
			}
		],
		store: {
			id: 4,
			store_name: "Fruits Market",
			description: "Welcome to Fruits Market, your gateway to a world of natural sweetness and vibrant flavors. At FruitE, we celebrate the beauty and goodness of fruits in their purest form",
			slug: "fruits-market",
			store_logo_id: 1441,
			store_cover_id: null,
			country_id: 840,
			state_id: 3757,
			city: "San Jose",
			address: "4105 Park Street",
			pincode: "95110",
			facebook: "https://www.facebook.com/",
			twitter: "https://twitter.com/",
			instagram: "https://www.instagram.com/",
			youtube: null,
			pinterest: null,
			hide_vendor_email: 0,
			hide_vendor_phone: 0,
			vendor_id: 5,
			created_by_id: "1",
			status: 1,
			is_approved: 1,
			created_at: "2023-08-24T09:40:33.000000Z",
			updated_at: "2023-09-20T09:38:35.000000Z",
			deleted_at: null,
			orders_count: 11,
			reviews_count: 0,
			products_count: 10,
			product_images: [
				"https://laravel.pixelstrap.net/fastkart/storage/90/Pomegranate_2.png",
				"https://laravel.pixelstrap.net/fastkart/storage/93/Strawberry_1.png",
				"https://laravel.pixelstrap.net/fastkart/storage/100/Watermelon_4.png"
			],
			order_amount: 1383.87,
			rating_count: null,
			store_logo: {
				id: 1441,
				collection_name: "attachment",
				name: "store01",
				file_name: "store01.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "81368",
				created_by_id: "1",
				created_at: "2023-09-20T09:37:56.000000Z",
				updated_at: "2023-09-20T09:37:56.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/1441/store01.png"
			},
			store_cover: null,
			vendor: {
				id: 5,
				name: "Irene Clark",
				email: "irene.clark@example.com",
				country_code: "1",
				phone: 4088023009,
				profile_image_id: null,
				system_reserve: "0",
				status: 1,
				created_by_id: 1,
				email_verified_at: null,
				created_at: "2023-08-24T09:40:33.000000Z",
				updated_at: "2023-08-24T09:40:33.000000Z",
				deleted_at: null,
				orders_count: 0,
				role: {
					id: 3,
					name: "vendor",
					guard_name: "web",
					system_reserve: "1",
					created_at: "2023-08-24T08:16:03.000000Z",
					updated_at: "2023-08-24T08:16:03.000000Z",
					pivot: {
						model_id: "5",
						role_id: "3",
						model_type: "App\\Models\\User"
					}
				},
				point: null,
				wallet: null,
				address: [
				],
				vendor_wallet: {
					id: 4,
					vendor_id: 5,
					balance: 0,
					created_at: "2023-08-24T09:40:33.000000Z",
					updated_at: "2023-08-24T09:40:33.000000Z",
					deleted_at: null
				},
				profile_image: null,
				payment_account: null
			},
			country: {
				id: 840,
				name: "United States",
				currency: "US dollar",
				currency_symbol: "$",
				iso_3166_2: "US",
				iso_3166_3: "USA",
				calling_code: "1",
				flag: "US.png"
			},
			state: {
				id: 3757,
				name: "California",
				country_id: "840",
				created_at: "2023-08-24T08:16:43.000000Z",
				updated_at: "2023-08-24T08:16:43.000000Z"
			},
			reviews: [
			]
		},
		tax: {
			id: 1,
			name: "Sales Tax",
			rate: "7.23",
			status: 1,
			created_by_id: "1",
			created_at: "2023-08-24T09:23:29.000000Z",
			updated_at: "2023-08-24T12:55:39.000000Z",
			deleted_at: null
		},
		categories: [
			{
				id: 1,
				name: "Vegetables & Fruits",
				slug: "vegetables-fruits",
				description: "Vegetables and fruits are essential components of a balanced diet, providing a wide range of nutrients, vitamins, and minerals that promote overall health. Vegetables encompass a diverse group of plant-based foods, while fruits are naturally sweet and colorful delights that offer a variety of flavors and health benefits. Incorporating a colorful array of vegetables and fruits into your meals can contribute to improved well-being and support various bodily functions.",
				category_image_id: 395,
				category_icon_id: 266,
				status: 1,
				type: "product",
				commission_rate: 1,
				parent_id: null,
				created_by_id: "1",
				created_at: "2023-08-24T08:54:10.000000Z",
				updated_at: "2023-09-01T06:11:19.000000Z",
				deleted_at: null,
				blogs_count: 0,
				products_count: 21,
				pivot: {
					product_id: "12",
					category_id: "1"
				},
				category_image: {
					id: 395,
					collection_name: "attachment",
					name: "Vegertable & fruits",
					file_name: "Vegertable-&-fruits.png",
					mime_type: "image/png",
					disk: "public",
					conversions_disk: "public",
					size: "2250220",
					created_by_id: "1",
					created_at: "2023-09-01T06:10:15.000000Z",
					updated_at: "2023-09-01T06:10:15.000000Z",
					original_url: "https://laravel.pixelstrap.net/fastkart/storage/395/Vegertable-&-fruits.png"
				},
				category_icon: {
					id: 266,
					collection_name: "attachment",
					name: "vegetable",
					file_name: "vegetable.svg",
					mime_type: "image/svg+xml",
					disk: "public",
					conversions_disk: "public",
					size: "2617",
					created_by_id: "1",
					created_at: "2023-08-26T12:19:11.000000Z",
					updated_at: "2023-08-26T12:19:11.000000Z",
					original_url: "https://laravel.pixelstrap.net/fastkart/storage/266/vegetable.svg"
				}
			}
		],
		tags: [
			{
				id: 1,
				name: "Vegetables & Fruits",
				slug: "vegetables-fruits",
				type: "product",
				description: "Vegetables and fruits are essential components of a balanced diet, providing a wide range of nutrients, vitamins, and minerals that promote overall health. Vegetables encompass a diverse group of plant-based foods, while fruits are naturally sweet and colorful delights that offer a variety of flavors and health benefits. Incorporating a colorful array of vegetables and fruits into your meals can contribute to improved well-being and support various bodily functions.",
				created_by_id: "1",
				status: 1,
				created_at: "2023-08-24T09:19:47.000000Z",
				updated_at: "2023-08-24T09:19:47.000000Z",
				deleted_at: null,
				blogs_count: 0,
				products_count: 21,
				pivot: {
					product_id: "12",
					tag_id: "1"
				}
			}
		],
		attributes: [
			{
				id: 1,
				name: "Weight",
				style: "rectangle",
				slug: "weight",
				status: 1,
				created_by_id: "1",
				created_at: "2023-08-24T11:43:50.000000Z",
				updated_at: "2023-08-24T13:03:54.000000Z",
				deleted_at: null,
				pivot: {
					product_id: "12",
					attribute_id: "1"
				},
				attribute_values: [
					{
						id: 1,
						value: "1 KG",
						slug: "1-kg",
						hex_color: null,
						attribute_id: "1",
						created_by_id: "1",
						created_at: "2023-08-24T11:43:50.000000Z",
						updated_at: "2023-08-24T11:43:50.000000Z",
						deleted_at: null
					},
					{
						id: 2,
						value: "5 KG",
						slug: "5-kg",
						hex_color: null,
						attribute_id: "1",
						created_by_id: "1",
						created_at: "2023-08-24T11:43:50.000000Z",
						updated_at: "2023-08-24T11:43:50.000000Z",
						deleted_at: null
					},
					{
						id: 3,
						value: "10 KG",
						slug: "10-kg",
						hex_color: null,
						attribute_id: "1",
						created_by_id: "1",
						created_at: "2023-08-24T11:43:50.000000Z",
						updated_at: "2023-08-24T11:43:50.000000Z",
						deleted_at: null
					}
				]
			}
		],
		variations: [
			{
				id: 4,
				name: "Organic Oranges 1 KG",
				price: 3,
				quantity: 5,
				stock_status: "in_stock",
				sale_price: 2.79,
				discount: 7,
				sku: "FRUIT1KG05",
				status: 1,
				variation_options: null,
				variation_image_id: 65,
				product_id: 12,
				deleted_at: null,
				created_at: "2023-09-20T07:52:21.000000Z",
				updated_at: "2023-09-20T07:52:21.000000Z",
				variation_image: {
					id: 65,
					collection_name: "attachment",
					name: "Orange_1",
					file_name: "Orange_1.png",
					mime_type: "image/png",
					disk: "public",
					conversions_disk: "public",
					size: "92250",
					created_by_id: "1",
					created_at: "2023-08-24T12:31:12.000000Z",
					updated_at: "2023-08-24T12:31:12.000000Z",
					original_url: "https://laravel.pixelstrap.net/fastkart/storage/65/Orange_1.png"
				},
				attribute_values: [
					{
						id: 1,
						value: "1 KG",
						slug: "1-kg",
						hex_color: null,
						attribute_id: "1",
						created_by_id: "1",
						created_at: "2023-08-24T11:43:50.000000Z",
						updated_at: "2023-08-24T11:43:50.000000Z",
						deleted_at: null,
						pivot: {
							variation_id: "4",
							attribute_value_id: "1"
						}
					}
				]
			},
			{
				id: 5,
				name: "Organic Oranges 10 KG",
				price: 30,
				quantity: 6,
				stock_status: "in_stock",
				sale_price: 27,
				discount: 10,
				sku: "FRUIT10KG05",
				status: 1,
				variation_options: null,
				variation_image_id: 68,
				product_id: 12,
				deleted_at: null,
				created_at: "2023-09-20T07:52:21.000000Z",
				updated_at: "2023-09-29T13:27:46.000000Z",
				variation_image: {
					id: 68,
					collection_name: "attachment",
					name: "Orange_4",
					file_name: "Orange_4.png",
					mime_type: "image/png",
					disk: "public",
					conversions_disk: "public",
					size: "88217",
					created_by_id: "1",
					created_at: "2023-08-24T12:31:12.000000Z",
					updated_at: "2023-08-24T12:31:12.000000Z",
					original_url: "https://laravel.pixelstrap.net/fastkart/storage/68/Orange_4.png"
				},
				attribute_values: [
					{
						id: 3,
						value: "10 KG",
						slug: "10-kg",
						hex_color: null,
						attribute_id: "1",
						created_by_id: "1",
						created_at: "2023-08-24T11:43:50.000000Z",
						updated_at: "2023-08-24T11:43:50.000000Z",
						deleted_at: null,
						pivot: {
							variation_id: "5",
							attribute_value_id: "3"
						}
					}
				]
			}
		]
	},
	{
		id: 16,
		name: "Fresh Pear",
		short_description: "They have been linked to a number of health benefits, including improved digestion, heart health, and blood sugar control.",
		description: "<p>Pears are a delicious and nutritious fruit that is enjoyed by people all over the world. They are a good source of fiber, potassium, vitamin C, and other vitamins and minerals. Pears are also a low-calorie food, making them a healthy choice for people who are watching their weight.</p><p>There are many different varieties of pears, each with its own unique flavor and texture. Some of the most popular varieties include Bartlett pears, Bosc pears, and Anjou pears. Bartlett pears are the most common variety and have a sweet, juicy flesh. Bosc pears are slightly tart and have a firm texture. Anjou pears are also sweet, but they have a more delicate flesh.</p><p>Fresh pears are best eaten when they are ripe. Ripe pears will be soft to the touch and will have a sweet aroma. To ripen pears at home, place them in a paper bag with an apple or banana. The ethylene gas released by the apple or banana will help the pears ripen more quickly.</p><p>Once pears are ripe, they can be eaten fresh, cooked, or used in a variety of recipes. Fresh pears are a delicious and healthy snack or dessert. They can also be used in salads, pies, and other desserts. Pears can also be cooked, either poached, baked, or grilled.</p><p>When choosing fresh pears, look for fruits that are free of bruises and blemishes. Pears should also be firm to the touch. Avoid pears that are soft or mushy, as these are likely overripe.</p>",
		type: "simple",
		unit: "3 KG",
		weight: 3000,
		quantity: 4,
		price: 6,
		sale_price: 4.8,
		discount: 20,
		is_featured: 0,
		shipping_days: null,
		is_cod: "0",
		is_free_shipping: 0,
		is_sale_enable: 0,
		is_return: 0,
		is_trending: 1,
		is_approved: 1,
		sale_starts_at: null,
		sale_expired_at: null,
		sku: "FRUIT06",
		is_random_related_products: 0,
		stock_status: "in_stock",
		meta_title: "Fresh Pear",
		meta_description: "They have been linked to a number of health benefits, including improved digestion, heart health, and blood sugar control.",
		product_thumbnail_id: 83,
		product_meta_image_id: "83",
		size_chart_image_id: null,
		estimated_delivery_text: null,
		return_policy_text: null,
		safe_checkout: 1,
		secure_checkout: 1,
		social_share: 1,
		encourage_order: 1,
		encourage_view: 1,
		slug: "fresh-pear",
		status: 1,
		store_id: 4,
		created_by_id: "1",
		tax_id: 1,
		deleted_at: null,
		created_at: "2023-08-24T13:02:27.000000Z",
		updated_at: "2023-09-29T12:10:33.000000Z",
		orders_count: 6,
		reviews_count: 2,
		can_review: true,
		rating_count: 4,
		order_amount: 1084.8200000000002,
		review_ratings: [
			0,
			0,
			1,
			0,
			1
		],
		related_products: [
		],
		cross_sell_products: [
		],
		product_thumbnail: {
			id: 83,
			collection_name: "attachment",
			name: "Pear_4",
			file_name: "Pear_4.png",
			mime_type: "image/png",
			disk: "public",
			conversions_disk: "public",
			size: "66015",
			created_by_id: "1",
			created_at: "2023-08-24T12:51:03.000000Z",
			updated_at: "2023-08-24T12:51:03.000000Z",
			original_url: "https://laravel.pixelstrap.net/fastkart/storage/83/Pear_4.png"
		},
		product_galleries: [
			{
				id: 80,
				collection_name: "attachment",
				name: "Pear_1",
				file_name: "Pear_1.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "67692",
				created_by_id: "1",
				created_at: "2023-08-24T12:51:03.000000Z",
				updated_at: "2023-08-24T12:51:03.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/80/Pear_1.png"
			},
			{
				id: 81,
				collection_name: "attachment",
				name: "Pear_2",
				file_name: "Pear_2.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "74336",
				created_by_id: "1",
				created_at: "2023-08-24T12:51:03.000000Z",
				updated_at: "2023-08-24T12:51:03.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/81/Pear_2.png"
			},
			{
				id: 82,
				collection_name: "attachment",
				name: "Pear_3",
				file_name: "Pear_3.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "72358",
				created_by_id: "1",
				created_at: "2023-08-24T12:51:03.000000Z",
				updated_at: "2023-08-24T12:51:03.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/82/Pear_3.png"
			},
			{
				id: 83,
				collection_name: "attachment",
				name: "Pear_4",
				file_name: "Pear_4.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "66015",
				created_by_id: "1",
				created_at: "2023-08-24T12:51:03.000000Z",
				updated_at: "2023-08-24T12:51:03.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/83/Pear_4.png"
			}
		],
		product_meta_image: {
			id: 83,
			collection_name: "attachment",
			name: "Pear_4",
			file_name: "Pear_4.png",
			mime_type: "image/png",
			disk: "public",
			conversions_disk: "public",
			size: "66015",
			created_by_id: "1",
			created_at: "2023-08-24T12:51:03.000000Z",
			updated_at: "2023-08-24T12:51:03.000000Z",
			original_url: "https://laravel.pixelstrap.net/fastkart/storage/83/Pear_4.png"
		},
		size_chart_image: null,
		reviews: [
			{
				id: 3,
				product_id: 16,
				consumer_id: 21,
				store_id: 3,
				review_image_id: null,
				rating: 5,
				description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
				created_at: "2023-09-29T12:27:45.000000Z",
				updated_at: "2023-09-29T12:27:45.000000Z",
				deleted_at: null,
				review_image: null,
				consumer: {
					id: 21,
					name: "Sarah Davis",
					email: "sarah.customer@example.com",
					country_code: "1",
					phone: 5551885359,
					profile_image_id: "1465",
					system_reserve: "0",
					status: 1,
					created_by_id: null,
					email_verified_at: null,
					created_at: "2023-09-29T06:13:13.000000Z",
					updated_at: "2023-09-29T06:13:13.000000Z",
					deleted_at: null,
					orders_count: 7,
					role: {
						id: 2,
						name: "consumer",
						guard_name: "web",
						system_reserve: "1",
						created_at: "2023-08-24T08:16:03.000000Z",
						updated_at: "2023-08-24T08:16:03.000000Z",
						pivot: {
							model_id: "21",
							role_id: "2",
							model_type: "App\\Models\\User"
						}
					},
					point: {
						id: 5,
						consumer_id: 21,
						balance: 153.43
					},
					wallet: {
						id: 3,
						consumer_id: 21,
						balance: 0
					},
					address: [
						{
							id: 6,
							title: "Home",
							user_id: "21",
							street: "4105 Park Street",
							city: "San Jose",
							pincode: "95110",
							is_default: 0,
							country_code: "1",
							phone: 4088023009,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						},
						{
							id: 7,
							title: "Office",
							user_id: "21",
							street: "4106 Park Street",
							city: "San Jose",
							pincode: "95110",
							is_default: 0,
							country_code: "1",
							phone: 4088023009,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						}
					],
					vendor_wallet: null,
					profile_image: {
						id: 1465,
						collection_name: "attachment",
						name: "Group 427320141",
						file_name: "Group-427320141.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "8384",
						created_by_id: "1",
						created_at: "2023-09-30T09:27:07.000000Z",
						updated_at: "2023-09-30T09:27:07.000000Z",
						original_url: "https://laravel.pixelstrap.net/fastkart/storage/1465/Group-427320141.png"
					},
					payment_account: null
				}
			},
			{
				id: 23,
				product_id: 16,
				consumer_id: 19,
				store_id: 3,
				review_image_id: null,
				rating: 3,
				description: "\"I am extremely satisfied with this purchase. The item arrived promptly, and the quality is exceptional. It's evident that the makers paid attention to detail. Overall, a fantastic buy!",
				created_at: "2023-09-30T11:48:53.000000Z",
				updated_at: "2023-09-30T11:48:53.000000Z",
				deleted_at: null,
				review_image: null,
				consumer: {
					id: 19,
					name: "John Doe",
					email: "john.customer@example.com",
					country_code: "1",
					phone: 5551855359,
					profile_image_id: "1466",
					system_reserve: "0",
					status: 1,
					created_by_id: 1,
					email_verified_at: null,
					created_at: "2023-09-29T05:50:05.000000Z",
					updated_at: "2023-09-29T06:38:24.000000Z",
					deleted_at: null,
					orders_count: 8,
					role: {
						id: 2,
						name: "consumer",
						guard_name: "web",
						system_reserve: "1",
						created_at: "2023-08-24T08:16:03.000000Z",
						updated_at: "2023-08-24T08:16:03.000000Z",
						pivot: {
							model_id: "19",
							role_id: "2",
							model_type: "App\\Models\\User"
						}
					},
					point: {
						id: 3,
						consumer_id: 19,
						balance: 300
					},
					wallet: {
						id: 1,
						consumer_id: 19,
						balance: 84.4
					},
					address: [
						{
							id: 1,
							title: "New Home",
							user_id: "19",
							street: "26, Starts Hollow Colony",
							city: "Denver",
							pincode: "80014",
							is_default: 0,
							country_code: "1",
							phone: 5551855359,
							country_id: 840,
							state_id: 3759,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3759,
								name: "Colorado",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						},
						{
							id: 2,
							title: "Old Home",
							user_id: "19",
							street: "53B, Claire New Street",
							city: "San Jose",
							pincode: "94088",
							is_default: 0,
							country_code: "1",
							phone: 5551855359,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						},
						{
							id: 3,
							title: "Office",
							user_id: "19",
							street: "21B, Row New Street",
							city: "San Jose",
							pincode: "94088",
							is_default: 0,
							country_code: "1",
							phone: 551865359,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						},
						{
							id: 4,
							title: "IT Office",
							user_id: "19",
							street: "55B, Claire Cav Street",
							city: "San Jose",
							pincode: "94088",
							is_default: 0,
							country_code: "1",
							phone: 5551865359,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						}
					],
					vendor_wallet: null,
					profile_image: {
						id: 1466,
						collection_name: "attachment",
						name: "Group 427320142",
						file_name: "Group-427320142.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "8067",
						created_by_id: "1",
						created_at: "2023-09-30T09:27:07.000000Z",
						updated_at: "2023-09-30T09:27:07.000000Z",
						original_url: "https://laravel.pixelstrap.net/fastkart/storage/1466/Group-427320142.png"
					},
					payment_account: {
						id: 1,
						user_id: "19",
						paypal_email: null,
						bank_name: null,
						bank_holder_name: null,
						bank_account_no: null,
						swift: null,
						ifsc: null,
						is_default: "0",
						status: 1,
						created_at: "2023-09-30T12:55:44.000000Z",
						updated_at: "2023-09-30T12:55:44.000000Z",
						deleted_at: null
					}
				}
			}
		],
		store: {
			id: 4,
			store_name: "Fruits Market",
			description: "Welcome to Fruits Market, your gateway to a world of natural sweetness and vibrant flavors. At FruitE, we celebrate the beauty and goodness of fruits in their purest form",
			slug: "fruits-market",
			store_logo_id: 1441,
			store_cover_id: null,
			country_id: 840,
			state_id: 3757,
			city: "San Jose",
			address: "4105 Park Street",
			pincode: "95110",
			facebook: "https://www.facebook.com/",
			twitter: "https://twitter.com/",
			instagram: "https://www.instagram.com/",
			youtube: null,
			pinterest: null,
			hide_vendor_email: 0,
			hide_vendor_phone: 0,
			vendor_id: 5,
			created_by_id: "1",
			status: 1,
			is_approved: 1,
			created_at: "2023-08-24T09:40:33.000000Z",
			updated_at: "2023-09-20T09:38:35.000000Z",
			deleted_at: null,
			orders_count: 11,
			reviews_count: 0,
			products_count: 10,
			product_images: [
				"https://laravel.pixelstrap.net/fastkart/storage/90/Pomegranate_2.png",
				"https://laravel.pixelstrap.net/fastkart/storage/93/Strawberry_1.png",
				"https://laravel.pixelstrap.net/fastkart/storage/100/Watermelon_4.png"
			],
			order_amount: 1383.87,
			rating_count: null,
			store_logo: {
				id: 1441,
				collection_name: "attachment",
				name: "store01",
				file_name: "store01.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "81368",
				created_by_id: "1",
				created_at: "2023-09-20T09:37:56.000000Z",
				updated_at: "2023-09-20T09:37:56.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/1441/store01.png"
			},
			store_cover: null,
			vendor: {
				id: 5,
				name: "Irene Clark",
				email: "irene.clark@example.com",
				country_code: "1",
				phone: 4088023009,
				profile_image_id: null,
				system_reserve: "0",
				status: 1,
				created_by_id: 1,
				email_verified_at: null,
				created_at: "2023-08-24T09:40:33.000000Z",
				updated_at: "2023-08-24T09:40:33.000000Z",
				deleted_at: null,
				orders_count: 0,
				role: {
					id: 3,
					name: "vendor",
					guard_name: "web",
					system_reserve: "1",
					created_at: "2023-08-24T08:16:03.000000Z",
					updated_at: "2023-08-24T08:16:03.000000Z",
					pivot: {
						model_id: "5",
						role_id: "3",
						model_type: "App\\Models\\User"
					}
				},
				point: null,
				wallet: null,
				address: [
				],
				vendor_wallet: {
					id: 4,
					vendor_id: 5,
					balance: 0,
					created_at: "2023-08-24T09:40:33.000000Z",
					updated_at: "2023-08-24T09:40:33.000000Z",
					deleted_at: null
				},
				profile_image: null,
				payment_account: null
			},
			country: {
				id: 840,
				name: "United States",
				currency: "US dollar",
				currency_symbol: "$",
				iso_3166_2: "US",
				iso_3166_3: "USA",
				calling_code: "1",
				flag: "US.png"
			},
			state: {
				id: 3757,
				name: "California",
				country_id: "840",
				created_at: "2023-08-24T08:16:43.000000Z",
				updated_at: "2023-08-24T08:16:43.000000Z"
			},
			reviews: [
			]
		},
		tax: {
			id: 1,
			name: "Sales Tax",
			rate: "7.23",
			status: 1,
			created_by_id: "1",
			created_at: "2023-08-24T09:23:29.000000Z",
			updated_at: "2023-08-24T12:55:39.000000Z",
			deleted_at: null
		},
		categories: [
			{
				id: 1,
				name: "Vegetables & Fruits",
				slug: "vegetables-fruits",
				description: "Vegetables and fruits are essential components of a balanced diet, providing a wide range of nutrients, vitamins, and minerals that promote overall health. Vegetables encompass a diverse group of plant-based foods, while fruits are naturally sweet and colorful delights that offer a variety of flavors and health benefits. Incorporating a colorful array of vegetables and fruits into your meals can contribute to improved well-being and support various bodily functions.",
				category_image_id: 395,
				category_icon_id: 266,
				status: 1,
				type: "product",
				commission_rate: 1,
				parent_id: null,
				created_by_id: "1",
				created_at: "2023-08-24T08:54:10.000000Z",
				updated_at: "2023-09-01T06:11:19.000000Z",
				deleted_at: null,
				blogs_count: 0,
				products_count: 21,
				pivot: {
					product_id: "16",
					category_id: "1"
				},
				category_image: {
					id: 395,
					collection_name: "attachment",
					name: "Vegertable & fruits",
					file_name: "Vegertable-&-fruits.png",
					mime_type: "image/png",
					disk: "public",
					conversions_disk: "public",
					size: "2250220",
					created_by_id: "1",
					created_at: "2023-09-01T06:10:15.000000Z",
					updated_at: "2023-09-01T06:10:15.000000Z",
					original_url: "https://laravel.pixelstrap.net/fastkart/storage/395/Vegertable-&-fruits.png"
				},
				category_icon: {
					id: 266,
					collection_name: "attachment",
					name: "vegetable",
					file_name: "vegetable.svg",
					mime_type: "image/svg+xml",
					disk: "public",
					conversions_disk: "public",
					size: "2617",
					created_by_id: "1",
					created_at: "2023-08-26T12:19:11.000000Z",
					updated_at: "2023-08-26T12:19:11.000000Z",
					original_url: "https://laravel.pixelstrap.net/fastkart/storage/266/vegetable.svg"
				}
			}
		],
		tags: [
			{
				id: 1,
				name: "Vegetables & Fruits",
				slug: "vegetables-fruits",
				type: "product",
				description: "Vegetables and fruits are essential components of a balanced diet, providing a wide range of nutrients, vitamins, and minerals that promote overall health. Vegetables encompass a diverse group of plant-based foods, while fruits are naturally sweet and colorful delights that offer a variety of flavors and health benefits. Incorporating a colorful array of vegetables and fruits into your meals can contribute to improved well-being and support various bodily functions.",
				created_by_id: "1",
				status: 1,
				created_at: "2023-08-24T09:19:47.000000Z",
				updated_at: "2023-08-24T09:19:47.000000Z",
				deleted_at: null,
				blogs_count: 0,
				products_count: 21,
				pivot: {
					product_id: "16",
					tag_id: "1"
				}
			}
		],
		attributes: [
		],
		variations: [
		]
	},
	{
		id: 18,
		name: "Deliciously Sweet Watermelon",
		short_description: "Juicy and sweet: Experience the perfect balance of juiciness and sweetness with our watermelons, making every bite a delightful and refreshing experience.",
		description: "<p>Introducing our premium watermelon, the epitome of deliciously sweet goodness. Sourced from the finest farms, each bite bursts with unparalleled juiciness and flavor. Our watermelon is meticulously handpicked to ensure only the highest quality reaches your plate.<br><br>Indulge in the refreshing sweetness of this iconic fruit, perfect for hot summer days or as a delightful addition to any meal. Whether you're hosting a backyard BBQ or simply craving a healthy snack, our watermelon is your go-to choice for ultimate satisfaction.<br><br>Not only is our watermelon irresistibly delicious, but it is also packed with essential vitamins and minerals, making it a nutritious choice for the whole family. Hydrate your body and tantalise your taste buds with this refreshing fruit that is low in calories and high in natural goodness.<br><br>With its vibrant green exterior and juicy red flesh, our watermelon is a true feast for the eyes. Each slice promises a mouthwatering experience that will leave you craving for more. Add a touch of elegance to your fruit platters or create enticing fruit salads with this luscious centrepiece.<br><br>Rest assured, our watermelon meets the highest quality standards, ensuring you receive a product that is nothing short of perfection. We take pride in delivering the finest watermelon to your doorstep, carefully preserved to retain its delectable taste.<br><br>Experience the taste of summer with our premium watermelon. Order now and treat yourself to the ultimate indulgence that will surely satisfy your cravings.</p>",
		type: "classified",
		unit: "1 KG",
		weight: 1000,
		quantity: 9,
		price: 6,
		sale_price: 5.46,
		discount: 9,
		is_featured: 1,
		shipping_days: null,
		is_cod: "0",
		is_free_shipping: 0,
		is_sale_enable: 1,
		is_return: 0,
		is_trending: 1,
		is_approved: 1,
		sale_starts_at: "2023-9-12",
		sale_expired_at: "2023-10-31",
		sku: "FRUIT08",
		is_random_related_products: 1,
		stock_status: "in_stock",
		meta_title: "Deliciously Sweet Watermelon",
		meta_description: "Juicy and sweet: Experience the perfect balance of juiciness and sweetness with our watermelons, making every bite a delightful and refreshing experience.",
		product_thumbnail_id: 100,
		product_meta_image_id: "100",
		size_chart_image_id: null,
		estimated_delivery_text: "Your order is likely to reach you within 5 to 10 days",
		return_policy_text: "This product is non-returnable.",
		safe_checkout: 0,
		secure_checkout: 1,
		social_share: 1,
		encourage_order: 1,
		encourage_view: 1,
		slug: "deliciously-sweet-watermelon",
		status: 1,
		store_id: 4,
		created_by_id: "1",
		tax_id: 1,
		deleted_at: null,
		created_at: "2023-08-25T03:36:38.000000Z",
		updated_at: "2023-09-29T13:18:36.000000Z",
		orders_count: 13,
		reviews_count: 5,
		can_review: true,
		rating_count: 3.4,
		order_amount: 1664.94,
		review_ratings: [
			1,
			1,
			0,
			1,
			2
		],
		related_products: [
			20,
			5,
			14,
			10,
			15,
			1
		],
		cross_sell_products: [
			8,
			10,
			19
		],
		product_thumbnail: {
			id: 100,
			collection_name: "attachment",
			name: "Watermelon_4",
			file_name: "Watermelon_4.png",
			mime_type: "image/png",
			disk: "public",
			conversions_disk: "public",
			size: "83570",
			created_by_id: "1",
			created_at: "2023-08-24T13:00:14.000000Z",
			updated_at: "2023-08-24T13:00:14.000000Z",
			original_url: "https://laravel.pixelstrap.net/fastkart/storage/100/Watermelon_4.png"
		},
		product_galleries: [
			{
				id: 97,
				collection_name: "attachment",
				name: "Watermelon_1",
				file_name: "Watermelon_1.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "84197",
				created_by_id: "1",
				created_at: "2023-08-24T13:00:14.000000Z",
				updated_at: "2023-08-24T13:00:14.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/97/Watermelon_1.png"
			},
			{
				id: 98,
				collection_name: "attachment",
				name: "Watermelon_2",
				file_name: "Watermelon_2.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "80437",
				created_by_id: "1",
				created_at: "2023-08-24T13:00:14.000000Z",
				updated_at: "2023-08-24T13:00:14.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/98/Watermelon_2.png"
			},
			{
				id: 99,
				collection_name: "attachment",
				name: "Watermelon_3",
				file_name: "Watermelon_3.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "95109",
				created_by_id: "1",
				created_at: "2023-08-24T13:00:14.000000Z",
				updated_at: "2023-08-24T13:00:14.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/99/Watermelon_3.png"
			},
			{
				id: 100,
				collection_name: "attachment",
				name: "Watermelon_4",
				file_name: "Watermelon_4.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "83570",
				created_by_id: "1",
				created_at: "2023-08-24T13:00:14.000000Z",
				updated_at: "2023-08-24T13:00:14.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/100/Watermelon_4.png"
			}
		],
		product_meta_image: {
			id: 100,
			collection_name: "attachment",
			name: "Watermelon_4",
			file_name: "Watermelon_4.png",
			mime_type: "image/png",
			disk: "public",
			conversions_disk: "public",
			size: "83570",
			created_by_id: "1",
			created_at: "2023-08-24T13:00:14.000000Z",
			updated_at: "2023-08-24T13:00:14.000000Z",
			original_url: "https://laravel.pixelstrap.net/fastkart/storage/100/Watermelon_4.png"
		},
		size_chart_image: null,
		reviews: [
			{
				id: 1,
				product_id: 18,
				consumer_id: 19,
				store_id: 3,
				review_image_id: null,
				rating: 5,
				description: "Very impressed with this purchase. The item is of excellent quality, and it has exceeded my expectations.",
				created_at: "2023-09-29T11:52:57.000000Z",
				updated_at: "2023-09-29T11:52:57.000000Z",
				deleted_at: null,
				review_image: null,
				consumer: {
					id: 19,
					name: "John Doe",
					email: "john.customer@example.com",
					country_code: "1",
					phone: 5551855359,
					profile_image_id: "1466",
					system_reserve: "0",
					status: 1,
					created_by_id: 1,
					email_verified_at: null,
					created_at: "2023-09-29T05:50:05.000000Z",
					updated_at: "2023-09-29T06:38:24.000000Z",
					deleted_at: null,
					orders_count: 8,
					role: {
						id: 2,
						name: "consumer",
						guard_name: "web",
						system_reserve: "1",
						created_at: "2023-08-24T08:16:03.000000Z",
						updated_at: "2023-08-24T08:16:03.000000Z",
						pivot: {
							model_id: "19",
							role_id: "2",
							model_type: "App\\Models\\User"
						}
					},
					point: {
						id: 3,
						consumer_id: 19,
						balance: 300
					},
					wallet: {
						id: 1,
						consumer_id: 19,
						balance: 84.4
					},
					address: [
						{
							id: 1,
							title: "New Home",
							user_id: "19",
							street: "26, Starts Hollow Colony",
							city: "Denver",
							pincode: "80014",
							is_default: 0,
							country_code: "1",
							phone: 5551855359,
							country_id: 840,
							state_id: 3759,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3759,
								name: "Colorado",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						},
						{
							id: 2,
							title: "Old Home",
							user_id: "19",
							street: "53B, Claire New Street",
							city: "San Jose",
							pincode: "94088",
							is_default: 0,
							country_code: "1",
							phone: 5551855359,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						},
						{
							id: 3,
							title: "Office",
							user_id: "19",
							street: "21B, Row New Street",
							city: "San Jose",
							pincode: "94088",
							is_default: 0,
							country_code: "1",
							phone: 551865359,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						},
						{
							id: 4,
							title: "IT Office",
							user_id: "19",
							street: "55B, Claire Cav Street",
							city: "San Jose",
							pincode: "94088",
							is_default: 0,
							country_code: "1",
							phone: 5551865359,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						}
					],
					vendor_wallet: null,
					profile_image: {
						id: 1466,
						collection_name: "attachment",
						name: "Group 427320142",
						file_name: "Group-427320142.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "8067",
						created_by_id: "1",
						created_at: "2023-09-30T09:27:07.000000Z",
						updated_at: "2023-09-30T09:27:07.000000Z",
						original_url: "https://laravel.pixelstrap.net/fastkart/storage/1466/Group-427320142.png"
					},
					payment_account: {
						id: 1,
						user_id: "19",
						paypal_email: null,
						bank_name: null,
						bank_holder_name: null,
						bank_account_no: null,
						swift: null,
						ifsc: null,
						is_default: "0",
						status: 1,
						created_at: "2023-09-30T12:55:44.000000Z",
						updated_at: "2023-09-30T12:55:44.000000Z",
						deleted_at: null
					}
				}
			},
			{
				id: 8,
				product_id: 18,
				consumer_id: 21,
				store_id: 3,
				review_image_id: null,
				rating: 4,
				description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
				created_at: "2023-09-29T12:28:59.000000Z",
				updated_at: "2023-09-29T12:28:59.000000Z",
				deleted_at: null,
				review_image: null,
				consumer: {
					id: 21,
					name: "Sarah Davis",
					email: "sarah.customer@example.com",
					country_code: "1",
					phone: 5551885359,
					profile_image_id: "1465",
					system_reserve: "0",
					status: 1,
					created_by_id: null,
					email_verified_at: null,
					created_at: "2023-09-29T06:13:13.000000Z",
					updated_at: "2023-09-29T06:13:13.000000Z",
					deleted_at: null,
					orders_count: 7,
					role: {
						id: 2,
						name: "consumer",
						guard_name: "web",
						system_reserve: "1",
						created_at: "2023-08-24T08:16:03.000000Z",
						updated_at: "2023-08-24T08:16:03.000000Z",
						pivot: {
							model_id: "21",
							role_id: "2",
							model_type: "App\\Models\\User"
						}
					},
					point: {
						id: 5,
						consumer_id: 21,
						balance: 153.43
					},
					wallet: {
						id: 3,
						consumer_id: 21,
						balance: 0
					},
					address: [
						{
							id: 6,
							title: "Home",
							user_id: "21",
							street: "4105 Park Street",
							city: "San Jose",
							pincode: "95110",
							is_default: 0,
							country_code: "1",
							phone: 4088023009,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						},
						{
							id: 7,
							title: "Office",
							user_id: "21",
							street: "4106 Park Street",
							city: "San Jose",
							pincode: "95110",
							is_default: 0,
							country_code: "1",
							phone: 4088023009,
							country_id: 840,
							state_id: 3757,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3757,
								name: "California",
								country_id: "840",
								created_at: "2023-08-24T08:16:43.000000Z",
								updated_at: "2023-08-24T08:16:43.000000Z"
							}
						}
					],
					vendor_wallet: null,
					profile_image: {
						id: 1465,
						collection_name: "attachment",
						name: "Group 427320141",
						file_name: "Group-427320141.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "8384",
						created_by_id: "1",
						created_at: "2023-09-30T09:27:07.000000Z",
						updated_at: "2023-09-30T09:27:07.000000Z",
						original_url: "https://laravel.pixelstrap.net/fastkart/storage/1465/Group-427320141.png"
					},
					payment_account: null
				}
			},
			{
				id: 9,
				product_id: 18,
				consumer_id: 20,
				store_id: 3,
				review_image_id: null,
				rating: 5,
				description: "I am extremely satisfied with this purchase. The item arrived promptly, and the quality is exceptional. It's evident that the makers paid attention to detail. Overall, a fantastic buy!",
				created_at: "2023-09-29T12:48:03.000000Z",
				updated_at: "2023-09-29T12:48:03.000000Z",
				deleted_at: null,
				review_image: null,
				consumer: {
					id: 20,
					name: "Rome Doe",
					email: "rome.customer@example.com",
					country_code: "1",
					phone: 5571875359,
					profile_image_id: "1466",
					system_reserve: "0",
					status: 1,
					created_by_id: null,
					email_verified_at: null,
					created_at: "2023-09-29T06:08:29.000000Z",
					updated_at: "2023-09-29T06:08:29.000000Z",
					deleted_at: null,
					orders_count: 8,
					role: {
						id: 2,
						name: "consumer",
						guard_name: "web",
						system_reserve: "1",
						created_at: "2023-08-24T08:16:03.000000Z",
						updated_at: "2023-08-24T08:16:03.000000Z",
						pivot: {
							model_id: "20",
							role_id: "2",
							model_type: "App\\Models\\User"
						}
					},
					point: {
						id: 4,
						consumer_id: 20,
						balance: 111.58
					},
					wallet: {
						id: 2,
						consumer_id: 20,
						balance: 0
					},
					address: [
						{
							id: 8,
							title: "Home",
							user_id: "20",
							street: "10 Hill Street",
							city: "Toledo",
							pincode: "43615",
							is_default: 0,
							country_code: "1",
							phone: 4197792517,
							country_id: 840,
							state_id: 3790,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3790,
								name: "Ohio",
								country_id: "840",
								created_at: "2023-08-24T08:16:44.000000Z",
								updated_at: "2023-08-24T08:16:44.000000Z"
							}
						}
					],
					vendor_wallet: null,
					profile_image: {
						id: 1466,
						collection_name: "attachment",
						name: "Group 427320142",
						file_name: "Group-427320142.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "8067",
						created_by_id: "1",
						created_at: "2023-09-30T09:27:07.000000Z",
						updated_at: "2023-09-30T09:27:07.000000Z",
						original_url: "https://laravel.pixelstrap.net/fastkart/storage/1466/Group-427320142.png"
					},
					payment_account: null
				}
			},
			{
				id: 10,
				product_id: 18,
				consumer_id: 22,
				store_id: 3,
				review_image_id: null,
				rating: 1,
				description: "Honestly, I regret buying this item. The quality is subpar, and it feels like a waste of money. I wouldn't recommend it to anyone.",
				created_at: "2023-09-29T13:04:13.000000Z",
				updated_at: "2023-09-29T13:04:13.000000Z",
				deleted_at: null,
				review_image: null,
				consumer: {
					id: 22,
					name: "Jessica Miller",
					email: "jessica.customer@example.com",
					country_code: "1",
					phone: 5551895359,
					profile_image_id: "1465",
					system_reserve: "0",
					status: 1,
					created_by_id: null,
					email_verified_at: null,
					created_at: "2023-09-29T06:14:19.000000Z",
					updated_at: "2023-09-29T06:14:19.000000Z",
					deleted_at: null,
					orders_count: 3,
					role: {
						id: 2,
						name: "consumer",
						guard_name: "web",
						system_reserve: "1",
						created_at: "2023-08-24T08:16:03.000000Z",
						updated_at: "2023-08-24T08:16:03.000000Z",
						pivot: {
							model_id: "22",
							role_id: "2",
							model_type: "App\\Models\\User"
						}
					},
					point: {
						id: 6,
						consumer_id: 22,
						balance: 100
					},
					wallet: {
						id: 4,
						consumer_id: 22,
						balance: 0
					},
					address: [
						{
							id: 9,
							title: "Home",
							user_id: "22",
							street: "10 Hill Street",
							city: "Toledo",
							pincode: "43615",
							is_default: 0,
							country_code: "1",
							phone: 4197792517,
							country_id: 840,
							state_id: 3790,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3790,
								name: "Ohio",
								country_id: "840",
								created_at: "2023-08-24T08:16:44.000000Z",
								updated_at: "2023-08-24T08:16:44.000000Z"
							}
						}
					],
					vendor_wallet: null,
					profile_image: {
						id: 1465,
						collection_name: "attachment",
						name: "Group 427320141",
						file_name: "Group-427320141.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "8384",
						created_by_id: "1",
						created_at: "2023-09-30T09:27:07.000000Z",
						updated_at: "2023-09-30T09:27:07.000000Z",
						original_url: "https://laravel.pixelstrap.net/fastkart/storage/1465/Group-427320141.png"
					},
					payment_account: null
				}
			},
			{
				id: 14,
				product_id: 18,
				consumer_id: 18,
				store_id: 3,
				review_image_id: null,
				rating: 2,
				description: "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
				created_at: "2023-09-29T13:10:49.000000Z",
				updated_at: "2023-09-29T13:10:49.000000Z",
				deleted_at: null,
				review_image: null,
				consumer: {
					id: 18,
					name: "Jack Doe",
					email: "jack.customer@example.com",
					country_code: "1",
					phone: 156963090,
					profile_image_id: "1468",
					system_reserve: "0",
					status: 1,
					created_by_id: 1,
					email_verified_at: null,
					created_at: "2023-09-23T05:25:19.000000Z",
					updated_at: "2023-09-29T06:42:11.000000Z",
					deleted_at: null,
					orders_count: 3,
					role: {
						id: 2,
						name: "consumer",
						guard_name: "web",
						system_reserve: "1",
						created_at: "2023-08-24T08:16:03.000000Z",
						updated_at: "2023-08-24T08:16:03.000000Z",
						pivot: {
							model_id: "18",
							role_id: "2",
							model_type: "App\\Models\\User"
						}
					},
					point: {
						id: 8,
						consumer_id: 18,
						balance: 0
					},
					wallet: {
						id: 6,
						consumer_id: 18,
						balance: 0
					},
					address: [
						{
							id: 10,
							title: "Home",
							user_id: "18",
							street: "112 News Street",
							city: "Oslao",
							pincode: "85200",
							is_default: 0,
							country_code: "91",
							phone: 452361892,
							country_id: 840,
							state_id: 3781,
							country: {
								id: 840,
								name: "United States"
							},
							state: {
								id: 3781,
								name: "Nebraska",
								country_id: "840",
								created_at: "2023-08-24T08:16:44.000000Z",
								updated_at: "2023-08-24T08:16:44.000000Z"
							}
						}
					],
					vendor_wallet: null,
					profile_image: {
						id: 1468,
						collection_name: "attachment",
						name: "Group 427320144",
						file_name: "Group-427320144.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "8563",
						created_by_id: "1",
						created_at: "2023-09-30T09:27:07.000000Z",
						updated_at: "2023-09-30T09:27:07.000000Z",
						original_url: "https://laravel.pixelstrap.net/fastkart/storage/1468/Group-427320144.png"
					},
					payment_account: null
				}
			}
		],
		store: {
			id: 4,
			store_name: "Fruits Market",
			description: "Welcome to Fruits Market, your gateway to a world of natural sweetness and vibrant flavors. At FruitE, we celebrate the beauty and goodness of fruits in their purest form",
			slug: "fruits-market",
			store_logo_id: 1441,
			store_cover_id: null,
			country_id: 840,
			state_id: 3757,
			city: "San Jose",
			address: "4105 Park Street",
			pincode: "95110",
			facebook: "https://www.facebook.com/",
			twitter: "https://twitter.com/",
			instagram: "https://www.instagram.com/",
			youtube: null,
			pinterest: null,
			hide_vendor_email: 0,
			hide_vendor_phone: 0,
			vendor_id: 5,
			created_by_id: "1",
			status: 1,
			is_approved: 1,
			created_at: "2023-08-24T09:40:33.000000Z",
			updated_at: "2023-09-20T09:38:35.000000Z",
			deleted_at: null,
			orders_count: 11,
			reviews_count: 0,
			products_count: 10,
			product_images: [
				"https://laravel.pixelstrap.net/fastkart/storage/90/Pomegranate_2.png",
				"https://laravel.pixelstrap.net/fastkart/storage/93/Strawberry_1.png",
				"https://laravel.pixelstrap.net/fastkart/storage/100/Watermelon_4.png"
			],
			order_amount: 1383.87,
			rating_count: null,
			store_logo: {
				id: 1441,
				collection_name: "attachment",
				name: "store01",
				file_name: "store01.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "81368",
				created_by_id: "1",
				created_at: "2023-09-20T09:37:56.000000Z",
				updated_at: "2023-09-20T09:37:56.000000Z",
				original_url: "https://laravel.pixelstrap.net/fastkart/storage/1441/store01.png"
			},
			store_cover: null,
			vendor: {
				id: 5,
				name: "Irene Clark",
				email: "irene.clark@example.com",
				country_code: "1",
				phone: 4088023009,
				profile_image_id: null,
				system_reserve: "0",
				status: 1,
				created_by_id: 1,
				email_verified_at: null,
				created_at: "2023-08-24T09:40:33.000000Z",
				updated_at: "2023-08-24T09:40:33.000000Z",
				deleted_at: null,
				orders_count: 0,
				role: {
					id: 3,
					name: "vendor",
					guard_name: "web",
					system_reserve: "1",
					created_at: "2023-08-24T08:16:03.000000Z",
					updated_at: "2023-08-24T08:16:03.000000Z",
					pivot: {
						model_id: "5",
						role_id: "3",
						model_type: "App\\Models\\User"
					}
				},
				point: null,
				wallet: null,
				address: [
				],
				vendor_wallet: {
					id: 4,
					vendor_id: 5,
					balance: 0,
					created_at: "2023-08-24T09:40:33.000000Z",
					updated_at: "2023-08-24T09:40:33.000000Z",
					deleted_at: null
				},
				profile_image: null,
				payment_account: null
			},
			country: {
				id: 840,
				name: "United States",
				currency: "US dollar",
				currency_symbol: "$",
				iso_3166_2: "US",
				iso_3166_3: "USA",
				calling_code: "1",
				flag: "US.png"
			},
			state: {
				id: 3757,
				name: "California",
				country_id: "840",
				created_at: "2023-08-24T08:16:43.000000Z",
				updated_at: "2023-08-24T08:16:43.000000Z"
			},
			reviews: [
			]
		},
		tax: {
			id: 1,
			name: "Sales Tax",
			rate: "7.23",
			status: 1,
			created_by_id: "1",
			created_at: "2023-08-24T09:23:29.000000Z",
			updated_at: "2023-08-24T12:55:39.000000Z",
			deleted_at: null
		},
		categories: [
			{
				id: 1,
				name: "Vegetables & Fruits",
				slug: "vegetables-fruits",
				description: "Vegetables and fruits are essential components of a balanced diet, providing a wide range of nutrients, vitamins, and minerals that promote overall health. Vegetables encompass a diverse group of plant-based foods, while fruits are naturally sweet and colorful delights that offer a variety of flavors and health benefits. Incorporating a colorful array of vegetables and fruits into your meals can contribute to improved well-being and support various bodily functions.",
				category_image_id: 395,
				category_icon_id: 266,
				status: 1,
				type: "product",
				commission_rate: 1,
				parent_id: null,
				created_by_id: "1",
				created_at: "2023-08-24T08:54:10.000000Z",
				updated_at: "2023-09-01T06:11:19.000000Z",
				deleted_at: null,
				blogs_count: 0,
				products_count: 21,
				pivot: {
					product_id: "18",
					category_id: "1"
				},
				category_image: {
					id: 395,
					collection_name: "attachment",
					name: "Vegertable & fruits",
					file_name: "Vegertable-&-fruits.png",
					mime_type: "image/png",
					disk: "public",
					conversions_disk: "public",
					size: "2250220",
					created_by_id: "1",
					created_at: "2023-09-01T06:10:15.000000Z",
					updated_at: "2023-09-01T06:10:15.000000Z",
					original_url: "https://laravel.pixelstrap.net/fastkart/storage/395/Vegertable-&-fruits.png"
				},
				category_icon: {
					id: 266,
					collection_name: "attachment",
					name: "vegetable",
					file_name: "vegetable.svg",
					mime_type: "image/svg+xml",
					disk: "public",
					conversions_disk: "public",
					size: "2617",
					created_by_id: "1",
					created_at: "2023-08-26T12:19:11.000000Z",
					updated_at: "2023-08-26T12:19:11.000000Z",
					original_url: "https://laravel.pixelstrap.net/fastkart/storage/266/vegetable.svg"
				}
			}
		],
		tags: [
			{
				id: 1,
				name: "Vegetables & Fruits",
				slug: "vegetables-fruits",
				type: "product",
				description: "Vegetables and fruits are essential components of a balanced diet, providing a wide range of nutrients, vitamins, and minerals that promote overall health. Vegetables encompass a diverse group of plant-based foods, while fruits are naturally sweet and colorful delights that offer a variety of flavors and health benefits. Incorporating a colorful array of vegetables and fruits into your meals can contribute to improved well-being and support various bodily functions.",
				created_by_id: "1",
				status: 1,
				created_at: "2023-08-24T09:19:47.000000Z",
				updated_at: "2023-08-24T09:19:47.000000Z",
				deleted_at: null,
				blogs_count: 0,
				products_count: 21,
				pivot: {
					product_id: "18",
					tag_id: "1"
				}
			}
		],
		attributes: [
			{
				id: 1,
				name: "Weight",
				style: "rectangle",
				slug: "weight",
				status: 1,
				created_by_id: "1",
				created_at: "2023-08-24T11:43:50.000000Z",
				updated_at: "2023-08-24T13:03:54.000000Z",
				deleted_at: null,
				pivot: {
					product_id: "18",
					attribute_id: "1"
				},
				attribute_values: [
					{
						id: 1,
						value: "1 KG",
						slug: "1-kg",
						hex_color: null,
						attribute_id: "1",
						created_by_id: "1",
						created_at: "2023-08-24T11:43:50.000000Z",
						updated_at: "2023-08-24T11:43:50.000000Z",
						deleted_at: null
					},
					{
						id: 2,
						value: "5 KG",
						slug: "5-kg",
						hex_color: null,
						attribute_id: "1",
						created_by_id: "1",
						created_at: "2023-08-24T11:43:50.000000Z",
						updated_at: "2023-08-24T11:43:50.000000Z",
						deleted_at: null
					},
					{
						id: 3,
						value: "10 KG",
						slug: "10-kg",
						hex_color: null,
						attribute_id: "1",
						created_by_id: "1",
						created_at: "2023-08-24T11:43:50.000000Z",
						updated_at: "2023-08-24T11:43:50.000000Z",
						deleted_at: null
					}
				]
			}
		],
		variations: [
			{
				id: 1,
				name: "Deliciously Sweet Watermelon 1 KG",
				price: 6,
				quantity: 2,
				stock_status: "in_stock",
				sale_price: 5.46,
				discount: 9,
				sku: "FRUIT1KG08",
				status: 1,
				variation_options: null,
				variation_image_id: 99,
				product_id: 18,
				deleted_at: null,
				created_at: "2023-09-19T10:23:34.000000Z",
				updated_at: "2023-09-19T10:24:13.000000Z",
				variation_image: {
					id: 99,
					collection_name: "attachment",
					name: "Watermelon_3",
					file_name: "Watermelon_3.png",
					mime_type: "image/png",
					disk: "public",
					conversions_disk: "public",
					size: "95109",
					created_by_id: "1",
					created_at: "2023-08-24T13:00:14.000000Z",
					updated_at: "2023-08-24T13:00:14.000000Z",
					original_url: "https://laravel.pixelstrap.net/fastkart/storage/99/Watermelon_3.png"
				},
				attribute_values: [
					{
						id: 1,
						value: "1 KG",
						slug: "1-kg",
						hex_color: null,
						attribute_id: "1",
						created_by_id: "1",
						created_at: "2023-08-24T11:43:50.000000Z",
						updated_at: "2023-08-24T11:43:50.000000Z",
						deleted_at: null,
						pivot: {
							variation_id: "1",
							attribute_value_id: "1"
						}
					}
				]
			},
			{
				id: 2,
				name: "Deliciously Sweet Watermelon 5 KG",
				price: 30,
				quantity: 5,
				stock_status: "in_stock",
				sale_price: 27.6,
				discount: 8,
				sku: "FRUIT5KG08",
				status: 1,
				variation_options: null,
				variation_image_id: 98,
				product_id: 18,
				deleted_at: null,
				created_at: "2023-09-19T10:23:34.000000Z",
				updated_at: "2023-09-29T10:16:58.000000Z",
				variation_image: {
					id: 98,
					collection_name: "attachment",
					name: "Watermelon_2",
					file_name: "Watermelon_2.png",
					mime_type: "image/png",
					disk: "public",
					conversions_disk: "public",
					size: "80437",
					created_by_id: "1",
					created_at: "2023-08-24T13:00:14.000000Z",
					updated_at: "2023-08-24T13:00:14.000000Z",
					original_url: "https://laravel.pixelstrap.net/fastkart/storage/98/Watermelon_2.png"
				},
				attribute_values: [
					{
						id: 2,
						value: "5 KG",
						slug: "5-kg",
						hex_color: null,
						attribute_id: "1",
						created_by_id: "1",
						created_at: "2023-08-24T11:43:50.000000Z",
						updated_at: "2023-08-24T11:43:50.000000Z",
						deleted_at: null,
						pivot: {
							variation_id: "2",
							attribute_value_id: "2"
						}
					}
				]
			},
			{
				id: 3,
				name: "Deliciously Sweet Watermelon 10 KG",
				price: 60,
				quantity: 8,
				stock_status: "in_stock",
				sale_price: 54,
				discount: 10,
				sku: "FRUIT10KG08",
				status: 1,
				variation_options: null,
				variation_image_id: 100,
				product_id: 18,
				deleted_at: null,
				created_at: "2023-09-19T10:23:34.000000Z",
				updated_at: "2023-09-29T13:38:01.000000Z",
				variation_image: {
					id: 100,
					collection_name: "attachment",
					name: "Watermelon_4",
					file_name: "Watermelon_4.png",
					mime_type: "image/png",
					disk: "public",
					conversions_disk: "public",
					size: "83570",
					created_by_id: "1",
					created_at: "2023-08-24T13:00:14.000000Z",
					updated_at: "2023-08-24T13:00:14.000000Z",
					original_url: "https://laravel.pixelstrap.net/fastkart/storage/100/Watermelon_4.png"
				},
				attribute_values: [
					{
						id: 3,
						value: "10 KG",
						slug: "10-kg",
						hex_color: null,
						attribute_id: "1",
						created_by_id: "1",
						created_at: "2023-08-24T11:43:50.000000Z",
						updated_at: "2023-08-24T11:43:50.000000Z",
						deleted_at: null,
						pivot: {
							variation_id: "3",
							attribute_value_id: "3"
						}
					}
				]
			}
		]
	}
];
var total = 3;
const compare = {
	data: data,
	total: total
};

const index = defineEventHandler((event) => {
  return compare;
});

export { index as default };

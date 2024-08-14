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
		id: 3,
		reason: "The product does not function as described. It's advertised to perform certain tasks, but in reality, it falls short. I am dissatisfied and believe I should be refunded for this ineffective product.",
		amount: 9.4,
		quantity: 1,
		store_id: 3,
		order_id: 28,
		product_id: 161,
		consumer_id: 19,
		variation_id: 15,
		refund_image_id: null,
		payment_type: "wallet",
		status: "approved",
		is_used: "1",
		created_at: "2023-09-30T08:13:07.000000Z",
		updated_at: "2023-09-30T08:43:52.000000Z",
		deleted_at: null,
		user: {
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
				original_url: "/images/data/avatar.png"
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
		},
		store: {
			id: 3,
			store_name: "Natures Basket Mart",
			description: "Welcome to Nature's Basket Mart, We understand the importance of fresh, nourishing vegetables in your daily diet, and that's why we've curated a marketplace that celebrates the vibrancy, flavors, and vitality of farm-fresh produce",
			slug: "natures-basket-mart",
			store_logo_id: 1439,
			store_cover_id: null,
			country_id: 840,
			state_id: 3787,
			city: "Rochester",
			address: "2775 James Street",
			pincode: "14616",
			facebook: "https://www.facebook.com/",
			twitter: "https://twitter.com/",
			instagram: "https://www.instagram.com/",
			youtube: null,
			pinterest: null,
			hide_vendor_email: 0,
			hide_vendor_phone: 0,
			vendor_id: 4,
			created_by_id: "1",
			status: 1,
			is_approved: 1,
			created_at: "2023-08-24T09:37:50.000000Z",
			updated_at: "2023-09-29T13:35:05.000000Z",
			deleted_at: null,
			orders_count: 9,
			reviews_count: 25,
			products_count: 10,
			product_images: [
				"/images/data/product.png",
				"/images/data/product.png",
				"/images/data/product.png"
			],
			order_amount: 404,
			rating_count: 3.4,
			store_logo: {
				id: 1439,
				collection_name: "attachment",
				name: "store02",
				file_name: "store02.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "75525",
				created_by_id: "1",
				created_at: "2023-09-20T09:37:48.000000Z",
				updated_at: "2023-09-20T09:37:48.000000Z",
				original_url: "/images/data/product.png"
			},
			store_cover: null,
			vendor: {
				id: 4,
				name: "Paul Hardin",
				email: "paul.hardin@example.com",
				country_code: "1",
				phone: 5186570491,
				profile_image_id: null,
				system_reserve: "0",
				status: 1,
				created_by_id: 1,
				email_verified_at: null,
				created_at: "2023-08-24T09:37:50.000000Z",
				updated_at: "2023-08-24T09:40:48.000000Z",
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
						model_id: "4",
						role_id: "3",
						model_type: "App\\Models\\User"
					}
				},
				point: null,
				wallet: null,
				address: [
				],
				vendor_wallet: {
					id: 3,
					vendor_id: 4,
					balance: 0,
					created_at: "2023-08-24T09:37:50.000000Z",
					updated_at: "2023-08-24T09:37:50.000000Z",
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
				id: 3787,
				name: "New York",
				country_id: "840",
				created_at: "2023-08-24T08:16:44.000000Z",
				updated_at: "2023-08-24T08:16:44.000000Z"
			},
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 4,
					product_id: 15,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:27:54.000000Z",
					updated_at: "2023-09-29T12:27:54.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 5,
					product_id: 10,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:28:12.000000Z",
					updated_at: "2023-09-29T12:28:12.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 6,
					product_id: 19,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:28:25.000000Z",
					updated_at: "2023-09-29T12:28:25.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 7,
					product_id: 9,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:28:39.000000Z",
					updated_at: "2023-09-29T12:28:39.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 11,
					product_id: 17,
					consumer_id: 22,
					store_id: 3,
					review_image_id: null,
					rating: 3,
					description: "Honestly, I regret buying this item. The quality is subpar, and it feels like a waste of money. I wouldn't recommend it to anyone.",
					created_at: "2023-09-29T13:04:48.000000Z",
					updated_at: "2023-09-29T13:04:48.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 12,
					product_id: 13,
					consumer_id: 22,
					store_id: 3,
					review_image_id: null,
					rating: 2,
					description: "Honestly, I regret buying this item. The quality is subpar, and it feels like a waste of money. I wouldn't recommend it to anyone.",
					created_at: "2023-09-29T13:04:59.000000Z",
					updated_at: "2023-09-29T13:04:59.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 13,
					product_id: 11,
					consumer_id: 22,
					store_id: 3,
					review_image_id: null,
					rating: 1,
					description: "Honestly, I regret buying this item. The quality is subpar, and it feels like a waste of money. I wouldn't recommend it to anyone.",
					created_at: "2023-09-29T13:05:09.000000Z",
					updated_at: "2023-09-29T13:05:09.000000Z",
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 15,
					product_id: 17,
					consumer_id: 18,
					store_id: 3,
					review_image_id: null,
					rating: 2,
					description: "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
					created_at: "2023-09-29T13:12:23.000000Z",
					updated_at: "2023-09-29T13:12:23.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 16,
					product_id: 11,
					consumer_id: 18,
					store_id: 3,
					review_image_id: null,
					rating: 3,
					description: "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
					created_at: "2023-09-29T13:12:47.000000Z",
					updated_at: "2023-09-29T13:12:47.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 17,
					product_id: 13,
					consumer_id: 18,
					store_id: 3,
					review_image_id: null,
					rating: 1,
					description: "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
					created_at: "2023-09-29T13:13:00.000000Z",
					updated_at: "2023-09-29T13:13:00.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 18,
					product_id: 9,
					consumer_id: 20,
					store_id: 3,
					review_image_id: null,
					rating: 3,
					description: "This is one of the worst purchases I've made. The item looks nothing like the pictures, and the functionality is a joke. I feel misled and dissatisfied.",
					created_at: "2023-09-29T13:30:02.000000Z",
					updated_at: "2023-09-29T13:30:02.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 19,
					product_id: 10,
					consumer_id: 20,
					store_id: 3,
					review_image_id: null,
					rating: 2,
					description: "This is one of the worst purchases I've made. The item looks nothing like the pictures, and the functionality is a joke. I feel misled and dissatisfied.",
					created_at: "2023-09-29T13:30:26.000000Z",
					updated_at: "2023-09-29T13:30:26.000000Z",
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 21,
					product_id: 15,
					consumer_id: 20,
					store_id: 3,
					review_image_id: null,
					rating: 1,
					description: "This is one of the worst purchases I've made. The item looks nothing like the pictures, and the functionality is a joke. I feel misled and dissatisfied.",
					created_at: "2023-09-29T13:31:13.000000Z",
					updated_at: "2023-09-29T13:31:13.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 22,
					product_id: 15,
					consumer_id: 19,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am extremely satisfied with this purchase. The item arrived promptly, and the quality is exceptional. It's evident that the makers paid attention to detail. Overall, a fantastic buy!",
					created_at: "2023-09-30T11:47:02.000000Z",
					updated_at: "2023-09-30T11:47:02.000000Z",
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
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
					id: 24,
					product_id: 19,
					consumer_id: 19,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am extremely satisfied with this purchase. The item arrived promptly, and the quality is exceptional. It's evident that the makers paid attention to detail. Overall, a fantastic buy!",
					created_at: "2023-09-30T11:53:03.000000Z",
					updated_at: "2023-09-30T11:53:03.000000Z",
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
							original_url: "/images/data/avatar.png"
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
					id: 25,
					product_id: 17,
					consumer_id: 19,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am extremely satisfied with this purchase. The item arrived promptly, and the quality is exceptional. It's evident that the makers paid attention to detail. Overall, a fantastic buy!",
					created_at: "2023-09-30T11:53:15.000000Z",
					updated_at: "2023-09-30T11:53:15.000000Z",
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
							original_url: "/images/data/avatar.png"
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
			]
		},
		order: {
			id: 28,
			order_number: 1027,
			consumer_id: 19,
			tax_total: 6.48,
			shipping_total: 0,
			points_amount: 0,
			wallet_balance: 0,
			amount: 89.76,
			total: 96.24,
			coupon_total_discount: 0,
			payment_method: "cod",
			payment_status: "COMPLETED",
			store_id: 15,
			billing_address_id: 1,
			shipping_address_id: 4,
			delivery_description: "Standard Delivery | Approx 5 to 7 Days",
			delivery_interval: null,
			order_status_id: 6,
			coupon_id: null,
			parent_id: null,
			created_by_id: 1,
			invoice_url: "",
			status: 1,
			delivered_at: "2023-09-30 00:00:00",
			created_at: "2023-09-29T13:42:55.000000Z",
			updated_at: "2023-09-29T13:45:25.000000Z",
			deleted_at: null,
			store: {
				id: 15,
				store_name: "Trendy Fashions",
				description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
				slug: "trendy-fashions",
				store_logo_id: 1452,
				store_cover_id: null,
				country_id: 840,
				state_id: 3759,
				city: "Denver",
				address: "26, Starts Hollow Colony",
				pincode: "80014",
				facebook: "https://www.facebook.com/",
				twitter: "https://twitter.com/",
				instagram: "https://www.instagram.com/",
				youtube: null,
				pinterest: null,
				hide_vendor_email: 0,
				hide_vendor_phone: 0,
				vendor_id: 16,
				created_by_id: "1",
				status: 1,
				is_approved: 1,
				created_at: "2023-09-18T09:14:34.000000Z",
				updated_at: "2023-09-22T08:52:46.000000Z",
				deleted_at: null,
				orders_count: 4,
				reviews_count: 0,
				products_count: 27,
				product_images: [
					"/images/data/product.png",
					"/images/data/product.png",
					"/images/data/product.png"
				],
				order_amount: 156.58,
				rating_count: null,
				store_logo: {
					id: 1452,
					collection_name: "attachment",
					name: "04",
					file_name: "04.png",
					mime_type: "image/png",
					disk: "public",
					conversions_disk: "public",
					size: "13034",
					created_by_id: "1",
					created_at: "2023-09-22T08:52:17.000000Z",
					updated_at: "2023-09-22T08:52:17.000000Z",
					original_url: "/images/data/product.png"
				},
				store_cover: null,
				vendor: {
					id: 16,
					name: "Lorlie Gilmore",
					email: "lorlie.gilmore@example.com",
					country_code: "1",
					phone: 6305875463,
					profile_image_id: null,
					system_reserve: "0",
					status: 1,
					created_by_id: 1,
					email_verified_at: null,
					created_at: "2023-09-18T09:14:34.000000Z",
					updated_at: "2023-09-18T09:14:34.000000Z",
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
							model_id: "16",
							role_id: "3",
							model_type: "App\\Models\\User"
						}
					},
					point: null,
					wallet: null,
					address: [
					],
					vendor_wallet: {
						id: 15,
						vendor_id: 16,
						balance: 0,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-18T09:14:34.000000Z",
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
					id: 3759,
					name: "Colorado",
					country_id: "840",
					created_at: "2023-08-24T08:16:43.000000Z",
					updated_at: "2023-08-24T08:16:43.000000Z"
				},
				reviews: [
				]
			},
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
					original_url: "/images/data/avatar.png"
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
			},
			products: [
				{
					id: 178,
					name: "Men Gym Co-Ord Set",
					short_description: "The breathable fabric used in our Men Gym Co-Ord Set allows for proper air circulation, keeping you cool and dry even during intense workouts.",
					description: "<p><strong>Unleash Your Fitness Potential with Our Men's Gym Co-Ord Set</strong></p><p>Embarking on a fitness journey demands the right companion, and our Men's Gym Co-Ord Set is tailored to be just that. Crafted with your comfort at its core, this set is a testament to the perfect blend of style and functionality. Picture yourself in a gym ensemble that not only complements your active lifestyle but enhances your workout experience.</p><p>When we talk about the essence of this gym co-ord set, it starts with the fabric. We've meticulously chosen a high-quality breathable material that prioritizes air circulation. Ensuring you stay cool and dry during your most intense workouts, this fabric is designed to keep you focused on your fitness goals rather than discomfort.</p><p>In the realm of fitness, style isn't just an accessory – it's an expression. The sleek and modern design of this gym co-ord set is a testament to professionalism in every stitch. It's not just gym wear; it's a statement of your dedication to an active and healthy life. The set includes both a top and shorts, providing a coordinated look that exudes confidence.</p><p>Flexibility and freedom of movement are non-negotiable when it comes to workout wear. Our Men's Gym Co-Ord Set offers just that, allowing you to push your limits, stretch, and strive for more. The fabric is thoughtfully chosen to ensure not only comfort but also durability. It's a set that can endure the most rigorous workout sessions, giving you the confidence that your gym wear is up to the challenge.</p><p>Who is this set for? Well, everyone on the fitness spectrum. Whether you're a gym enthusiast or a casual fitness buff, this co-ord set is designed for all. Weightlifting, cardio, yoga, or any other fitness activity you're into – this set has got your back, quite literally. Its versatility makes it a must-have addition to your workout wardrobe, a go-to for any exercise regimen.</p><p>Investing in your fitness journey is investing in yourself. Elevate your workout experience with our Men's Gym Co-Ord Set, where comfort meets style, and functionality embraces fashion. Make a statement, take charge of your fitness goals, and let this exceptional gym co-ord set be your trusted ally. It's time to break a sweat and look great doing it!</p>",
					type: "simple",
					unit: "1 Item",
					weight: 178,
					quantity: 0,
					price: 14,
					sale_price: 12.6,
					discount: 10,
					is_featured: 0,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 1,
					is_return: 1,
					is_trending: 1,
					is_approved: 1,
					sale_starts_at: "2023-9-1",
					sale_expired_at: "2025-10-30",
					sku: "FAS22",
					is_random_related_products: 1,
					stock_status: "out_of_stock",
					meta_title: "Men Gym Co-Ord Set",
					meta_description: "The breathable fabric used in our Men Gym Co-Ord Set allows for proper air circulation, keeping you cool and dry even during intense workouts.",
					product_thumbnail_id: 1263,
					product_meta_image_id: "1263",
					size_chart_image_id: 1437,
					estimated_delivery_text: "Expect your delivery between 5 and 7 days",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available.",
					safe_checkout: 1,
					secure_checkout: 0,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "men-gym-co-ord-set",
					status: 1,
					store_id: 15,
					created_by_id: "19",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T12:42:13.000000Z",
					updated_at: "2023-09-30T04:24:25.000000Z",
					orders_count: 2,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 136.22,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						160,
						153,
						161,
						158,
						167,
						168
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 178,
						variation_id: null,
						quantity: 1,
						single_price: 12,
						shipping_cost: 0,
						subtotal: 12.6,
						is_refunded: 1
					},
					product_thumbnail: {
						id: 1263,
						collection_name: "attachment",
						name: "gymmen_01-1",
						file_name: "gymmen_01-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "17910",
						created_by_id: "1",
						created_at: "2023-09-18T12:29:48.000000Z",
						updated_at: "2023-09-18T12:29:48.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1263,
							collection_name: "attachment",
							name: "gymmen_01-1",
							file_name: "gymmen_01-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "17910",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1264,
							collection_name: "attachment",
							name: "gymmen_02",
							file_name: "gymmen_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "21918",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1265,
							collection_name: "attachment",
							name: "gymmen_03",
							file_name: "gymmen_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "10917",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1262,
							collection_name: "attachment",
							name: "gymmen_01",
							file_name: "gymmen_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "27922",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1263,
						collection_name: "attachment",
						name: "gymmen_01-1",
						file_name: "gymmen_01-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "17910",
						created_by_id: "1",
						created_at: "2023-09-18T12:29:48.000000Z",
						updated_at: "2023-09-18T12:29:48.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "178",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "178",
								tag_id: "11"
							}
						}
					],
					attributes: [
					],
					variations: [
					]
				},
				{
					id: 175,
					name: "Long Sleeve Top",
					short_description: "Available in a range of colors, customers can choose their preferred shade to match their personal style and preferences.",
					description: "<p>A wardrobe staple and a must-have addition for any fashion enthusiast, our Long Sleeve Top is designed to elevate your everyday style with effortless grace. This classic piece embodies timeless elegance and versatility, crafted with meticulous attention to detail and superior quality that ensures both comfort and style.</p><p>Crafted from a soft and breathable fabric, this top promises a cozy fit while keeping you chic throughout the day. The careful selection of materials ensures a luxurious feel against your skin, making it ideal for extended wear without compromising on style.</p><p>What sets our Long Sleeve Top apart is the wide array of colors available, allowing you to choose the perfect shade that aligns with your personal style and preferences. Whether you prefer a bold, eye-catching hue or a more understated, classic tone, our collection caters to all tastes and occasions.</p><p>The beauty of this top lies in its adaptability; it's a garment that seamlessly transitions from casual to sophisticated. Pair it with your favorite pair of jeans for a laid-back, yet fashionable look, or opt for tailored pants to exude an air of refinement. The possibilities are as endless as your imagination.</p><p>The slim fit of the Long Sleeve Top flatters your figure, accentuating your feminine curves in all the right places. This tailored fit not only provides a stylish silhouette but also boosts your confidence wherever you go. The long sleeves offer additional coverage and warmth, making it a perfect choice for cooler seasons, ensuring this piece remains a year-round wardrobe essential.</p><p>Investing in our Long Sleeve Top means investing in a blend of comfort, style, and versatility. This garment effortlessly accommodates various occasions, whether it's a day at the office, a casual outing with friends, or simply running errands. The timeless design ensures that you'll never be without the perfect attire for any event.</p><p>Don't miss the opportunity to embrace the elegance and versatility of our Long Sleeve Top. Elevate your style and leave a lasting impression wherever you choose to wear it. Order now and experience the epitome of fashion that complements your lifestyle and stands the test of time. Make our Long Sleeve Top your go-to choice and revel in the confidence and sophistication it brings to your wardrobe.</p>",
					type: "simple",
					unit: "1 Item",
					weight: 120,
					quantity: 136,
					price: 12,
					sale_price: 9.72,
					discount: 19,
					is_featured: 0,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 0,
					is_trending: 1,
					is_approved: 0,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS20",
					is_random_related_products: 0,
					stock_status: "in_stock",
					meta_title: "Long Sleeve Top",
					meta_description: "Available in a range of colors, customers can choose their preferred shade to match their personal style and preferences.",
					product_thumbnail_id: 1224,
					product_meta_image_id: "1224",
					size_chart_image_id: null,
					estimated_delivery_text: null,
					return_policy_text: null,
					safe_checkout: 1,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "long-sleeve-top",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T12:11:42.000000Z",
					updated_at: "2023-09-30T11:40:55.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 175,
						variation_id: null,
						quantity: 1,
						single_price: 9,
						shipping_cost: 0,
						subtotal: 9.72,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1224,
						collection_name: "attachment",
						name: "shortstishirt_02",
						file_name: "shortstishirt_02.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25601",
						created_by_id: "1",
						created_at: "2023-09-18T12:06:25.000000Z",
						updated_at: "2023-09-18T12:06:25.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1223,
							collection_name: "attachment",
							name: "shortstishirt_01",
							file_name: "shortstishirt_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "37440",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1224,
							collection_name: "attachment",
							name: "shortstishirt_02",
							file_name: "shortstishirt_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "25601",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1225,
							collection_name: "attachment",
							name: "shortstishirt_03",
							file_name: "shortstishirt_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "23253",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1226,
							collection_name: "attachment",
							name: "shortstishirt_04",
							file_name: "shortstishirt_04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "50990",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1224,
						collection_name: "attachment",
						name: "shortstishirt_02",
						file_name: "shortstishirt_02.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25601",
						created_by_id: "1",
						created_at: "2023-09-18T12:06:25.000000Z",
						updated_at: "2023-09-18T12:06:25.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: null,
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "175",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "175",
								tag_id: "11"
							}
						}
					],
					attributes: [
					],
					variations: [
					]
				},
				{
					id: 177,
					name: "Women Polyester Activewear",
					short_description: "Designed to keep you dry and comfortable during workouts, our activewear features moisture-wicking technology that wicks away sweat.",
					description: "<p>Embarking on a fitness journey requires more than just determination—it demands the right gear that understands and enhances your every move. We present to you the epitome of fitness companions: our Women's Polyester Activewear. Meticulously crafted and designed with your comfort in mind, this activewear is set to revolutionize your workout experience.</p><p>Imagine activewear that works as hard as you do, effortlessly adapting to the rigors of your intense workout sessions. Our activewear boasts cutting-edge moisture-wicking technology that efficiently whisks away sweat, ensuring you stay dry and comfortable throughout your training. Say goodbye to distractions caused by sticky and uncomfortable clothes. Our activewear offers optimum breathability and rapid-drying properties, so you can focus on achieving your fitness goals without hindrance.</p><p>Yet, functionality is just one aspect of our activewear's brilliance. Style takes center stage with a sleek and fashionable design that's bound to turn heads at the gym. We understand that looking good is feeling good, and our activewear, made from premium-quality polyester fabric, ensures a perfect fit that accentuates your figure. Boost your confidence and motivation as you adorn yourself in activewear that not only performs outstandingly but also complements your style effortlessly.</p><p>Whether you're pounding the treadmill, striking poses in yoga, or engaging in high-intensity workouts, our activewear is the reliable partner you can trust. Offering maximum flexibility and freedom of movement, it lets you push your limits and reach new heights in your fitness journey. Feel the ease of unrestricted motion as you conquer your workouts and strive towards a fitter, healthier you.</p><p>Investing in our Women's Polyester Activewear today will redefine your workout routine. Experience the difference it brings to your performance, making you feel unstoppable in your pursuit of fitness goals. Elevate your workout, set new standards, and conquer your fitness journey like never before. Embrace the power of the ultimate fitness companion—our Women's Polyester Activewear.</p>",
					type: "simple",
					unit: "1 Item",
					weight: 167,
					quantity: 154,
					price: 26,
					sale_price: 22.36,
					discount: 14,
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
					sku: "FAS21",
					is_random_related_products: 0,
					stock_status: "in_stock",
					meta_title: "Women Polyester Activewear",
					meta_description: "Designed to keep you dry and comfortable during workouts, our activewear features moisture-wicking technology that wicks away sweat.",
					product_thumbnail_id: 1236,
					product_meta_image_id: "1236",
					size_chart_image_id: null,
					estimated_delivery_text: null,
					return_policy_text: null,
					safe_checkout: 1,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "women-polyester-activewear",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T12:29:12.000000Z",
					updated_at: "2023-09-30T05:54:59.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 177,
						variation_id: null,
						quantity: 1,
						single_price: 22,
						shipping_cost: 0,
						subtotal: 22.36,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1236,
						collection_name: "attachment",
						name: "gymshorts_coffee-2",
						file_name: "gymshorts_coffee-2.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25096",
						created_by_id: "1",
						created_at: "2023-09-18T12:14:21.000000Z",
						updated_at: "2023-09-18T12:14:21.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1234,
							collection_name: "attachment",
							name: "gymshorts_green-1",
							file_name: "gymshorts_green-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "30725",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1236,
							collection_name: "attachment",
							name: "gymshorts_coffee-2",
							file_name: "gymshorts_coffee-2.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "25096",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1235,
							collection_name: "attachment",
							name: "gymshorts_green-2",
							file_name: "gymshorts_green-2.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "34926",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1237,
							collection_name: "attachment",
							name: "gymshorts_green",
							file_name: "gymshorts_green.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "36031",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1228,
							collection_name: "attachment",
							name: "gymshorts_01",
							file_name: "gymshorts_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "28869",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1229,
							collection_name: "attachment",
							name: "gymshorts_02",
							file_name: "gymshorts_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "32136",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1230,
							collection_name: "attachment",
							name: "gymshorts_03",
							file_name: "gymshorts_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "31992",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1231,
							collection_name: "attachment",
							name: "gymshorts_coffee",
							file_name: "gymshorts_coffee.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "27519",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1232,
							collection_name: "attachment",
							name: "gymshorts_coffee-1",
							file_name: "gymshorts_coffee-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "26161",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1236,
						collection_name: "attachment",
						name: "gymshorts_coffee-2",
						file_name: "gymshorts_coffee-2.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25096",
						created_by_id: "1",
						created_at: "2023-09-18T12:14:21.000000Z",
						updated_at: "2023-09-18T12:14:21.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: null,
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "177",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "177",
								tag_id: "11"
							}
						}
					],
					attributes: [
					],
					variations: [
					]
				},
				{
					id: 160,
					name: "Solid Hooded Sweatshirt",
					short_description: "Offering a combination of quality, style, and affordability, the Solid Hooded Sweatshirt provides customers with great value for their money.",
					description: "<p>Introducing our Solid Hooded Sweatshirt, the perfect blend of style and comfort for everyone! Whether you're heading out for a casual day or hitting the gym, this trendy sweatshirt is a must-have addition to your wardrobe.</p><p>Crafted with high-quality materials, this sweatshirt offers superior durability and long-lasting softness. The hood provides extra protection against the elements, while the relaxed fit ensures freedom of movement. Our Solid Hooded Sweatshirt is designed to keep you cozy and stylish all day long.</p><p>Versatility is key with this sweatshirt. Dress it up with a pair of jeans and sneakers for a laid-back weekend look or layer it under a jacket for added warmth during those chilly evenings. The timeless design and solid color make it easy to match with any outfit, giving you endless styling options.</p><p>We understand the importance of quality, which is why we've paid attention to every detail. From the reinforced stitching to the sturdy zipper, every aspect of this sweatshirt has been carefully considered for your utmost satisfaction. Rest assured, our Solid Hooded Sweatshirt is built to withstand the test of time.</p><p>Whether you're a fashion enthusiast or simply looking for a comfortable and stylish everyday essential, our Solid Hooded Sweatshirt is the perfect choice. Join countless satisfied customers and upgrade your wardrobe with this versatile and durable sweatshirt.</p><p>Don't miss out on this fantastic opportunity to enhance your fashion game. Order your Solid Hooded Sweatshirt now and experience the perfect blend of fashion and comfort firsthand!</p>",
					type: "classified",
					unit: "1 Item",
					weight: 350,
					quantity: 21,
					price: 6,
					sale_price: 5.64,
					discount: 6,
					is_featured: 1,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 0,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS05",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Solid Hooded Sweatshirt",
					meta_description: "Offering a combination of quality, style, and affordability, the Solid Hooded Sweatshirt provides customers with great value for their money.",
					product_thumbnail_id: 1267,
					product_meta_image_id: "1267",
					size_chart_image_id: 1437,
					estimated_delivery_text: "Delivery is expected within 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "solid-hooded-sweatshirt",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:06:38.000000Z",
					updated_at: "2023-09-20T08:12:06.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						167,
						174,
						157,
						158,
						163,
						154
					],
					cross_sell_products: [
						178,
						177,
						175
					],
					pivot: {
						order_id: "28",
						product_id: 160,
						variation_id: 6,
						quantity: 1,
						single_price: 5,
						shipping_cost: 0,
						subtotal: 5.64,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1267,
						collection_name: "attachment",
						name: "Hoodies_01",
						file_name: "Hoodies_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "22782",
						created_by_id: "1",
						created_at: "2023-09-18T12:32:18.000000Z",
						updated_at: "2023-09-18T12:32:18.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1267,
							collection_name: "attachment",
							name: "Hoodies_01",
							file_name: "Hoodies_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "22782",
							created_by_id: "1",
							created_at: "2023-09-18T12:32:18.000000Z",
							updated_at: "2023-09-18T12:32:18.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1268,
							collection_name: "attachment",
							name: "Hoodies_02",
							file_name: "Hoodies_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "20862",
							created_by_id: "1",
							created_at: "2023-09-18T12:32:18.000000Z",
							updated_at: "2023-09-18T12:32:18.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1267,
						collection_name: "attachment",
						name: "Hoodies_01",
						file_name: "Hoodies_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "22782",
						created_by_id: "1",
						created_at: "2023-09-18T12:32:18.000000Z",
						updated_at: "2023-09-18T12:32:18.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "160",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "160",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 7,
							name: "Size",
							style: "circle",
							slug: "size",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T07:58:34.000000Z",
							updated_at: "2023-09-20T07:58:34.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "160",
								attribute_id: "7"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 8,
									value: "XXL",
									slug: "xxl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 6,
							name: "Solid Hooded Sweatshirt",
							price: 6,
							quantity: 19,
							stock_status: "in_stock",
							sale_price: 5.64,
							discount: 6,
							sku: "FASS05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-29T13:42:56.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "6",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 7,
							name: "Solid Hooded Sweatshirt",
							price: 7,
							quantity: 21,
							stock_status: "in_stock",
							sale_price: 6.65,
							discount: 5,
							sku: "FAM05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-20T08:05:36.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "7",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 8,
							name: "Solid Hooded Sweatshirt",
							price: 8,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 8,
							discount: 0,
							sku: "FASL05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-20T08:05:36.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "8",
										attribute_value_id: "6"
									}
								}
							]
						},
						{
							id: 9,
							name: "Solid Hooded Sweatshirt",
							price: 9,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 9,
							discount: 0,
							sku: "FASXL05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-20T08:05:36.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "9",
										attribute_value_id: "7"
									}
								}
							]
						}
					]
				},
				{
					id: 168,
					name: "Women Flared Jeans",
					short_description: "The flared cut of these jeans adds a timeless and retro-inspired touch to any outfit, making them a wardrobe staple.",
					description: "<p>A timeless, must-have addition to every woman's wardrobe. The resurgence of the retro-inspired flared cut has taken the fashion world by storm, and these jeans effortlessly embody that classic yet contemporary vibe. They hold the power to elevate any outfit, giving you a stylish edge that never falls out of favor.</p><p>Craftsmanship and attention to detail lie at the heart of these flared jeans. Every stitch, every seam is meticulously designed to ensure both comfort and style. We understand that fashion isn't just about looking good; it's about feeling confident and empowered. That's why these jeans are engineered to make you look and feel your absolute best throughout the day.</p><p>One of the standout features of our Women Flared Jeans is the high-quality materials used in their construction. We believe in offering more than just a pair of jeans; we offer a durable, reliable companion for your everyday adventures. The superior quality of these materials not only guarantees longevity but also ensures a flattering fit. These jeans accentuate your curves in all the right places, allowing you to embrace your unique body shape with grace and confidence.</p><p>Whether you're gearing up for a night out on the town or aiming for a more casual, everyday look, our flared jeans effortlessly adapt to any occasion. Pair them with a chic blouse and heels for a sophisticated ensemble or dress them down with a cozy sweater and sneakers for a laid-back vibe. The versatility of these jeans knows no bounds, making them an essential in every modern woman's closet.</p><p>In a world where fashion is ever-changing and trends come and go, our Women Flared Jeans stand as a testament to timeless style. This isn't just a pair of jeans; it's an invitation to upgrade your fashion game and embrace your inner fashionista with confidence. The flared silhouette takes you back to an era of glamour and rebellion, while seamlessly fitting into the contemporary narrative.</p><p>So, why wait? Elevate your style, celebrate your individuality, and step into the world with a newfound confidence. Our Women Flared Jeans are more than a fashion statement; they're an embodiment of the strong, stylish, and empowered woman you are. Experience the comfort, revel in the style, and make a lasting impression wherever you go. Upgrade your wardrobe, embrace the timeless appeal of flared jeans, and conquer the world with grace and panache.</p>",
					type: "classified",
					unit: "1 Item",
					weight: 200,
					quantity: 12,
					price: 19,
					sale_price: 17.67,
					discount: 7,
					is_featured: 0,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 1,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS17",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Women Flared Jeans",
					meta_description: "The flared cut of these jeans adds a timeless and retro-inspired touch to any outfit, making them a wardrobe staple.",
					product_thumbnail_id: 1321,
					product_meta_image_id: "1321",
					size_chart_image_id: 1445,
					estimated_delivery_text: "The delivery time frame is 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available.",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "women-flared-jeans",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:27:35.000000Z",
					updated_at: "2023-09-21T04:12:30.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						162,
						176,
						175,
						177,
						156,
						152
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 168,
						variation_id: 23,
						quantity: 1,
						single_price: 18,
						shipping_cost: 0,
						subtotal: 18.6,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1321,
						collection_name: "attachment",
						name: "Pent_01",
						file_name: "Pent_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "64230",
						created_by_id: "1",
						created_at: "2023-09-19T02:58:03.000000Z",
						updated_at: "2023-09-19T02:58:03.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1321,
							collection_name: "attachment",
							name: "Pent_01",
							file_name: "Pent_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "64230",
							created_by_id: "1",
							created_at: "2023-09-19T02:58:03.000000Z",
							updated_at: "2023-09-19T02:58:03.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1322,
							collection_name: "attachment",
							name: "Pent_02",
							file_name: "Pent_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "60456",
							created_by_id: "1",
							created_at: "2023-09-19T02:58:03.000000Z",
							updated_at: "2023-09-19T02:58:03.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1323,
							collection_name: "attachment",
							name: "Pent_03",
							file_name: "Pent_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "57027",
							created_by_id: "1",
							created_at: "2023-09-19T02:58:03.000000Z",
							updated_at: "2023-09-19T02:58:03.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1321,
						collection_name: "attachment",
						name: "Pent_01",
						file_name: "Pent_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "64230",
						created_by_id: "1",
						created_at: "2023-09-19T02:58:03.000000Z",
						updated_at: "2023-09-19T02:58:03.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1445,
						collection_name: "attachment",
						name: "sizechart_jeans",
						file_name: "sizechart_jeans.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "145889",
						created_by_id: "1",
						created_at: "2023-09-21T04:11:53.000000Z",
						updated_at: "2023-09-21T04:11:53.000000Z",
						original_url: "/images/data/sizechart-jeans.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "168",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "168",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 9,
							name: "Waist",
							style: "radio",
							slug: "waist",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T09:15:30.000000Z",
							updated_at: "2023-09-20T09:15:30.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "168",
								attribute_id: "9"
							},
							attribute_values: [
								{
									id: 12,
									value: "28",
									slug: "28",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								},
								{
									id: 13,
									value: "30",
									slug: "30",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								},
								{
									id: 14,
									value: "32",
									slug: "32",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								},
								{
									id: 15,
									value: "34",
									slug: "34",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 22,
							name: "Women Flared Jeans",
							price: 19,
							quantity: 12,
							stock_status: "in_stock",
							sale_price: 17.67,
							discount: 7,
							sku: "FAS2817",
							status: 1,
							variation_options: null,
							variation_image_id: 1321,
							product_id: 168,
							deleted_at: null,
							created_at: "2023-09-20T09:43:03.000000Z",
							updated_at: "2023-09-20T09:43:03.000000Z",
							variation_image: {
								id: 1321,
								collection_name: "attachment",
								name: "Pent_01",
								file_name: "Pent_01.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "64230",
								created_by_id: "1",
								created_at: "2023-09-19T02:58:03.000000Z",
								updated_at: "2023-09-19T02:58:03.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 12,
									value: "28",
									slug: "28",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "22",
										attribute_value_id: "12"
									}
								}
							]
						},
						{
							id: 23,
							name: "Women Flared Jeans",
							price: 20,
							quantity: 4,
							stock_status: "in_stock",
							sale_price: 18.6,
							discount: 7,
							sku: "FAS3017",
							status: 1,
							variation_options: null,
							variation_image_id: 1321,
							product_id: 168,
							deleted_at: null,
							created_at: "2023-09-20T09:43:03.000000Z",
							updated_at: "2023-09-29T13:42:56.000000Z",
							variation_image: {
								id: 1321,
								collection_name: "attachment",
								name: "Pent_01",
								file_name: "Pent_01.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "64230",
								created_by_id: "1",
								created_at: "2023-09-19T02:58:03.000000Z",
								updated_at: "2023-09-19T02:58:03.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 13,
									value: "30",
									slug: "30",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "23",
										attribute_value_id: "13"
									}
								}
							]
						},
						{
							id: 24,
							name: "Women Flared Jeans",
							price: 21,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 19.95,
							discount: 5,
							sku: "FAS3217",
							status: 1,
							variation_options: null,
							variation_image_id: 1321,
							product_id: 168,
							deleted_at: null,
							created_at: "2023-09-20T09:43:03.000000Z",
							updated_at: "2023-09-20T09:43:03.000000Z",
							variation_image: {
								id: 1321,
								collection_name: "attachment",
								name: "Pent_01",
								file_name: "Pent_01.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "64230",
								created_by_id: "1",
								created_at: "2023-09-19T02:58:03.000000Z",
								updated_at: "2023-09-19T02:58:03.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 14,
									value: "32",
									slug: "32",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "24",
										attribute_value_id: "14"
									}
								}
							]
						}
					]
				},
				{
					id: 164,
					name: "Premium Blazer",
					short_description: "With a focus on comfort, the Premium Blazer is designed to provide a relaxed fit and ease of movement, making it a pleasure to wear for extended periods.",
					description: "<p>Introducing our Premium Blazer – the epitome of sophistication and style. Crafted with utmost attention to detail, this fashion-forward piece is perfect for men and women who value impeccable attire.</p><p>Made from high-quality materials, our Premium Blazer offers a comfortable fit without compromising on elegance. Its tailored design guarantees a flattering silhouette, enhancing your confidence and adding a touch of class to any outfit.</p><p>Whether you're attending a formal event, a business meeting, or simply want to upgrade your everyday wardrobe, our Premium Blazer is the ultimate choice. Its timeless appeal and versatility make it suitable for any occasion, effortlessly elevating your style game.</p><p>Designed to impress, this blazer features exquisite craftsmanship and meticulous stitching, showcasing our commitment to delivering excellence. It is equipped with functional pockets, allowing you to carry your essentials with ease, while the smooth lining ensures a luxurious feel against your skin.</p><p>Rest assured, our Premium Blazer is built to last. Its durable construction guarantees long-lasting wear, making it a smart investment for your wardrobe. With proper care, this blazer will remain a staple in your collection for years to come.</p><p>Available in a range of classic colors, our Premium Blazer effortlessly complements any wardrobe, giving you endless styling options. Pair it with tailored pants for a polished business look, or dress it down with jeans for a more casual yet refined ensemble.</p><p>Order your Premium Blazer today and experience the perfect blend of style, sophistication, and comfort. Elevate your fashion game and make a lasting impression wherever you go. Invest in quality, invest in our Premium Blazer.</p>",
					type: "classified",
					unit: "1 Item",
					weight: 450,
					quantity: 17,
					price: 11,
					sale_price: 9.9,
					discount: 10,
					is_featured: 1,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 0,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS08",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Premium Blazer",
					meta_description: "With a focus on comfort, the Premium Blazer is designed to provide a relaxed fit and ease of movement, making it a pleasure to wear for extended periods.",
					product_thumbnail_id: 1247,
					product_meta_image_id: "1247",
					size_chart_image_id: 1437,
					estimated_delivery_text: "The delivery time frame is 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available.",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "premium-blazer",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:18:56.000000Z",
					updated_at: "2023-09-20T09:30:18.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						170,
						155,
						160,
						176,
						152,
						174
					],
					cross_sell_products: [
						171,
						170,
						168
					],
					pivot: {
						order_id: "28",
						product_id: 164,
						variation_id: 17,
						quantity: 1,
						single_price: 11,
						shipping_cost: 0,
						subtotal: 11.44,
						is_refunded: 1
					},
					product_thumbnail: {
						id: 1247,
						collection_name: "attachment",
						name: "CollarTshirt_Green-1",
						file_name: "CollarTshirt_Green-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "61889",
						created_by_id: "1",
						created_at: "2023-09-18T12:23:44.000000Z",
						updated_at: "2023-09-18T12:23:44.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1246,
							collection_name: "attachment",
							name: "CollarTshirt_Blue-1",
							file_name: "CollarTshirt_Blue-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "61235",
							created_by_id: "1",
							created_at: "2023-09-18T12:23:44.000000Z",
							updated_at: "2023-09-18T12:23:44.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1247,
							collection_name: "attachment",
							name: "CollarTshirt_Green-1",
							file_name: "CollarTshirt_Green-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "61889",
							created_by_id: "1",
							created_at: "2023-09-18T12:23:44.000000Z",
							updated_at: "2023-09-18T12:23:44.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1248,
							collection_name: "attachment",
							name: "CollarTshirt_Lowender-1",
							file_name: "CollarTshirt_Lowender-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "46320",
							created_by_id: "1",
							created_at: "2023-09-18T12:23:44.000000Z",
							updated_at: "2023-09-18T12:23:44.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1247,
						collection_name: "attachment",
						name: "CollarTshirt_Green-1",
						file_name: "CollarTshirt_Green-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "61889",
						created_by_id: "1",
						created_at: "2023-09-18T12:23:44.000000Z",
						updated_at: "2023-09-18T12:23:44.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "164",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "164",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 7,
							name: "Size",
							style: "circle",
							slug: "size",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T07:58:34.000000Z",
							updated_at: "2023-09-20T07:58:34.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "164",
								attribute_id: "7"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 8,
									value: "XXL",
									slug: "xxl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								}
							]
						},
						{
							id: 10,
							name: "Color",
							style: "color",
							slug: "color",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T09:19:49.000000Z",
							updated_at: "2023-09-20T09:19:49.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "164",
								attribute_id: "10"
							},
							attribute_values: [
								{
									id: 16,
									value: "Red",
									slug: "red",
									hex_color: "#d03535",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 17,
									value: "Black",
									slug: "black",
									hex_color: "#000000",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 18,
									value: "Purple",
									slug: "purple",
									hex_color: "#9b809e",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 19,
									value: "White",
									slug: "white-2",
									hex_color: "#d6d6d6",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 20,
									value: "Green",
									slug: "green",
									hex_color: "#259889",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 21,
									value: "Yellow",
									slug: "yellow",
									hex_color: "#e2d62c",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 22,
									value: "Blue",
									slug: "blue",
									hex_color: "#5ea1e8",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 23,
									value: "Orange",
									slug: "orange",
									hex_color: "#f09124",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 16,
							name: "Premium Blazer (Green/S)",
							price: 12,
							quantity: 6,
							stock_status: "in_stock",
							sale_price: 11.4,
							discount: 5,
							sku: "FASGS08",
							status: 1,
							variation_options: null,
							variation_image_id: 1246,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1246,
								collection_name: "attachment",
								name: "CollarTshirt_Blue-1",
								file_name: "CollarTshirt_Blue-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61235",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 20,
									value: "Green",
									slug: "green",
									hex_color: "#259889",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "16",
										attribute_value_id: "20"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "16",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 17,
							name: "Premium Blazer (Green/M)",
							price: 13,
							quantity: 16,
							stock_status: "in_stock",
							sale_price: 11.44,
							discount: 12,
							sku: "FASGM08",
							status: 1,
							variation_options: null,
							variation_image_id: 1246,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-29T13:42:56.000000Z",
							variation_image: {
								id: 1246,
								collection_name: "attachment",
								name: "CollarTshirt_Blue-1",
								file_name: "CollarTshirt_Blue-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61235",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 20,
									value: "Green",
									slug: "green",
									hex_color: "#259889",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "17",
										attribute_value_id: "20"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "17",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 18,
							name: "Premium Blazer (Purple/S)",
							price: 11,
							quantity: 8,
							stock_status: "in_stock",
							sale_price: 9.9,
							discount: 10,
							sku: "FASPS08",
							status: 1,
							variation_options: null,
							variation_image_id: 1247,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1247,
								collection_name: "attachment",
								name: "CollarTshirt_Green-1",
								file_name: "CollarTshirt_Green-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61889",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 18,
									value: "Purple",
									slug: "purple",
									hex_color: "#9b809e",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "18",
										attribute_value_id: "18"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "18",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 19,
							name: "Premium Blazer (Purple/M)",
							price: 12,
							quantity: 1,
							stock_status: "in_stock",
							sale_price: 10.8,
							discount: 10,
							sku: "FASPM08",
							status: 1,
							variation_options: null,
							variation_image_id: 1247,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1247,
								collection_name: "attachment",
								name: "CollarTshirt_Green-1",
								file_name: "CollarTshirt_Green-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61889",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 18,
									value: "Purple",
									slug: "purple",
									hex_color: "#9b809e",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "19",
										attribute_value_id: "18"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "19",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 20,
							name: "Premium Blazer (White/S)",
							price: 12,
							quantity: 14,
							stock_status: "in_stock",
							sale_price: 11.28,
							discount: 6,
							sku: "FASWS08",
							status: 1,
							variation_options: null,
							variation_image_id: 1248,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1248,
								collection_name: "attachment",
								name: "CollarTshirt_Lowender-1",
								file_name: "CollarTshirt_Lowender-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "46320",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 19,
									value: "White",
									slug: "white-2",
									hex_color: "#d6d6d6",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "20",
										attribute_value_id: "19"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "20",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 21,
							name: "Premium Blazer (White/M)",
							price: 15,
							quantity: 1,
							stock_status: "in_stock",
							sale_price: 12.75,
							discount: 15,
							sku: "FASWM08",
							status: 1,
							variation_options: null,
							variation_image_id: 1248,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1248,
								collection_name: "attachment",
								name: "CollarTshirt_Lowender-1",
								file_name: "CollarTshirt_Lowender-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "46320",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 19,
									value: "White",
									slug: "white-2",
									hex_color: "#d6d6d6",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "21",
										attribute_value_id: "19"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "21",
										attribute_value_id: "5"
									}
								}
							]
						}
					]
				},
				{
					id: 161,
					name: "Relaxed Fit Hoodie",
					short_description: "The relaxed fit and versatile design make our hoodie a perfect layering piece for any outfit, adding a touch of warmth and style.",
					description: "<p>Introducing our latest addition to the world of fashion and comfort: the Relaxed Fit Hoodie. This versatile piece is designed with the modern individual in mind, offering a perfect blend of style and relaxation. Crafted with utmost precision, this hoodie promises to be your go-to companion for any occasion.</p><p>Our Relaxed Fit Hoodie boasts a thoughtfully chosen fabric that embraces your body with a gentle touch, providing an unparalleled level of comfort. The relaxed fit ensures ease of movement, making it ideal for both lounging at home or stepping out for a casual outing. Its carefully tailored design effortlessly combines functionality and fashion, making it a must-have addition to your wardrobe.</p><p>With its versatile nature, this hoodie effortlessly complements any outfit. Whether you're pairing it with your favorite jeans for a laid-back weekend look or layering it with a trendy jacket for a more polished ensemble, this Relaxed Fit Hoodie will elevate your style game and garner compliments wherever you go.</p><p>Not only does this hoodie offer a relaxed fit, but it also features a cozy hood that adds an extra element of comfort. Perfect for those chilly mornings or evening strolls, it provides warmth and protection while exuding an effortlessly cool vibe.</p><p>In addition to its impeccable style, this hoodie is made to withstand the test of time. Its high-quality construction ensures durability, allowing you to enjoy its cozy embrace for years to come. It is also easy to care for, requiring minimal effort to keep it looking pristine.</p><p>Upgrade your wardrobe with our Relaxed Fit Hoodie and experience the perfect blend of fashion and comfort. Embrace leisure without compromising on style. Order now and join countless satisfied customers who have made this hoodie their ultimate fashion staple.</p>",
					type: "classified",
					unit: "1 Item",
					weight: 350,
					quantity: 8,
					price: 6,
					sale_price: 5.82,
					discount: 3,
					is_featured: 1,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 0,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS06",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Relaxed Fit Hoodie",
					meta_description: "The relaxed fit and versatile design make our hoodie a perfect layering piece for any outfit, adding a touch of warmth and style.",
					product_thumbnail_id: 1270,
					product_meta_image_id: "1270",
					size_chart_image_id: 1437,
					estimated_delivery_text: "The delivery time frame is 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "relaxed-fit-hoodie",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:10:17.000000Z",
					updated_at: "2023-09-20T08:42:42.000000Z",
					orders_count: 6,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 777.2799999999999,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						154,
						156,
						168,
						169,
						158,
						113
					],
					cross_sell_products: [
						157,
						158,
						166
					],
					pivot: {
						order_id: "28",
						product_id: 161,
						variation_id: 15,
						quantity: 1,
						single_price: 9,
						shipping_cost: 0,
						subtotal: 9.4,
						is_refunded: 1
					},
					product_thumbnail: {
						id: 1270,
						collection_name: "attachment",
						name: "Hoodies_Brown",
						file_name: "Hoodies_Brown.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "42974",
						created_by_id: "1",
						created_at: "2023-09-18T12:33:04.000000Z",
						updated_at: "2023-09-18T12:33:04.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1270,
							collection_name: "attachment",
							name: "Hoodies_Brown",
							file_name: "Hoodies_Brown.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "42974",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1271,
							collection_name: "attachment",
							name: "Hoodies_Coffee",
							file_name: "Hoodies_Coffee.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "31488",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1272,
							collection_name: "attachment",
							name: "Hoodies_Lite Gray",
							file_name: "Hoodies_Lite-Gray.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "44329",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1273,
							collection_name: "attachment",
							name: "Hoodies_Pink",
							file_name: "Hoodies_Pink.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "33428",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1270,
						collection_name: "attachment",
						name: "Hoodies_Brown",
						file_name: "Hoodies_Brown.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "42974",
						created_by_id: "1",
						created_at: "2023-09-18T12:33:04.000000Z",
						updated_at: "2023-09-18T12:33:04.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "161",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "161",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 7,
							name: "Size",
							style: "circle",
							slug: "size",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T07:58:34.000000Z",
							updated_at: "2023-09-20T07:58:34.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "161",
								attribute_id: "7"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 8,
									value: "XXL",
									slug: "xxl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								}
							]
						},
						{
							id: 8,
							name: "Colour",
							style: "image",
							slug: "colour",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T08:32:56.000000Z",
							updated_at: "2023-09-20T08:32:56.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "161",
								attribute_id: "8"
							},
							attribute_values: [
								{
									id: 9,
									value: "Burgundy",
									slug: "burgundy",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:34:39.000000Z",
									deleted_at: null
								},
								{
									id: 10,
									value: "Brown",
									slug: "brown",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null
								},
								{
									id: 11,
									value: "White",
									slug: "white",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 10,
							name: "Relaxed Fit Hoodie (Burgundy/S)",
							price: 7,
							quantity: 2,
							stock_status: "in_stock",
							sale_price: 6.51,
							discount: 7,
							sku: "FASBS06",
							status: 1,
							variation_options: null,
							variation_image_id: 1270,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1270,
								collection_name: "attachment",
								name: "Hoodies_Brown",
								file_name: "Hoodies_Brown.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "42974",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 9,
									value: "Burgundy",
									slug: "burgundy",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:34:39.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "10",
										attribute_value_id: "9"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "10",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 11,
							name: "Relaxed Fit Hoodie (Burgundy/M)",
							price: 8,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 7.52,
							discount: 6,
							sku: "FASBM06",
							status: 1,
							variation_options: null,
							variation_image_id: 1270,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1270,
								collection_name: "attachment",
								name: "Hoodies_Brown",
								file_name: "Hoodies_Brown.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "42974",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 9,
									value: "Burgundy",
									slug: "burgundy",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:34:39.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "11",
										attribute_value_id: "9"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "11",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 12,
							name: "Relaxed Fit Hoodie (Brown/S)",
							price: 10,
							quantity: 4,
							stock_status: "in_stock",
							sale_price: 9.5,
							discount: 5,
							sku: "FASBRS06",
							status: 1,
							variation_options: null,
							variation_image_id: 1271,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-29T13:38:01.000000Z",
							variation_image: {
								id: 1271,
								collection_name: "attachment",
								name: "Hoodies_Coffee",
								file_name: "Hoodies_Coffee.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "31488",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 10,
									value: "Brown",
									slug: "brown",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "12",
										attribute_value_id: "10"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "12",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 13,
							name: "Relaxed Fit Hoodie (Brown/M)",
							price: 12,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 10.8,
							discount: 10,
							sku: "FASBRM06",
							status: 1,
							variation_options: null,
							variation_image_id: 1271,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1271,
								collection_name: "attachment",
								name: "Hoodies_Coffee",
								file_name: "Hoodies_Coffee.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "31488",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 10,
									value: "Brown",
									slug: "brown",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "13",
										attribute_value_id: "10"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "13",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 14,
							name: "Relaxed Fit Hoodie (White/S)",
							price: 6,
							quantity: 3,
							stock_status: "in_stock",
							sale_price: 5.82,
							discount: 3,
							sku: "FASWS06",
							status: 1,
							variation_options: null,
							variation_image_id: 1272,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1272,
								collection_name: "attachment",
								name: "Hoodies_Lite Gray",
								file_name: "Hoodies_Lite-Gray.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "44329",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 11,
									value: "White",
									slug: "white",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "14",
										attribute_value_id: "11"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "14",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 15,
							name: "Relaxed Fit Hoodie (White/M)",
							price: 10,
							quantity: 6,
							stock_status: "in_stock",
							sale_price: 9.4,
							discount: 6,
							sku: "FASWM06",
							status: 1,
							variation_options: null,
							variation_image_id: 1272,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-30T08:43:52.000000Z",
							variation_image: {
								id: 1272,
								collection_name: "attachment",
								name: "Hoodies_Lite Gray",
								file_name: "Hoodies_Lite-Gray.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "44329",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 11,
									value: "White",
									slug: "white",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "15",
										attribute_value_id: "11"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "15",
										attribute_value_id: "5"
									}
								}
							]
						}
					]
				}
			],
			order_status: {
				id: 6,
				name: "delivered",
				slug: "delivered",
				sequence: "6",
				created_by_id: "1",
				status: 1,
				system_reserve: "1",
				created_at: "2023-08-24T08:16:03.000000Z",
				updated_at: "2023-08-24T08:16:03.000000Z",
				deleted_at: null
			},
			sub_orders: [
			],
			billing_address: {
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
			shipping_address: {
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
		},
		refund_image: null
	},
	{
		id: 2,
		reason: "Upon receiving the item, it was damaged. The packaging was torn, and the product itself was in poor condition. I request a refund due to the unacceptable state of the delivered item.",
		amount: 11.44,
		quantity: 1,
		store_id: 3,
		order_id: 28,
		product_id: 164,
		consumer_id: 19,
		variation_id: 17,
		refund_image_id: null,
		payment_type: "wallet",
		status: "rejected",
		is_used: "0",
		created_at: "2023-09-30T08:12:37.000000Z",
		updated_at: "2023-09-30T08:14:43.000000Z",
		deleted_at: null,
		user: {
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
				original_url: "/images/data/avatar.png"
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
		},
		store: {
			id: 3,
			store_name: "Natures Basket Mart",
			description: "Welcome to Nature's Basket Mart, We understand the importance of fresh, nourishing vegetables in your daily diet, and that's why we've curated a marketplace that celebrates the vibrancy, flavors, and vitality of farm-fresh produce",
			slug: "natures-basket-mart",
			store_logo_id: 1439,
			store_cover_id: null,
			country_id: 840,
			state_id: 3787,
			city: "Rochester",
			address: "2775 James Street",
			pincode: "14616",
			facebook: "https://www.facebook.com/",
			twitter: "https://twitter.com/",
			instagram: "https://www.instagram.com/",
			youtube: null,
			pinterest: null,
			hide_vendor_email: 0,
			hide_vendor_phone: 0,
			vendor_id: 4,
			created_by_id: "1",
			status: 1,
			is_approved: 1,
			created_at: "2023-08-24T09:37:50.000000Z",
			updated_at: "2023-09-29T13:35:05.000000Z",
			deleted_at: null,
			orders_count: 9,
			reviews_count: 25,
			products_count: 10,
			product_images: [
				"/images/data/product.png",
				"/images/data/product.png",
				"/images/data/product.png"
			],
			order_amount: 404,
			rating_count: 3.4,
			store_logo: {
				id: 1439,
				collection_name: "attachment",
				name: "store02",
				file_name: "store02.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "75525",
				created_by_id: "1",
				created_at: "2023-09-20T09:37:48.000000Z",
				updated_at: "2023-09-20T09:37:48.000000Z",
				original_url: "/images/data/product.png"
			},
			store_cover: null,
			vendor: {
				id: 4,
				name: "Paul Hardin",
				email: "paul.hardin@example.com",
				country_code: "1",
				phone: 5186570491,
				profile_image_id: null,
				system_reserve: "0",
				status: 1,
				created_by_id: 1,
				email_verified_at: null,
				created_at: "2023-08-24T09:37:50.000000Z",
				updated_at: "2023-08-24T09:40:48.000000Z",
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
						model_id: "4",
						role_id: "3",
						model_type: "App\\Models\\User"
					}
				},
				point: null,
				wallet: null,
				address: [
				],
				vendor_wallet: {
					id: 3,
					vendor_id: 4,
					balance: 0,
					created_at: "2023-08-24T09:37:50.000000Z",
					updated_at: "2023-08-24T09:37:50.000000Z",
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
				id: 3787,
				name: "New York",
				country_id: "840",
				created_at: "2023-08-24T08:16:44.000000Z",
				updated_at: "2023-08-24T08:16:44.000000Z"
			},
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 4,
					product_id: 15,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:27:54.000000Z",
					updated_at: "2023-09-29T12:27:54.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 5,
					product_id: 10,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:28:12.000000Z",
					updated_at: "2023-09-29T12:28:12.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 6,
					product_id: 19,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:28:25.000000Z",
					updated_at: "2023-09-29T12:28:25.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 7,
					product_id: 9,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:28:39.000000Z",
					updated_at: "2023-09-29T12:28:39.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 11,
					product_id: 17,
					consumer_id: 22,
					store_id: 3,
					review_image_id: null,
					rating: 3,
					description: "Honestly, I regret buying this item. The quality is subpar, and it feels like a waste of money. I wouldn't recommend it to anyone.",
					created_at: "2023-09-29T13:04:48.000000Z",
					updated_at: "2023-09-29T13:04:48.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 12,
					product_id: 13,
					consumer_id: 22,
					store_id: 3,
					review_image_id: null,
					rating: 2,
					description: "Honestly, I regret buying this item. The quality is subpar, and it feels like a waste of money. I wouldn't recommend it to anyone.",
					created_at: "2023-09-29T13:04:59.000000Z",
					updated_at: "2023-09-29T13:04:59.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 13,
					product_id: 11,
					consumer_id: 22,
					store_id: 3,
					review_image_id: null,
					rating: 1,
					description: "Honestly, I regret buying this item. The quality is subpar, and it feels like a waste of money. I wouldn't recommend it to anyone.",
					created_at: "2023-09-29T13:05:09.000000Z",
					updated_at: "2023-09-29T13:05:09.000000Z",
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 15,
					product_id: 17,
					consumer_id: 18,
					store_id: 3,
					review_image_id: null,
					rating: 2,
					description: "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
					created_at: "2023-09-29T13:12:23.000000Z",
					updated_at: "2023-09-29T13:12:23.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 16,
					product_id: 11,
					consumer_id: 18,
					store_id: 3,
					review_image_id: null,
					rating: 3,
					description: "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
					created_at: "2023-09-29T13:12:47.000000Z",
					updated_at: "2023-09-29T13:12:47.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 17,
					product_id: 13,
					consumer_id: 18,
					store_id: 3,
					review_image_id: null,
					rating: 1,
					description: "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
					created_at: "2023-09-29T13:13:00.000000Z",
					updated_at: "2023-09-29T13:13:00.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 18,
					product_id: 9,
					consumer_id: 20,
					store_id: 3,
					review_image_id: null,
					rating: 3,
					description: "This is one of the worst purchases I've made. The item looks nothing like the pictures, and the functionality is a joke. I feel misled and dissatisfied.",
					created_at: "2023-09-29T13:30:02.000000Z",
					updated_at: "2023-09-29T13:30:02.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 19,
					product_id: 10,
					consumer_id: 20,
					store_id: 3,
					review_image_id: null,
					rating: 2,
					description: "This is one of the worst purchases I've made. The item looks nothing like the pictures, and the functionality is a joke. I feel misled and dissatisfied.",
					created_at: "2023-09-29T13:30:26.000000Z",
					updated_at: "2023-09-29T13:30:26.000000Z",
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 21,
					product_id: 15,
					consumer_id: 20,
					store_id: 3,
					review_image_id: null,
					rating: 1,
					description: "This is one of the worst purchases I've made. The item looks nothing like the pictures, and the functionality is a joke. I feel misled and dissatisfied.",
					created_at: "2023-09-29T13:31:13.000000Z",
					updated_at: "2023-09-29T13:31:13.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 22,
					product_id: 15,
					consumer_id: 19,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am extremely satisfied with this purchase. The item arrived promptly, and the quality is exceptional. It's evident that the makers paid attention to detail. Overall, a fantastic buy!",
					created_at: "2023-09-30T11:47:02.000000Z",
					updated_at: "2023-09-30T11:47:02.000000Z",
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
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
					id: 24,
					product_id: 19,
					consumer_id: 19,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am extremely satisfied with this purchase. The item arrived promptly, and the quality is exceptional. It's evident that the makers paid attention to detail. Overall, a fantastic buy!",
					created_at: "2023-09-30T11:53:03.000000Z",
					updated_at: "2023-09-30T11:53:03.000000Z",
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
							original_url: "/images/data/avatar.png"
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
					id: 25,
					product_id: 17,
					consumer_id: 19,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am extremely satisfied with this purchase. The item arrived promptly, and the quality is exceptional. It's evident that the makers paid attention to detail. Overall, a fantastic buy!",
					created_at: "2023-09-30T11:53:15.000000Z",
					updated_at: "2023-09-30T11:53:15.000000Z",
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
							original_url: "/images/data/avatar.png"
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
			]
		},
		order: {
			id: 28,
			order_number: 1027,
			consumer_id: 19,
			tax_total: 6.48,
			shipping_total: 0,
			points_amount: 0,
			wallet_balance: 0,
			amount: 89.76,
			total: 96.24,
			coupon_total_discount: 0,
			payment_method: "cod",
			payment_status: "COMPLETED",
			store_id: 15,
			billing_address_id: 1,
			shipping_address_id: 4,
			delivery_description: "Standard Delivery | Approx 5 to 7 Days",
			delivery_interval: null,
			order_status_id: 6,
			coupon_id: null,
			parent_id: null,
			created_by_id: 1,
			invoice_url: "",
			status: 1,
			delivered_at: "2023-09-30 00:00:00",
			created_at: "2023-09-29T13:42:55.000000Z",
			updated_at: "2023-09-29T13:45:25.000000Z",
			deleted_at: null,
			store: {
				id: 15,
				store_name: "Trendy Fashions",
				description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
				slug: "trendy-fashions",
				store_logo_id: 1452,
				store_cover_id: null,
				country_id: 840,
				state_id: 3759,
				city: "Denver",
				address: "26, Starts Hollow Colony",
				pincode: "80014",
				facebook: "https://www.facebook.com/",
				twitter: "https://twitter.com/",
				instagram: "https://www.instagram.com/",
				youtube: null,
				pinterest: null,
				hide_vendor_email: 0,
				hide_vendor_phone: 0,
				vendor_id: 16,
				created_by_id: "1",
				status: 1,
				is_approved: 1,
				created_at: "2023-09-18T09:14:34.000000Z",
				updated_at: "2023-09-22T08:52:46.000000Z",
				deleted_at: null,
				orders_count: 4,
				reviews_count: 0,
				products_count: 27,
				product_images: [
					"/images/data/product.png",
					"/images/data/product.png",
					"/images/data/product.png"
				],
				order_amount: 156.58,
				rating_count: null,
				store_logo: {
					id: 1452,
					collection_name: "attachment",
					name: "04",
					file_name: "04.png",
					mime_type: "image/png",
					disk: "public",
					conversions_disk: "public",
					size: "13034",
					created_by_id: "1",
					created_at: "2023-09-22T08:52:17.000000Z",
					updated_at: "2023-09-22T08:52:17.000000Z",
					original_url: "/images/data/product.png"
				},
				store_cover: null,
				vendor: {
					id: 16,
					name: "Lorlie Gilmore",
					email: "lorlie.gilmore@example.com",
					country_code: "1",
					phone: 6305875463,
					profile_image_id: null,
					system_reserve: "0",
					status: 1,
					created_by_id: 1,
					email_verified_at: null,
					created_at: "2023-09-18T09:14:34.000000Z",
					updated_at: "2023-09-18T09:14:34.000000Z",
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
							model_id: "16",
							role_id: "3",
							model_type: "App\\Models\\User"
						}
					},
					point: null,
					wallet: null,
					address: [
					],
					vendor_wallet: {
						id: 15,
						vendor_id: 16,
						balance: 0,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-18T09:14:34.000000Z",
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
					id: 3759,
					name: "Colorado",
					country_id: "840",
					created_at: "2023-08-24T08:16:43.000000Z",
					updated_at: "2023-08-24T08:16:43.000000Z"
				},
				reviews: [
				]
			},
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
					original_url: "/images/data/avatar.png"
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
			},
			products: [
				{
					id: 178,
					name: "Men Gym Co-Ord Set",
					short_description: "The breathable fabric used in our Men Gym Co-Ord Set allows for proper air circulation, keeping you cool and dry even during intense workouts.",
					description: "<p><strong>Unleash Your Fitness Potential with Our Men's Gym Co-Ord Set</strong></p><p>Embarking on a fitness journey demands the right companion, and our Men's Gym Co-Ord Set is tailored to be just that. Crafted with your comfort at its core, this set is a testament to the perfect blend of style and functionality. Picture yourself in a gym ensemble that not only complements your active lifestyle but enhances your workout experience.</p><p>When we talk about the essence of this gym co-ord set, it starts with the fabric. We've meticulously chosen a high-quality breathable material that prioritizes air circulation. Ensuring you stay cool and dry during your most intense workouts, this fabric is designed to keep you focused on your fitness goals rather than discomfort.</p><p>In the realm of fitness, style isn't just an accessory – it's an expression. The sleek and modern design of this gym co-ord set is a testament to professionalism in every stitch. It's not just gym wear; it's a statement of your dedication to an active and healthy life. The set includes both a top and shorts, providing a coordinated look that exudes confidence.</p><p>Flexibility and freedom of movement are non-negotiable when it comes to workout wear. Our Men's Gym Co-Ord Set offers just that, allowing you to push your limits, stretch, and strive for more. The fabric is thoughtfully chosen to ensure not only comfort but also durability. It's a set that can endure the most rigorous workout sessions, giving you the confidence that your gym wear is up to the challenge.</p><p>Who is this set for? Well, everyone on the fitness spectrum. Whether you're a gym enthusiast or a casual fitness buff, this co-ord set is designed for all. Weightlifting, cardio, yoga, or any other fitness activity you're into – this set has got your back, quite literally. Its versatility makes it a must-have addition to your workout wardrobe, a go-to for any exercise regimen.</p><p>Investing in your fitness journey is investing in yourself. Elevate your workout experience with our Men's Gym Co-Ord Set, where comfort meets style, and functionality embraces fashion. Make a statement, take charge of your fitness goals, and let this exceptional gym co-ord set be your trusted ally. It's time to break a sweat and look great doing it!</p>",
					type: "simple",
					unit: "1 Item",
					weight: 178,
					quantity: 0,
					price: 14,
					sale_price: 12.6,
					discount: 10,
					is_featured: 0,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 1,
					is_return: 1,
					is_trending: 1,
					is_approved: 1,
					sale_starts_at: "2023-9-1",
					sale_expired_at: "2025-10-30",
					sku: "FAS22",
					is_random_related_products: 1,
					stock_status: "out_of_stock",
					meta_title: "Men Gym Co-Ord Set",
					meta_description: "The breathable fabric used in our Men Gym Co-Ord Set allows for proper air circulation, keeping you cool and dry even during intense workouts.",
					product_thumbnail_id: 1263,
					product_meta_image_id: "1263",
					size_chart_image_id: 1437,
					estimated_delivery_text: "Expect your delivery between 5 and 7 days",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available.",
					safe_checkout: 1,
					secure_checkout: 0,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "men-gym-co-ord-set",
					status: 1,
					store_id: 15,
					created_by_id: "19",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T12:42:13.000000Z",
					updated_at: "2023-09-30T04:24:25.000000Z",
					orders_count: 2,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 136.22,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						160,
						153,
						161,
						158,
						167,
						168
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 178,
						variation_id: null,
						quantity: 1,
						single_price: 12,
						shipping_cost: 0,
						subtotal: 12.6,
						is_refunded: 1
					},
					product_thumbnail: {
						id: 1263,
						collection_name: "attachment",
						name: "gymmen_01-1",
						file_name: "gymmen_01-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "17910",
						created_by_id: "1",
						created_at: "2023-09-18T12:29:48.000000Z",
						updated_at: "2023-09-18T12:29:48.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1263,
							collection_name: "attachment",
							name: "gymmen_01-1",
							file_name: "gymmen_01-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "17910",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1264,
							collection_name: "attachment",
							name: "gymmen_02",
							file_name: "gymmen_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "21918",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1265,
							collection_name: "attachment",
							name: "gymmen_03",
							file_name: "gymmen_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "10917",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1262,
							collection_name: "attachment",
							name: "gymmen_01",
							file_name: "gymmen_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "27922",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1263,
						collection_name: "attachment",
						name: "gymmen_01-1",
						file_name: "gymmen_01-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "17910",
						created_by_id: "1",
						created_at: "2023-09-18T12:29:48.000000Z",
						updated_at: "2023-09-18T12:29:48.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "178",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "178",
								tag_id: "11"
							}
						}
					],
					attributes: [
					],
					variations: [
					]
				},
				{
					id: 175,
					name: "Long Sleeve Top",
					short_description: "Available in a range of colors, customers can choose their preferred shade to match their personal style and preferences.",
					description: "<p>A wardrobe staple and a must-have addition for any fashion enthusiast, our Long Sleeve Top is designed to elevate your everyday style with effortless grace. This classic piece embodies timeless elegance and versatility, crafted with meticulous attention to detail and superior quality that ensures both comfort and style.</p><p>Crafted from a soft and breathable fabric, this top promises a cozy fit while keeping you chic throughout the day. The careful selection of materials ensures a luxurious feel against your skin, making it ideal for extended wear without compromising on style.</p><p>What sets our Long Sleeve Top apart is the wide array of colors available, allowing you to choose the perfect shade that aligns with your personal style and preferences. Whether you prefer a bold, eye-catching hue or a more understated, classic tone, our collection caters to all tastes and occasions.</p><p>The beauty of this top lies in its adaptability; it's a garment that seamlessly transitions from casual to sophisticated. Pair it with your favorite pair of jeans for a laid-back, yet fashionable look, or opt for tailored pants to exude an air of refinement. The possibilities are as endless as your imagination.</p><p>The slim fit of the Long Sleeve Top flatters your figure, accentuating your feminine curves in all the right places. This tailored fit not only provides a stylish silhouette but also boosts your confidence wherever you go. The long sleeves offer additional coverage and warmth, making it a perfect choice for cooler seasons, ensuring this piece remains a year-round wardrobe essential.</p><p>Investing in our Long Sleeve Top means investing in a blend of comfort, style, and versatility. This garment effortlessly accommodates various occasions, whether it's a day at the office, a casual outing with friends, or simply running errands. The timeless design ensures that you'll never be without the perfect attire for any event.</p><p>Don't miss the opportunity to embrace the elegance and versatility of our Long Sleeve Top. Elevate your style and leave a lasting impression wherever you choose to wear it. Order now and experience the epitome of fashion that complements your lifestyle and stands the test of time. Make our Long Sleeve Top your go-to choice and revel in the confidence and sophistication it brings to your wardrobe.</p>",
					type: "simple",
					unit: "1 Item",
					weight: 120,
					quantity: 136,
					price: 12,
					sale_price: 9.72,
					discount: 19,
					is_featured: 0,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 0,
					is_trending: 1,
					is_approved: 0,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS20",
					is_random_related_products: 0,
					stock_status: "in_stock",
					meta_title: "Long Sleeve Top",
					meta_description: "Available in a range of colors, customers can choose their preferred shade to match their personal style and preferences.",
					product_thumbnail_id: 1224,
					product_meta_image_id: "1224",
					size_chart_image_id: null,
					estimated_delivery_text: null,
					return_policy_text: null,
					safe_checkout: 1,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "long-sleeve-top",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T12:11:42.000000Z",
					updated_at: "2023-09-30T11:40:55.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 175,
						variation_id: null,
						quantity: 1,
						single_price: 9,
						shipping_cost: 0,
						subtotal: 9.72,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1224,
						collection_name: "attachment",
						name: "shortstishirt_02",
						file_name: "shortstishirt_02.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25601",
						created_by_id: "1",
						created_at: "2023-09-18T12:06:25.000000Z",
						updated_at: "2023-09-18T12:06:25.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1223,
							collection_name: "attachment",
							name: "shortstishirt_01",
							file_name: "shortstishirt_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "37440",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1224,
							collection_name: "attachment",
							name: "shortstishirt_02",
							file_name: "shortstishirt_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "25601",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1225,
							collection_name: "attachment",
							name: "shortstishirt_03",
							file_name: "shortstishirt_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "23253",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1226,
							collection_name: "attachment",
							name: "shortstishirt_04",
							file_name: "shortstishirt_04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "50990",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1224,
						collection_name: "attachment",
						name: "shortstishirt_02",
						file_name: "shortstishirt_02.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25601",
						created_by_id: "1",
						created_at: "2023-09-18T12:06:25.000000Z",
						updated_at: "2023-09-18T12:06:25.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: null,
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "175",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "175",
								tag_id: "11"
							}
						}
					],
					attributes: [
					],
					variations: [
					]
				},
				{
					id: 177,
					name: "Women Polyester Activewear",
					short_description: "Designed to keep you dry and comfortable during workouts, our activewear features moisture-wicking technology that wicks away sweat.",
					description: "<p>Embarking on a fitness journey requires more than just determination—it demands the right gear that understands and enhances your every move. We present to you the epitome of fitness companions: our Women's Polyester Activewear. Meticulously crafted and designed with your comfort in mind, this activewear is set to revolutionize your workout experience.</p><p>Imagine activewear that works as hard as you do, effortlessly adapting to the rigors of your intense workout sessions. Our activewear boasts cutting-edge moisture-wicking technology that efficiently whisks away sweat, ensuring you stay dry and comfortable throughout your training. Say goodbye to distractions caused by sticky and uncomfortable clothes. Our activewear offers optimum breathability and rapid-drying properties, so you can focus on achieving your fitness goals without hindrance.</p><p>Yet, functionality is just one aspect of our activewear's brilliance. Style takes center stage with a sleek and fashionable design that's bound to turn heads at the gym. We understand that looking good is feeling good, and our activewear, made from premium-quality polyester fabric, ensures a perfect fit that accentuates your figure. Boost your confidence and motivation as you adorn yourself in activewear that not only performs outstandingly but also complements your style effortlessly.</p><p>Whether you're pounding the treadmill, striking poses in yoga, or engaging in high-intensity workouts, our activewear is the reliable partner you can trust. Offering maximum flexibility and freedom of movement, it lets you push your limits and reach new heights in your fitness journey. Feel the ease of unrestricted motion as you conquer your workouts and strive towards a fitter, healthier you.</p><p>Investing in our Women's Polyester Activewear today will redefine your workout routine. Experience the difference it brings to your performance, making you feel unstoppable in your pursuit of fitness goals. Elevate your workout, set new standards, and conquer your fitness journey like never before. Embrace the power of the ultimate fitness companion—our Women's Polyester Activewear.</p>",
					type: "simple",
					unit: "1 Item",
					weight: 167,
					quantity: 154,
					price: 26,
					sale_price: 22.36,
					discount: 14,
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
					sku: "FAS21",
					is_random_related_products: 0,
					stock_status: "in_stock",
					meta_title: "Women Polyester Activewear",
					meta_description: "Designed to keep you dry and comfortable during workouts, our activewear features moisture-wicking technology that wicks away sweat.",
					product_thumbnail_id: 1236,
					product_meta_image_id: "1236",
					size_chart_image_id: null,
					estimated_delivery_text: null,
					return_policy_text: null,
					safe_checkout: 1,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "women-polyester-activewear",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T12:29:12.000000Z",
					updated_at: "2023-09-30T05:54:59.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 177,
						variation_id: null,
						quantity: 1,
						single_price: 22,
						shipping_cost: 0,
						subtotal: 22.36,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1236,
						collection_name: "attachment",
						name: "gymshorts_coffee-2",
						file_name: "gymshorts_coffee-2.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25096",
						created_by_id: "1",
						created_at: "2023-09-18T12:14:21.000000Z",
						updated_at: "2023-09-18T12:14:21.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1234,
							collection_name: "attachment",
							name: "gymshorts_green-1",
							file_name: "gymshorts_green-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "30725",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1236,
							collection_name: "attachment",
							name: "gymshorts_coffee-2",
							file_name: "gymshorts_coffee-2.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "25096",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1235,
							collection_name: "attachment",
							name: "gymshorts_green-2",
							file_name: "gymshorts_green-2.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "34926",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1237,
							collection_name: "attachment",
							name: "gymshorts_green",
							file_name: "gymshorts_green.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "36031",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1228,
							collection_name: "attachment",
							name: "gymshorts_01",
							file_name: "gymshorts_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "28869",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1229,
							collection_name: "attachment",
							name: "gymshorts_02",
							file_name: "gymshorts_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "32136",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1230,
							collection_name: "attachment",
							name: "gymshorts_03",
							file_name: "gymshorts_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "31992",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1231,
							collection_name: "attachment",
							name: "gymshorts_coffee",
							file_name: "gymshorts_coffee.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "27519",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1232,
							collection_name: "attachment",
							name: "gymshorts_coffee-1",
							file_name: "gymshorts_coffee-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "26161",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1236,
						collection_name: "attachment",
						name: "gymshorts_coffee-2",
						file_name: "gymshorts_coffee-2.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25096",
						created_by_id: "1",
						created_at: "2023-09-18T12:14:21.000000Z",
						updated_at: "2023-09-18T12:14:21.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: null,
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "177",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "177",
								tag_id: "11"
							}
						}
					],
					attributes: [
					],
					variations: [
					]
				},
				{
					id: 160,
					name: "Solid Hooded Sweatshirt",
					short_description: "Offering a combination of quality, style, and affordability, the Solid Hooded Sweatshirt provides customers with great value for their money.",
					description: "<p>Introducing our Solid Hooded Sweatshirt, the perfect blend of style and comfort for everyone! Whether you're heading out for a casual day or hitting the gym, this trendy sweatshirt is a must-have addition to your wardrobe.</p><p>Crafted with high-quality materials, this sweatshirt offers superior durability and long-lasting softness. The hood provides extra protection against the elements, while the relaxed fit ensures freedom of movement. Our Solid Hooded Sweatshirt is designed to keep you cozy and stylish all day long.</p><p>Versatility is key with this sweatshirt. Dress it up with a pair of jeans and sneakers for a laid-back weekend look or layer it under a jacket for added warmth during those chilly evenings. The timeless design and solid color make it easy to match with any outfit, giving you endless styling options.</p><p>We understand the importance of quality, which is why we've paid attention to every detail. From the reinforced stitching to the sturdy zipper, every aspect of this sweatshirt has been carefully considered for your utmost satisfaction. Rest assured, our Solid Hooded Sweatshirt is built to withstand the test of time.</p><p>Whether you're a fashion enthusiast or simply looking for a comfortable and stylish everyday essential, our Solid Hooded Sweatshirt is the perfect choice. Join countless satisfied customers and upgrade your wardrobe with this versatile and durable sweatshirt.</p><p>Don't miss out on this fantastic opportunity to enhance your fashion game. Order your Solid Hooded Sweatshirt now and experience the perfect blend of fashion and comfort firsthand!</p>",
					type: "classified",
					unit: "1 Item",
					weight: 350,
					quantity: 21,
					price: 6,
					sale_price: 5.64,
					discount: 6,
					is_featured: 1,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 0,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS05",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Solid Hooded Sweatshirt",
					meta_description: "Offering a combination of quality, style, and affordability, the Solid Hooded Sweatshirt provides customers with great value for their money.",
					product_thumbnail_id: 1267,
					product_meta_image_id: "1267",
					size_chart_image_id: 1437,
					estimated_delivery_text: "Delivery is expected within 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "solid-hooded-sweatshirt",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:06:38.000000Z",
					updated_at: "2023-09-20T08:12:06.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						167,
						174,
						157,
						158,
						163,
						154
					],
					cross_sell_products: [
						178,
						177,
						175
					],
					pivot: {
						order_id: "28",
						product_id: 160,
						variation_id: 6,
						quantity: 1,
						single_price: 5,
						shipping_cost: 0,
						subtotal: 5.64,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1267,
						collection_name: "attachment",
						name: "Hoodies_01",
						file_name: "Hoodies_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "22782",
						created_by_id: "1",
						created_at: "2023-09-18T12:32:18.000000Z",
						updated_at: "2023-09-18T12:32:18.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1267,
							collection_name: "attachment",
							name: "Hoodies_01",
							file_name: "Hoodies_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "22782",
							created_by_id: "1",
							created_at: "2023-09-18T12:32:18.000000Z",
							updated_at: "2023-09-18T12:32:18.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1268,
							collection_name: "attachment",
							name: "Hoodies_02",
							file_name: "Hoodies_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "20862",
							created_by_id: "1",
							created_at: "2023-09-18T12:32:18.000000Z",
							updated_at: "2023-09-18T12:32:18.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1267,
						collection_name: "attachment",
						name: "Hoodies_01",
						file_name: "Hoodies_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "22782",
						created_by_id: "1",
						created_at: "2023-09-18T12:32:18.000000Z",
						updated_at: "2023-09-18T12:32:18.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "160",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "160",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 7,
							name: "Size",
							style: "circle",
							slug: "size",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T07:58:34.000000Z",
							updated_at: "2023-09-20T07:58:34.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "160",
								attribute_id: "7"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 8,
									value: "XXL",
									slug: "xxl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 6,
							name: "Solid Hooded Sweatshirt",
							price: 6,
							quantity: 19,
							stock_status: "in_stock",
							sale_price: 5.64,
							discount: 6,
							sku: "FASS05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-29T13:42:56.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "6",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 7,
							name: "Solid Hooded Sweatshirt",
							price: 7,
							quantity: 21,
							stock_status: "in_stock",
							sale_price: 6.65,
							discount: 5,
							sku: "FAM05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-20T08:05:36.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "7",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 8,
							name: "Solid Hooded Sweatshirt",
							price: 8,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 8,
							discount: 0,
							sku: "FASL05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-20T08:05:36.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "8",
										attribute_value_id: "6"
									}
								}
							]
						},
						{
							id: 9,
							name: "Solid Hooded Sweatshirt",
							price: 9,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 9,
							discount: 0,
							sku: "FASXL05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-20T08:05:36.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "9",
										attribute_value_id: "7"
									}
								}
							]
						}
					]
				},
				{
					id: 168,
					name: "Women Flared Jeans",
					short_description: "The flared cut of these jeans adds a timeless and retro-inspired touch to any outfit, making them a wardrobe staple.",
					description: "<p>A timeless, must-have addition to every woman's wardrobe. The resurgence of the retro-inspired flared cut has taken the fashion world by storm, and these jeans effortlessly embody that classic yet contemporary vibe. They hold the power to elevate any outfit, giving you a stylish edge that never falls out of favor.</p><p>Craftsmanship and attention to detail lie at the heart of these flared jeans. Every stitch, every seam is meticulously designed to ensure both comfort and style. We understand that fashion isn't just about looking good; it's about feeling confident and empowered. That's why these jeans are engineered to make you look and feel your absolute best throughout the day.</p><p>One of the standout features of our Women Flared Jeans is the high-quality materials used in their construction. We believe in offering more than just a pair of jeans; we offer a durable, reliable companion for your everyday adventures. The superior quality of these materials not only guarantees longevity but also ensures a flattering fit. These jeans accentuate your curves in all the right places, allowing you to embrace your unique body shape with grace and confidence.</p><p>Whether you're gearing up for a night out on the town or aiming for a more casual, everyday look, our flared jeans effortlessly adapt to any occasion. Pair them with a chic blouse and heels for a sophisticated ensemble or dress them down with a cozy sweater and sneakers for a laid-back vibe. The versatility of these jeans knows no bounds, making them an essential in every modern woman's closet.</p><p>In a world where fashion is ever-changing and trends come and go, our Women Flared Jeans stand as a testament to timeless style. This isn't just a pair of jeans; it's an invitation to upgrade your fashion game and embrace your inner fashionista with confidence. The flared silhouette takes you back to an era of glamour and rebellion, while seamlessly fitting into the contemporary narrative.</p><p>So, why wait? Elevate your style, celebrate your individuality, and step into the world with a newfound confidence. Our Women Flared Jeans are more than a fashion statement; they're an embodiment of the strong, stylish, and empowered woman you are. Experience the comfort, revel in the style, and make a lasting impression wherever you go. Upgrade your wardrobe, embrace the timeless appeal of flared jeans, and conquer the world with grace and panache.</p>",
					type: "classified",
					unit: "1 Item",
					weight: 200,
					quantity: 12,
					price: 19,
					sale_price: 17.67,
					discount: 7,
					is_featured: 0,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 1,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS17",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Women Flared Jeans",
					meta_description: "The flared cut of these jeans adds a timeless and retro-inspired touch to any outfit, making them a wardrobe staple.",
					product_thumbnail_id: 1321,
					product_meta_image_id: "1321",
					size_chart_image_id: 1445,
					estimated_delivery_text: "The delivery time frame is 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available.",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "women-flared-jeans",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:27:35.000000Z",
					updated_at: "2023-09-21T04:12:30.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						162,
						176,
						175,
						177,
						156,
						152
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 168,
						variation_id: 23,
						quantity: 1,
						single_price: 18,
						shipping_cost: 0,
						subtotal: 18.6,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1321,
						collection_name: "attachment",
						name: "Pent_01",
						file_name: "Pent_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "64230",
						created_by_id: "1",
						created_at: "2023-09-19T02:58:03.000000Z",
						updated_at: "2023-09-19T02:58:03.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1321,
							collection_name: "attachment",
							name: "Pent_01",
							file_name: "Pent_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "64230",
							created_by_id: "1",
							created_at: "2023-09-19T02:58:03.000000Z",
							updated_at: "2023-09-19T02:58:03.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1322,
							collection_name: "attachment",
							name: "Pent_02",
							file_name: "Pent_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "60456",
							created_by_id: "1",
							created_at: "2023-09-19T02:58:03.000000Z",
							updated_at: "2023-09-19T02:58:03.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1323,
							collection_name: "attachment",
							name: "Pent_03",
							file_name: "Pent_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "57027",
							created_by_id: "1",
							created_at: "2023-09-19T02:58:03.000000Z",
							updated_at: "2023-09-19T02:58:03.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1321,
						collection_name: "attachment",
						name: "Pent_01",
						file_name: "Pent_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "64230",
						created_by_id: "1",
						created_at: "2023-09-19T02:58:03.000000Z",
						updated_at: "2023-09-19T02:58:03.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1445,
						collection_name: "attachment",
						name: "sizechart_jeans",
						file_name: "sizechart_jeans.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "145889",
						created_by_id: "1",
						created_at: "2023-09-21T04:11:53.000000Z",
						updated_at: "2023-09-21T04:11:53.000000Z",
						original_url: "/images/data/sizechart-jeans.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "168",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "168",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 9,
							name: "Waist",
							style: "radio",
							slug: "waist",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T09:15:30.000000Z",
							updated_at: "2023-09-20T09:15:30.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "168",
								attribute_id: "9"
							},
							attribute_values: [
								{
									id: 12,
									value: "28",
									slug: "28",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								},
								{
									id: 13,
									value: "30",
									slug: "30",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								},
								{
									id: 14,
									value: "32",
									slug: "32",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								},
								{
									id: 15,
									value: "34",
									slug: "34",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 22,
							name: "Women Flared Jeans",
							price: 19,
							quantity: 12,
							stock_status: "in_stock",
							sale_price: 17.67,
							discount: 7,
							sku: "FAS2817",
							status: 1,
							variation_options: null,
							variation_image_id: 1321,
							product_id: 168,
							deleted_at: null,
							created_at: "2023-09-20T09:43:03.000000Z",
							updated_at: "2023-09-20T09:43:03.000000Z",
							variation_image: {
								id: 1321,
								collection_name: "attachment",
								name: "Pent_01",
								file_name: "Pent_01.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "64230",
								created_by_id: "1",
								created_at: "2023-09-19T02:58:03.000000Z",
								updated_at: "2023-09-19T02:58:03.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 12,
									value: "28",
									slug: "28",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "22",
										attribute_value_id: "12"
									}
								}
							]
						},
						{
							id: 23,
							name: "Women Flared Jeans",
							price: 20,
							quantity: 4,
							stock_status: "in_stock",
							sale_price: 18.6,
							discount: 7,
							sku: "FAS3017",
							status: 1,
							variation_options: null,
							variation_image_id: 1321,
							product_id: 168,
							deleted_at: null,
							created_at: "2023-09-20T09:43:03.000000Z",
							updated_at: "2023-09-29T13:42:56.000000Z",
							variation_image: {
								id: 1321,
								collection_name: "attachment",
								name: "Pent_01",
								file_name: "Pent_01.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "64230",
								created_by_id: "1",
								created_at: "2023-09-19T02:58:03.000000Z",
								updated_at: "2023-09-19T02:58:03.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 13,
									value: "30",
									slug: "30",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "23",
										attribute_value_id: "13"
									}
								}
							]
						},
						{
							id: 24,
							name: "Women Flared Jeans",
							price: 21,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 19.95,
							discount: 5,
							sku: "FAS3217",
							status: 1,
							variation_options: null,
							variation_image_id: 1321,
							product_id: 168,
							deleted_at: null,
							created_at: "2023-09-20T09:43:03.000000Z",
							updated_at: "2023-09-20T09:43:03.000000Z",
							variation_image: {
								id: 1321,
								collection_name: "attachment",
								name: "Pent_01",
								file_name: "Pent_01.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "64230",
								created_by_id: "1",
								created_at: "2023-09-19T02:58:03.000000Z",
								updated_at: "2023-09-19T02:58:03.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 14,
									value: "32",
									slug: "32",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "24",
										attribute_value_id: "14"
									}
								}
							]
						}
					]
				},
				{
					id: 164,
					name: "Premium Blazer",
					short_description: "With a focus on comfort, the Premium Blazer is designed to provide a relaxed fit and ease of movement, making it a pleasure to wear for extended periods.",
					description: "<p>Introducing our Premium Blazer – the epitome of sophistication and style. Crafted with utmost attention to detail, this fashion-forward piece is perfect for men and women who value impeccable attire.</p><p>Made from high-quality materials, our Premium Blazer offers a comfortable fit without compromising on elegance. Its tailored design guarantees a flattering silhouette, enhancing your confidence and adding a touch of class to any outfit.</p><p>Whether you're attending a formal event, a business meeting, or simply want to upgrade your everyday wardrobe, our Premium Blazer is the ultimate choice. Its timeless appeal and versatility make it suitable for any occasion, effortlessly elevating your style game.</p><p>Designed to impress, this blazer features exquisite craftsmanship and meticulous stitching, showcasing our commitment to delivering excellence. It is equipped with functional pockets, allowing you to carry your essentials with ease, while the smooth lining ensures a luxurious feel against your skin.</p><p>Rest assured, our Premium Blazer is built to last. Its durable construction guarantees long-lasting wear, making it a smart investment for your wardrobe. With proper care, this blazer will remain a staple in your collection for years to come.</p><p>Available in a range of classic colors, our Premium Blazer effortlessly complements any wardrobe, giving you endless styling options. Pair it with tailored pants for a polished business look, or dress it down with jeans for a more casual yet refined ensemble.</p><p>Order your Premium Blazer today and experience the perfect blend of style, sophistication, and comfort. Elevate your fashion game and make a lasting impression wherever you go. Invest in quality, invest in our Premium Blazer.</p>",
					type: "classified",
					unit: "1 Item",
					weight: 450,
					quantity: 17,
					price: 11,
					sale_price: 9.9,
					discount: 10,
					is_featured: 1,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 0,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS08",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Premium Blazer",
					meta_description: "With a focus on comfort, the Premium Blazer is designed to provide a relaxed fit and ease of movement, making it a pleasure to wear for extended periods.",
					product_thumbnail_id: 1247,
					product_meta_image_id: "1247",
					size_chart_image_id: 1437,
					estimated_delivery_text: "The delivery time frame is 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available.",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "premium-blazer",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:18:56.000000Z",
					updated_at: "2023-09-20T09:30:18.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						170,
						155,
						160,
						176,
						152,
						174
					],
					cross_sell_products: [
						171,
						170,
						168
					],
					pivot: {
						order_id: "28",
						product_id: 164,
						variation_id: 17,
						quantity: 1,
						single_price: 11,
						shipping_cost: 0,
						subtotal: 11.44,
						is_refunded: 1
					},
					product_thumbnail: {
						id: 1247,
						collection_name: "attachment",
						name: "CollarTshirt_Green-1",
						file_name: "CollarTshirt_Green-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "61889",
						created_by_id: "1",
						created_at: "2023-09-18T12:23:44.000000Z",
						updated_at: "2023-09-18T12:23:44.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1246,
							collection_name: "attachment",
							name: "CollarTshirt_Blue-1",
							file_name: "CollarTshirt_Blue-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "61235",
							created_by_id: "1",
							created_at: "2023-09-18T12:23:44.000000Z",
							updated_at: "2023-09-18T12:23:44.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1247,
							collection_name: "attachment",
							name: "CollarTshirt_Green-1",
							file_name: "CollarTshirt_Green-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "61889",
							created_by_id: "1",
							created_at: "2023-09-18T12:23:44.000000Z",
							updated_at: "2023-09-18T12:23:44.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1248,
							collection_name: "attachment",
							name: "CollarTshirt_Lowender-1",
							file_name: "CollarTshirt_Lowender-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "46320",
							created_by_id: "1",
							created_at: "2023-09-18T12:23:44.000000Z",
							updated_at: "2023-09-18T12:23:44.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1247,
						collection_name: "attachment",
						name: "CollarTshirt_Green-1",
						file_name: "CollarTshirt_Green-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "61889",
						created_by_id: "1",
						created_at: "2023-09-18T12:23:44.000000Z",
						updated_at: "2023-09-18T12:23:44.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "164",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "164",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 7,
							name: "Size",
							style: "circle",
							slug: "size",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T07:58:34.000000Z",
							updated_at: "2023-09-20T07:58:34.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "164",
								attribute_id: "7"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 8,
									value: "XXL",
									slug: "xxl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								}
							]
						},
						{
							id: 10,
							name: "Color",
							style: "color",
							slug: "color",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T09:19:49.000000Z",
							updated_at: "2023-09-20T09:19:49.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "164",
								attribute_id: "10"
							},
							attribute_values: [
								{
									id: 16,
									value: "Red",
									slug: "red",
									hex_color: "#d03535",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 17,
									value: "Black",
									slug: "black",
									hex_color: "#000000",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 18,
									value: "Purple",
									slug: "purple",
									hex_color: "#9b809e",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 19,
									value: "White",
									slug: "white-2",
									hex_color: "#d6d6d6",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 20,
									value: "Green",
									slug: "green",
									hex_color: "#259889",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 21,
									value: "Yellow",
									slug: "yellow",
									hex_color: "#e2d62c",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 22,
									value: "Blue",
									slug: "blue",
									hex_color: "#5ea1e8",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 23,
									value: "Orange",
									slug: "orange",
									hex_color: "#f09124",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 16,
							name: "Premium Blazer (Green/S)",
							price: 12,
							quantity: 6,
							stock_status: "in_stock",
							sale_price: 11.4,
							discount: 5,
							sku: "FASGS08",
							status: 1,
							variation_options: null,
							variation_image_id: 1246,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1246,
								collection_name: "attachment",
								name: "CollarTshirt_Blue-1",
								file_name: "CollarTshirt_Blue-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61235",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 20,
									value: "Green",
									slug: "green",
									hex_color: "#259889",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "16",
										attribute_value_id: "20"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "16",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 17,
							name: "Premium Blazer (Green/M)",
							price: 13,
							quantity: 16,
							stock_status: "in_stock",
							sale_price: 11.44,
							discount: 12,
							sku: "FASGM08",
							status: 1,
							variation_options: null,
							variation_image_id: 1246,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-29T13:42:56.000000Z",
							variation_image: {
								id: 1246,
								collection_name: "attachment",
								name: "CollarTshirt_Blue-1",
								file_name: "CollarTshirt_Blue-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61235",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 20,
									value: "Green",
									slug: "green",
									hex_color: "#259889",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "17",
										attribute_value_id: "20"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "17",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 18,
							name: "Premium Blazer (Purple/S)",
							price: 11,
							quantity: 8,
							stock_status: "in_stock",
							sale_price: 9.9,
							discount: 10,
							sku: "FASPS08",
							status: 1,
							variation_options: null,
							variation_image_id: 1247,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1247,
								collection_name: "attachment",
								name: "CollarTshirt_Green-1",
								file_name: "CollarTshirt_Green-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61889",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 18,
									value: "Purple",
									slug: "purple",
									hex_color: "#9b809e",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "18",
										attribute_value_id: "18"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "18",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 19,
							name: "Premium Blazer (Purple/M)",
							price: 12,
							quantity: 1,
							stock_status: "in_stock",
							sale_price: 10.8,
							discount: 10,
							sku: "FASPM08",
							status: 1,
							variation_options: null,
							variation_image_id: 1247,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1247,
								collection_name: "attachment",
								name: "CollarTshirt_Green-1",
								file_name: "CollarTshirt_Green-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61889",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 18,
									value: "Purple",
									slug: "purple",
									hex_color: "#9b809e",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "19",
										attribute_value_id: "18"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "19",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 20,
							name: "Premium Blazer (White/S)",
							price: 12,
							quantity: 14,
							stock_status: "in_stock",
							sale_price: 11.28,
							discount: 6,
							sku: "FASWS08",
							status: 1,
							variation_options: null,
							variation_image_id: 1248,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1248,
								collection_name: "attachment",
								name: "CollarTshirt_Lowender-1",
								file_name: "CollarTshirt_Lowender-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "46320",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 19,
									value: "White",
									slug: "white-2",
									hex_color: "#d6d6d6",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "20",
										attribute_value_id: "19"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "20",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 21,
							name: "Premium Blazer (White/M)",
							price: 15,
							quantity: 1,
							stock_status: "in_stock",
							sale_price: 12.75,
							discount: 15,
							sku: "FASWM08",
							status: 1,
							variation_options: null,
							variation_image_id: 1248,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1248,
								collection_name: "attachment",
								name: "CollarTshirt_Lowender-1",
								file_name: "CollarTshirt_Lowender-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "46320",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 19,
									value: "White",
									slug: "white-2",
									hex_color: "#d6d6d6",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "21",
										attribute_value_id: "19"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "21",
										attribute_value_id: "5"
									}
								}
							]
						}
					]
				},
				{
					id: 161,
					name: "Relaxed Fit Hoodie",
					short_description: "The relaxed fit and versatile design make our hoodie a perfect layering piece for any outfit, adding a touch of warmth and style.",
					description: "<p>Introducing our latest addition to the world of fashion and comfort: the Relaxed Fit Hoodie. This versatile piece is designed with the modern individual in mind, offering a perfect blend of style and relaxation. Crafted with utmost precision, this hoodie promises to be your go-to companion for any occasion.</p><p>Our Relaxed Fit Hoodie boasts a thoughtfully chosen fabric that embraces your body with a gentle touch, providing an unparalleled level of comfort. The relaxed fit ensures ease of movement, making it ideal for both lounging at home or stepping out for a casual outing. Its carefully tailored design effortlessly combines functionality and fashion, making it a must-have addition to your wardrobe.</p><p>With its versatile nature, this hoodie effortlessly complements any outfit. Whether you're pairing it with your favorite jeans for a laid-back weekend look or layering it with a trendy jacket for a more polished ensemble, this Relaxed Fit Hoodie will elevate your style game and garner compliments wherever you go.</p><p>Not only does this hoodie offer a relaxed fit, but it also features a cozy hood that adds an extra element of comfort. Perfect for those chilly mornings or evening strolls, it provides warmth and protection while exuding an effortlessly cool vibe.</p><p>In addition to its impeccable style, this hoodie is made to withstand the test of time. Its high-quality construction ensures durability, allowing you to enjoy its cozy embrace for years to come. It is also easy to care for, requiring minimal effort to keep it looking pristine.</p><p>Upgrade your wardrobe with our Relaxed Fit Hoodie and experience the perfect blend of fashion and comfort. Embrace leisure without compromising on style. Order now and join countless satisfied customers who have made this hoodie their ultimate fashion staple.</p>",
					type: "classified",
					unit: "1 Item",
					weight: 350,
					quantity: 8,
					price: 6,
					sale_price: 5.82,
					discount: 3,
					is_featured: 1,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 0,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS06",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Relaxed Fit Hoodie",
					meta_description: "The relaxed fit and versatile design make our hoodie a perfect layering piece for any outfit, adding a touch of warmth and style.",
					product_thumbnail_id: 1270,
					product_meta_image_id: "1270",
					size_chart_image_id: 1437,
					estimated_delivery_text: "The delivery time frame is 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "relaxed-fit-hoodie",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:10:17.000000Z",
					updated_at: "2023-09-20T08:42:42.000000Z",
					orders_count: 6,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 777.2799999999999,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						154,
						156,
						168,
						169,
						158,
						113
					],
					cross_sell_products: [
						157,
						158,
						166
					],
					pivot: {
						order_id: "28",
						product_id: 161,
						variation_id: 15,
						quantity: 1,
						single_price: 9,
						shipping_cost: 0,
						subtotal: 9.4,
						is_refunded: 1
					},
					product_thumbnail: {
						id: 1270,
						collection_name: "attachment",
						name: "Hoodies_Brown",
						file_name: "Hoodies_Brown.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "42974",
						created_by_id: "1",
						created_at: "2023-09-18T12:33:04.000000Z",
						updated_at: "2023-09-18T12:33:04.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1270,
							collection_name: "attachment",
							name: "Hoodies_Brown",
							file_name: "Hoodies_Brown.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "42974",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1271,
							collection_name: "attachment",
							name: "Hoodies_Coffee",
							file_name: "Hoodies_Coffee.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "31488",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1272,
							collection_name: "attachment",
							name: "Hoodies_Lite Gray",
							file_name: "Hoodies_Lite-Gray.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "44329",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1273,
							collection_name: "attachment",
							name: "Hoodies_Pink",
							file_name: "Hoodies_Pink.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "33428",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1270,
						collection_name: "attachment",
						name: "Hoodies_Brown",
						file_name: "Hoodies_Brown.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "42974",
						created_by_id: "1",
						created_at: "2023-09-18T12:33:04.000000Z",
						updated_at: "2023-09-18T12:33:04.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "161",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "161",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 7,
							name: "Size",
							style: "circle",
							slug: "size",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T07:58:34.000000Z",
							updated_at: "2023-09-20T07:58:34.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "161",
								attribute_id: "7"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 8,
									value: "XXL",
									slug: "xxl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								}
							]
						},
						{
							id: 8,
							name: "Colour",
							style: "image",
							slug: "colour",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T08:32:56.000000Z",
							updated_at: "2023-09-20T08:32:56.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "161",
								attribute_id: "8"
							},
							attribute_values: [
								{
									id: 9,
									value: "Burgundy",
									slug: "burgundy",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:34:39.000000Z",
									deleted_at: null
								},
								{
									id: 10,
									value: "Brown",
									slug: "brown",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null
								},
								{
									id: 11,
									value: "White",
									slug: "white",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 10,
							name: "Relaxed Fit Hoodie (Burgundy/S)",
							price: 7,
							quantity: 2,
							stock_status: "in_stock",
							sale_price: 6.51,
							discount: 7,
							sku: "FASBS06",
							status: 1,
							variation_options: null,
							variation_image_id: 1270,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1270,
								collection_name: "attachment",
								name: "Hoodies_Brown",
								file_name: "Hoodies_Brown.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "42974",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 9,
									value: "Burgundy",
									slug: "burgundy",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:34:39.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "10",
										attribute_value_id: "9"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "10",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 11,
							name: "Relaxed Fit Hoodie (Burgundy/M)",
							price: 8,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 7.52,
							discount: 6,
							sku: "FASBM06",
							status: 1,
							variation_options: null,
							variation_image_id: 1270,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1270,
								collection_name: "attachment",
								name: "Hoodies_Brown",
								file_name: "Hoodies_Brown.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "42974",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 9,
									value: "Burgundy",
									slug: "burgundy",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:34:39.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "11",
										attribute_value_id: "9"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "11",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 12,
							name: "Relaxed Fit Hoodie (Brown/S)",
							price: 10,
							quantity: 4,
							stock_status: "in_stock",
							sale_price: 9.5,
							discount: 5,
							sku: "FASBRS06",
							status: 1,
							variation_options: null,
							variation_image_id: 1271,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-29T13:38:01.000000Z",
							variation_image: {
								id: 1271,
								collection_name: "attachment",
								name: "Hoodies_Coffee",
								file_name: "Hoodies_Coffee.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "31488",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 10,
									value: "Brown",
									slug: "brown",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "12",
										attribute_value_id: "10"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "12",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 13,
							name: "Relaxed Fit Hoodie (Brown/M)",
							price: 12,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 10.8,
							discount: 10,
							sku: "FASBRM06",
							status: 1,
							variation_options: null,
							variation_image_id: 1271,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1271,
								collection_name: "attachment",
								name: "Hoodies_Coffee",
								file_name: "Hoodies_Coffee.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "31488",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 10,
									value: "Brown",
									slug: "brown",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "13",
										attribute_value_id: "10"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "13",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 14,
							name: "Relaxed Fit Hoodie (White/S)",
							price: 6,
							quantity: 3,
							stock_status: "in_stock",
							sale_price: 5.82,
							discount: 3,
							sku: "FASWS06",
							status: 1,
							variation_options: null,
							variation_image_id: 1272,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1272,
								collection_name: "attachment",
								name: "Hoodies_Lite Gray",
								file_name: "Hoodies_Lite-Gray.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "44329",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 11,
									value: "White",
									slug: "white",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "14",
										attribute_value_id: "11"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "14",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 15,
							name: "Relaxed Fit Hoodie (White/M)",
							price: 10,
							quantity: 6,
							stock_status: "in_stock",
							sale_price: 9.4,
							discount: 6,
							sku: "FASWM06",
							status: 1,
							variation_options: null,
							variation_image_id: 1272,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-30T08:43:52.000000Z",
							variation_image: {
								id: 1272,
								collection_name: "attachment",
								name: "Hoodies_Lite Gray",
								file_name: "Hoodies_Lite-Gray.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "44329",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 11,
									value: "White",
									slug: "white",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "15",
										attribute_value_id: "11"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "15",
										attribute_value_id: "5"
									}
								}
							]
						}
					]
				}
			],
			order_status: {
				id: 6,
				name: "delivered",
				slug: "delivered",
				sequence: "6",
				created_by_id: "1",
				status: 1,
				system_reserve: "1",
				created_at: "2023-08-24T08:16:03.000000Z",
				updated_at: "2023-08-24T08:16:03.000000Z",
				deleted_at: null
			},
			sub_orders: [
			],
			billing_address: {
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
			shipping_address: {
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
		},
		refund_image: null
	},
	{
		id: 1,
		reason: "The product received was significantly different from the description. It did not meet my expectations, and I believe I should be refunded for this misleading purchase.",
		amount: 12.6,
		quantity: 1,
		store_id: 3,
		order_id: 28,
		product_id: 178,
		consumer_id: 19,
		variation_id: null,
		refund_image_id: null,
		payment_type: "wallet",
		status: "pending",
		is_used: "0",
		created_at: "2023-09-30T08:06:53.000000Z",
		updated_at: "2023-09-30T08:06:53.000000Z",
		deleted_at: null,
		user: {
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
				original_url: "/images/data/avatar.png"
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
		},
		store: {
			id: 3,
			store_name: "Natures Basket Mart",
			description: "Welcome to Nature's Basket Mart, We understand the importance of fresh, nourishing vegetables in your daily diet, and that's why we've curated a marketplace that celebrates the vibrancy, flavors, and vitality of farm-fresh produce",
			slug: "natures-basket-mart",
			store_logo_id: 1439,
			store_cover_id: null,
			country_id: 840,
			state_id: 3787,
			city: "Rochester",
			address: "2775 James Street",
			pincode: "14616",
			facebook: "https://www.facebook.com/",
			twitter: "https://twitter.com/",
			instagram: "https://www.instagram.com/",
			youtube: null,
			pinterest: null,
			hide_vendor_email: 0,
			hide_vendor_phone: 0,
			vendor_id: 4,
			created_by_id: "1",
			status: 1,
			is_approved: 1,
			created_at: "2023-08-24T09:37:50.000000Z",
			updated_at: "2023-09-29T13:35:05.000000Z",
			deleted_at: null,
			orders_count: 9,
			reviews_count: 25,
			products_count: 10,
			product_images: [
				"/images/data/product.png",
				"/images/data/product.png",
				"/images/data/product.png"
			],
			order_amount: 404,
			rating_count: 3.4,
			store_logo: {
				id: 1439,
				collection_name: "attachment",
				name: "store02",
				file_name: "store02.png",
				mime_type: "image/png",
				disk: "public",
				conversions_disk: "public",
				size: "75525",
				created_by_id: "1",
				created_at: "2023-09-20T09:37:48.000000Z",
				updated_at: "2023-09-20T09:37:48.000000Z",
				original_url: "/images/data/product.png"
			},
			store_cover: null,
			vendor: {
				id: 4,
				name: "Paul Hardin",
				email: "paul.hardin@example.com",
				country_code: "1",
				phone: 5186570491,
				profile_image_id: null,
				system_reserve: "0",
				status: 1,
				created_by_id: 1,
				email_verified_at: null,
				created_at: "2023-08-24T09:37:50.000000Z",
				updated_at: "2023-08-24T09:40:48.000000Z",
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
						model_id: "4",
						role_id: "3",
						model_type: "App\\Models\\User"
					}
				},
				point: null,
				wallet: null,
				address: [
				],
				vendor_wallet: {
					id: 3,
					vendor_id: 4,
					balance: 0,
					created_at: "2023-08-24T09:37:50.000000Z",
					updated_at: "2023-08-24T09:37:50.000000Z",
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
				id: 3787,
				name: "New York",
				country_id: "840",
				created_at: "2023-08-24T08:16:44.000000Z",
				updated_at: "2023-08-24T08:16:44.000000Z"
			},
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 4,
					product_id: 15,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:27:54.000000Z",
					updated_at: "2023-09-29T12:27:54.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 5,
					product_id: 10,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:28:12.000000Z",
					updated_at: "2023-09-29T12:28:12.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 6,
					product_id: 19,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:28:25.000000Z",
					updated_at: "2023-09-29T12:28:25.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 7,
					product_id: 9,
					consumer_id: 21,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am genuinely delighted with this item. It's a total winner! The quality is superb, and it has added so much convenience to my daily routine. Highly satisfied customer!",
					created_at: "2023-09-29T12:28:39.000000Z",
					updated_at: "2023-09-29T12:28:39.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 11,
					product_id: 17,
					consumer_id: 22,
					store_id: 3,
					review_image_id: null,
					rating: 3,
					description: "Honestly, I regret buying this item. The quality is subpar, and it feels like a waste of money. I wouldn't recommend it to anyone.",
					created_at: "2023-09-29T13:04:48.000000Z",
					updated_at: "2023-09-29T13:04:48.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 12,
					product_id: 13,
					consumer_id: 22,
					store_id: 3,
					review_image_id: null,
					rating: 2,
					description: "Honestly, I regret buying this item. The quality is subpar, and it feels like a waste of money. I wouldn't recommend it to anyone.",
					created_at: "2023-09-29T13:04:59.000000Z",
					updated_at: "2023-09-29T13:04:59.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 13,
					product_id: 11,
					consumer_id: 22,
					store_id: 3,
					review_image_id: null,
					rating: 1,
					description: "Honestly, I regret buying this item. The quality is subpar, and it feels like a waste of money. I wouldn't recommend it to anyone.",
					created_at: "2023-09-29T13:05:09.000000Z",
					updated_at: "2023-09-29T13:05:09.000000Z",
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 15,
					product_id: 17,
					consumer_id: 18,
					store_id: 3,
					review_image_id: null,
					rating: 2,
					description: "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
					created_at: "2023-09-29T13:12:23.000000Z",
					updated_at: "2023-09-29T13:12:23.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 16,
					product_id: 11,
					consumer_id: 18,
					store_id: 3,
					review_image_id: null,
					rating: 3,
					description: "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
					created_at: "2023-09-29T13:12:47.000000Z",
					updated_at: "2023-09-29T13:12:47.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 17,
					product_id: 13,
					consumer_id: 18,
					store_id: 3,
					review_image_id: null,
					rating: 1,
					description: "Avoid this product. The quality is terrible, and it started falling apart almost immediately. I wish I had read more reviews before buying. Lesson learned.",
					created_at: "2023-09-29T13:13:00.000000Z",
					updated_at: "2023-09-29T13:13:00.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 18,
					product_id: 9,
					consumer_id: 20,
					store_id: 3,
					review_image_id: null,
					rating: 3,
					description: "This is one of the worst purchases I've made. The item looks nothing like the pictures, and the functionality is a joke. I feel misled and dissatisfied.",
					created_at: "2023-09-29T13:30:02.000000Z",
					updated_at: "2023-09-29T13:30:02.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 19,
					product_id: 10,
					consumer_id: 20,
					store_id: 3,
					review_image_id: null,
					rating: 2,
					description: "This is one of the worst purchases I've made. The item looks nothing like the pictures, and the functionality is a joke. I feel misled and dissatisfied.",
					created_at: "2023-09-29T13:30:26.000000Z",
					updated_at: "2023-09-29T13:30:26.000000Z",
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 21,
					product_id: 15,
					consumer_id: 20,
					store_id: 3,
					review_image_id: null,
					rating: 1,
					description: "This is one of the worst purchases I've made. The item looks nothing like the pictures, and the functionality is a joke. I feel misled and dissatisfied.",
					created_at: "2023-09-29T13:31:13.000000Z",
					updated_at: "2023-09-29T13:31:13.000000Z",
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
							original_url: "/images/data/avatar.png"
						},
						payment_account: null
					}
				},
				{
					id: 22,
					product_id: 15,
					consumer_id: 19,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am extremely satisfied with this purchase. The item arrived promptly, and the quality is exceptional. It's evident that the makers paid attention to detail. Overall, a fantastic buy!",
					created_at: "2023-09-30T11:47:02.000000Z",
					updated_at: "2023-09-30T11:47:02.000000Z",
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
							original_url: "/images/data/avatar.png"
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
							original_url: "/images/data/avatar.png"
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
					id: 24,
					product_id: 19,
					consumer_id: 19,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am extremely satisfied with this purchase. The item arrived promptly, and the quality is exceptional. It's evident that the makers paid attention to detail. Overall, a fantastic buy!",
					created_at: "2023-09-30T11:53:03.000000Z",
					updated_at: "2023-09-30T11:53:03.000000Z",
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
							original_url: "/images/data/avatar.png"
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
					id: 25,
					product_id: 17,
					consumer_id: 19,
					store_id: 3,
					review_image_id: null,
					rating: 5,
					description: "I am extremely satisfied with this purchase. The item arrived promptly, and the quality is exceptional. It's evident that the makers paid attention to detail. Overall, a fantastic buy!",
					created_at: "2023-09-30T11:53:15.000000Z",
					updated_at: "2023-09-30T11:53:15.000000Z",
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
							original_url: "/images/data/avatar.png"
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
			]
		},
		order: {
			id: 28,
			order_number: 1027,
			consumer_id: 19,
			tax_total: 6.48,
			shipping_total: 0,
			points_amount: 0,
			wallet_balance: 0,
			amount: 89.76,
			total: 96.24,
			coupon_total_discount: 0,
			payment_method: "cod",
			payment_status: "COMPLETED",
			store_id: 15,
			billing_address_id: 1,
			shipping_address_id: 4,
			delivery_description: "Standard Delivery | Approx 5 to 7 Days",
			delivery_interval: null,
			order_status_id: 6,
			coupon_id: null,
			parent_id: null,
			created_by_id: 1,
			invoice_url: "",
			status: 1,
			delivered_at: "2023-09-30 00:00:00",
			created_at: "2023-09-29T13:42:55.000000Z",
			updated_at: "2023-09-29T13:45:25.000000Z",
			deleted_at: null,
			store: {
				id: 15,
				store_name: "Trendy Fashions",
				description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
				slug: "trendy-fashions",
				store_logo_id: 1452,
				store_cover_id: null,
				country_id: 840,
				state_id: 3759,
				city: "Denver",
				address: "26, Starts Hollow Colony",
				pincode: "80014",
				facebook: "https://www.facebook.com/",
				twitter: "https://twitter.com/",
				instagram: "https://www.instagram.com/",
				youtube: null,
				pinterest: null,
				hide_vendor_email: 0,
				hide_vendor_phone: 0,
				vendor_id: 16,
				created_by_id: "1",
				status: 1,
				is_approved: 1,
				created_at: "2023-09-18T09:14:34.000000Z",
				updated_at: "2023-09-22T08:52:46.000000Z",
				deleted_at: null,
				orders_count: 4,
				reviews_count: 0,
				products_count: 27,
				product_images: [
					"/images/data/product.png",
					"/images/data/product.png",
					"/images/data/product.png"
				],
				order_amount: 156.58,
				rating_count: null,
				store_logo: {
					id: 1452,
					collection_name: "attachment",
					name: "04",
					file_name: "04.png",
					mime_type: "image/png",
					disk: "public",
					conversions_disk: "public",
					size: "13034",
					created_by_id: "1",
					created_at: "2023-09-22T08:52:17.000000Z",
					updated_at: "2023-09-22T08:52:17.000000Z",
					original_url: "/images/data/product.png"
				},
				store_cover: null,
				vendor: {
					id: 16,
					name: "Lorlie Gilmore",
					email: "lorlie.gilmore@example.com",
					country_code: "1",
					phone: 6305875463,
					profile_image_id: null,
					system_reserve: "0",
					status: 1,
					created_by_id: 1,
					email_verified_at: null,
					created_at: "2023-09-18T09:14:34.000000Z",
					updated_at: "2023-09-18T09:14:34.000000Z",
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
							model_id: "16",
							role_id: "3",
							model_type: "App\\Models\\User"
						}
					},
					point: null,
					wallet: null,
					address: [
					],
					vendor_wallet: {
						id: 15,
						vendor_id: 16,
						balance: 0,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-18T09:14:34.000000Z",
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
					id: 3759,
					name: "Colorado",
					country_id: "840",
					created_at: "2023-08-24T08:16:43.000000Z",
					updated_at: "2023-08-24T08:16:43.000000Z"
				},
				reviews: [
				]
			},
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
					original_url: "/images/data/avatar.png"
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
			},
			products: [
				{
					id: 178,
					name: "Men Gym Co-Ord Set",
					short_description: "The breathable fabric used in our Men Gym Co-Ord Set allows for proper air circulation, keeping you cool and dry even during intense workouts.",
					description: "<p><strong>Unleash Your Fitness Potential with Our Men's Gym Co-Ord Set</strong></p><p>Embarking on a fitness journey demands the right companion, and our Men's Gym Co-Ord Set is tailored to be just that. Crafted with your comfort at its core, this set is a testament to the perfect blend of style and functionality. Picture yourself in a gym ensemble that not only complements your active lifestyle but enhances your workout experience.</p><p>When we talk about the essence of this gym co-ord set, it starts with the fabric. We've meticulously chosen a high-quality breathable material that prioritizes air circulation. Ensuring you stay cool and dry during your most intense workouts, this fabric is designed to keep you focused on your fitness goals rather than discomfort.</p><p>In the realm of fitness, style isn't just an accessory – it's an expression. The sleek and modern design of this gym co-ord set is a testament to professionalism in every stitch. It's not just gym wear; it's a statement of your dedication to an active and healthy life. The set includes both a top and shorts, providing a coordinated look that exudes confidence.</p><p>Flexibility and freedom of movement are non-negotiable when it comes to workout wear. Our Men's Gym Co-Ord Set offers just that, allowing you to push your limits, stretch, and strive for more. The fabric is thoughtfully chosen to ensure not only comfort but also durability. It's a set that can endure the most rigorous workout sessions, giving you the confidence that your gym wear is up to the challenge.</p><p>Who is this set for? Well, everyone on the fitness spectrum. Whether you're a gym enthusiast or a casual fitness buff, this co-ord set is designed for all. Weightlifting, cardio, yoga, or any other fitness activity you're into – this set has got your back, quite literally. Its versatility makes it a must-have addition to your workout wardrobe, a go-to for any exercise regimen.</p><p>Investing in your fitness journey is investing in yourself. Elevate your workout experience with our Men's Gym Co-Ord Set, where comfort meets style, and functionality embraces fashion. Make a statement, take charge of your fitness goals, and let this exceptional gym co-ord set be your trusted ally. It's time to break a sweat and look great doing it!</p>",
					type: "simple",
					unit: "1 Item",
					weight: 178,
					quantity: 0,
					price: 14,
					sale_price: 12.6,
					discount: 10,
					is_featured: 0,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 1,
					is_return: 1,
					is_trending: 1,
					is_approved: 1,
					sale_starts_at: "2023-9-1",
					sale_expired_at: "2025-10-30",
					sku: "FAS22",
					is_random_related_products: 1,
					stock_status: "out_of_stock",
					meta_title: "Men Gym Co-Ord Set",
					meta_description: "The breathable fabric used in our Men Gym Co-Ord Set allows for proper air circulation, keeping you cool and dry even during intense workouts.",
					product_thumbnail_id: 1263,
					product_meta_image_id: "1263",
					size_chart_image_id: 1437,
					estimated_delivery_text: "Expect your delivery between 5 and 7 days",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available.",
					safe_checkout: 1,
					secure_checkout: 0,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "men-gym-co-ord-set",
					status: 1,
					store_id: 15,
					created_by_id: "19",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T12:42:13.000000Z",
					updated_at: "2023-09-30T04:24:25.000000Z",
					orders_count: 2,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 136.22,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						160,
						153,
						161,
						158,
						167,
						168
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 178,
						variation_id: null,
						quantity: 1,
						single_price: 12,
						shipping_cost: 0,
						subtotal: 12.6,
						is_refunded: 1
					},
					product_thumbnail: {
						id: 1263,
						collection_name: "attachment",
						name: "gymmen_01-1",
						file_name: "gymmen_01-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "17910",
						created_by_id: "1",
						created_at: "2023-09-18T12:29:48.000000Z",
						updated_at: "2023-09-18T12:29:48.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1263,
							collection_name: "attachment",
							name: "gymmen_01-1",
							file_name: "gymmen_01-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "17910",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1264,
							collection_name: "attachment",
							name: "gymmen_02",
							file_name: "gymmen_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "21918",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1265,
							collection_name: "attachment",
							name: "gymmen_03",
							file_name: "gymmen_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "10917",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1262,
							collection_name: "attachment",
							name: "gymmen_01",
							file_name: "gymmen_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "27922",
							created_by_id: "1",
							created_at: "2023-09-18T12:29:48.000000Z",
							updated_at: "2023-09-18T12:29:48.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1263,
						collection_name: "attachment",
						name: "gymmen_01-1",
						file_name: "gymmen_01-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "17910",
						created_by_id: "1",
						created_at: "2023-09-18T12:29:48.000000Z",
						updated_at: "2023-09-18T12:29:48.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "178",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "178",
								tag_id: "11"
							}
						}
					],
					attributes: [
					],
					variations: [
					]
				},
				{
					id: 175,
					name: "Long Sleeve Top",
					short_description: "Available in a range of colors, customers can choose their preferred shade to match their personal style and preferences.",
					description: "<p>A wardrobe staple and a must-have addition for any fashion enthusiast, our Long Sleeve Top is designed to elevate your everyday style with effortless grace. This classic piece embodies timeless elegance and versatility, crafted with meticulous attention to detail and superior quality that ensures both comfort and style.</p><p>Crafted from a soft and breathable fabric, this top promises a cozy fit while keeping you chic throughout the day. The careful selection of materials ensures a luxurious feel against your skin, making it ideal for extended wear without compromising on style.</p><p>What sets our Long Sleeve Top apart is the wide array of colors available, allowing you to choose the perfect shade that aligns with your personal style and preferences. Whether you prefer a bold, eye-catching hue or a more understated, classic tone, our collection caters to all tastes and occasions.</p><p>The beauty of this top lies in its adaptability; it's a garment that seamlessly transitions from casual to sophisticated. Pair it with your favorite pair of jeans for a laid-back, yet fashionable look, or opt for tailored pants to exude an air of refinement. The possibilities are as endless as your imagination.</p><p>The slim fit of the Long Sleeve Top flatters your figure, accentuating your feminine curves in all the right places. This tailored fit not only provides a stylish silhouette but also boosts your confidence wherever you go. The long sleeves offer additional coverage and warmth, making it a perfect choice for cooler seasons, ensuring this piece remains a year-round wardrobe essential.</p><p>Investing in our Long Sleeve Top means investing in a blend of comfort, style, and versatility. This garment effortlessly accommodates various occasions, whether it's a day at the office, a casual outing with friends, or simply running errands. The timeless design ensures that you'll never be without the perfect attire for any event.</p><p>Don't miss the opportunity to embrace the elegance and versatility of our Long Sleeve Top. Elevate your style and leave a lasting impression wherever you choose to wear it. Order now and experience the epitome of fashion that complements your lifestyle and stands the test of time. Make our Long Sleeve Top your go-to choice and revel in the confidence and sophistication it brings to your wardrobe.</p>",
					type: "simple",
					unit: "1 Item",
					weight: 120,
					quantity: 136,
					price: 12,
					sale_price: 9.72,
					discount: 19,
					is_featured: 0,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 0,
					is_trending: 1,
					is_approved: 0,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS20",
					is_random_related_products: 0,
					stock_status: "in_stock",
					meta_title: "Long Sleeve Top",
					meta_description: "Available in a range of colors, customers can choose their preferred shade to match their personal style and preferences.",
					product_thumbnail_id: 1224,
					product_meta_image_id: "1224",
					size_chart_image_id: null,
					estimated_delivery_text: null,
					return_policy_text: null,
					safe_checkout: 1,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "long-sleeve-top",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T12:11:42.000000Z",
					updated_at: "2023-09-30T11:40:55.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 175,
						variation_id: null,
						quantity: 1,
						single_price: 9,
						shipping_cost: 0,
						subtotal: 9.72,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1224,
						collection_name: "attachment",
						name: "shortstishirt_02",
						file_name: "shortstishirt_02.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25601",
						created_by_id: "1",
						created_at: "2023-09-18T12:06:25.000000Z",
						updated_at: "2023-09-18T12:06:25.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1223,
							collection_name: "attachment",
							name: "shortstishirt_01",
							file_name: "shortstishirt_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "37440",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1224,
							collection_name: "attachment",
							name: "shortstishirt_02",
							file_name: "shortstishirt_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "25601",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1225,
							collection_name: "attachment",
							name: "shortstishirt_03",
							file_name: "shortstishirt_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "23253",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1226,
							collection_name: "attachment",
							name: "shortstishirt_04",
							file_name: "shortstishirt_04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "50990",
							created_by_id: "1",
							created_at: "2023-09-18T12:06:25.000000Z",
							updated_at: "2023-09-18T12:06:25.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1224,
						collection_name: "attachment",
						name: "shortstishirt_02",
						file_name: "shortstishirt_02.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25601",
						created_by_id: "1",
						created_at: "2023-09-18T12:06:25.000000Z",
						updated_at: "2023-09-18T12:06:25.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: null,
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "175",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "175",
								tag_id: "11"
							}
						}
					],
					attributes: [
					],
					variations: [
					]
				},
				{
					id: 177,
					name: "Women Polyester Activewear",
					short_description: "Designed to keep you dry and comfortable during workouts, our activewear features moisture-wicking technology that wicks away sweat.",
					description: "<p>Embarking on a fitness journey requires more than just determination—it demands the right gear that understands and enhances your every move. We present to you the epitome of fitness companions: our Women's Polyester Activewear. Meticulously crafted and designed with your comfort in mind, this activewear is set to revolutionize your workout experience.</p><p>Imagine activewear that works as hard as you do, effortlessly adapting to the rigors of your intense workout sessions. Our activewear boasts cutting-edge moisture-wicking technology that efficiently whisks away sweat, ensuring you stay dry and comfortable throughout your training. Say goodbye to distractions caused by sticky and uncomfortable clothes. Our activewear offers optimum breathability and rapid-drying properties, so you can focus on achieving your fitness goals without hindrance.</p><p>Yet, functionality is just one aspect of our activewear's brilliance. Style takes center stage with a sleek and fashionable design that's bound to turn heads at the gym. We understand that looking good is feeling good, and our activewear, made from premium-quality polyester fabric, ensures a perfect fit that accentuates your figure. Boost your confidence and motivation as you adorn yourself in activewear that not only performs outstandingly but also complements your style effortlessly.</p><p>Whether you're pounding the treadmill, striking poses in yoga, or engaging in high-intensity workouts, our activewear is the reliable partner you can trust. Offering maximum flexibility and freedom of movement, it lets you push your limits and reach new heights in your fitness journey. Feel the ease of unrestricted motion as you conquer your workouts and strive towards a fitter, healthier you.</p><p>Investing in our Women's Polyester Activewear today will redefine your workout routine. Experience the difference it brings to your performance, making you feel unstoppable in your pursuit of fitness goals. Elevate your workout, set new standards, and conquer your fitness journey like never before. Embrace the power of the ultimate fitness companion—our Women's Polyester Activewear.</p>",
					type: "simple",
					unit: "1 Item",
					weight: 167,
					quantity: 154,
					price: 26,
					sale_price: 22.36,
					discount: 14,
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
					sku: "FAS21",
					is_random_related_products: 0,
					stock_status: "in_stock",
					meta_title: "Women Polyester Activewear",
					meta_description: "Designed to keep you dry and comfortable during workouts, our activewear features moisture-wicking technology that wicks away sweat.",
					product_thumbnail_id: 1236,
					product_meta_image_id: "1236",
					size_chart_image_id: null,
					estimated_delivery_text: null,
					return_policy_text: null,
					safe_checkout: 1,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "women-polyester-activewear",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T12:29:12.000000Z",
					updated_at: "2023-09-30T05:54:59.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 177,
						variation_id: null,
						quantity: 1,
						single_price: 22,
						shipping_cost: 0,
						subtotal: 22.36,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1236,
						collection_name: "attachment",
						name: "gymshorts_coffee-2",
						file_name: "gymshorts_coffee-2.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25096",
						created_by_id: "1",
						created_at: "2023-09-18T12:14:21.000000Z",
						updated_at: "2023-09-18T12:14:21.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1234,
							collection_name: "attachment",
							name: "gymshorts_green-1",
							file_name: "gymshorts_green-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "30725",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1236,
							collection_name: "attachment",
							name: "gymshorts_coffee-2",
							file_name: "gymshorts_coffee-2.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "25096",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1235,
							collection_name: "attachment",
							name: "gymshorts_green-2",
							file_name: "gymshorts_green-2.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "34926",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1237,
							collection_name: "attachment",
							name: "gymshorts_green",
							file_name: "gymshorts_green.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "36031",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:21.000000Z",
							updated_at: "2023-09-18T12:14:21.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1228,
							collection_name: "attachment",
							name: "gymshorts_01",
							file_name: "gymshorts_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "28869",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1229,
							collection_name: "attachment",
							name: "gymshorts_02",
							file_name: "gymshorts_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "32136",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1230,
							collection_name: "attachment",
							name: "gymshorts_03",
							file_name: "gymshorts_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "31992",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1231,
							collection_name: "attachment",
							name: "gymshorts_coffee",
							file_name: "gymshorts_coffee.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "27519",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1232,
							collection_name: "attachment",
							name: "gymshorts_coffee-1",
							file_name: "gymshorts_coffee-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "26161",
							created_by_id: "1",
							created_at: "2023-09-18T12:14:11.000000Z",
							updated_at: "2023-09-18T12:14:11.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1236,
						collection_name: "attachment",
						name: "gymshorts_coffee-2",
						file_name: "gymshorts_coffee-2.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "25096",
						created_by_id: "1",
						created_at: "2023-09-18T12:14:21.000000Z",
						updated_at: "2023-09-18T12:14:21.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: null,
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "177",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "177",
								tag_id: "11"
							}
						}
					],
					attributes: [
					],
					variations: [
					]
				},
				{
					id: 160,
					name: "Solid Hooded Sweatshirt",
					short_description: "Offering a combination of quality, style, and affordability, the Solid Hooded Sweatshirt provides customers with great value for their money.",
					description: "<p>Introducing our Solid Hooded Sweatshirt, the perfect blend of style and comfort for everyone! Whether you're heading out for a casual day or hitting the gym, this trendy sweatshirt is a must-have addition to your wardrobe.</p><p>Crafted with high-quality materials, this sweatshirt offers superior durability and long-lasting softness. The hood provides extra protection against the elements, while the relaxed fit ensures freedom of movement. Our Solid Hooded Sweatshirt is designed to keep you cozy and stylish all day long.</p><p>Versatility is key with this sweatshirt. Dress it up with a pair of jeans and sneakers for a laid-back weekend look or layer it under a jacket for added warmth during those chilly evenings. The timeless design and solid color make it easy to match with any outfit, giving you endless styling options.</p><p>We understand the importance of quality, which is why we've paid attention to every detail. From the reinforced stitching to the sturdy zipper, every aspect of this sweatshirt has been carefully considered for your utmost satisfaction. Rest assured, our Solid Hooded Sweatshirt is built to withstand the test of time.</p><p>Whether you're a fashion enthusiast or simply looking for a comfortable and stylish everyday essential, our Solid Hooded Sweatshirt is the perfect choice. Join countless satisfied customers and upgrade your wardrobe with this versatile and durable sweatshirt.</p><p>Don't miss out on this fantastic opportunity to enhance your fashion game. Order your Solid Hooded Sweatshirt now and experience the perfect blend of fashion and comfort firsthand!</p>",
					type: "classified",
					unit: "1 Item",
					weight: 350,
					quantity: 21,
					price: 6,
					sale_price: 5.64,
					discount: 6,
					is_featured: 1,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 0,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS05",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Solid Hooded Sweatshirt",
					meta_description: "Offering a combination of quality, style, and affordability, the Solid Hooded Sweatshirt provides customers with great value for their money.",
					product_thumbnail_id: 1267,
					product_meta_image_id: "1267",
					size_chart_image_id: 1437,
					estimated_delivery_text: "Delivery is expected within 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "solid-hooded-sweatshirt",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:06:38.000000Z",
					updated_at: "2023-09-20T08:12:06.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						167,
						174,
						157,
						158,
						163,
						154
					],
					cross_sell_products: [
						178,
						177,
						175
					],
					pivot: {
						order_id: "28",
						product_id: 160,
						variation_id: 6,
						quantity: 1,
						single_price: 5,
						shipping_cost: 0,
						subtotal: 5.64,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1267,
						collection_name: "attachment",
						name: "Hoodies_01",
						file_name: "Hoodies_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "22782",
						created_by_id: "1",
						created_at: "2023-09-18T12:32:18.000000Z",
						updated_at: "2023-09-18T12:32:18.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1267,
							collection_name: "attachment",
							name: "Hoodies_01",
							file_name: "Hoodies_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "22782",
							created_by_id: "1",
							created_at: "2023-09-18T12:32:18.000000Z",
							updated_at: "2023-09-18T12:32:18.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1268,
							collection_name: "attachment",
							name: "Hoodies_02",
							file_name: "Hoodies_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "20862",
							created_by_id: "1",
							created_at: "2023-09-18T12:32:18.000000Z",
							updated_at: "2023-09-18T12:32:18.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1267,
						collection_name: "attachment",
						name: "Hoodies_01",
						file_name: "Hoodies_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "22782",
						created_by_id: "1",
						created_at: "2023-09-18T12:32:18.000000Z",
						updated_at: "2023-09-18T12:32:18.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "160",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "160",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 7,
							name: "Size",
							style: "circle",
							slug: "size",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T07:58:34.000000Z",
							updated_at: "2023-09-20T07:58:34.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "160",
								attribute_id: "7"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 8,
									value: "XXL",
									slug: "xxl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 6,
							name: "Solid Hooded Sweatshirt",
							price: 6,
							quantity: 19,
							stock_status: "in_stock",
							sale_price: 5.64,
							discount: 6,
							sku: "FASS05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-29T13:42:56.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "6",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 7,
							name: "Solid Hooded Sweatshirt",
							price: 7,
							quantity: 21,
							stock_status: "in_stock",
							sale_price: 6.65,
							discount: 5,
							sku: "FAM05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-20T08:05:36.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "7",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 8,
							name: "Solid Hooded Sweatshirt",
							price: 8,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 8,
							discount: 0,
							sku: "FASL05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-20T08:05:36.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "8",
										attribute_value_id: "6"
									}
								}
							]
						},
						{
							id: 9,
							name: "Solid Hooded Sweatshirt",
							price: 9,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 9,
							discount: 0,
							sku: "FASXL05",
							status: 1,
							variation_options: null,
							variation_image_id: 1268,
							product_id: 160,
							deleted_at: null,
							created_at: "2023-09-20T08:05:36.000000Z",
							updated_at: "2023-09-20T08:05:36.000000Z",
							variation_image: {
								id: 1268,
								collection_name: "attachment",
								name: "Hoodies_02",
								file_name: "Hoodies_02.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "20862",
								created_by_id: "1",
								created_at: "2023-09-18T12:32:18.000000Z",
								updated_at: "2023-09-18T12:32:18.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "9",
										attribute_value_id: "7"
									}
								}
							]
						}
					]
				},
				{
					id: 168,
					name: "Women Flared Jeans",
					short_description: "The flared cut of these jeans adds a timeless and retro-inspired touch to any outfit, making them a wardrobe staple.",
					description: "<p>A timeless, must-have addition to every woman's wardrobe. The resurgence of the retro-inspired flared cut has taken the fashion world by storm, and these jeans effortlessly embody that classic yet contemporary vibe. They hold the power to elevate any outfit, giving you a stylish edge that never falls out of favor.</p><p>Craftsmanship and attention to detail lie at the heart of these flared jeans. Every stitch, every seam is meticulously designed to ensure both comfort and style. We understand that fashion isn't just about looking good; it's about feeling confident and empowered. That's why these jeans are engineered to make you look and feel your absolute best throughout the day.</p><p>One of the standout features of our Women Flared Jeans is the high-quality materials used in their construction. We believe in offering more than just a pair of jeans; we offer a durable, reliable companion for your everyday adventures. The superior quality of these materials not only guarantees longevity but also ensures a flattering fit. These jeans accentuate your curves in all the right places, allowing you to embrace your unique body shape with grace and confidence.</p><p>Whether you're gearing up for a night out on the town or aiming for a more casual, everyday look, our flared jeans effortlessly adapt to any occasion. Pair them with a chic blouse and heels for a sophisticated ensemble or dress them down with a cozy sweater and sneakers for a laid-back vibe. The versatility of these jeans knows no bounds, making them an essential in every modern woman's closet.</p><p>In a world where fashion is ever-changing and trends come and go, our Women Flared Jeans stand as a testament to timeless style. This isn't just a pair of jeans; it's an invitation to upgrade your fashion game and embrace your inner fashionista with confidence. The flared silhouette takes you back to an era of glamour and rebellion, while seamlessly fitting into the contemporary narrative.</p><p>So, why wait? Elevate your style, celebrate your individuality, and step into the world with a newfound confidence. Our Women Flared Jeans are more than a fashion statement; they're an embodiment of the strong, stylish, and empowered woman you are. Experience the comfort, revel in the style, and make a lasting impression wherever you go. Upgrade your wardrobe, embrace the timeless appeal of flared jeans, and conquer the world with grace and panache.</p>",
					type: "classified",
					unit: "1 Item",
					weight: 200,
					quantity: 12,
					price: 19,
					sale_price: 17.67,
					discount: 7,
					is_featured: 0,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 1,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS17",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Women Flared Jeans",
					meta_description: "The flared cut of these jeans adds a timeless and retro-inspired touch to any outfit, making them a wardrobe staple.",
					product_thumbnail_id: 1321,
					product_meta_image_id: "1321",
					size_chart_image_id: 1445,
					estimated_delivery_text: "The delivery time frame is 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available.",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "women-flared-jeans",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:27:35.000000Z",
					updated_at: "2023-09-21T04:12:30.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						162,
						176,
						175,
						177,
						156,
						152
					],
					cross_sell_products: [
					],
					pivot: {
						order_id: "28",
						product_id: 168,
						variation_id: 23,
						quantity: 1,
						single_price: 18,
						shipping_cost: 0,
						subtotal: 18.6,
						is_refunded: 0
					},
					product_thumbnail: {
						id: 1321,
						collection_name: "attachment",
						name: "Pent_01",
						file_name: "Pent_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "64230",
						created_by_id: "1",
						created_at: "2023-09-19T02:58:03.000000Z",
						updated_at: "2023-09-19T02:58:03.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1321,
							collection_name: "attachment",
							name: "Pent_01",
							file_name: "Pent_01.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "64230",
							created_by_id: "1",
							created_at: "2023-09-19T02:58:03.000000Z",
							updated_at: "2023-09-19T02:58:03.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1322,
							collection_name: "attachment",
							name: "Pent_02",
							file_name: "Pent_02.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "60456",
							created_by_id: "1",
							created_at: "2023-09-19T02:58:03.000000Z",
							updated_at: "2023-09-19T02:58:03.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1323,
							collection_name: "attachment",
							name: "Pent_03",
							file_name: "Pent_03.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "57027",
							created_by_id: "1",
							created_at: "2023-09-19T02:58:03.000000Z",
							updated_at: "2023-09-19T02:58:03.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1321,
						collection_name: "attachment",
						name: "Pent_01",
						file_name: "Pent_01.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "64230",
						created_by_id: "1",
						created_at: "2023-09-19T02:58:03.000000Z",
						updated_at: "2023-09-19T02:58:03.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1445,
						collection_name: "attachment",
						name: "sizechart_jeans",
						file_name: "sizechart_jeans.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "145889",
						created_by_id: "1",
						created_at: "2023-09-21T04:11:53.000000Z",
						updated_at: "2023-09-21T04:11:53.000000Z",
						original_url: "/images/data/sizechart-jeans.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "168",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "168",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 9,
							name: "Waist",
							style: "radio",
							slug: "waist",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T09:15:30.000000Z",
							updated_at: "2023-09-20T09:15:30.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "168",
								attribute_id: "9"
							},
							attribute_values: [
								{
									id: 12,
									value: "28",
									slug: "28",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								},
								{
									id: 13,
									value: "30",
									slug: "30",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								},
								{
									id: 14,
									value: "32",
									slug: "32",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								},
								{
									id: 15,
									value: "34",
									slug: "34",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 22,
							name: "Women Flared Jeans",
							price: 19,
							quantity: 12,
							stock_status: "in_stock",
							sale_price: 17.67,
							discount: 7,
							sku: "FAS2817",
							status: 1,
							variation_options: null,
							variation_image_id: 1321,
							product_id: 168,
							deleted_at: null,
							created_at: "2023-09-20T09:43:03.000000Z",
							updated_at: "2023-09-20T09:43:03.000000Z",
							variation_image: {
								id: 1321,
								collection_name: "attachment",
								name: "Pent_01",
								file_name: "Pent_01.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "64230",
								created_by_id: "1",
								created_at: "2023-09-19T02:58:03.000000Z",
								updated_at: "2023-09-19T02:58:03.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 12,
									value: "28",
									slug: "28",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "22",
										attribute_value_id: "12"
									}
								}
							]
						},
						{
							id: 23,
							name: "Women Flared Jeans",
							price: 20,
							quantity: 4,
							stock_status: "in_stock",
							sale_price: 18.6,
							discount: 7,
							sku: "FAS3017",
							status: 1,
							variation_options: null,
							variation_image_id: 1321,
							product_id: 168,
							deleted_at: null,
							created_at: "2023-09-20T09:43:03.000000Z",
							updated_at: "2023-09-29T13:42:56.000000Z",
							variation_image: {
								id: 1321,
								collection_name: "attachment",
								name: "Pent_01",
								file_name: "Pent_01.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "64230",
								created_by_id: "1",
								created_at: "2023-09-19T02:58:03.000000Z",
								updated_at: "2023-09-19T02:58:03.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 13,
									value: "30",
									slug: "30",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "23",
										attribute_value_id: "13"
									}
								}
							]
						},
						{
							id: 24,
							name: "Women Flared Jeans",
							price: 21,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 19.95,
							discount: 5,
							sku: "FAS3217",
							status: 1,
							variation_options: null,
							variation_image_id: 1321,
							product_id: 168,
							deleted_at: null,
							created_at: "2023-09-20T09:43:03.000000Z",
							updated_at: "2023-09-20T09:43:03.000000Z",
							variation_image: {
								id: 1321,
								collection_name: "attachment",
								name: "Pent_01",
								file_name: "Pent_01.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "64230",
								created_by_id: "1",
								created_at: "2023-09-19T02:58:03.000000Z",
								updated_at: "2023-09-19T02:58:03.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 14,
									value: "32",
									slug: "32",
									hex_color: null,
									attribute_id: "9",
									created_by_id: "1",
									created_at: "2023-09-20T09:15:30.000000Z",
									updated_at: "2023-09-20T09:15:30.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "24",
										attribute_value_id: "14"
									}
								}
							]
						}
					]
				},
				{
					id: 164,
					name: "Premium Blazer",
					short_description: "With a focus on comfort, the Premium Blazer is designed to provide a relaxed fit and ease of movement, making it a pleasure to wear for extended periods.",
					description: "<p>Introducing our Premium Blazer – the epitome of sophistication and style. Crafted with utmost attention to detail, this fashion-forward piece is perfect for men and women who value impeccable attire.</p><p>Made from high-quality materials, our Premium Blazer offers a comfortable fit without compromising on elegance. Its tailored design guarantees a flattering silhouette, enhancing your confidence and adding a touch of class to any outfit.</p><p>Whether you're attending a formal event, a business meeting, or simply want to upgrade your everyday wardrobe, our Premium Blazer is the ultimate choice. Its timeless appeal and versatility make it suitable for any occasion, effortlessly elevating your style game.</p><p>Designed to impress, this blazer features exquisite craftsmanship and meticulous stitching, showcasing our commitment to delivering excellence. It is equipped with functional pockets, allowing you to carry your essentials with ease, while the smooth lining ensures a luxurious feel against your skin.</p><p>Rest assured, our Premium Blazer is built to last. Its durable construction guarantees long-lasting wear, making it a smart investment for your wardrobe. With proper care, this blazer will remain a staple in your collection for years to come.</p><p>Available in a range of classic colors, our Premium Blazer effortlessly complements any wardrobe, giving you endless styling options. Pair it with tailored pants for a polished business look, or dress it down with jeans for a more casual yet refined ensemble.</p><p>Order your Premium Blazer today and experience the perfect blend of style, sophistication, and comfort. Elevate your fashion game and make a lasting impression wherever you go. Invest in quality, invest in our Premium Blazer.</p>",
					type: "classified",
					unit: "1 Item",
					weight: 450,
					quantity: 17,
					price: 11,
					sale_price: 9.9,
					discount: 10,
					is_featured: 1,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 0,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS08",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Premium Blazer",
					meta_description: "With a focus on comfort, the Premium Blazer is designed to provide a relaxed fit and ease of movement, making it a pleasure to wear for extended periods.",
					product_thumbnail_id: 1247,
					product_meta_image_id: "1247",
					size_chart_image_id: 1437,
					estimated_delivery_text: "The delivery time frame is 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available.",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "premium-blazer",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:18:56.000000Z",
					updated_at: "2023-09-20T09:30:18.000000Z",
					orders_count: 1,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 96.24,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						170,
						155,
						160,
						176,
						152,
						174
					],
					cross_sell_products: [
						171,
						170,
						168
					],
					pivot: {
						order_id: "28",
						product_id: 164,
						variation_id: 17,
						quantity: 1,
						single_price: 11,
						shipping_cost: 0,
						subtotal: 11.44,
						is_refunded: 1
					},
					product_thumbnail: {
						id: 1247,
						collection_name: "attachment",
						name: "CollarTshirt_Green-1",
						file_name: "CollarTshirt_Green-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "61889",
						created_by_id: "1",
						created_at: "2023-09-18T12:23:44.000000Z",
						updated_at: "2023-09-18T12:23:44.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1246,
							collection_name: "attachment",
							name: "CollarTshirt_Blue-1",
							file_name: "CollarTshirt_Blue-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "61235",
							created_by_id: "1",
							created_at: "2023-09-18T12:23:44.000000Z",
							updated_at: "2023-09-18T12:23:44.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1247,
							collection_name: "attachment",
							name: "CollarTshirt_Green-1",
							file_name: "CollarTshirt_Green-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "61889",
							created_by_id: "1",
							created_at: "2023-09-18T12:23:44.000000Z",
							updated_at: "2023-09-18T12:23:44.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1248,
							collection_name: "attachment",
							name: "CollarTshirt_Lowender-1",
							file_name: "CollarTshirt_Lowender-1.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "46320",
							created_by_id: "1",
							created_at: "2023-09-18T12:23:44.000000Z",
							updated_at: "2023-09-18T12:23:44.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1247,
						collection_name: "attachment",
						name: "CollarTshirt_Green-1",
						file_name: "CollarTshirt_Green-1.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "61889",
						created_by_id: "1",
						created_at: "2023-09-18T12:23:44.000000Z",
						updated_at: "2023-09-18T12:23:44.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "164",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "164",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 7,
							name: "Size",
							style: "circle",
							slug: "size",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T07:58:34.000000Z",
							updated_at: "2023-09-20T07:58:34.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "164",
								attribute_id: "7"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 8,
									value: "XXL",
									slug: "xxl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								}
							]
						},
						{
							id: 10,
							name: "Color",
							style: "color",
							slug: "color",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T09:19:49.000000Z",
							updated_at: "2023-09-20T09:19:49.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "164",
								attribute_id: "10"
							},
							attribute_values: [
								{
									id: 16,
									value: "Red",
									slug: "red",
									hex_color: "#d03535",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 17,
									value: "Black",
									slug: "black",
									hex_color: "#000000",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 18,
									value: "Purple",
									slug: "purple",
									hex_color: "#9b809e",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 19,
									value: "White",
									slug: "white-2",
									hex_color: "#d6d6d6",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 20,
									value: "Green",
									slug: "green",
									hex_color: "#259889",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 21,
									value: "Yellow",
									slug: "yellow",
									hex_color: "#e2d62c",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 22,
									value: "Blue",
									slug: "blue",
									hex_color: "#5ea1e8",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								},
								{
									id: 23,
									value: "Orange",
									slug: "orange",
									hex_color: "#f09124",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 16,
							name: "Premium Blazer (Green/S)",
							price: 12,
							quantity: 6,
							stock_status: "in_stock",
							sale_price: 11.4,
							discount: 5,
							sku: "FASGS08",
							status: 1,
							variation_options: null,
							variation_image_id: 1246,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1246,
								collection_name: "attachment",
								name: "CollarTshirt_Blue-1",
								file_name: "CollarTshirt_Blue-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61235",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 20,
									value: "Green",
									slug: "green",
									hex_color: "#259889",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "16",
										attribute_value_id: "20"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "16",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 17,
							name: "Premium Blazer (Green/M)",
							price: 13,
							quantity: 16,
							stock_status: "in_stock",
							sale_price: 11.44,
							discount: 12,
							sku: "FASGM08",
							status: 1,
							variation_options: null,
							variation_image_id: 1246,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-29T13:42:56.000000Z",
							variation_image: {
								id: 1246,
								collection_name: "attachment",
								name: "CollarTshirt_Blue-1",
								file_name: "CollarTshirt_Blue-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61235",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 20,
									value: "Green",
									slug: "green",
									hex_color: "#259889",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "17",
										attribute_value_id: "20"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "17",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 18,
							name: "Premium Blazer (Purple/S)",
							price: 11,
							quantity: 8,
							stock_status: "in_stock",
							sale_price: 9.9,
							discount: 10,
							sku: "FASPS08",
							status: 1,
							variation_options: null,
							variation_image_id: 1247,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1247,
								collection_name: "attachment",
								name: "CollarTshirt_Green-1",
								file_name: "CollarTshirt_Green-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61889",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 18,
									value: "Purple",
									slug: "purple",
									hex_color: "#9b809e",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "18",
										attribute_value_id: "18"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "18",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 19,
							name: "Premium Blazer (Purple/M)",
							price: 12,
							quantity: 1,
							stock_status: "in_stock",
							sale_price: 10.8,
							discount: 10,
							sku: "FASPM08",
							status: 1,
							variation_options: null,
							variation_image_id: 1247,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1247,
								collection_name: "attachment",
								name: "CollarTshirt_Green-1",
								file_name: "CollarTshirt_Green-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "61889",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 18,
									value: "Purple",
									slug: "purple",
									hex_color: "#9b809e",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "19",
										attribute_value_id: "18"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "19",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 20,
							name: "Premium Blazer (White/S)",
							price: 12,
							quantity: 14,
							stock_status: "in_stock",
							sale_price: 11.28,
							discount: 6,
							sku: "FASWS08",
							status: 1,
							variation_options: null,
							variation_image_id: 1248,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1248,
								collection_name: "attachment",
								name: "CollarTshirt_Lowender-1",
								file_name: "CollarTshirt_Lowender-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "46320",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 19,
									value: "White",
									slug: "white-2",
									hex_color: "#d6d6d6",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "20",
										attribute_value_id: "19"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "20",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 21,
							name: "Premium Blazer (White/M)",
							price: 15,
							quantity: 1,
							stock_status: "in_stock",
							sale_price: 12.75,
							discount: 15,
							sku: "FASWM08",
							status: 1,
							variation_options: null,
							variation_image_id: 1248,
							product_id: 164,
							deleted_at: null,
							created_at: "2023-09-20T09:30:18.000000Z",
							updated_at: "2023-09-20T09:30:18.000000Z",
							variation_image: {
								id: 1248,
								collection_name: "attachment",
								name: "CollarTshirt_Lowender-1",
								file_name: "CollarTshirt_Lowender-1.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "46320",
								created_by_id: "1",
								created_at: "2023-09-18T12:23:44.000000Z",
								updated_at: "2023-09-18T12:23:44.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 19,
									value: "White",
									slug: "white-2",
									hex_color: "#d6d6d6",
									attribute_id: "10",
									created_by_id: "1",
									created_at: "2023-09-20T09:19:49.000000Z",
									updated_at: "2023-09-20T09:19:49.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "21",
										attribute_value_id: "19"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "21",
										attribute_value_id: "5"
									}
								}
							]
						}
					]
				},
				{
					id: 161,
					name: "Relaxed Fit Hoodie",
					short_description: "The relaxed fit and versatile design make our hoodie a perfect layering piece for any outfit, adding a touch of warmth and style.",
					description: "<p>Introducing our latest addition to the world of fashion and comfort: the Relaxed Fit Hoodie. This versatile piece is designed with the modern individual in mind, offering a perfect blend of style and relaxation. Crafted with utmost precision, this hoodie promises to be your go-to companion for any occasion.</p><p>Our Relaxed Fit Hoodie boasts a thoughtfully chosen fabric that embraces your body with a gentle touch, providing an unparalleled level of comfort. The relaxed fit ensures ease of movement, making it ideal for both lounging at home or stepping out for a casual outing. Its carefully tailored design effortlessly combines functionality and fashion, making it a must-have addition to your wardrobe.</p><p>With its versatile nature, this hoodie effortlessly complements any outfit. Whether you're pairing it with your favorite jeans for a laid-back weekend look or layering it with a trendy jacket for a more polished ensemble, this Relaxed Fit Hoodie will elevate your style game and garner compliments wherever you go.</p><p>Not only does this hoodie offer a relaxed fit, but it also features a cozy hood that adds an extra element of comfort. Perfect for those chilly mornings or evening strolls, it provides warmth and protection while exuding an effortlessly cool vibe.</p><p>In addition to its impeccable style, this hoodie is made to withstand the test of time. Its high-quality construction ensures durability, allowing you to enjoy its cozy embrace for years to come. It is also easy to care for, requiring minimal effort to keep it looking pristine.</p><p>Upgrade your wardrobe with our Relaxed Fit Hoodie and experience the perfect blend of fashion and comfort. Embrace leisure without compromising on style. Order now and join countless satisfied customers who have made this hoodie their ultimate fashion staple.</p>",
					type: "classified",
					unit: "1 Item",
					weight: 350,
					quantity: 8,
					price: 6,
					sale_price: 5.82,
					discount: 3,
					is_featured: 1,
					shipping_days: null,
					is_cod: "0",
					is_free_shipping: 0,
					is_sale_enable: 0,
					is_return: 1,
					is_trending: 0,
					is_approved: 1,
					sale_starts_at: null,
					sale_expired_at: null,
					sku: "FAS06",
					is_random_related_products: 1,
					stock_status: "in_stock",
					meta_title: "Relaxed Fit Hoodie",
					meta_description: "The relaxed fit and versatile design make our hoodie a perfect layering piece for any outfit, adding a touch of warmth and style.",
					product_thumbnail_id: 1270,
					product_meta_image_id: "1270",
					size_chart_image_id: 1437,
					estimated_delivery_text: "The delivery time frame is 5-7 days.",
					return_policy_text: "Hassle free 7, 15 and 30 days return might be available",
					safe_checkout: 0,
					secure_checkout: 1,
					social_share: 1,
					encourage_order: 1,
					encourage_view: 1,
					slug: "relaxed-fit-hoodie",
					status: 1,
					store_id: 15,
					created_by_id: "1",
					tax_id: 1,
					deleted_at: null,
					created_at: "2023-09-18T10:10:17.000000Z",
					updated_at: "2023-09-20T08:42:42.000000Z",
					orders_count: 6,
					reviews_count: 0,
					can_review: false,
					rating_count: null,
					order_amount: 777.2799999999999,
					review_ratings: [
						0,
						0,
						0,
						0,
						0
					],
					related_products: [
						154,
						156,
						168,
						169,
						158,
						113
					],
					cross_sell_products: [
						157,
						158,
						166
					],
					pivot: {
						order_id: "28",
						product_id: 161,
						variation_id: 15,
						quantity: 1,
						single_price: 9,
						shipping_cost: 0,
						subtotal: 9.4,
						is_refunded: 1
					},
					product_thumbnail: {
						id: 1270,
						collection_name: "attachment",
						name: "Hoodies_Brown",
						file_name: "Hoodies_Brown.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "42974",
						created_by_id: "1",
						created_at: "2023-09-18T12:33:04.000000Z",
						updated_at: "2023-09-18T12:33:04.000000Z",
						original_url: "/images/data/product.png"
					},
					product_galleries: [
						{
							id: 1270,
							collection_name: "attachment",
							name: "Hoodies_Brown",
							file_name: "Hoodies_Brown.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "42974",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1271,
							collection_name: "attachment",
							name: "Hoodies_Coffee",
							file_name: "Hoodies_Coffee.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "31488",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1272,
							collection_name: "attachment",
							name: "Hoodies_Lite Gray",
							file_name: "Hoodies_Lite-Gray.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "44329",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						},
						{
							id: 1273,
							collection_name: "attachment",
							name: "Hoodies_Pink",
							file_name: "Hoodies_Pink.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "33428",
							created_by_id: "1",
							created_at: "2023-09-18T12:33:04.000000Z",
							updated_at: "2023-09-18T12:33:04.000000Z",
							original_url: "/images/data/product.png"
						}
					],
					product_meta_image: {
						id: 1270,
						collection_name: "attachment",
						name: "Hoodies_Brown",
						file_name: "Hoodies_Brown.png",
						mime_type: "image/png",
						disk: "public",
						conversions_disk: "public",
						size: "42974",
						created_by_id: "1",
						created_at: "2023-09-18T12:33:04.000000Z",
						updated_at: "2023-09-18T12:33:04.000000Z",
						original_url: "/images/data/product.png"
					},
					size_chart_image: {
						id: 1437,
						collection_name: "attachment",
						name: "sizechart",
						file_name: "sizechart.jpg",
						mime_type: "image/jpeg",
						disk: "public",
						conversions_disk: "public",
						size: "258339",
						created_by_id: "1",
						created_at: "2023-09-20T08:11:56.000000Z",
						updated_at: "2023-09-20T08:11:56.000000Z",
						original_url: "/images/data/sizechart.jpg"
					},
					reviews: [
					],
					store: {
						id: 15,
						store_name: "Trendy Fashions",
						description: "Our products can be easily paired with different outfits, making them versatile accessories that can be worn for various occasions, from casual to formal events.  Despite the high quality and trendy designs, our Fashion & Accessories are priced competitively, providing customers with great value for their money.",
						slug: "trendy-fashions",
						store_logo_id: 1452,
						store_cover_id: null,
						country_id: 840,
						state_id: 3759,
						city: "Denver",
						address: "26, Starts Hollow Colony",
						pincode: "80014",
						facebook: "https://www.facebook.com/",
						twitter: "https://twitter.com/",
						instagram: "https://www.instagram.com/",
						youtube: null,
						pinterest: null,
						hide_vendor_email: 0,
						hide_vendor_phone: 0,
						vendor_id: 16,
						created_by_id: "1",
						status: 1,
						is_approved: 1,
						created_at: "2023-09-18T09:14:34.000000Z",
						updated_at: "2023-09-22T08:52:46.000000Z",
						deleted_at: null,
						orders_count: 4,
						reviews_count: 0,
						products_count: 27,
						product_images: [
							"/images/data/product.png",
							"/images/data/product.png",
							"/images/data/product.png"
						],
						order_amount: 156.58,
						rating_count: null,
						store_logo: {
							id: 1452,
							collection_name: "attachment",
							name: "04",
							file_name: "04.png",
							mime_type: "image/png",
							disk: "public",
							conversions_disk: "public",
							size: "13034",
							created_by_id: "1",
							created_at: "2023-09-22T08:52:17.000000Z",
							updated_at: "2023-09-22T08:52:17.000000Z",
							original_url: "/images/data/product.png"
						},
						store_cover: null,
						vendor: {
							id: 16,
							name: "Lorlie Gilmore",
							email: "lorlie.gilmore@example.com",
							country_code: "1",
							phone: 6305875463,
							profile_image_id: null,
							system_reserve: "0",
							status: 1,
							created_by_id: 1,
							email_verified_at: null,
							created_at: "2023-09-18T09:14:34.000000Z",
							updated_at: "2023-09-18T09:14:34.000000Z",
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
									model_id: "16",
									role_id: "3",
									model_type: "App\\Models\\User"
								}
							},
							point: null,
							wallet: null,
							address: [
							],
							vendor_wallet: {
								id: 15,
								vendor_id: 16,
								balance: 0,
								created_at: "2023-09-18T09:14:34.000000Z",
								updated_at: "2023-09-18T09:14:34.000000Z",
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
							id: 3759,
							name: "Colorado",
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
							id: 19,
							name: "Fashion",
							slug: "fashion",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							category_image_id: 382,
							category_icon_id: 314,
							status: 1,
							type: "product",
							commission_rate: null,
							parent_id: null,
							created_by_id: "1",
							created_at: "2023-08-24T09:15:24.000000Z",
							updated_at: "2023-09-01T05:29:40.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "161",
								category_id: "19"
							},
							category_image: {
								id: 382,
								collection_name: "attachment",
								name: "fashion_category",
								file_name: "fashion_category.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "8945",
								created_by_id: "1",
								created_at: "2023-09-01T05:29:34.000000Z",
								updated_at: "2023-09-01T05:29:34.000000Z",
								original_url: "/images/data/cate.png"
							},
							category_icon: {
								id: 314,
								collection_name: "attachment",
								name: "fashion",
								file_name: "fashion.svg",
								mime_type: "image/svg+xml",
								disk: "public",
								conversions_disk: "public",
								size: "2383",
								created_by_id: "1",
								created_at: "2023-08-31T10:37:59.000000Z",
								updated_at: "2023-08-31T10:37:59.000000Z",
								original_url: "/images/data/fashion.svg"
							}
						}
					],
					tags: [
						{
							id: 11,
							name: "Fashion",
							slug: "fashion",
							type: "product",
							description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
							created_by_id: "1",
							status: 1,
							created_at: "2023-08-24T09:22:24.000000Z",
							updated_at: "2023-08-24T09:22:24.000000Z",
							deleted_at: null,
							blogs_count: 0,
							products_count: 28,
							pivot: {
								product_id: "161",
								tag_id: "11"
							}
						}
					],
					attributes: [
						{
							id: 7,
							name: "Size",
							style: "circle",
							slug: "size",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T07:58:34.000000Z",
							updated_at: "2023-09-20T07:58:34.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "161",
								attribute_id: "7"
							},
							attribute_values: [
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 6,
									value: "L",
									slug: "l",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 7,
									value: "XL",
									slug: "xl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								},
								{
									id: 8,
									value: "XXL",
									slug: "xxl",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null
								}
							]
						},
						{
							id: 8,
							name: "Colour",
							style: "image",
							slug: "colour",
							status: 1,
							created_by_id: "1",
							created_at: "2023-09-20T08:32:56.000000Z",
							updated_at: "2023-09-20T08:32:56.000000Z",
							deleted_at: null,
							pivot: {
								product_id: "161",
								attribute_id: "8"
							},
							attribute_values: [
								{
									id: 9,
									value: "Burgundy",
									slug: "burgundy",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:34:39.000000Z",
									deleted_at: null
								},
								{
									id: 10,
									value: "Brown",
									slug: "brown",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null
								},
								{
									id: 11,
									value: "White",
									slug: "white",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null
								}
							]
						}
					],
					variations: [
						{
							id: 10,
							name: "Relaxed Fit Hoodie (Burgundy/S)",
							price: 7,
							quantity: 2,
							stock_status: "in_stock",
							sale_price: 6.51,
							discount: 7,
							sku: "FASBS06",
							status: 1,
							variation_options: null,
							variation_image_id: 1270,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1270,
								collection_name: "attachment",
								name: "Hoodies_Brown",
								file_name: "Hoodies_Brown.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "42974",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 9,
									value: "Burgundy",
									slug: "burgundy",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:34:39.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "10",
										attribute_value_id: "9"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "10",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 11,
							name: "Relaxed Fit Hoodie (Burgundy/M)",
							price: 8,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 7.52,
							discount: 6,
							sku: "FASBM06",
							status: 1,
							variation_options: null,
							variation_image_id: 1270,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1270,
								collection_name: "attachment",
								name: "Hoodies_Brown",
								file_name: "Hoodies_Brown.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "42974",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 9,
									value: "Burgundy",
									slug: "burgundy",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:34:39.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "11",
										attribute_value_id: "9"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "11",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 12,
							name: "Relaxed Fit Hoodie (Brown/S)",
							price: 10,
							quantity: 4,
							stock_status: "in_stock",
							sale_price: 9.5,
							discount: 5,
							sku: "FASBRS06",
							status: 1,
							variation_options: null,
							variation_image_id: 1271,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-29T13:38:01.000000Z",
							variation_image: {
								id: 1271,
								collection_name: "attachment",
								name: "Hoodies_Coffee",
								file_name: "Hoodies_Coffee.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "31488",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 10,
									value: "Brown",
									slug: "brown",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "12",
										attribute_value_id: "10"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "12",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 13,
							name: "Relaxed Fit Hoodie (Brown/M)",
							price: 12,
							quantity: 0,
							stock_status: "out_of_stock",
							sale_price: 10.8,
							discount: 10,
							sku: "FASBRM06",
							status: 1,
							variation_options: null,
							variation_image_id: 1271,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1271,
								collection_name: "attachment",
								name: "Hoodies_Coffee",
								file_name: "Hoodies_Coffee.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "31488",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 10,
									value: "Brown",
									slug: "brown",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "13",
										attribute_value_id: "10"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "13",
										attribute_value_id: "5"
									}
								}
							]
						},
						{
							id: 14,
							name: "Relaxed Fit Hoodie (White/S)",
							price: 6,
							quantity: 3,
							stock_status: "in_stock",
							sale_price: 5.82,
							discount: 3,
							sku: "FASWS06",
							status: 1,
							variation_options: null,
							variation_image_id: 1272,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-20T08:42:42.000000Z",
							variation_image: {
								id: 1272,
								collection_name: "attachment",
								name: "Hoodies_Lite Gray",
								file_name: "Hoodies_Lite-Gray.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "44329",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 11,
									value: "White",
									slug: "white",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "14",
										attribute_value_id: "11"
									}
								},
								{
									id: 4,
									value: "S",
									slug: "s",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "14",
										attribute_value_id: "4"
									}
								}
							]
						},
						{
							id: 15,
							name: "Relaxed Fit Hoodie (White/M)",
							price: 10,
							quantity: 6,
							stock_status: "in_stock",
							sale_price: 9.4,
							discount: 6,
							sku: "FASWM06",
							status: 1,
							variation_options: null,
							variation_image_id: 1272,
							product_id: 161,
							deleted_at: null,
							created_at: "2023-09-20T08:42:42.000000Z",
							updated_at: "2023-09-30T08:43:52.000000Z",
							variation_image: {
								id: 1272,
								collection_name: "attachment",
								name: "Hoodies_Lite Gray",
								file_name: "Hoodies_Lite-Gray.png",
								mime_type: "image/png",
								disk: "public",
								conversions_disk: "public",
								size: "44329",
								created_by_id: "1",
								created_at: "2023-09-18T12:33:04.000000Z",
								updated_at: "2023-09-18T12:33:04.000000Z",
								original_url: "/images/data/product.png"
							},
							attribute_values: [
								{
									id: 11,
									value: "White",
									slug: "white",
									hex_color: null,
									attribute_id: "8",
									created_by_id: "1",
									created_at: "2023-09-20T08:32:56.000000Z",
									updated_at: "2023-09-20T08:32:56.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "15",
										attribute_value_id: "11"
									}
								},
								{
									id: 5,
									value: "M",
									slug: "m",
									hex_color: null,
									attribute_id: "7",
									created_by_id: "1",
									created_at: "2023-09-20T07:58:34.000000Z",
									updated_at: "2023-09-20T07:58:34.000000Z",
									deleted_at: null,
									pivot: {
										variation_id: "15",
										attribute_value_id: "5"
									}
								}
							]
						}
					]
				}
			],
			order_status: {
				id: 6,
				name: "delivered",
				slug: "delivered",
				sequence: "6",
				created_by_id: "1",
				status: 1,
				system_reserve: "1",
				created_at: "2023-08-24T08:16:03.000000Z",
				updated_at: "2023-08-24T08:16:03.000000Z",
				deleted_at: null
			},
			sub_orders: [
			],
			billing_address: {
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
			shipping_address: {
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
		},
		refund_image: null
	}
];
var total = 3;
var current_page = 1;
var from = 1;
var last_page = null;
var per_page = 10;
var to = 3;
const refund = {
	data: data,
	total: total,
	current_page: current_page,
	from: from,
	last_page: last_page,
	per_page: per_page,
	to: to
};

const index = defineEventHandler((event) => {
  return refund;
});

export { index as default };

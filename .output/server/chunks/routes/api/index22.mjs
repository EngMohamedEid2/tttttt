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
		id: 1,
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
		id: 2,
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
		id: 3,
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
		id: 4,
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
		id: 5,
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
	}
];
var total = 5;
const review = {
	data: data,
	total: total
};

const index = defineEventHandler((event) => {
  return review;
});

export { index as default };

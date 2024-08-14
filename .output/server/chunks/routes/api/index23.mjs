import { d as defineEventHandler } from './index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

var id = 19;
var name = "John Doe";
var email = "john.customer@example.com";
var country_code = "1";
var phone = 5551855359;
var profile_image_id = "1466";
var system_reserve = "0";
var status = 1;
var created_by_id = 1;
var email_verified_at = null;
var created_at = "2023-09-29T05:50:05.000000Z";
var updated_at = "2023-09-29T06:38:24.000000Z";
var deleted_at = null;
var orders_count = 8;
var role = {
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
};
var store = null;
var point = {
	id: 3,
	consumer_id: 19,
	balance: 300
};
var wallet = {
	id: 1,
	consumer_id: 19,
	balance: 84.4
};
var address = [
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
];
var vendor_wallet = null;
var profile_image = {
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
};
var payment_account = {
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
};
const self = {
	id: id,
	name: name,
	email: email,
	country_code: country_code,
	phone: phone,
	profile_image_id: profile_image_id,
	system_reserve: system_reserve,
	status: status,
	created_by_id: created_by_id,
	email_verified_at: email_verified_at,
	created_at: created_at,
	updated_at: updated_at,
	deleted_at: deleted_at,
	orders_count: orders_count,
	role: role,
	store: store,
	point: point,
	wallet: wallet,
	address: address,
	vendor_wallet: vendor_wallet,
	profile_image: profile_image,
	payment_account: payment_account
};

const index = defineEventHandler((event) => {
  return self;
});

export { index as default };

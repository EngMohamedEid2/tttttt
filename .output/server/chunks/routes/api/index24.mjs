import { d as defineEventHandler } from './index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

var values = {
	general: {
		default_currency_id: 1,
		default_currency: {
			id: 1,
			code: "USD",
			symbol: "$",
			no_of_decimal: 2,
			exchange_rate: "1.00",
			symbol_position: "before_price",
			thousands_separator: "comma",
			decimal_separator: "comma",
			system_reserve: "1",
			status: 1,
			created_by_id: null,
			created_at: "2023-08-24T08:16:03.000000Z",
			updated_at: "2023-08-24T08:16:03.000000Z",
			deleted_at: null
		},
		min_order_amount: 0,
		min_order_free_shipping: 50
	},
	wallet_points: {
		point_currency_ratio: 30
	},
	delivery: {
		default_delivery: 1,
		"default": {
			title: "Standard Delivery",
			description: "Approx 5 to 7 Days"
		},
		same_day_delivery: true,
		same_day: {
			title: "Express Delivery",
			description: "Schedule"
		},
		same_day_intervals: [
			{
				title: "Morning",
				description: "8.00 AM - 12.00 AM"
			},
			{
				title: "Noon",
				description: "12.00 PM - 2.00 PM"
			},
			{
				title: "Afternoon",
				description: "02.00 PM - 05.00 PM"
			},
			{
				title: "Evening",
				description: "05.00 PM - 08.00 PM"
			}
		]
	},
	maintenance: {
		title: "We'll be back Soon..",
		maintenance_mode: false,
		maintenance_image_id: 6,
		description: "We are busy to updating our store for you.",
		maintenance_image: {
			id: 6,
			collection_name: "attachment",
			name: "maintainance",
			file_name: "maintainance.jpg",
			mime_type: "image/jpeg",
			disk: "public",
			conversions_disk: "public",
			size: "111275",
			created_by_id: "1",
			created_at: "2023-08-24T08:16:03.000000Z",
			updated_at: "2023-08-24T08:16:03.000000Z",
			original_url: "/images/data/maintainance.jpg"
		}
	},
	payment_methods: [
		{
			name: "cod",
			status: true
		},
		{
			name: "paypal",
			status: true
		},
		{
			name: "stripe",
			status: true
		},
		{
			name: "mollie",
			status: true
		},
		{
			name: "razorpay",
			status: true
		}
	]
};
const settings = {
	values: values
};

const index = defineEventHandler((event) => {
  return settings;
});

export { index as default };

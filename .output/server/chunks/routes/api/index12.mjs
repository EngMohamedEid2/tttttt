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
		id: 7,
		title: "Special Alert Saving 10% Off",
		description: "Apply code SPECIAL10 at checkout and enjoy a generous $10 discount on orders of $40 or more.",
		code: "SPECIAL10",
		type: "fixed",
		amount: "10.00",
		min_spend: 40,
		is_unlimited: 0,
		usage_per_coupon: "0",
		usage_per_customer: 1,
		used: "0",
		status: 1,
		is_expired: 0,
		is_apply_all: "1",
		is_first_order: 0,
		start_date: null,
		end_date: null,
		created_by_id: "1",
		created_at: "2023-09-29T11:15:27.000000Z",
		updated_at: "2023-09-30T04:24:24.000000Z",
		deleted_at: null
	},
	{
		id: 6,
		title: "Blossom Your Exclusive 10% Off",
		description: "Embrace the season with our coupon! Enjoy a delightful 10% off your order.",
		code: "SPRING10",
		type: "percentage",
		amount: "10.00",
		min_spend: 100,
		is_unlimited: 1,
		usage_per_coupon: null,
		usage_per_customer: null,
		used: "0",
		status: 1,
		is_expired: 0,
		is_apply_all: "1",
		is_first_order: 1,
		start_date: null,
		end_date: null,
		created_by_id: "1",
		created_at: "2023-09-29T11:13:18.000000Z",
		updated_at: "2023-09-29T11:36:04.000000Z",
		deleted_at: null
	},
	{
		id: 5,
		title: "Unlock VIP-Only 20% Savings",
		description: "You're a VIP in our eyes! For an exclusive 20% discount on your orders.",
		code: "EXCLUSIVEVIP",
		type: "percentage",
		amount: "15.00",
		min_spend: 0,
		is_unlimited: 1,
		usage_per_coupon: null,
		usage_per_customer: null,
		used: "0",
		status: 1,
		is_expired: 0,
		is_apply_all: "1",
		is_first_order: null,
		start_date: null,
		end_date: null,
		created_by_id: "1",
		created_at: "2023-09-29T11:11:04.000000Z",
		updated_at: "2023-09-29T11:11:33.000000Z",
		deleted_at: null
	},
	{
		id: 4,
		title: "Elegance: $25 Off Orders",
		description: "Apply code STYLE25 at checkout and enjoy a generous $25 discount on orders of $120 or more",
		code: "MOST25",
		type: "fixed",
		amount: "25.00",
		min_spend: 120,
		is_unlimited: 1,
		usage_per_coupon: null,
		usage_per_customer: null,
		used: "0",
		status: 1,
		is_expired: 0,
		is_apply_all: "1",
		is_first_order: 1,
		start_date: null,
		end_date: null,
		created_by_id: "1",
		created_at: "2023-09-29T11:09:10.000000Z",
		updated_at: "2023-09-29T11:09:10.000000Z",
		deleted_at: null
	},
	{
		id: 3,
		title: "Exclusive: Unleash 15% Off - Limited Time",
		description: "Ready for fabulous savings? For a limited time, This code is valid only once per user. Happy shopping!",
		code: "FABULOUS15",
		type: "percentage",
		amount: "15.00",
		min_spend: 100,
		is_unlimited: 0,
		usage_per_coupon: "1",
		usage_per_customer: 1,
		used: "0",
		status: 1,
		is_expired: 1,
		is_apply_all: "1",
		is_first_order: 1,
		start_date: "2023-09-01",
		end_date: "2023-10-31",
		created_by_id: "1",
		created_at: "2023-09-29T11:05:13.000000Z",
		updated_at: "2023-09-29T11:06:11.000000Z",
		deleted_at: null
	},
	{
		id: 2,
		title: "Save Big with SAVE20: $20 Off Orders",
		description: "Apply code SAVE20 at checkout and enjoy a generous $20 discount on orders of $100 or more.",
		code: "SAVE20",
		type: "fixed",
		amount: "19.00",
		min_spend: 100,
		is_unlimited: 0,
		usage_per_coupon: "1",
		usage_per_customer: 1,
		used: "0",
		status: 1,
		is_expired: 0,
		is_apply_all: "1",
		is_first_order: 1,
		start_date: null,
		end_date: null,
		created_by_id: "1",
		created_at: "2023-09-29T11:03:02.000000Z",
		updated_at: "2023-09-29T11:03:02.000000Z",
		deleted_at: null
	},
	{
		id: 1,
		title: "Unlock Exclusive: Enjoy a 5% Discount!",
		description: "Enjoy a flat 5% discount on clothing, accessories, and more – valid for a single use per user.",
		code: "FAST5",
		type: "percentage",
		amount: "10.00",
		min_spend: 0,
		is_unlimited: 0,
		usage_per_coupon: "1",
		usage_per_customer: 1,
		used: "0",
		status: 1,
		is_expired: 1,
		is_apply_all: "1",
		is_first_order: null,
		start_date: "2023-09-01",
		end_date: "2024-02-29",
		created_by_id: "1",
		created_at: "2023-09-29T10:56:19.000000Z",
		updated_at: "2023-09-29T10:56:19.000000Z",
		deleted_at: null
	}
];
var total = 7;
const coupon = {
	data: data,
	total: total
};

const index = defineEventHandler((event) => {
  return coupon;
});

export { index as default };

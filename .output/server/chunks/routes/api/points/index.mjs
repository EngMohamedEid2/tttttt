import { d as defineEventHandler } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

var id = 3;
var consumer_id = 19;
var balance = 300;
var transactions = {
	current_page: 1,
	data: [
		{
			id: 23,
			wallet_id: null,
			order_id: null,
			point_id: 3,
			amount: 300,
			type: "credit",
			detail: "Admin has credited the balance.",
			from: 1,
			created_at: "2023-09-30T06:18:49.000000Z"
		},
		{
			id: 17,
			wallet_id: null,
			order_id: null,
			point_id: 3,
			amount: 100,
			type: "debit",
			detail: "Point amount successfully debited for Order #1001.",
			from: 19,
			created_at: "2023-09-29T10:16:57.000000Z"
		},
		{
			id: 15,
			wallet_id: null,
			order_id: null,
			point_id: 3,
			amount: 55,
			type: "debit",
			detail: "Admin has debited the balance.",
			from: 1,
			created_at: "2023-09-29T09:43:17.000000Z"
		},
		{
			id: 8,
			wallet_id: null,
			order_id: null,
			point_id: 3,
			amount: 30,
			type: "credit",
			detail: "Admin has credited the balance.",
			from: 1,
			created_at: "2023-09-29T08:15:04.000000Z"
		},
		{
			id: 6,
			wallet_id: null,
			order_id: null,
			point_id: 3,
			amount: 25,
			type: "credit",
			detail: "Admin has credited the balance.",
			from: 1,
			created_at: "2023-09-29T08:13:10.000000Z"
		},
		{
			id: 1,
			wallet_id: null,
			order_id: null,
			point_id: 3,
			amount: 100,
			type: "credit",
			detail: "Welcome! Bonus credited.",
			from: 1,
			created_at: "2023-09-29T05:50:05.000000Z"
		}
	],
	total: 6,
	from: 1,
	last_page: 4,
	per_page: 10,
	to: 40
};
const point = {
	id: id,
	consumer_id: consumer_id,
	balance: balance,
	transactions: transactions
};

const index = defineEventHandler((event) => {
  return point;
});

export { index as default };

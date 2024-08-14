import { d as defineEventHandler } from '../index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

var id = 1;
var consumer_id = 19;
var balance = 84.4;
var transactions = {
	current_page: 1,
	data: [
		{
			id: 24,
			wallet_id: 1,
			order_id: null,
			point_id: null,
			amount: 9.4,
			type: "credit",
			detail: "Admin has credited the balance.",
			from: 1,
			created_at: "2023-09-30T08:43:52.000000Z"
		},
		{
			id: 22,
			wallet_id: 1,
			order_id: null,
			point_id: null,
			amount: 75,
			type: "credit",
			detail: "Admin has credited the balance.",
			from: 1,
			created_at: "2023-09-30T06:18:36.000000Z"
		},
		{
			id: 18,
			wallet_id: 1,
			order_id: null,
			point_id: null,
			amount: 20,
			type: "debit",
			detail: "Wallet amount successfully debited for Order #1001.",
			from: 19,
			created_at: "2023-09-29T10:16:57.000000Z"
		},
		{
			id: 16,
			wallet_id: 1,
			order_id: null,
			point_id: null,
			amount: 50,
			type: "debit",
			detail: "Admin has debited the balance.",
			from: 1,
			created_at: "2023-09-29T10:16:24.000000Z"
		},
		{
			id: 14,
			wallet_id: 1,
			order_id: null,
			point_id: null,
			amount: 20,
			type: "credit",
			detail: "Admin has credited the balance.",
			from: 1,
			created_at: "2023-09-29T08:16:12.000000Z"
		},
		{
			id: 13,
			wallet_id: 1,
			order_id: null,
			point_id: null,
			amount: 75,
			type: "debit",
			detail: "Admin has debited the balance.",
			from: 1,
			created_at: "2023-09-29T08:16:05.000000Z"
		},
		{
			id: 12,
			wallet_id: 1,
			order_id: null,
			point_id: null,
			amount: 100,
			type: "debit",
			detail: "Admin has debited the balance.",
			from: 1,
			created_at: "2023-09-29T08:15:57.000000Z"
		},
		{
			id: 11,
			wallet_id: 1,
			order_id: null,
			point_id: null,
			amount: 50,
			type: "debit",
			detail: "Admin has debited the balance.",
			from: 1,
			created_at: "2023-09-29T08:15:50.000000Z"
		},
		{
			id: 10,
			wallet_id: 1,
			order_id: null,
			point_id: null,
			amount: 25,
			type: "debit",
			detail: "Admin has debited the balance.",
			from: 1,
			created_at: "2023-09-29T08:15:42.000000Z"
		},
		{
			id: 9,
			wallet_id: 1,
			order_id: null,
			point_id: null,
			amount: 300,
			type: "credit",
			detail: "Admin has credited the balance.",
			from: 1,
			created_at: "2023-09-29T08:15:35.000000Z"
		}
	],
	total: 10,
	from: 1,
	last_page: 4,
	per_page: 10,
	to: 40
};
const wallet = {
	id: id,
	consumer_id: consumer_id,
	balance: balance,
	transactions: transactions
};

const index = defineEventHandler((event) => {
  return wallet;
});

export { index as default };

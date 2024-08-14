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
		code: "S.R",
		symbol: "ر.س",
		no_of_decimal: 2,
		exchange_rate: 1,
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
	{
		id: 2,
		code: "INR",
		symbol: "₹",
		no_of_decimal: 2,
		exchange_rate: "82.00",
		symbol_position: "before_price",
		thousands_separator: "comma",
		decimal_separator: "comma",
		system_reserve: "0",
		status: 1,
		created_by_id: null,
		created_at: "2023-08-24T08:16:03.000000Z",
		updated_at: "2023-08-24T08:16:03.000000Z",
		deleted_at: null
	},
	{
		id: 3,
		code: "GBP",
		symbol: "£",
		no_of_decimal: 2,
		exchange_rate: "100.00",
		symbol_position: "before_price",
		thousands_separator: "comma",
		decimal_separator: "comma",
		system_reserve: "0",
		status: 1,
		created_by_id: null,
		created_at: "2023-08-24T08:16:03.000000Z",
		updated_at: "2023-08-24T08:16:03.000000Z",
		deleted_at: null
	},
	{
		id: 4,
		code: "EUR",
		symbol: "€",
		no_of_decimal: 2,
		exchange_rate: "56.00",
		symbol_position: "before_price",
		thousands_separator: "comma",
		decimal_separator: "comma",
		system_reserve: "0",
		status: 1,
		created_by_id: null,
		created_at: "2023-08-24T08:16:03.000000Z",
		updated_at: "2023-08-24T08:16:03.000000Z",
		deleted_at: null
	}
];
var total = 4;
const currency = {
	data: data,
	total: total
};

const index = defineEventHandler((event) => {
  return currency;
});

export { index as default };

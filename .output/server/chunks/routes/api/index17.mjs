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
		name: "pending",
		slug: "pending",
		sequence: "1",
		created_by_id: "1",
		status: 1,
		system_reserve: "1",
		created_at: "2023-08-24T08:16:03.000000Z",
		updated_at: "2023-08-24T08:16:03.000000Z",
		deleted_at: null
	},
	{
		id: 2,
		name: "processing",
		slug: "processing",
		sequence: "2",
		created_by_id: "1",
		status: 1,
		system_reserve: "1",
		created_at: "2023-08-24T08:16:03.000000Z",
		updated_at: "2023-08-24T08:16:03.000000Z",
		deleted_at: null
	},
	{
		id: 3,
		name: "cancelled",
		slug: "cancelled",
		sequence: "3",
		created_by_id: "1",
		status: 1,
		system_reserve: "1",
		created_at: "2023-08-24T08:16:03.000000Z",
		updated_at: "2023-08-24T08:16:03.000000Z",
		deleted_at: null
	},
	{
		id: 4,
		name: "shipped",
		slug: "shipped",
		sequence: "4",
		created_by_id: "1",
		status: 1,
		system_reserve: "1",
		created_at: "2023-08-24T08:16:03.000000Z",
		updated_at: "2023-08-24T08:16:03.000000Z",
		deleted_at: null
	},
	{
		id: 5,
		name: "out for delivery",
		slug: "out-for-delivery",
		sequence: "5",
		created_by_id: "1",
		status: 1,
		system_reserve: "1",
		created_at: "2023-08-24T08:16:03.000000Z",
		updated_at: "2023-08-24T08:16:03.000000Z",
		deleted_at: null
	},
	{
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
	}
];
var total = 6;
const orderstatus = {
	data: data,
	total: total
};

const index = defineEventHandler((event) => {
  return orderstatus;
});

export { index as default };

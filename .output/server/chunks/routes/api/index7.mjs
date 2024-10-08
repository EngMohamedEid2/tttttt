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
		id: 11,
		name: "Liter",
		style: "dropdown",
		slug: "liter",
		status: 1,
		created_by_id: "1",
		created_at: "2023-09-20T09:54:07.000000Z",
		updated_at: "2023-09-20T09:54:07.000000Z",
		deleted_at: null,
		attribute_values: [
			{
				id: 24,
				value: "5 Liter",
				slug: "5-liter",
				hex_color: null,
				attribute_id: "11",
				created_by_id: "1",
				created_at: "2023-09-20T09:54:07.000000Z",
				updated_at: "2023-09-20T09:54:07.000000Z",
				deleted_at: null
			},
			{
				id: 25,
				value: "10 Liter",
				slug: "10-liter",
				hex_color: null,
				attribute_id: "11",
				created_by_id: "1",
				created_at: "2023-09-20T09:54:07.000000Z",
				updated_at: "2023-09-20T09:54:07.000000Z",
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
	},
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
	},
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
		id: 1,
		name: "Weight",
		style: "rectangle",
		slug: "weight",
		status: 1,
		created_by_id: "1",
		created_at: "2023-08-24T11:43:50.000000Z",
		updated_at: "2023-08-24T13:03:54.000000Z",
		deleted_at: null,
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
];
var total = 6;
const attribute = {
	data: data,
	total: total
};

const index = defineEventHandler((event) => {
  return attribute;
});

export { index as default };

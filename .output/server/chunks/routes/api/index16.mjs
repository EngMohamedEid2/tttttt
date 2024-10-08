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
		id: "3588fc77-275a-4d6e-9509-bfaf6a2937a7",
		type: "App\\Notifications\\UpdateRefundRequestNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Refund request updated!",
			message: "Your Refund request status has been approved",
			type: "refund"
		},
		created_at: "2023-09-30T08:43:53.000000Z",
		updated_at: "2023-09-30T08:44:22.000000Z"
	},
	{
		id: "df6e1584-64cb-4910-81b5-4698d4ac6b19",
		type: "App\\Notifications\\UpdateRefundRequestNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Refund request updated!",
			message: "Your Refund request status has been rejected",
			type: "refund"
		},
		read_at: "2023-09-30T08:44:22.000000Z",
		created_at: "2023-09-30T08:14:43.000000Z",
		updated_at: "2023-09-30T08:44:22.000000Z"
	},
	{
		id: "11b5c19f-5496-49d1-a989-548359e67936",
		type: "App\\Notifications\\UpdateOrderStatusNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order status updated!",
			message: "Order Update: Your order #1029 has been updated and current order status is in delivered. Thank you for your patience!",
			type: "order"
		},
		read_at: "2023-09-30T06:14:50.000000Z",
		created_at: "2023-09-30T06:11:51.000000Z",
		updated_at: "2023-09-30T06:14:50.000000Z"
	},
	{
		id: "e430fc8b-57ea-4730-a948-fbd6718a0e7d",
		type: "App\\Notifications\\UpdateOrderStatusNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order status updated!",
			message: "Order Update: Your order #1029 has been updated and current order status is in pending. Thank you for your patience!",
			type: "order"
		},
		read_at: "2023-09-30T06:14:50.000000Z",
		created_at: "2023-09-30T06:11:43.000000Z",
		updated_at: "2023-09-30T06:14:50.000000Z"
	},
	{
		id: "88200de6-89cf-4cbe-806f-1a4b02c65d0e",
		type: "App\\Notifications\\UpdateOrderStatusNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order status updated!",
			message: "Order Update: Your order #1030 has been updated and current order status is in shipped. Thank you for your patience!",
			type: "order"
		},
		read_at: "2023-09-30T06:14:50.000000Z",
		created_at: "2023-09-30T06:11:08.000000Z",
		updated_at: "2023-09-30T06:14:50.000000Z"
	},
	{
		id: "623c9bec-ab0a-46ab-bf1c-000354c2a37e",
		type: "App\\Notifications\\UpdateOrderStatusNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order status updated!",
			message: "Order Update: Your order #1030 has been updated and current order status is in pending. Thank you for your patience!",
			type: "order"
		},
		read_at: "2023-09-30T06:14:50.000000Z",
		created_at: "2023-09-30T06:11:04.000000Z",
		updated_at: "2023-09-30T06:14:50.000000Z"
	},
	{
		id: "10ceef95-cc1a-421f-9ace-291022118f37",
		type: "App\\Notifications\\UpdateOrderStatusNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order status updated!",
			message: "Order Update: Your order #1031 has been updated and current order status is in cancelled. Thank you for your patience!",
			type: "order"
		},
		read_at: "2023-09-30T06:10:25.000000Z",
		created_at: "2023-09-30T06:09:57.000000Z",
		updated_at: "2023-09-30T06:10:25.000000Z"
	},
	{
		id: "b36242b3-156c-4c18-b6e9-d45f7e405c74",
		type: "App\\Notifications\\UpdateOrderStatusNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order status updated!",
			message: "Order Update: Your order #1031 has been updated and current order status is in pending. Thank you for your patience!",
			type: "order"
		},
		read_at: "2023-09-30T06:10:25.000000Z",
		created_at: "2023-09-30T06:09:50.000000Z",
		updated_at: "2023-09-30T06:10:25.000000Z"
	},
	{
		id: "8a6e5f34-83eb-4210-9057-257d56b49437",
		type: "App\\Notifications\\PlaceOrderNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order has been placed",
			message: "Your order has been successfully placed. Order ID: #1031. Thank you for choosing us.",
			type: "order"
		},
		read_at: "2023-09-30T05:57:26.000000Z",
		created_at: "2023-09-30T05:54:58.000000Z",
		updated_at: "2023-09-30T05:57:26.000000Z"
	},
	{
		id: "9109471a-9ea7-4f12-8189-89936470a91b",
		type: "App\\Notifications\\PlaceOrderNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order has been placed",
			message: "Your order has been successfully placed. Order ID: #1030. Thank you for choosing us.",
			type: "order"
		},
		read_at: "2023-09-30T05:57:26.000000Z",
		created_at: "2023-09-30T05:53:13.000000Z",
		updated_at: "2023-09-30T05:57:26.000000Z"
	},
	{
		id: "92f537de-e6ae-4250-bec2-8cc67d76ba9e",
		type: "App\\Notifications\\PlaceOrderNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order has been placed",
			message: "Your order has been successfully placed. Order ID: #1029. Thank you for choosing us.",
			type: "order"
		},
		read_at: "2023-09-30T05:57:26.000000Z",
		created_at: "2023-09-30T05:50:22.000000Z",
		updated_at: "2023-09-30T05:57:26.000000Z"
	},
	{
		id: "3daa65dd-e47b-4f44-ba66-75250423f922",
		type: "App\\Notifications\\PlaceOrderNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order has been placed",
			message: "Your order has been successfully placed. Order ID: #1028. Thank you for choosing us.",
			type: "order"
		},
		read_at: "2023-09-30T04:24:48.000000Z",
		created_at: "2023-09-30T04:24:24.000000Z",
		updated_at: "2023-09-30T04:24:48.000000Z"
	},
	{
		id: "d1e8f51d-a078-4b15-8b6c-4c34032dda00",
		type: "App\\Notifications\\UpdateOrderStatusNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order status updated!",
			message: "Order Update: Your order #1027 has been updated and current order status is in delivered. Thank you for your patience!",
			type: "order"
		},
		read_at: "2023-09-29T13:47:06.000000Z",
		created_at: "2023-09-29T13:45:25.000000Z",
		updated_at: "2023-09-29T13:47:06.000000Z"
	},
	{
		id: "31c0e898-92ea-43dd-8331-ef7c8e995fce",
		type: "App\\Notifications\\UpdateOrderStatusNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order status updated!",
			message: "Order Update: Your order #1027 has been updated and current order status is in pending. Thank you for your patience!",
			type: "order"
		},
		read_at: "2023-09-29T13:47:06.000000Z",
		created_at: "2023-09-29T13:45:21.000000Z",
		updated_at: "2023-09-29T13:47:06.000000Z"
	},
	{
		id: "cc4d3652-acb2-4b73-b520-36388fa2b2d3",
		type: "App\\Notifications\\PlaceOrderNotification",
		notifiable_type: "App\\Models\\User",
		notifiable_id: "19",
		data: {
			title: "Order has been placed",
			message: "Your order has been successfully placed. Order ID: #1027. Thank you for choosing us.",
			type: "order"
		},
		read_at: "2023-09-29T13:47:06.000000Z",
		created_at: "2023-09-29T13:42:55.000000Z",
		updated_at: "2023-09-29T13:47:06.000000Z"
	}
];
var total = 21;
const notification = {
	data: data,
	total: total
};

const index = defineEventHandler((event) => {
  return notification;
});

export { index as default };

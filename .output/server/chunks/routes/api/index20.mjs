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
		question: "How can I find out about product recalls?",
		answer: "Check the product's official website, the manufacturer's website, or government websites for recalls. You can also sign up for email alerts from consumer protection organizations.",
		consumer_id: 18,
		product_id: 10,
		created_at: "2023-09-29T08:05:22.000000Z",
		updated_at: "2023-09-29T08:05:39.000000Z",
		deleted_at: null,
		reaction: null,
		total_likes: 0,
		total_dislikes: 0
	},
	{
		id: 6,
		question: "What should I do if a product arrives damaged?",
		answer: "Contact the retailer's customer service immediately. Most retailers have a process for handling damaged or defective items and may offer a replacement or refund.",
		consumer_id: 18,
		product_id: 15,
		created_at: "2023-09-29T06:54:11.000000Z",
		updated_at: "2023-09-29T06:54:29.000000Z",
		deleted_at: null,
		reaction: null,
		total_likes: 1,
		total_dislikes: 0
	},
	{
		id: 5,
		question: "Can I cancel an order after it has been placed?",
		answer: "It depends on the retailer and the stage of processing. Quickly contact customer service to inquire about cancellation possibilities.",
		consumer_id: 18,
		product_id: 16,
		created_at: "2023-09-29T06:52:34.000000Z",
		updated_at: "2023-09-29T06:52:51.000000Z",
		deleted_at: null,
		reaction: null,
		total_likes: 1,
		total_dislikes: 1
	},
	{
		id: 4,
		question: "Are online reviews reliable for making purchasing decisions?",
		answer: "Online reviews can be helpful, but it's essential to consider the overall sentiment and read multiple reviews. Look for detailed reviews and consider the source's credibility.",
		consumer_id: 18,
		product_id: 16,
		created_at: "2023-09-29T06:51:25.000000Z",
		updated_at: "2023-09-29T06:51:52.000000Z",
		deleted_at: null,
		reaction: null,
		total_likes: 0,
		total_dislikes: 2
	},
	{
		id: 3,
		question: "How do I find the best deals and discounts when shopping online?",
		answer: "Subscribe to newsletters, follow retailers on social media, and use price comparison tools. Many retailers also offer discounts for first-time shoppers or during seasonal sales.",
		consumer_id: 18,
		product_id: 18,
		created_at: "2023-09-29T06:46:56.000000Z",
		updated_at: "2023-09-29T06:47:14.000000Z",
		deleted_at: null,
		reaction: null,
		total_likes: 2,
		total_dislikes: 0
	},
	{
		id: 2,
		question: "What is the return policy for most products?",
		answer: "Return policies vary by retailer. Typically, there is a specified window (e.g., 30 days) for returns. Check the retailer's website or contact customer service for specific details.",
		consumer_id: 18,
		product_id: 18,
		created_at: "2023-09-29T06:45:48.000000Z",
		updated_at: "2023-09-29T06:46:11.000000Z",
		deleted_at: null,
		reaction: null,
		total_likes: 2,
		total_dislikes: 0
	},
	{
		id: 1,
		question: "How can I track my online order?",
		answer: "Most online retailers provide a tracking number in your order confirmation email. You can use this number on the carrier's website to track the status and location of your package.",
		consumer_id: 18,
		product_id: 18,
		created_at: "2023-09-29T06:44:56.000000Z",
		updated_at: "2023-09-29T06:45:16.000000Z",
		deleted_at: null,
		reaction: null,
		total_likes: 1,
		total_dislikes: 1
	}
];
var total = 7;
const question = {
	data: data,
	total: total
};

const index = defineEventHandler((event) => {
  return question;
});

export { index as default };

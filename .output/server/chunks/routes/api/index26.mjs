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
		id: 19,
		name: "Farm Fresh Produce",
		slug: "farm-fresh-produce",
		type: "post",
		description: "This unveiling of the farm fresh phenomenon will offer an engrossing insight into the world of pure, unadulterated, and nutrient-rich food. Dive into the lush green fields, feel the raw earth, and unmask the real scent, flavor, and texture that nature imbues in its bountiful produce.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-31T06:33:54.000000Z",
		updated_at: "2023-09-02T06:15:07.000000Z",
		deleted_at: null,
		blogs_count: 6,
		products_count: 0
	},
	{
		id: 18,
		name: "Groceries",
		slug: "groceries",
		type: "post",
		description: "Groceries and staples are the foundation of a well-stocked kitchen, encompassing essential food items that form the basis of meals. This category includes non-perishable items like rice, pasta, flour, oils, canned goods, and spices. Staples provide the building blocks for a wide range of recipes, allowing for diverse culinary creations. Careful grocery planning ensures a pantry stocked with nutritious and versatile options, enabling efficient meal preparation while accommodating individual dietary preferences.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-31T06:33:34.000000Z",
		updated_at: "2023-08-31T06:33:34.000000Z",
		deleted_at: null,
		blogs_count: 6,
		products_count: 0
	},
	{
		id: 17,
		name: "Fashions",
		slug: "fashions",
		type: "post",
		description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-31T06:33:21.000000Z",
		updated_at: "2023-08-31T06:33:21.000000Z",
		deleted_at: null,
		blogs_count: 6,
		products_count: 0
	},
	{
		id: 16,
		name: "Furnishing",
		slug: "furnishing",
		type: "post",
		description: "Furniture encompasses a wide range of functional and decorative items designed to enhance living and working spaces. It includes various pieces that serve practical purposes while contributing to the overall aesthetics and ambiance of a room or environment. Furniture is an essential aspect of interior design and plays a crucial role in creating comfortable and functional living, working, and recreational spaces.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-31T06:33:10.000000Z",
		updated_at: "2023-08-31T06:33:10.000000Z",
		deleted_at: null,
		blogs_count: 6,
		products_count: 0
	},
	{
		id: 15,
		name: "Accessories",
		slug: "accessories",
		type: "product",
		description: "Accessories are items that complement and enhance an individual's overall appearance and style. They are an essential part of fashion and can add depth, personality, and flair to outfits. Accessories encompass a wide range of items, from jewelry and bags to scarves, hats, belts, and more.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-31T06:09:55.000000Z",
		updated_at: "2023-08-31T06:09:55.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 7
	},
	{
		id: 14,
		name: "Sports",
		slug: "sports",
		type: "product",
		description: "Sports encompass a wide range of physical activities and competitive games that involve skill, athleticism, strategy, and often teamwork. Sports have a significant impact on individuals, communities, and societies, fostering physical fitness, social interaction, entertainment, and even professional careers",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-31T06:09:42.000000Z",
		updated_at: "2023-08-31T06:09:42.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 15
	},
	{
		id: 13,
		name: "Electronics",
		slug: "electronics",
		type: "product",
		description: "Electronics refer to devices and systems that utilize the principles of electronics and electromagnetism to control and manipulate electrical signals. Electronics play a crucial role in modern society, impacting communication, entertainment, transportation, healthcare, and various other sectors",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-31T06:09:26.000000Z",
		updated_at: "2023-08-31T06:09:26.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 7
	},
	{
		id: 12,
		name: "Meats & Seafood",
		slug: "meats-seafood",
		type: "product",
		description: "Meats and seafood are valuable sources of protein, essential nutrients, and distinct flavors in a balanced diet. Meats, which include options like beef, poultry, and pork, offer a range of textures and tastes, while seafood encompasses fish and shellfish with their unique profiles. These foods provide essential amino acids, vitamins, and minerals that support muscle growth, immune function, and overall health. Choosing lean cuts and sustainable seafood options contributes to a nutritious diet while considering environmental and ethical factors.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:22:40.000000Z",
		updated_at: "2023-08-24T09:22:40.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 1
	},
	{
		id: 11,
		name: "Fashion",
		slug: "fashion",
		type: "product",
		description: "Fashion refers to the prevailing style or trend in clothing, accessories, footwear, makeup, and hairstyling that is popular at a particular time and place. It's a dynamic and ever-evolving aspect of culture that reflects social, economic, and cultural influences",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:22:24.000000Z",
		updated_at: "2023-08-24T09:22:24.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 28
	},
	{
		id: 10,
		name: "Beauty",
		slug: "beauty",
		type: "product",
		description: "Beauty is a concept that encompasses various aspects related to aesthetics, appearance, and the perception of attractiveness. It is a multifaceted idea that can be understood differently across cultures, individuals, and contexts.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:22:11.000000Z",
		updated_at: "2023-08-24T09:22:11.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 9
	},
	{
		id: 9,
		name: "Furniture",
		slug: "furniture",
		type: "product",
		description: "Furniture encompasses a wide range of functional and decorative items designed to enhance living and working spaces. It includes various pieces that serve practical purposes while contributing to the overall aesthetics and ambiance of a room or environment. Furniture is an essential aspect of interior design and plays a crucial role in creating comfortable and functional living, working, and recreational spaces.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:21:53.000000Z",
		updated_at: "2023-08-24T09:21:53.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 20
	},
	{
		id: 8,
		name: "Pet Shop",
		slug: "pet-shop",
		type: "product",
		description: "Our pet shop offers only top-notch, premium quality products, ensuring customer satisfaction and trust. We have a wide variety of pet supplies, including food, toys, grooming essentials, and accessories, catering to every pet owner's needs. Our products are reasonably priced, offering great value for money, attracting price-conscious customers.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:21:39.000000Z",
		updated_at: "2023-08-26T10:58:52.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 9
	},
	{
		id: 7,
		name: "Wines & Soft Drinks",
		slug: "wines-soft-drinks",
		type: "product",
		description: "Wines and alcoholic drinks are enjoyed for their diverse flavors and social significance. Wines, produced from fermented grapes, offer a wide range of styles from red to white to rosé, each with unique characteristics. Alcoholic drinks encompass a variety of beverages, including beer, spirits, cocktails, and liqueurs. While moderation can enhance social experiences, it's important to be mindful of consumption to avoid negative health effects. Responsible and informed enjoyment of wines and alcoholic drinks can be part of a balanced lifestyle.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:21:24.000000Z",
		updated_at: "2023-08-24T09:21:24.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 1
	},
	{
		id: 6,
		name: "Grocery & Staples",
		slug: "grocery-staples",
		type: "product",
		description: "Groceries and staples are the foundation of a well-stocked kitchen, encompassing essential food items that form the basis of meals. This category includes non-perishable items like rice, pasta, flour, oils, canned goods, and spices. Staples provide the building blocks for a wide range of recipes, allowing for diverse culinary creations. Careful grocery planning ensures a pantry stocked with nutritious and versatile options, enabling efficient meal preparation while accommodating individual dietary preferences.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:21:04.000000Z",
		updated_at: "2023-08-24T09:21:04.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 20
	},
	{
		id: 5,
		name: "Biscuits & Snacks",
		slug: "biscuits-snacks",
		type: "product",
		description: "Biscuits and snacks are popular food choices enjoyed for their convenience and variety of flavors. Biscuits, often known as cookies in some regions, come in various textures and tastes, from crispy to soft and sweet to savory. Snacks encompass a broader category, including chips, nuts, granola bars, and more, offering quick bites for on-the-go consumption. While indulging in these treats, it's important to strike a balance between enjoying their flavors and considering their nutritional content. Opting for healthier snack options can contribute to a well-rounded diet.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:20:52.000000Z",
		updated_at: "2023-08-24T09:20:52.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 9
	},
	{
		id: 4,
		name: "Frozen Foods",
		slug: "frozen-foods",
		type: "product",
		description: "Frozen foods are convenient and versatile food items that have been preserved through freezing. They encompass a wide range of options, from frozen fruits and vegetables to ready-to-eat meals, pizzas, and desserts. Freezing helps lock in nutrients and flavors, extending the shelf life of perishable items. While frozen foods offer convenience, it's important to read labels for nutritional information and choose options with balanced ingredients. Properly incorporating frozen foods into a diet can simplify meal preparation while maintaining nutritional value.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:20:39.000000Z",
		updated_at: "2023-08-24T09:20:39.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 1
	},
	{
		id: 3,
		name: "Breakfast & Dairy",
		slug: "breakfast-dairy",
		type: "product",
		description: "Breakfast is often hailed as the most important meal of the day, providing a nutritious start to one's morning. It typically includes a variety of foods such as grains (like cereal or toast), dairy products like milk, yogurt, and cheese, as well as fruits and proteins. Dairy products, including milk and its derivatives, are rich sources of calcium and essential nutrients that support bone health and overall well-being. Incorporating a balanced breakfast with dairy can provide sustained energy and contribute to a wholesome diet.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:20:26.000000Z",
		updated_at: "2023-08-24T09:20:26.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 20
	},
	{
		id: 2,
		name: "Beverages",
		slug: "beverages",
		type: "product",
		description: "Beverages are liquid refreshments that play a vital role in hydration and enjoyment. They encompass a wide spectrum, from essential options like water and herbal teas to flavorful choices like juices, sodas, coffee, and alcoholic drinks. Beverages can quench thirst, provide essential nutrients, and offer social and cultural significance in various societies. Selecting beverages mindfully can contribute to maintaining proper hydration and aligning with personal health goals.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:20:11.000000Z",
		updated_at: "2023-08-24T09:20:11.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 1
	},
	{
		id: 1,
		name: "Vegetables & Fruits",
		slug: "vegetables-fruits",
		type: "product",
		description: "Vegetables and fruits are essential components of a balanced diet, providing a wide range of nutrients, vitamins, and minerals that promote overall health. Vegetables encompass a diverse group of plant-based foods, while fruits are naturally sweet and colorful delights that offer a variety of flavors and health benefits. Incorporating a colorful array of vegetables and fruits into your meals can contribute to improved well-being and support various bodily functions.",
		created_by_id: "1",
		status: 1,
		created_at: "2023-08-24T09:19:47.000000Z",
		updated_at: "2023-08-24T09:19:47.000000Z",
		deleted_at: null,
		blogs_count: 0,
		products_count: 21
	}
];
var total = 19;
const tag = {
	data: data,
	total: total
};

const index = defineEventHandler((event) => {
  return tag;
});

export { index as default };

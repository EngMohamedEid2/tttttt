export const GetProductPrice = ({ product, from = "variations", key = "price" }) => (product[from]?.length ? product[from][0][key] : product[key]);

export function getImageFromData({ data, key, type = "single", variation_id = false }) {
  var imagesToReturn = [`${key.includes("profile") ? "/images/placeholders/user.png" : "/images/placeholders/product.png"}`];
  var imagesFromData = [];
  if (variation_id) {
    imagesFromData = data?.variations[data?.variations.findIndex((item) => item.id == variation_id)][key] || [];
  } else {
    imagesFromData = Array.isArray(data[key]) ? data[key]?.map((image) => image?.original_url) : data[key]?.original_url ? [data[key]?.original_url] : [];
  }
  imagesFromData?.length && (imagesToReturn = imagesFromData);
  return type == "single" ? imagesToReturn[0] : imagesToReturn;
}
export const PlaceholderImage = "/images/product/placeholder.png";

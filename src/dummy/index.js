import data from "./data.json";

export function getCategories() {
  return Array.from(data.categories);
}

export function getItems(categoryId) {
  return data.items.filter(item => categoryId === item.categoryId);
}
export const fetchItems = (setData) => {
  fetch("http://localhost:4000/get-items")
    .then((response) => response.json())
    .then((jsonData) => {
      setData(jsonData);
      console.log(jsonData);
    })
    .catch((error) => console.error("Error fetching data:", error));
};
export const fetchBrands = (setBrands) => {
  fetch("http://localhost:4000/brands")
    .then((response) => response.json())
    .then((jsonData) => {
      setBrands(jsonData);
      console.log(jsonData);
    })
    .catch((error) => console.error("Error fetching data:", error));
};
export const fetchCategories = (setCategories) => {
  fetch("http://localhost:4000/categories")
    .then((response) => response.json())
    .then((jsonData) => {
      setCategories(jsonData);
      console.log(jsonData);
    })
    .catch((error) => console.error("Error fetching data:", error));
};
export const fetchProductTypes = (setProductTypes) => {
  fetch("http://localhost:4000/product-types")
    .then((response) => response.json())
    .then((jsonData) => {
      setProductTypes(jsonData);
      console.log(jsonData);
    })
    .catch((error) => console.error("Error fetching data:", error));
};

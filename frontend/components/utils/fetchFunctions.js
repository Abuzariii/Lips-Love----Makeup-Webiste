export const fetchItems = (setData) => {
  fetch("http://localhost:4000/get-items")
    .then((response) => response.json())
    .then((jsonData) => {
      setData(jsonData);
      console.log(jsonData.length);
    })
    .catch((error) => console.error(error));
};
export const fetchBrands = (setBrands) => {
  fetch("http://localhost:4000/brands")
    .then((response) => response.json())
    .then((jsonData) => {
      setBrands(jsonData);
      // console.log(jsonData);
    })
    .catch((error) => console.error("Error fetching data:", error));
};
export const fetchByBrand = (setItems, brand) => {
  fetch("http://localhost:4000/get-by-brand?brand=" + brand)
    .then((response) => response.json())
    .then((jsonData) => {
      setItems(jsonData);
      // console.log(jsonData);
    })
    .catch((error) => console.error("Error fetching data:", error));
};
export const fetchCategories = (setCategories) => {
  fetch("http://localhost:4000/categories")
    .then((response) => response.json())
    .then((jsonData) => {
      setCategories(jsonData);
      // console.log(jsonData);
    })
    .catch((error) => console.error("Error fetching data:", error));
};
export const fetchByCategory = (setItems, category) => {
  fetch("http://localhost:4000/get-by-category?category=" + category)
    .then((response) => response.json())
    .then((jsonData) => {
      setItems(jsonData);
      // console.log(jsonData);
    })
    .catch((error) => console.error("Error fetching data:", error));
};
export const fetchProductTypes = (setProductTypes) => {
  fetch("http://localhost:4000/product-types")
    .then((response) => response.json())
    .then((jsonData) => {
      setProductTypes(jsonData);
      // console.log(jsonData);
    })
    .catch((error) => console.error("Error fetching data:", error));
};
export const fetchByProductType = (setItems, product) => {
  fetch("http://localhost:4000/get-by-product-type?product_type=" + product)
    .then((response) => response.json())
    .then((jsonData) => {
      setItems(jsonData);
      // console.log(jsonData);
    })
    .catch((error) => console.error("Error fetching data:", error));
};
export const fetchOneProduct = (setItem, id) => {
  fetch("http://localhost:4000/get-item?id=" + id)
    .then((response) => response.json())
    .then((jsonData) => {
      setItem(jsonData);
      // console.log(jsonData);
    })
    .catch((error) => console.error(error));
};

export const sendRequestWithToken = async () => {
  const token = localStorage.getItem("jwt-token");
  if (token) {
    try {
      const response = await fetch("http://localhost:4000/user-details/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  } else {
    console.log("Token not available in local storage");
    return "Failed";
  }
};

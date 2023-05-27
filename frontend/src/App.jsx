import "./App.css";
import axios from "axios";
import { Fragment, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function fetch(e) {
    e.preventDefault();
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => {
        setData(response.data.slice(0, 100));
        console.log(data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function post(e) {
    e.preventDefault();
    // Preprocess data before posting it
    data.map((product) => {
      delete product.price_sign;
      delete product.website_link;
      delete product.created_at;
      delete product.updated_at;
      delete product.product_api_url;
      delete product.api_featured_image;
      delete product.rating;

      // Code to turn every field to string, the response data of this code is stored in filteredObject.json file, the raw data is stored in rawData.json file in the Data folder :
      // if (product.product_colors.length !== 0) {
      //   product.product_colors = product.product_colors
      //     .map((color) => `${color.colour_name}(${color.hex_value})`)
      //     .join(", ");
      // } else if (product.product_colors.length === 0) {
      //   product.product_colors = "";
      // }
      // const delimiter = ", ";
      // if (product.tag_list.length !== 0) {
      //   product.tag_list = product.tag_list.join(delimiter);
      // } else if (product.tag_list.length === 0) {
      //   product.tag_list = "";
      // }
      return product;
    });
    // console.log(data);
    axios.post("http://localhost:4000/items/post", data);
  }
  return (
    <Fragment>
      <button onClick={fetch} style={{ padding: "0 10px", margin: "20px" }}>
        Fetch
      </button>
      <button onClick={post} style={{ padding: "0 10px" }}>
        POST DATA
      </button>
      {data &&
        data.map((item) => (
          <div>
            <h4>{item.name}</h4>
            <h5>{item.brand}</h5>
            <h6>{item.price}</h6>
            <h6>{item.currency}</h6>
            <h6>{item.image_link}</h6>
            <h6>{item.product_type}</h6>
            <h6>{item.category}</h6>
            <a href={item.product_link} target="_blank" rel="noreferrer">
              Product Link
            </a>
            <h6>{item.description}</h6>
            {item.tag_list.map((tag) => (
              <p>{tag}</p>
            ))}
          </div>
        ))}
    </Fragment>
  );
}

export default App;

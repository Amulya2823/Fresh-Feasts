import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };

    // console.log('constructor');
  }

  componentDidMount() {
    // console.log('mounted');
  }

  render() {
    // console.log('rendered');
    return (
      <div className="container-max py-16  text-center min-h-[80vh]">
        <img
          src="https://www.shopurfood.com/blogs/wp-content/uploads/2022/06/How-to-Retain-in-the-Future-of-Online-Food-Delivery-industry.jpg"
          alt=""
          className="w-full max-w-[800px] mx-auto rounded-lg"
        />

        <div className="w-[90%] max-w-[480px] mx-auto">
          <h1 className="text-3xl my-4 font-bold">Fresh Feasts🍔</h1>

          <p className="text-xl font-semibold">
            Fresh Feasts is a food ordering web application built with React.js
            ⚛ and Swiggy's API.
          </p>
        </div>
      </div>
    );
  }
}

export default About;

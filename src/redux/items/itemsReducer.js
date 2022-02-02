const initialState = {
  items: [
    {
      itemId: 1,
      name: "Crunchy variety Pack (5 boxes)",
      rating: 4.9,
      price: 24.99,
      url: "https://picsum.photos/id/425/200/300",
    },
    {
      itemId: 2,
      name: "Chocolate Chip Cookies",
      rating: 4.4,
      price: 14.99,
      url: "https://picsum.photos/id/425/200/300",
    },
    {
      itemId: 3,
      name: "Birthday Cake Cookies",
      rating: 4.2,
      price: 14.99,
      url: "https://picsum.photos/id/425/200/300",
    },
    {
      itemId: 4,
      name: "Ginger Snap Cookies",
      rating: 4.8,
      price: 14.99,
      url: "https://picsum.photos/id/425/200/300",
    },
    {
      itemId: 5,
      name: "Double Chocolate Chip Cookies",
      rating: 4.7,
      price: 14.99,
      url: "https://picsum.photos/id/425/200/300",
    },
  ],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default itemsReducer;

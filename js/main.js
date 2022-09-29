function bestSeller() {
  const FAKEAPI = "https://fakestoreapi.com/products";

  fetch(FAKEAPI)
    .then((res) => res.json())
    .then((data) => {
      const topProduct = document.querySelector(".item-descripiton");

      const topImg = document.querySelector(".feature-item-img");
      const productPrice = document.querySelector(".item-worth");
      topProduct.textContent = data[0].title;
      productPrice.textContent = data[0].price;

      topImg.src = data[0].image;
    });
}

bestSeller();

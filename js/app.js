
 const cardsData = [
    {
      brand: "Tonny Black",
      title: "Shoulder bag-White-Plain",
      image: "assets/img/photo-bag0.png",
      priceNew: "$69.99",
      priceOld: "$129.99",
      discount: "- 40%",
      rating: 4,
      quantity: 54,
      time: ["12", "43", "12"]
    },
    {
      brand: "Reebok",
      title: "Women’s Powder sneakers",
      image: "assets/img/photo-bag1.png",
      priceNew: "$112.02",
      priceOld: "$129.99",
      discount: "- 40%",
      rating: 4,
      quantity: 54,
      time: ["02", "05", "32"]
    }
  ];

  const container = document.getElementById("cardsContainer");

  cardsData.forEach(card => {
    container.innerHTML += `
      <div class="card-1">
        <div class="card-top">
          <div class="card-top3">
            <div class="deal-of-the-day">Deal of the Day</div>
            <div class="date">
              <div class="date2">
                <div>${card.time[0]}</div>
                <span>:</span>
                <div>${card.time[1]}</div>
                <span>:</span>
                <div>${card.time[2]}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="frm-photo-mid">
          <img class="photo-bag" src="${card.image}">
        </div>

        <div class="card-down">
          <div class="tonny-black">${card.brand}</div>
          <div class="brown-hiking-backpac">${card.title}</div>

          <div class="card-down-2">
            <div class="stars">
              ${"★".repeat(card.rating)}
            </div>
            <div class="quantity">(${card.quantity})</div>
          </div>

          <div class="card-down-3">
            <div class="_69-99">${card.priceNew}</div>
            <div class="_129-99">${card.priceOld}</div>
            <div class="card-down-4">
              <div class="_40">${card.discount}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  priceNew: "$59.99"
brand: "Nike"
image: "assets/img/new.png"
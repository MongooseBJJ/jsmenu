const menu = [{
        id: 1,
        title: "The Slothful Waffle",
        category: "breakfast",
        price: 8.00,
        img: "./images/slothwaffle.jpg",
        desc: `Signature recipe waffle with organic maple syrup and homemade whipped cream`,
    },
    {
        id: 2,
        title: "Memaw's Pecan Pie",
        category: "lunch",
        price: 10.00,
        img: "./images/pecanpiewaffle.jpg",
        desc: `topped with handmade praline pecan sauce, taste's just like Memaw makes.`,
    },
    {
        id: 3,
        title: "The Goin' Nanners",
        category: "shakes",
        price: 10.00,
        img: "./images/goin'naners.jpg",
        desc: `Topped with peanut butter, bananas, and a honey drizzle. Don't feed the bears`,
    },
    {
        id: 4,
        title: "Down-home Dessert",
        category: "breakfast",
        price: 20.99,
        img: "./images/smoreberry.jpg",
        desc: `Topped with warm nutella and toffee crumble. Dessert before breakfast`,
    },
    {
        id: 5,
        title: "Southern Sunshine",
        category: "lunch",
        price: 22.99,
        img: "./images/Southern.jpg",
        desc: `Topped with honey and cream cheese blend, fresh strawberries and blueberries with a honey drizzle`,
    },
    {
        id: 6,
        title: "The Gimmie S'more",
        category: "shakes",
        price: 18.99,
        img: "./images/smores.jpg",
        desc: `Topped with Granny's handmade country recipe sauce`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/bacon.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "The Slothy Cristo",
        category: "lunch",
        price: 12.99,
        img: "./images/slothcristo.jpg",
        desc: `Ham, turkey and swiss cheese melted between waffle bun with mixed berry sauce `,
    },
    {
        id: 9,
        title: "BBQ waffle",
        category: "shakes",
        price: 16.99,
        img: "./images/bbqwaffle.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function() {
    let displayMenu = menu.map(function(item) {
        // console.log(item);

        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
});
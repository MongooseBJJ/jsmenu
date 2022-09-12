//get only unique categories
// iterate over categories return button
// make sure to select buttons when available
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
        category: "breakfast",
        price: 10.00,
        img: "./images/pecanpiewaffle.jpg",
        desc: `topped with handmade praline pecan sauce, taste's just like Memaw makes.`,
    },
    {
        id: 3,
        title: "The Goin' Nanners",
        category: "breakfast",
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
        category: "breakfast",
        price: 22.99,
        img: "./images/Southern.jpg",
        desc: `Topped with honey and cream cheese blend, fresh strawberries and blueberries with a honey drizzle`,
    },
    {
        id: 6,
        title: "The Gimmie S'more",
        category: "breakfast",
        price: 18.99,
        img: "./images/smores.jpg",
        desc: `Topped with Granny's handmade country recipe sauce`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "lunch",
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
        category: "lunch",
        price: 16.99,
        img: "./images/bbqwaffle.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Frothy Monkey",
        category: "coffee",
        price: 5.00,
        img: "./images/frothymonkey.jpg",
        desc: `delicious coffee brewed from the freshest and dopest of monkey beans`
    }
];

const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector(".btn-container");


//load items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    const categories = menu.reduce(function(values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);
    const menuBtns = categories.map(function(category) {
        return ` <button type="button" class="filter-btn" data-id=${category}>
        ${category}
        </button>`
    }).join("");
    container.innerHTML = menuBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");
    //filter items
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
});

//dynamically display buttons
// function displayMenuBtns(menuBtns){
//     const displayBtns = categories.map(function(btn){
//         return `<button type="button" class="filter-btn" data-id=${btn.id}>
//         all
//         </button>`
//     })
// }
//dynamically display items
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        // console.log(item);
        //dynamic item
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
};
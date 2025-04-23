const products = [
    {
        id: 1,
        name: "Ароматическая свеча 'Роза'",
        price: 50,
        image: "./img/IMG_8710.png",
        description: "Ароматическая свеча 'Роза' - это идеальный способ создать уютную атмосферу в вашем доме...",
        tags: ["floral"]
    },
    {
        id: 2,
        name: "Свеча 'Лаванда'",
        price: 60,
        image: "./img/IMG_8710.png",
        description: "Свеча 'Лаванда' - это не только источник приятного аромата, но и способ расслабиться...",
        tags: ["floral"]
    },
    {
        id: 3,
        name: "Свеча 'Ваниль'",
        price: 70,
        image: "./img/IMG_8710.png",
        description: "Свеча 'Ваниль' - это классика, которая никогда не выйдет из моды...",
        tags: ["sweet"]
    },
    {
        id: 4,
        name: "Свеча 'Цитрус'",
        price: 60,
        image: "./img/IMG_8710.png",
        description: "Свеча 'Цитрус' - это яркий и освежающий аромат, который наполняет пространство энергией...",
        tags: ["fruity"]
    },
    {
        id: 5,
        name: "Свеча 'Зимняя сказка'",
        price: 15,
        image: "./img/IMG_8710.png",
        description: "Свеча 'Зимняя сказка' - это идеальный способ создать атмосферу уюта в холодные вечера...",
        tags: ["spicy"]
    },
    {
        id: 6,
        name: "Свеча 'Морской бриз'",
        price: 25,
        image: "./img/IMG_8710.png",
        description: "Свеча 'Морской бриз' подарит вам ощущение свежести и легкости...",
        tags: ["fresh"]
    },
    {
        id: 7,
        name: "Свеча 'Корица и мед'",
        price: 100,
        image: "./img/IMG_8710.png",
        description: "Свеча 'Корица и мед' наполнит ваш дом теплотой и уютом...",
        tags: ["spicy"]
    },
    {
        id: 8,
        name: "Свеча 'Фрезия'",
        price: 2000,
        image: "./img/IMG_8710.png",
        description: "Свеча 'Фрезия' обладает изысканным цветочным ароматом...",
        tags: ["floral"]
    },
    {
        id: 9,
        name: "Свеча 'Классика'",
        price: 25,
        image: "./img/IMG_8710.png",
        description: "Свеча 'Классика' — это универсальный выбор для любого интерьера...",
        tags: ["classic"]
    }
];





// function renderProducts(filtered) {
//     const $container = $("#productsContainer");
//     $container.empty();

//     if (filtered.length === 0) {
//         $container.append("<p>Нет товаров с этим ароматом.</p>");
//     }

//     filtered.forEach(product => {
//         const productHtml = `
//             <div class="product">
//                 <img src="${product.image}" alt="${product.name}">
//                 <h3>${product.name}</h3>
//                 <p>${product.price} zl</p>
//             </div>
//         `;
//         $container.append(productHtml);
//     });
// }

// $("#filter_list li").on("click", function () {
//     const selectedTag = $(this).attr("id");

    
//     $("#filter_list li").removeClass("active");
//     $(this).addClass("active");

//     if (selectedTag === "all") {
//         renderProducts(products);
//     } else {
//         const filteredProducts = products.filter(product =>
//             product.tags.includes(selectedTag)
//         );
//         renderProducts(filteredProducts);
//     }
// });


// renderProducts(products);


let currentTag = "all";            // выбранный фильтр
let currentSort = "none";          // выбранная сортировка

// функция для сортировки
function applySort(productsList, sortType) {
    const sorted = [...productsList];
    if (sortType === "price-asc") {
        return sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === "price-desc") {
        return sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
}

// общая функция фильтрации + сортировки
function updateProducts() {
    let filtered = currentTag === "all"
        ? [...products]
        : products.filter(p => p.tags.includes(currentTag));

    const sorted = applySort(filtered, currentSort);
    renderProducts(sorted);
}

// отрисовка
function renderProducts(filtered) {
    const $container = $("#productsContainer");
    $container.empty();

    if (filtered.length === 0) {
        $container.append("<p>Нет товаров с этим ароматом.</p>");
    }

    filtered.forEach(product => {
        const productHtml = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price} zl</p>
            </div>
        `;
        $container.append(productHtml);
    });
}

// обработка клика по фильтру
$("#filter_list li").on("click", function () {
    currentTag = $(this).attr("id");
    $("#filter_list li").removeClass("active");
    $(this).addClass("active");
    updateProducts();
});

// показать/скрыть меню сортировки
$("#sort_menu").on("click", function () {
    $("#sort_options").toggleClass("hidden");
});

// обработка клика по сортировке
$("#sort_options li").on("click", function () {
    currentSort = $(this).data("sort");
    $("#sort_menu").text($(this).text());
    $("#sort_options").addClass("hidden");
    updateProducts();
});

// инициализация
updateProducts();


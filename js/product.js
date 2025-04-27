

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
            <div class="product" data-id="${product.id}">
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


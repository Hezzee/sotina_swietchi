


// Сначала сортируем по убыванию id
const sortedById = [...products].sort((a, b) => b.id - a.id);

// Берем только первые 3 элемента
const lastThreeProducts = sortedById.slice(0, 3);


// Находим контейнер в HTML
const $homeProductsContainer = $('#home_products');
$homeProductsContainer.empty(); 

// Выводим каждый продукт в контейнер
lastThreeProducts.forEach(product => {
    const productHTML = `
        <div class="product" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} zl</p>
        </div>
    `;
    $homeProductsContainer.append(productHTML);
});
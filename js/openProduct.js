










$(document).on('click', '.product', function () {
    const productId = $(this).data('id'); // получили id
    const product = products.find(p => p.id === productId); // нашли продукт по id

    if (product) {
        $(".open_product").html(`
            <div class="central_product">
                <div class="product_name">
                    <h1>${product.name}</h1>
                    <div id="open_product_close"></div>
                </div>
            
                <div class="product_img">
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.description}</p>
                </div>
                <h3>${product.description}</h3>
                <h2>${product.price} zl</h2>
            </div>
        `);
    } else {
        $(".open_product").html("<p>Продукт не найден :(</p>");
    }
});


$(document).ready(function () {
    $(document).on('click', '.product', function () {
        $('.open_product').toggleClass('active');
        $('body,html').toggleClass('poshelnahuiscroll');
    });
    $(document).on('click','#open_product_close', function () {
        $('.open_product').removeClass('active');
        $('body,html').removeClass('poshelnahuiscroll');
    });
});


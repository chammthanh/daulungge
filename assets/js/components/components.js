function productItem(product, index) {
    let item = '';

    item += '<div class="product__item" data-index="' + index + '">';
    item += '<div class="product__item-inner">';
    item += '<div class="product__photo">';
    item += '<figure class="product__photo-inner hvr-flash-shape">';
    item += '<img src="' + product.photo + '" alt="' + product.name + '">';
    item += '<figcaption class="figcaption-hidden">' + product.name + '</figcaption>';
    item += '</figure>';
    item += '</div>';
    item += '<div class="product__info">';
    item += '<div class="product__info-inner">';
    item += '<div class="product__info--left">';
    item += '<h3 class="product__name text-split">' + product.name + '</h3>';
    item += '<div class="product__price">';
    item += '<span class="product__price-icon">';
    item += '<img src="assets/images/icon-tomato.png" alt="Giá">';
    item += '</span>';
    item += '<span class="product__price-number">' + product.price + ' đ</span>';
    item += '</div>';
    item += '</div>';
    item += '<div class="product__info--right">';
    item += '<button class="product__button"><i class="fa-regular fa-arrow-up-right"></i></button>';
    item += '</div>';
    item += '</div>';
    item += '</div>';
    item += '</div>';
    item += '</div>';

    return item;
}

function slideShowItem(slideshow, index) {
    let item = '';

    item += '<div class="slideshow__item d-flex flex-wrap justify-content-between align-items-center" data-index="' + index + '">';
    item += '<div class="slideshow--left">';
    item += '<div class="slideshow__info">';
    item += '<div class="slideshow__info-inner">';
    item += '<h3 class="slideshow__name text-split transition">' + slideshow.name + '</h3>';
    item += '<p class="slideshow__desc text-split">' + slideshow.desc + '</p>';
    item += '</div>';
    item += '</div>';
    item += '</div>';
    item += '<div class="slideshow--right">';
    item += '<div class="slideshow__photo">';
    item += '<figure class="slideshow__photo-inner">';
    item += '<img src="' + slideshow.photo + '" alt="' + slideshow.name + '">';
    item += '<figcaption class="figcaption-hidden">' + slideshow.name + '</figcaption>';
    item += '</figure>';
    item += '</div>';
    item += '</div>';
    item += '</div>';

    return item;
}

function criteriaItem(criteria, index) {
    let item = '';

    item += '<div class="criteria__item" data-index="' + index + '">';
    item += '<div class="criteria__item-inner">';
    item += '<div class="criteria__photo">';
    item += '<figure class="criteria__photo-inner">';
    item += '<img src="' + criteria.photo + '" alt="' + criteria.name + '">';
    item += '<figcaption class="figcaption-hidden">' + criteria.name + '</figcaption>';
    item += '</figure>';
    item += '</div>';
    item += '<div class="criteria__info">';
    item += '<div class="criteria__info-inner">';
    item += '<h3 class="criteria__name text-split transition">' + criteria.name + '</h3>';
    item += '<p class="criteria__desc text-split">' + criteria.desc + '</p>';
    item += '</div>';
    item += '</div>';
    item += '</div>';
    item += '</div>';

    return item;
}
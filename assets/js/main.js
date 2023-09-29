function loadSlideShow() {
    const slideshows = [{
        name: 'Yarn Tiệm Len Handmade Xin chào !',
        desc: 'Tiệm mình cũng cấp các sản phẩm handmade được làm từ len. Với nhu cầu lựa chọn mẫu ngày một nhiều, vì thế để đáp ứng được trọn vẹn nhất yếu cầu của khách hàng, mình đã lập nên trang này để cung cấp các mẫu cho mọi người lựa chọn. Không chỉ các mẫu có bên dưới mà mình còn nhận các mẫu theo yêu cầu. Lựa mẫu xong, liên hệ với mình qua instagram để đặt hàng nhé!',
        photo: 'assets\/images\/slideshow\/slide.png'
    }];

    if ($('.slideshow').length) {
        for (let index = 0; index < slideshows.length; index++) {
            var item = slideShowItem(slideshows[index], index);

            appendItem('.slideshow__list', item);
        }
    }
}

function loadCriteria() {
    const criterias = [{
        name: 'Lựa chọn mẫu',
        desc: 'Bạn lựa các mẫu mình đã cung cấp sẵn hoặc gửi mẫu mong muốn cho mình',
        photo: 'assets\/images\/criterias\/criteria-1.png',
    }, {
        name: 'Đặt hàng',
        desc: 'Bạn nhắn trực tiếp cho mình qua instagram và tiktok hoặc một số phương tiện mình đã cung cấp',
        photo: 'assets\/images\/criterias\/criteria-2.png',
    }, {
        name: 'Đơn hàng',
        desc: 'Vì là hàng handmade nên mình cần thời gian từ 4-7 ngày tùy loại sản phẩm. Sau khi hoàn thành mình sẽ gửi đơn liền nè!',
        photo: 'assets\/images\/criterias\/criteria-3.png',
    }];

    if ($('.criteria').length) {
        for (let index = 0; index < criterias.length; index++) {
            var item = criteriaItem(criterias[index], index);

            if (index < criterias.length - 1)
                item += '<hr class="separate">';

            appendItem('.criteria__list', item);
        }
    }

}

function loadProductIndex() {
    const products = [{
        name: 'Móc khóa hành lá 1',
        price: '30.000',
        photo: 'assets\/images\/products\/prd-1.png',
    }, {
        name: 'Móc khóa hành lá 2',
        price: '30.000',
        photo: 'assets\/images\/products\/prd-1.png',
    }, {
        name: 'Móc khóa hành lá 3',
        price: '30.000',
        photo: 'assets\/images\/products\/prd-1.png',
    }, {
        name: 'Móc khóa hành lá 4',
        price: '30.000',
        photo: 'assets\/images\/products\/prd-1.png',
    }, {
        name: 'Móc khóa hành lá 5',
        price: '30.000',
        photo: 'assets\/images\/products\/prd-1.png',
    }, {
        name: 'Móc khóa hành lá 6',
        price: '30.000',
        photo: 'assets\/images\/products\/prd-1.png',
    }];

    if ($('.product-featured').length) {
        for (let index = 0; index < products.length; index++) {
            var item = productItem(products[index], index);

            appendItem('.product__list', item);
        }
    }
}

// Ready to run
$(document).ready(function() {
    loadCriteria();
    loadProductIndex();
    loadSlideShow();
});
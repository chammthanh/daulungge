function loadSlideShow() {
    if ($('.slideshow').length) {
        for (let index = 0; index < slideshows.length; index++) {
            var item = slideShowItem(slideshows[index], index);

            appendItem('.slideshow__list', item);
        }
    }
}

function loadCriteria() {
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
    if ($('.product-featured').length) {
        for (let index = 0; index < products.length; index++) {
            var item = productItem(products[index], index);

            appendItem('.product__list', item);
        }
    }
}

function getInstaURL() {
    var randomID = getRandomInt(allInstaPostId.length);
    var base_url = 'https://www.instagram.com/p/',
        last_url = $('.ig-post blockquote').attr('data-instgrm-permalink'),
        final_url;

    final_url = base_url + allInstaPostId[randomID] + last_url;
    $('.ig-post blockquote').attr('data-instgrm-permalink', final_url);
    $('.ig-post blockquote').find('a').each(function() {
        $(this).attr('href', final_url);
    });
}

function paginationProduct() {
    var perpage = 8;
    $('.pagination__list').twbsPagination({
        totalPages: products.length / perpage,
        visiblePages: 6,
        initiateStartPageClick: true,
        href: false,
        page: null,
        pageClass: 'pagination__item',
        activeClass: 'pagination__item--active',
        anchorClass: '',
        // next: 'Next',
        // prev: 'Prev',
        onPageClick: function(event, page) {
            //fetch content and render here
            $('#page-content').text('Page ' + page + ' content here');
            if ($('.product-featured').length) {
                $('.product-featured').find('.product__list').empty();
                for (let index = (page - 1) * perpage; index < page * perpage; index++) {
                    var item = productItem(products[index], index);

                    appendItem('.product__list', item);
                }
            }
        }
    });
}

function menuResponsive() {
    if ($('.hamburger').length) {
        $button = $('.hamburger');
        $parent = $button.parents('.navigation');
        $exit = $('.close-button');

        $button.click(function() {
            $(this).toggleClass('clicked');
            $(this).parents($parent).find('nav').toggleClass('show');
        });
        $exit.click(function() {
            $button.removeClass('clicked');
            $(this).parents($parent).find('nav').removeClass('show');
        })
    }
}

// Ready to run
$(document).ready(function() {
    loadCriteria();
    // loadProductIndex();
    loadSlideShow();
    getInstaURL();
    paginationProduct();
    menuResponsive();
});
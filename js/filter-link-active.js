//--==Filter-link-active
const selector = '.new__products-heading li';

$(selector).on('click',function(){
    $(selector).removeClass('active')
    $(this).addClass('active')
});

//--==Box-filter
$(document).ready(function() {
    $('.new__products-heading li').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.new__product-box').show('1000');
        } else {
            $('.new__product-box').not('.' + value).hide('1000');
            $('.new__product-box').filter('.' + value).show('1000');
        }
    });
});
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.banner-slider', {
    direction: 'vertical',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            autoplay: true,
            allowTouchMove: false,
            cssMode: true,
            mousewheel: true,
            keyboard: true
        },
        320: {
            autoplay: true,
            allowTouchMove: false,
            cssMode: true,
            mousewheel: true,
            keyboard: true
        }
      }
});

var valueBubble = '<output class="rangeslider__value-bubble" />';

function updateValueBubble(pos, value, context) {
    pos = pos || context.position;
    value = value || context.value;
    var $valueBubble = $('.rangeslider__value-bubble', context.$range);
    var tempPosition = pos + context.grabPos;
    var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

    if ($valueBubble.length) {
        $valueBubble[0].style.left = Math.ceil(position) + 'px';
        $valueBubble[0].innerHTML = value;
    }
}

$('input[type="range"]').rangeslider({
    polyfill: false,
    onInit: function() {
        this.$range.append($(valueBubble));
        updateValueBubble(null, null, this);
    },
    onSlide: function(pos, value) {
        updateValueBubble(pos, value, this);
    }
});



$(function() {
    $(".products__box").on("click", "div:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".page")
            .find(".info__item")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });
});

$(function() {
    $(".map__tabs").on("click", "div:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".map__inner")
            .find(".map__iframe")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });
});

$(function() {
    $("#user-page").on("click", "li:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".main-container")
            .find(".user__page")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });
});

var maxFileSize = 2 * 1024 * 1024; // (байт) Максимальный размер файла (2мб)
var queue = {};
var form = $('form#uploadImages');
var imagesList = $('#uploadImagesList');
var itemPreviewTemplate = imagesList.find('.popup__item.template');
itemPreviewTemplate.removeClass('template').clone();
imagesList.find('.popup__item.template').remove();

$('#addImages').on('change', function() {
    var files = this.files;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
            alert('Фотография должна быть в формате jpg, png или gif');
            continue;
        }
        if (file.size > maxFileSize) {
            alert('Размер фотографии не должен превышать 2 Мб');
            continue;
        }
        preview(files[i]);
    }
    this.value = '';
    $('#uploadImagesList').addClass('hide');
});

// Создание превью
function preview(file) {
    var reader = new FileReader();
    reader.addEventListener('load', function(event) {
        var img = document.createElement('img');
        var itemPreview = itemPreviewTemplate.clone();
        itemPreview.find('.popup__img-wrap img').attr('src', event.target.result);
        itemPreview.data('id', file.name);
        imagesList.append(itemPreview);
        queue1[file.name] = file;
    });
    reader.readAsDataURL(file);
}

var queue1 = {};
var imagesList1 = $('#uploadImagesList1');
var itemPreviewTemplate1 = imagesList1.find('.popup__item.template');
itemPreviewTemplate1.removeClass('template').clone();
imagesList1.find('.popup__item.template').remove();

$('#addImages1').on('change', function() {
    var files = this.files;
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
            alert('Фотография должна быть в формате jpg, png или gif');
            continue;
        }
        if (file.size > maxFileSize) {
            alert('Размер фотографии не должен превышать 2 Мб');
            continue;
        }
        preview1(files[i]);
    }
    this.value = '';
    $('#uploadImagesList1').addClass('hide');
});

// Создание превью
function preview1(file) {
    var reader = new FileReader();
    reader.addEventListener('load', function(event) {
        var img = document.createElement('img');
        var itemPreview1 = itemPreviewTemplate1.clone();
        itemPreview1.find('.popup__img-wrap img').attr('src', event.target.result);
        itemPreview1.data('id', file.name);
        imagesList1.append(itemPreview1);
        queue1[file.name] = file;
    });
    reader.readAsDataURL(file);
}
$('#create').on('click', function(e) {
    e.preventDefault();
    $('.popup').css('display', 'block');
    $('.popup__content--1').show();
    $('.popup__content--2').hide();
    $('.popup__content--3').hide();
})
$('.popup__back').on('click', function(e) {
    e.preventDefault();
    $('.popup__content--1').show();
    $('.popup__content--2').hide();
})
$('.popup__close').on('click', function(e) {
    e.preventDefault();
    $('.popup').css('display', 'none');
})
$('.showPopup1').on('click', function(e) {
    e.preventDefault();
    $('.popup__content--1').hide();
    $('.popup__content--2').show();
})
$('.showPopup2').on('click', function(e) {
    e.preventDefault();
    $('.popup__content--2').hide();
    $('.popup__content--3').show();
})

$('#resDate').on('input', function() {
    var rng = $(this).val(); //rng - это Input
    var p = $('.resultrange3'); // p - абзац
    switch (+rng) {
        case 3:
            procentCalc(8.75);
            break;
        case 4:
            procentCalc(11.6);
            break;
        case 5:
            procentCalc(14.58);
            break;
        case 6:
            procentCalc(20);
            break;
        case 7:
            procentCalc(23.3);
            break;
        case 8:
            procentCalc(26.6);
            break;
        case 9:
            procentCalc(30);
            break;
        case 10:
            procentCalc(33.3);
            break;
        case 11:
            procentCalc(36.6);
            break;
        case 12:
            procentCalc(40);
            break;
        case 13:
            procentCalc(43.3);
            break;
        case 14:
            procentCalc(46.6);
            break;
        case 15:
            procentCalc(50);
            break;
        case 16:
            procentCalc(53.3);
            break;
        case 17:
            procentCalc(56.6);
            break;
        case 18:
            procentCalc(60);
            break;
    }
    p.html(rng + ' месяцев');
})

var procentCalc = function(procent) {
    var rng1 = $('#range').val(); //rng - это Input
    var procent1 = procent / 100;
    var res = rng1 * procent1;
    var res1 = res + +rng1;
    $('.kredit-procent').html(procent);
    $('.resultrange').html(rng1 + ' сум');
    $('.resultrange2').html(Math.floor(res) + ' сум');
    $('.resultrange1').html(res1 + ' сум');
}

$('#range').on('input', function() {
    var pr = $('.kredit-procent').html();
    procentCalc(+pr);
});

//  burger menu
    var sidebar = $('.sidebar');

$('document').ready(function () {
    var Closed = false;

    $('#sidebarOpen').click(function () {
        sidebar.css('transform', 'translate(0%)');
        // sidebar.css('position', 'unset');
    });

    $('#sidebarClose').click(function() {
        sidebar.css('transform', 'translate(-100%)');
        // sidebar.css('position', 'absolute');
    })
    
});

// // nav Menu

//     var navBurger = $('#navBurger');
//     var navMenu = $('#navMenu');


//     navBurger.click( function () {
//         navMenu.slideToggle();
//     })
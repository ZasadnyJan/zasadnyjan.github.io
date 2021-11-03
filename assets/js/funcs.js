var offset_header = $('#Header_hero').offset().top;
var offset_about = $('#About_hero').offset().top;
var offset_portfolio = $('#Portfolio_hero').offset().top;
var offset_contact = $('#Contact_hero').offset().top;
var offset_footer = $('#Footer').offset().top;

var $nav = $(".navbar");
var $cv = $("#cv_button");
var nav_height = $nav.height();
var $back_to_top = $('#back_to_top_button');


$(document).scroll(function () {

    position_top = $(this).scrollTop();
    position_bottom = position_top + nav_height;

    if (position_top == offset_header){
        $nav.removeClass('is-primary');
        $nav.removeClass('is-light');
        $cv.removeClass('is-light');
        $cv.addClass('is-primary');
        $back_to_top.removeClass('is-visible');

    }
    else if ((position_bottom > offset_header && position_bottom < offset_about) || (position_bottom > offset_portfolio && position_bottom< offset_contact)){
        $nav.addClass('is-light');
        $nav.removeClass('is-primary');
        $cv.removeClass('is-light');
        $cv.addClass('is-primary');
        $back_to_top.addClass('is-visible');
        
    }
    else{
        $nav.removeClass('is-light');
        $nav.addClass('is-primary');
        $cv.removeClass('is-primary');
        $cv.addClass('is-light');
        $back_to_top.addClass('is-visible');
        
    }
});

$(document).ready(function () {

    position_top = $(this).scrollTop();
    position_bottom = position_top + nav_height;

    if (position_top == offset_header) {
        $nav.removeClass('is-primary');
        $nav.removeClass('is-light');
        $cv.removeClass('is-light');
        $cv.addClass('is-primary');
        $back_to_top.removeClass('is-visible');

    }
    else if ((position_bottom > offset_header && position_bottom < offset_about) || (position_bottom > offset_portfolio && position_bottom < offset_contact)) {
        $nav.addClass('is-light');
        $nav.removeClass('is-primary');
        $cv.removeClass('is-light');
        $cv.addClass('is-primary');
        $back_to_top.addClass('is-visible');

    }
    else {
        $nav.removeClass('is-light');
        $nav.addClass('is-primary');
        $cv.removeClass('is-primary');
        $cv.addClass('is-light');
        $back_to_top.addClass('is-visible');

    }
});

var scroll_animation_time = 1000;
var scroll_margin = 40;

$($back_to_top).click(function () {
    $("html, body").animate({
        scrollTop: 0 
    }, scroll_animation_time);
});

$("#brand_button").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, scroll_animation_time);
});

$("#about_button").click(function () {
    $('html, body').animate({
        scrollTop: $("#About_hero").position().top - scroll_margin
    }, scroll_animation_time);
});

$("#portfolio_button").click(function () {
    $('html, body').animate({
        scrollTop: $("#Portfolio_hero").position().top - scroll_margin
    }, scroll_animation_time);
});

$("#contact_button").click(function () {
    $('html, body').animate({
        scrollTop: $("#Contact_hero").position().top - scroll_margin
    }, scroll_animation_time);
});

$("#reach_out_link").click(function () {
    $('html, body').animate({
        scrollTop: $("#Contact_hero").position().top - scroll_margin
    }, scroll_animation_time);
});

$("#portfolio_link").click(function () {
    $('html, body').animate({
        scrollTop: $("#Portfolio_hero").position().top - scroll_margin
    }, scroll_animation_time);
});
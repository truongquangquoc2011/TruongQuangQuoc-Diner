$(document).ready(function() {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',  // Hiển thị nội dung của một phần tử HTML
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        preloader: false,
        fixedContentPos: false
    });
});

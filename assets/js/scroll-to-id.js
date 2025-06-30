$(document).ready(function () {
    $(".instructor-tab-item").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 800); // 800ms = 0.8 giây
    });
});
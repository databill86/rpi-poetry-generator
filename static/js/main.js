function scrollBottom(){
    // $("html, body").animate({ scrollTop: $(document).height() }, "fast");
    window.scrollTo(0,document.body.scrollHeight);
}

function appendLine(text) {
    $("#poetry").append(text + "<br>");
}

function generateLine(text) {
    scrollBottom();
    appendLine(text);
}

(function poll() {
    setTimeout(function() {
        $.ajax({
            url: "/line",
            type: "GET",
            success: function(text) {
                generateLine(text);
                console.log(text);
            },
            dataType: "text",
            complete: poll,
            timeout: 200000000000
        })
    }, 500);
})();

var init_text="that nothing is solemn a cow is accepted"

for (i = 0; i < 20; i++) {
    appendLine(init_text);
}

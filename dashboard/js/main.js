$('input[type="file"]').on('invalid', function() {
    return this.setCustomValidity('برجاء ادخال صورة');
}).on('input', function() {
    return this.setCustomValidity('')
})

$('input[type="text"]').on('invalid', function() {
    return this.setCustomValidity('برجاء ملئ الحقل ');
}).on('input', function() {
    return this.setCustomValidity('')
})

$('textarea').on('invalid', function() {
        return this.setCustomValidity('برجاء ملئ الحقل ');
    }).on('input', function() {
        return this.setCustomValidity('')
    })
    // Tybe number only
function typeNumberOnly() {
    $(".number").keypress(function(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
}
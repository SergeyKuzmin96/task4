$('.feedback-btn').click(function (e) {
    e.preventDefault();

    $(`input`).removeClass('error');

    let full_name = $('input[name="full_name"]').val(),
        message = $('input[name="message"]').val();

    let formData = new FormData();
    formData.append('full_name', full_name);
    formData.append('message', message);

    $.ajax({
        url: '../controllers/newMessage.php',
        type: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        cache: false,
        data: formData,
        success(data) {

            if (data.status) {
                $('.msg').removeClass('none').text(data.message);
                $('form[name=feedbackForm]').trigger('reset');
            } else {
                $('.msg').removeClass('none').text(data.message);
                data.fields.forEach(function (field) {
                    $(`input[name="${field}"]`).addClass('error');
                });
            }
        }
    });

});


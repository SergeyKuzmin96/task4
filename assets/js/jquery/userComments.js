$('.show-user-comments').click(function (e) {
    e.preventDefault();

    let full_name = $('input[name="full_name"]').val();
    let formData = new FormData();
    formData.append('full_name', full_name);

    $.ajax({
        url: '../controllers/userCommentsController.php',
        type: 'POST',
        dataType: 'json',
        processData: false,
        contentType: false,
        cache: false,
        data: formData,

        success(data) {
            if (data.status) {

                $('form[name=feedback-form]').trigger('reset');
                $('#comments').html(data.comments);

                for (let i = 0; i < data.comments.length; i++) {
                    $('#comments').append(data.comments[i].full_name + ' - ' + data.comments[i].message + '<br>');
                }
            } else {
                $('.msg').removeClass('none').text(data.message);
            }
        }
    });
});

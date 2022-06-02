$(document).ready(function () {
    let count = 0;
    $('.show-comments-btn').click(function (e) {
        e.preventDefault();
        count = count + 2;
        $.ajax({
            url: '../controllers/getComments.php',
            type: 'POST',
            dataType: 'json',
            data: {
                count: count
            },
            success(data) {
                if (data.status) {
                    console.log(data.comments);

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
});



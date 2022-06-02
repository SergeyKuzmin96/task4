document.forms.feedbackForm.onsubmit = function (e) {
    e.preventDefault();

    document.getElementById('full_name').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    let full_name = document.forms.feedbackForm.full_name.value;
    let message = document.forms.feedbackForm.message.value;
    full_name = encodeURIComponent(full_name);
    message = encodeURIComponent(message);
    let data = 'full_name=' + full_name + '&message=' + message;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '../../controllers/newMessage.php');
    xhr.setRequestHeader('Content-Type',
        'application/x-www-form-urlencoded')
    xhr.send(data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);

            let msg = document.getElementById('response');
            msg.classList.remove('none');
            msg.textContent = data.message;

            if (data.status) {
                document.forms.feedbackForm.reset();
            } else {
                data.fields.forEach(function (field) {
                    document.getElementById(field).classList.add('error');
                });
            }
        }
    }
}

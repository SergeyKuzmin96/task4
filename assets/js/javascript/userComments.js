let button = document.querySelector('.show-user-comments');

button.addEventListener('click', function (e) {
    e.preventDefault();

    let full_name = document.forms.userCommentsForm.full_name.value;
    full_name = encodeURIComponent(full_name);
    let data = 'full_name=' + full_name;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '../../controllers/userCommentsController.php');
    xhr.setRequestHeader('Content-Type',
        'application/x-www-form-urlencoded');
    xhr.send(data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            let data = JSON.parse(xhr.responseText);

            if (data.status) {

                let resp = document.getElementById('comments');
                resp.innerHTML = getArrayDataFromServer(data.comments);
                document.forms.userCommentsForm.reset();
            } else {

                let msg = document.getElementById('response');
                msg.classList.remove('none');
                msg.textContent = data.message;
            }
        }
    }

});

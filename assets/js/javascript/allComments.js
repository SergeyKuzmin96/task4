let button = document.querySelector('.show-comments-btn');
let count = 0;
button.addEventListener('click', function (e) {
    e.preventDefault();
    count = count + 2;
    let data = 'count=' + count;
    let xhr = new XMLHttpRequest();

    xhr.open('POST', '../../controllers/getComments.php');
    xhr.setRequestHeader('Content-Type',
        'application/x-www-form-urlencoded')
    xhr.send(data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);

            if (data.status) {

                let resp = document.getElementById('comments');
                resp.innerHTML = getArrayDataFromServer(data.comments);
            } else {

                let msg = document.getElementById('response');
                msg.classList.remove('none');
                msg.textContent = data.message;
            }
        }
    }
});
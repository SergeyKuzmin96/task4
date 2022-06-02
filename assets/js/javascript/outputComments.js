function getArrayDataFromServer(data) {
    let comments = '';
    for (let i = 0; i < data.length; i++) {
        comments += data[i].full_name + ' - ' + data[i].message + '<br>';
    }
    return comments;
}
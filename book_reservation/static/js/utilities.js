
var forms = document.getElementsByClassName('needs-validation');

var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});


function showAlert(type, message) {
    $.notify(message, type);
}
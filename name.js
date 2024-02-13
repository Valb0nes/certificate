
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }
    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');

        nameOutput.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');

        // let info = document.getElementById('info');
        // info.innerText = eventData.target.value;
        changeCert(eventData.target.value);
    });

    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault();
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        let nameOutput = document.getElementById('nameOutput');
        // let info = document.getElementById('info');
        nameOutput.innerText = formData.name;
        // info.innerText = formData.type;

    });
    console.log("Ready");

    if (document.getElementById('print') !== null) {
        let printElement = document.getElementById('print');
        printElement.addEventListener('click', function (e) {
            window.print();
            console.log("invoke print");
        });
    }

    let theDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", day:"numeric"})
    let dateBox = document.getElementById('Date');
    dateBox.innerText = theDate;


    function changeCert(value) {
        let certificate = document.getElementById('certificate');
        certificate.classList = "";
        switch (value) {
            case 'certificate1':
                certificate.classList.add('certificate1');
                break;
            case 'certificate2':
                certificate.classList.add('certificate2');
                break;
            case 'certificate3':
                certificate.classList.add('certificate3');
                break;
        }
    }
});







function processForm(form) {

}
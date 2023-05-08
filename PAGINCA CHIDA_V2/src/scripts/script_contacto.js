function sendMail() {
    var params = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        mensaje: document.getElementById("mensaje").value,
    };
    const serviceID = "service_aaivleh";
    const templateID = "template_pcxfirb";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("nombre").value = "";
            document.getElementById("email").value = "";
            document.getElementById("telefono").value = "";
            document.getElementById("mensaje").value = "";
            console.log(res);
            alert("Tu mensaje fue enviado correctamente!!");
        })
        .catch((err) => console.log(err));
}
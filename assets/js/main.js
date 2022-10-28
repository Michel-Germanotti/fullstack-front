//Ici avec DOMContentLoaded, on s'assure que toute la page soit bien chargée
document.addEventListener("DOMContentLoaded",  () => {
    console.log("document loaded");

    document
    .getElementById('contact-form')
    .addEventListener('submit', async (event) => {
        //Vient empêcher que le formulaire refresh la page
        event.preventDefault();

        const data = {
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        };

        console.log(data);
        // Envoyer à un serveur les informations du formulaire
        const response = await axios.post("hhttps://site--fullstack-back--ycqm6b4tdwlg.code.run/", data);
      console.log(response);
        // console.log(response.data);
        alert("Merci de votre réponse !");
    });
});
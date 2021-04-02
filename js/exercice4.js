/* Pour supprimer toutes les informations d'un formulaire rempli manuellement
function clearForm() {
    document.getElementById("myForm").reset();
}
*/
function clearForm() {
    let emptyField=""
    document.getElementById('firstname').value=emptyField;
    document.getElementById('lastname').value=emptyField;
    document.getElementById('age').value=emptyField;
}
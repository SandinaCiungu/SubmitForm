const butonSubmit = document.getElementById("submit-btn");
butonSubmit.addEventListener("click", apasaSubmit);

const prenume = document.querySelector("#prenume");
prenume.addEventListener("input", modificaInput);

const nume = document.querySelector("#nume");
nume.addEventListener("input", modificaInput);

const gender = document.querySelector("#M");

const mesaj = document.querySelector("#mesaj");
mesaj.addEventListener("input", modificaInput);

const succes = document.querySelector(".alert");
const numele = document.querySelector("#numelePersoanei");

function apasaSubmit() {
  let err = 0;
  if (prenume.value.trim().length == 0) {
    alert('Please fill the "First Name" field!');
    prenume.classList.add("rosu");
    err++;
  }
  if (nume.value.trim().length == 0) {
    alert('Please fill the "Last Name" field!');
    nume.classList.add("rosu");
    err++;
  }
  if (mesaj.value.trim().length == 0) {
    alert('Please fill the "Message" field!');
    mesaj.classList.add("rosu");
    err++;
  }
  if (err == 0) {
    numele.innerHTML = prenume.value;
    succes.hidden = false;
    console.log(
      "Nume: " +
        nume.value +
        ", Prenume: " +
        prenume.value +
        ", Gen: " +
        (gender.checked == true ? "M" : "F") +
        ", Mesaj: " +
        mesaj.value
    );
  }
}

function modificaInput(event) {
  event.target.classList.remove("rosu");
}

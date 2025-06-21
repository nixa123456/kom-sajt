// Funkcija koja se poziva kada korisnik pokuša da pošalje formu
document.getElementById('form-contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Sprečava slanje forme dok se ne izvrši validacija

    var form = this;
    var isValid = true;

    // Validacija za svako polje
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');

    // Provera imena i prezimena (ne može biti prazno)
    if (!name.value.trim()) {
      isValid = false;
      name.classList.add('is-invalid');
    } else {
      name.classList.remove('is-invalid');
    }

    // Provera emaila (mora biti u ispravnom formatu)
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
      isValid = false;
      email.classList.add('is-invalid');
    } else {
      email.classList.remove('is-invalid');
    }

    // Provera broja telefona (mora biti samo brojevi, i može biti u formatu npr. 381123456789 ili 062555333)
    var phonePattern = /^(?:381|0)[0-9]{8,9}$/; // Broj treba da počne sa +381 ili 0 i bude 8 do 9 cifara
    if (!phonePattern.test(phone.value)) {
    isValid = false;
    phone.classList.add('is-invalid');
    } else {
    phone.classList.remove('is-invalid');
    }

    // Provera naslova poruke (ne može biti prazno i mora imati barem 3 karaktera)
    if (!subject.value.trim() || subject.value.trim().length < 3) {
      isValid = false;
      subject.classList.add('is-invalid');
    } else {
      subject.classList.remove('is-invalid');
    }

    // Provera poruke (mora imati barem 6 karaktera)
    if (!message.value.trim() || message.value.trim().length < 6) {
      isValid = false;
      message.classList.add('is-invalid');
    } else {
      message.classList.remove('is-invalid');
    }

    // Ako je forma validna, šaljemo je
    if (isValid) {
      form.submit();
    } else {
      // Ako nije validna, dodajemo poruke greške (ako nisu već dodate)
      alert('Molimo vas da ispunite sve obavezne informacije.');
    }
  });
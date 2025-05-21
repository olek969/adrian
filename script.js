function sprawdz() {
    const input = document.getElementById("haslo").value.trim().toLowerCase();
    const wynik = document.getElementById("wynik");
    const gallery = document.getElementById("gallery");

    const poprawneHasla = [
        "brawl stars"
    ];

    if (poprawneHasla.includes(input)) {
        wynik.textContent = "Poprawnie! Witaj w kolejnej warstwie...";
        wynik.style.color = "#ff0";
        document.getElementById("container").style.display = "none";

        // Ładowanie zdjęć z folderu images
        const maxImages = 10; // Sprawdzi do 10 zdjęć
        for (let i = 1; i <= maxImages; i++) {
            const img = new Image();
            img.src = `images/brawl${i}.jpg`;
            img.alt = `Postać Brawl Stars ${i}`;
            img.onerror = () => {}; // Ignoruj błędy braku pliku
            img.onload = () => gallery.appendChild(img);
        }

        document.getElementById("glitch").classList.remove("hidden");
    } else {
        wynik.textContent = "Spróbuj ponownie...";
        wynik.style.color = "#f00";
    }
}
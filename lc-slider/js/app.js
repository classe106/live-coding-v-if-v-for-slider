/* 
MILESTONE 1
Creiamo un oggetto Movie, con le seguenti proprieta: 
- images che conterra una lista di immagini
- title che conterra il titolo del film
- category che conterra la categoria del film
- length che conterra la lunghezza del film in minuti


MILESTONE 2
Creare il markup ed utilizzare le direttive vue per stampare a schermo il film in una card.
Mostrando la prima immagine, il titolo, la categoria e la lunghezza

MILESTONE 3
Aggiungiamo due frecce al markup e utilizziamole per rendere dimanico lo slider. 
Al click sulla freccia di destra scorriamo all'immagine successiva
Al click sulla freccia di sinistra scorriamo all'immagine precedente


MILESTONE 4
Aggiungiamo le miniature delle altre immagini presenti per il film.
Evidenziamo l'immagine selezionata, magari con un border.
Quando clicchiamo sulle frecce la miniatura evidenziata cambia.

*/
const { createApp } = Vue;

createApp({
    data() {
        return {
            currentIndex: 0,
            movie: {
                images: [
                    "https://image.tmdb.org/t/p/w500/viBnf0IwIkCgwc2eQm8NI6k1Ot6.jpg",
                    "https://image.tmdb.org/t/p/w500/9fYzW4aFsrhMP20VKgQRjMjS6lF.jpg",
                    "https://image.tmdb.org/t/p/w500/61Uy5iri4DaCImQhILj0jVTHMwq.jpg",
                    "https://image.tmdb.org/t/p/w500/uqhLNJHMg7YGnlMGbjlx090hP73.jpg",
                    "https://image.tmdb.org/t/p/w500/gfgbx5qSRqKiIk0TwWeVIlFp1vV.jpg"
                ],
                title: "The Office",
                category: "Comedy",
                length: 20
            }
        }
    },
    methods: {
        nextImage() {
            this.currentIndex++;
            if (this.currentIndex > this.movie.images.length - 1) {
                this.currentIndex = 0;
            }
        },
        prevImage() {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.movie.images.length - 1;
            }
        },
        changeImage(thumbIndex) {
            console.log("Ho cliccato sulla thumb ad indice ", thumbIndex)
            this.currentIndex = thumbIndex;
        }
    },
    mounted() {
        console.log("VUE OK");
    }
}).mount('#app');
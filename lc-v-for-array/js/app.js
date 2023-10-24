const { createApp } = Vue

createApp({
    data() {
        return {
            posters: [
                "https://image.tmdb.org/t/p/w500/viBnf0IwIkCgwc2eQm8NI6k1Ot6.jpg",
                "https://image.tmdb.org/t/p/w500/9fYzW4aFsrhMP20VKgQRjMjS6lF.jpg",
                "https://image.tmdb.org/t/p/w500/61Uy5iri4DaCImQhILj0jVTHMwq.jpg",
                "https://image.tmdb.org/t/p/w500/uqhLNJHMg7YGnlMGbjlx090hP73.jpg",
            ]
        }
    }
}).mount('#app');
const { createApp } = Vue

createApp({
    data() {
        return {
            imgUrl: "https://image.tmdb.org/t/p/w500/viBnf0IwIkCgwc2eQm8NI6k1Ot6.jpg",
            show: false,
            userText: ''
        }
    },
    methods: {
        toggleImage() {
            if (this.show === true) {
                this.show = false;
            } else {
                this.show = true;
            }

            // this.show = !this.show
        }
    }
}).mount('#app')

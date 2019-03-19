var app = new Vue({
    el: '#root',

    data: {
        title: 'The title',
        className: 'colour-red',
        isLoading: false
    },

    methods: {
        toggleClass() {
            this.isLoading = true;
        }
    }

});

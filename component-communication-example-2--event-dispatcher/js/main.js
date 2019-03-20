// window.Event = new Vue();

window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback)
    }
}

Vue.component('coupon', {
    template: '<input placeholder="Coupon" @blur="onCouponApplied">',

    methods: {
        onCouponApplied() {
            // Event.$emit('applied');
            Event.fire('applied');
        }
    }
});

var app = new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied() {}
    },

    created() {
        // Event.$on('applied', () => alert('Handling it'))
        Event.listen('applied', () => alert('Handling it'))
    }

});

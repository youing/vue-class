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
    template: `
        <input placeholder="input your" @blur="applyCoupon">
    `,
    methods: {
        applyCoupon() {
            Event.fire('apply');
        }
    }
})
new Vue({
    el: '#root',
    data: {
        applyed: false
    },
    created() {
        Event.listen('apply', () => console.log(1111))
    }
})
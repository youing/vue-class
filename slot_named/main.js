Vue.component('model',{
    template:
    `
        <div class="model">
            <div class="header">
                <slot name="header"></slot>
            </div>
            <div class="body">
                <slot name="body"></slot>
            </div>
        </div>
    `
});

new Vue({
    el: '#root'
})
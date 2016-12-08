Vue.component('message',{
    props: ['title','body'],
    template: `
        <div v-show="isVisible">

            <h2>{{ title }}<button @click="hideModel">X</button></h2>
            <div>
                {{ body }}
            </div>
        
        </div>
    `,
    data() {
        return {
            isVisible: true
        }
    },
    methods:{
        hideModel(){
            this.isVisible =  false
        }
    }
})

new Vue({
    el: '#root'
})
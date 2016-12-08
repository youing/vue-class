Vue.component('model',{
    props:['title'],
    template: `
    <div class="model">
        <h2>{{ title }}</h2>
        <button @click="$emit('close')" class="close">X</button>
    </div>
    
    `
})
new Vue({
    el:'#root',
    data:{
        showModel:false
    }
})
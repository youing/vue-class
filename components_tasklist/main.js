Vue.component('task-list',{
    template: `
        <div>
            <task v-for="task in tasks">{{ task.name }}</task>
        </div>        
    `,
    data(){
        return {
            tasks:[
                { name: 'aaa',completed:true },
                { name: 'bbb',completed:false },
                { name: 'ccc',completed:false }
            ]
        }
    }
})


Vue.component('task',{
    template: '<li><slot></slot></li>'
})


new Vue({
    el: '#root'
})
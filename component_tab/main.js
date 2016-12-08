Vue.component('tabs',{
    template: `
        <div>
            <div class="tabs">
                <ul>
                   <a v-for="tab in tabs" :class="{ 'is-active':tab.isActive }" @click="selectTab(tab)" :href="tab.href">{{ tab.title }}</a>
                </ul>     
            </div>
            <div class="tabs-details">
                <slot></slot>
            </div>
        </div>
    `,
    data(){
        return {
            tabs:[]
        }
    },
    mounted() {
        console.log(this.$children)
    },
    created(){
        this.tabs = this.$children;
    },
    methods:{
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.title == selectedTab.title)
            })
        }
    }
});

Vue.component('tab',{
    template: `
       <div v-show="isActive">
          <slot></slot>

        </div>
    `,
    props:{
        title:{
            required: true
        },
        selected:{
            default: false
        }
    },
    data(){
        return {
            isActive:false
        }
    },
    computed:{
        href(){
            return '#' + this.title.toLowerCase();
        }
    },
    mounted(){
        this.isActive = this.selected
    }
})

new Vue({
    el: '#root'
})
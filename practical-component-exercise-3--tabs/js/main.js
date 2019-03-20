Vue.component('tabs', {

    template: `
    <div>
        <ul class="list-reset flex border-b">
            <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                <a :href="tab.href" @click="selectTab(tab)" class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold">{{ tab.name }}</a>
            </li>
        </ul>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,

    data() {
        return {
            tabs: []
        }
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }

});

Vue.component('tab', {

    template: `
        <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: {
            required: true
        },

        selected: {
            default: false
        }
    },

    data() {

        return  {
            isActive: false
        };

    },

    computed: {
            href(){
                return '#' + this.name.toLowerCase().replace(/ /g, '-');
            }
    },

    mounted() {
        this.isActive = this.selected;
    }


});

var app = new Vue({
    el: '#root'
});

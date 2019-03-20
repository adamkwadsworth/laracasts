Vue.component('task-list', {

    template: `
        <div>
            <task v-for="task in tasks">{{task.task}}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                { task: 'one', complete: true },
                { task: 'two', complete: false },
                { task: 'three', complete: false },
                { task: 'four', complete: true },
                { task: 'five', complete: true }
            ]
        };
    }

});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

var app = new Vue({
    el: '#root'
});

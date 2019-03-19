var app = new Vue({
    el: '#root',

    data: {
        // message: 'Hello Vue!',

        bucketList: [
            {
                idea: 'Abseil Down a Waterfall',
                done: true
            },
            {
                idea: 'Air Boat Across an Alligator Infested Swamp',
                done: false
            },
            {
                idea: 'Arrive By Seaplane',
                done: false
            },
            {
                idea: 'Catch a Wave Surfing',
                done: true
            },
            {
                idea: 'Dog Sled',
                done: false
            },
            {
                idea: 'Ride a Zip Line Ride',
                done: true
            },
            {
                idea: 'Eat Fire',
                done: false
            },
            {
                idea: 'Explore a Cave',
                done: true
            },
            {
                idea: 'Flip on a Trampoline',
                done: true
            },
            {
                idea: 'Flyboarding',
                done: false
            }
        ]

    },

    computed: {
        // reversedMessage() {
        //     return this.message.split('').reverse('').join('');
        // }

        bucketsTodo() {
            return this.bucketList.filter(bucket => ! bucket.done);

            // this.tasks.filter(function(task) {
            //     return ! task.completed;
            // });
        }
    }



});

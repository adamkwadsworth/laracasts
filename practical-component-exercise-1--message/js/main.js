Vue.component('member', {
    props: ['name', 'role', 'avatar'],

    data() {
        return {
            isVisible: true
        }
    },

    template: `
        <div class="bg-white mx-auto max-w-sm shadow rounded-lg overflow-hidden mb-4" v-show="isVisible">
          <div class="sm:flex sm:items-center px-6 py-4">
            <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" :src="avatar" alt="">
            <div class="text-center sm:text-left sm:flex-grow">
              <div class="mb-4">
                <p class="text-xl leading-tight">{{ name }}</p>
                <p class="text-sm leading-tight text-grey-dark">{{ role }}</p>
              </div>
              <div>
                <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white" @click="hideModal">Delete {{ name }}</button>
              </div>
            </div>
          </div>
        </div>
    `,

    methods: {

        hideModal() {

            this.isVisible = false;

        }

    }
});

var app = new Vue({
    el: '#root'
});

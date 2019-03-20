Vue.component('modal', {
    template: `
    <div class="h-screen w-screen flex flex-col items-center justify-center bg-teal-lightest font-sans">
        <div class="h-screen w-full absolute flex items-center justify-center bg-modal">
            <div class="bg-white rounded shadow p-8 m-4 max-w-xs max-h-full text-center overflow-y-scroll">
                <div class="mb-4">
                    <slot></slot>
                </div>
                
                <div class="flex justify-center">
                    <button class="flex-no-shrink text-white py-2 px-4 rounded bg-teal hover:bg-teal-dark" @click="$emit('close')">Close</button>
                </div>
            </div>
        </div>
    </div>
    4`
})

var app = new Vue({
    el: '#root',

    data: {
        showModal: false
    }
});

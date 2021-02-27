app.component('photo-items', {
    props: {
        task: Object,
    },
    template:
        /*html*/
        `
            <div class="inline">
                <img v-bind:src="task.url" @click="whenLike(task.no)" class="h-56 l-56 my-3 ">
            </div>
            <div class="align-middle flex justify-center">
                <span v-show="task.done" class="material-icons text-red-600 ml-3" @click="whenLike(task.no)">favorite</span>
                <p class="font-semibold"> {{ task.type }} </p>
            </div>
        `,
    methods: {
        whenLike(no) {
            this.$emit("when-like", no);
        },
    },
})
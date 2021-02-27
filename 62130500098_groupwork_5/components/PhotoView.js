app.component('photo-view', {
    props: {
        modal: Boolean,
        imagemodal: String
    },
    template:
        /*html*/
        `
    <div>
    <div v-if="modal" class="flex items-center animated fadeIn fixed z-50 overflow-auto bg-smoke-dark inset-0">
        <div class="animated fadeInUp fixed shadow-inner max-w-md md:relative pin-b pin-x align-top m-auto justify-end  
        p-8 bg-white  w-full  flex flex-col">
            <img class="my-auto " :src="imagemodal" alt="">
            <div class="inline-flex justify-center">
                <button @click="whenModal" class="bg-grey-lighter flex-1 border-2 md:flex-none border-red-300 ml-2 
                    hover:bg-green-lightest text-grey-400 font-medium py-3 px-3 rounded">Close</button>
            </div>
        </div>
    </div>
    </div>`,
    methods: {
        whenModal() {
            this.$emit("when-modal");
        },
    },
})
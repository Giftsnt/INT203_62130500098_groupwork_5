app.component('photo-search', {
    props: {
        from: Object
    },
    template:
    /*html*/
    `<div>
        <div class="searchForm" v-if="from.hiddenSearch == true">
            <button v-on:click="search" :class="{show: from.hiddenSearch == false}"><span class="material-icons">search</span></button>
        </div>
        <div class="searchForm" v-if="from.hiddenSearch == false">
            <input class="ml-2 p-1 w-44 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
                type="text" placeholder="Please enter text for searching photos" v-model="from.textSearch">
            <button class="ml-2 p-1 rounded-sm focus:outline-none bg-blue-500" v-on:click="cancle">Cancel</button>
        </div>
    </div>`,
    methods: {
        search() {
            this.from.hiddenSearch = !this.from.hiddenSearch;
        },
        cancle() {
            (this.from.hiddenSearch = !this.from.hiddenSearch), (this.from.textSearch = "");
        },
    },
})
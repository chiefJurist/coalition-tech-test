<script>
export default {
    data() {
        return {
            result: '',
            diagList: ''
        }
    },

    mounted() {
        //Fetching The Data
        fetch('/data/db.json')
            //fetching the respose
            .then((response) => response.json())
            //fetching the actual data and populating the result property
            .then((data) => {
                ;(this.result = data), (this.diagList = this.result[0].diagnostic_list)
            })
            //catching errors
            .catch((error) => console.error(error))
    }
}
</script>

<template>
    <div class="my-5 d-list-gen-con">
        <!--Diagnostic List Heading-->
        <div class="d-list-header">Diagnostic List</div>
        <div class="d-list-header-con">
            <span class="font-bold d-list-prob">Problem/Diagnosis</span>
            <span class="font-bold d-list-des">Description</span>
            <span class="font-bold d-list-stat">Status</span>
        </div>

        <!--Diagnostic List-->
        <div class="relative">
            <!-- Vertical Progress Bar -->
            <div class="progress-bar-con">
                <div class="progress-bar" style="height: 55%"></div>
            </div>
            <div class="d-con" v-for="list in diagList" :key="list">
                <span class="d-list-prob"> {{ list.name }}</span>
                <span class="d-list-des">{{ list.description }}</span>
                <span class="d-list-stat">{{ list.status }}</span>
            </div>
        </div>
    </div>
</template>

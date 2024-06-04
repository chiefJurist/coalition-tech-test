<script>
export default {
    data() {
        return {
            result: '',
            labResult: ''
        }
    },

    mounted() {
        //Fetching The Data
        fetch('/data/db.json')
            //fetching the respose
            .then((response) => response.json())
            //fetching the actual data and populating the result property
            .then((data) => {
                ;(this.result = data), (this.labResult = this.result[0].lab_results)
            })
            //catching errors
            .catch((error) => console.error(error))
    }
}
</script>

<template>
    <div class="my-5 labres-gen-con">
        <!--Lab Result Header-->
        <div class="labres-header">Lab Results</div>

        <!--Lab Result-->
        <div class="relative">
            <!-- Vertical Progress Bar -->
            <div class="progress-bar-con">
                <div class="progress-bar" style="height: 20%"></div>
            </div>
            <!--Lab Result Body-->
            <div
                class="labres-con"
                v-for="result in labResult"
                :key="result"
                :class="{ labresActive: result == 'CT Scans' }"
            >
                <span>{{ result }}</span>
                <span class="cursor-pointer">
                    <img src="/public/img/download.png" alt="download" />
                </span>
            </div>
        </div>
    </div>
</template>

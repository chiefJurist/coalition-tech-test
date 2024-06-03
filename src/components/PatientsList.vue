<script>
export default {
    data() {
        return {
            patients: [
                {
                    name: 'Emily Williams',
                    details: 'Female, 18',
                    img: '/img/emily-williams.png',
                    isActive: false
                },
                {
                    name: 'Ryan Johnson',
                    details: 'Male, 45',
                    img: '/img/ryan-johnson.png',
                    isActive: false
                },
                {
                    name: 'Brandon Mitchell',
                    details: 'Male, 36',
                    img: '/img/brandon-mitchell.png',
                    isActive: false
                },
                {
                    name: 'Jessica Taylor',
                    details: 'Female, 28',
                    img: '/img/jessica-taylor2.png',
                    isActive: true
                },
                {
                    name: 'Samantha Johnson',
                    details: 'Female, 56',
                    img: '/img/samantha-johnson.png',
                    isActive: false
                },
                {
                    name: 'Ashley Martinez',
                    details: 'Female, 54',
                    img: '/img/ashley-martinez.png',
                    isActive: false
                },
                {
                    name: 'Olivia Brown',
                    details: 'Female, 32',
                    img: '/img/olivia-brown.png',
                    isActive: false
                },
                {
                    name: 'Tyler Davis',
                    details: 'Male, 19',
                    img: '/img/tyler-davis.png',
                    isActive: false
                },
                {
                    name: 'Kevin Anderson',
                    details: 'Male, 30',
                    img: '/img/kevin-anderson.png',
                    isActive: false
                },
                {
                    name: 'Dylan Thompson',
                    details: 'Male, 36',
                    img: '/img/dylan-thompson.png',
                    isActive: false
                },
                {
                    name: 'Nathan Evans',
                    details: 'Male, 58',
                    img: '/img/nathan-evans.png',
                    isActive: false
                },
                {
                    name: 'Mike Nolan',
                    details: 'Male, 31',
                    img: '/img/mike-nolan.png',
                    isActive: false
                }
            ]
        }
    }
}
</script>

<template>
    <div class="p-list-gen-con">
        <!--Heading-->
        <div class="p-list-header">
            <span class="p-list-header-text">Patients</span>
            <img src="/img/search.png" alt="search" />
        </div>

        <!--Patients Container-->
        <div class="relative -pr-2">
            <!-- Vertical Progress Bar -->
            <div class="progress-bar-con">
                <div class="progress-bar" style="height: 15%"></div>
            </div>

            <!--Patient List-->
            <div
                class="p-list-con"
                v-for="patient in patients"
                :class="{ pBackground: patient.isActive }"
            >
                <div><img :src="patient.img" alt="patient-image" /></div>
                <div>
                    <div class="p-name">{{ patient.name }}</div>
                    <div class="p-details">{{ patient.detail }}</div>
                </div>
                <div><img src="/img/more-horz.png" alt="more-horizontal" /></div>
            </div>
        </div>
    </div>
</template>

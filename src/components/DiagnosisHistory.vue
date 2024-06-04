<script lang="ts">
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Line } from 'vue-chartjs'

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        // eslint-disable-next-line vue/no-reserved-component-names
        Line
    },
    data() {
        return {
            result: '',
            diagHist: '',
            respiratoryRate: '',
            respiratoryRateLevel: '',
            temperature: '',
            temperatureLevel: '',
            heartRate: '',
            heartRateLevel: '',
            systolic: '',
            systolicLevel: '',
            systolicArray: [],
            diastolic: '',
            diastolicLevel: '',
            diastolicArray: [],

            //for the chart
            data: {
                labels: [
                    'Oct, 2023',
                    'Nov, 2023',
                    'Dec, 2023',
                    'Jan, 2024',
                    'Feb, 2024',
                    'Mar, 2024'
                ],
                datasets: [
                    {
                        label: 'Diastolic',
                        data: [],
                        borderColor: '#7E6CAB',
                        fill: true,
                        cubicInterpolationMode: 'monotone',
                        tension: 0.7,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        borderWidth: 2,
                        pointBackgroundColor: '#7E6CAB'
                    },
                    {
                        label: 'Systolic',
                        data: [],
                        borderColor: '#E66FD2',
                        fill: true,
                        cubicInterpolationMode: 'monotone',
                        tension: 0.7,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        borderWidth: 2,
                        pointBackgroundColor: '#E66FD2'
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: false,
                        min: 60,
                        max: 180,
                        ticks: {
                            stepSize: 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false // Hide the legend entirely
                    }
                }
            }
        }
    },

    mounted() {
        //Fetching The Data
        fetch('/data/db.json')
            //fetching the response
            .then((response) => response.json())
            //fetching the actual data and populating the result property
            .then((data) => {
                this.result = data
                this.diagHist = this.result[0].diagnosis_history
                this.respiratoryRate = this.diagHist[0].respiratory_rate.value
                this.respiratoryRateLevel = this.diagHist[0].respiratory_rate.levels
                this.temperature = this.diagHist[0].temperature.value
                this.temperatureLevel = this.diagHist[0].temperature.levels
                this.heartRate = this.diagHist[0].heart_rate.value
                this.heartRateLevel = this.diagHist[0].heart_rate.levels
                this.systolic = this.diagHist[0].blood_pressure.systolic.value
                this.systolicLevel = this.diagHist[0].blood_pressure.systolic.levels
                this.diastolic = this.diagHist[0].blood_pressure.diastolic.value
                this.diastolicLevel = this.diagHist[0].blood_pressure.diastolic.levels

                //Populating the array for the chart
                for (let index = this.diagHist.length - 1; index >= 0; index--) {
                    this.diastolicArray.push(this.diagHist[index].blood_pressure.diastolic.value)
                    this.systolicArray.push(this.diagHist[index].blood_pressure.systolic.value)
                }

                // Update the chart data
                this.data = {
                    ...this.data,
                    datasets: [
                        {
                            ...this.data.datasets[0],
                            data: this.diastolicArray
                        },
                        {
                            ...this.data.datasets[1],
                            data: this.systolicArray
                        }
                    ]
                }

                console.log(this.data.datasets[0].data)
                console.log(this.data.datasets[1].data)
            })
            //catching errors
            .catch((error) => console.error(error))
    }
}
</script>

<template>
    <!--General Container-->
    <div class="text-custom-two font-manrope px-5 py-12 bg-white rounded-2xl">
        <!--Header-->
        <div class="font-bold text-lg mb-6">Diagnosis History</div>
        <!--Details Container-->
        <div class="grid grid-cols-3 gap-10">
            <!--Blood Pressure-->
            <div class="bg-custom-five flex justify-between py-5 px-3 rounded-xl col-span-3">
                <div class="basis-9/12">
                    <div class="flex justify-between items-center">
                        <div class="font-bold">Blood Pressure</div>
                        <div class="flex justify-between items-center gap-3 mr-6 text-sm">
                            <span>Last 6 Months</span>
                            <span><img src="/img/expand-more.png" alt="" /></span>
                        </div>
                    </div>
                    <Line :data="data" :options="options" />
                </div>
                <div class="basis-3/12">
                    <div class="border-b border-custom-one">
                        <div class="legend-con">
                            <div class="sys-legend"></div>
                            <div class="legend-text">Systolic</div>
                        </div>
                        <div class="value-text">{{ systolic }}</div>
                        <div class="legend-remark-con">
                            <img src="/img/arrow-up.png" alt="arrow-up" />
                            <span class="text-xs">{{ systolicLevel }}</span>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="legend-con">
                            <div class="dias-legend"></div>
                            <div class="legend-text">Diastolic</div>
                        </div>
                        <div class="value-text">{{ diastolic }}</div>
                        <div class="legend-remark-con">
                            <img src="/img/arrow-down.png" alt="arrow-down" />
                            <span class="text-xs">{{ diastolicLevel }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!--Respiratory Rate-->
            <div class="bg-custom-eight diagnosis-con">
                <div><img src="/img/respiratory-rate.png" alt="respiratory-rate" /></div>
                <div class="diagnosis-type">Respiratory Rate</div>
                <div class="diagnosis-type">{{ respiratoryRate }} bpm</div>
                <div class="diagnosis-remark">{{ respiratoryRateLevel }}</div>
            </div>
            <!--Temperature-->
            <div class="bg-custom-nine diagnosis-con">
                <div><img src="/img/temperature.png" alt="temperature" /></div>
                <div class="diagnosis-type">Temperature</div>
                <div class="diagnosis-reading">{{ temperature }} °F</div>
                <div class="diagnosis-remark">{{ temperatureLevel }}</div>
            </div>
            <!--Heart Rate-->
            <div class="bg-custom-ten diagnosis-con">
                <div><img src="/img/heart-BPM.png" alt="heart-rate" /></div>
                <div class="diagnosis-type">Heart Rate</div>
                <div class="diagnosis-type">{{ heartRate }} bpm</div>
                <div class="diagnosis-remark flex items-center gap-4">
                    <img src="/img/arrow-down.png" alt="arrow-down" />
                    <span>{{ heartRateLevel }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

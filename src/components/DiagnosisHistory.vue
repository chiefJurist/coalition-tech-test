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
                        label: 'Diastolic', // Add a label for the dataset
                        data: [110, 63, 109, 90, 70, 78],
                        borderColor: '#7E6CAB', // Set the color of the line
                        fill: true, // This property fills the area under the line
                        cubicInterpolationMode: 'monotone', // Make the line curvy
                        tension: 0.7, // Adjust tension for smoother curves (increased value)
                        pointRadius: 6, // Set the size of the points
                        pointHoverRadius: 8, // Set the size of the points on hover
                        borderWidth: 2, // Set the thickness of the lines
                        pointBackgroundColor: '#7E6CAB' // Set the fill color of the points
                    },
                    {
                        label: 'Systolic', // Add a label for the dataset
                        data: [120, 115, 161, 110, 150, 160],
                        borderColor: '#E66FD2', // Set the color of the line
                        fill: true, // This property fills the area under the line
                        cubicInterpolationMode: 'monotone', // Make the line curvy
                        tension: 0.7, // Adjust tension for smoother curves (increased value)
                        pointRadius: 6, // Set the size of the points
                        pointHoverRadius: 8, // Set the size of the points on hover
                        borderWidth: 2, // Set the thickness of the lines
                        pointBackgroundColor: '#E66FD2' // Set the fill color of the points
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
                        min: 60, // Set the minimum value of the Y-axis to 60
                        max: 180, // Set the maximum value of the Y-axis to 180
                        ticks: {
                            stepSize: 20 // Set the interval between ticks to 20
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
    }
}
</script>

<template>
    <div class="text-custom-two font-manrope p-10 bg-white rounded-2xl">
        <div class="font-bold text-lg mb-6">Diagnosis History</div>
        <div class="grid grid-cols-3 gap-10">
            <!--Blood Pressure-->
            <div class="bg-custom-five flex justify-between p-8 rounded-xl col-span-3">
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
                        <div class="value-text">160</div>
                        <div class="legend-remark-con">
                            <img src="/img/arrow-up.png" alt="arrow-up" />
                            <span class="text-sm">Higher than Average</span>
                        </div>
                    </div>
                    <div class="mt-4">
                        <div class="legend-con">
                            <div class="dias-legend"></div>
                            <div class="legend-text">Diastolic</div>
                        </div>
                        <div class="value-text">78</div>
                        <div class="legend-remark-con">
                            <img src="/img/arrow-down.png" alt="arrow-down" />
                            <span class="text-sm">Lower than Average</span>
                        </div>
                    </div>
                </div>
            </div>
            <!--Respiratory Rate-->
            <div class="bg-custom-eight diagnosis-con">
                <div><img src="/img/respiratory-rate.png" alt="respiratory-rate" /></div>
                <div class="diagnosis-type">Respiratory Rate</div>
                <div class="diagnosis-type">20 bpm</div>
                <div class="diagnosis-remark">Normal</div>
            </div>
            <!--Temperature-->
            <div class="bg-custom-nine diagnosis-con">
                <div><img src="/img/temperature.png" alt="temperature" /></div>
                <div class="diagnosis-type">Temperature</div>
                <div class="diagnosis-reading">98.6 °F</div>
                <div class="diagnosis-remark">Normal</div>
            </div>
            <!--Heart Rate-->
            <div class="bg-custom-ten diagnosis-con">
                <div><img src="/img/heart-BPM.png" alt="heart-rate" /></div>
                <div class="diagnosis-type">Heart Rate</div>
                <div class="diagnosis-type">78 bpm</div>
                <div class="diagnosis-remark flex items-center gap-4">
                    <img src="/img/arrow-down.png" alt="arrow-down" />
                    <span>Lower than Average</span>
                </div>
            </div>
        </div>
    </div>
</template>

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
                }
            }
        }
    }
}
</script>

<template>
    <div class="bg-custom-five">
        <Line :data="data" :options="options" />
    </div>
</template>

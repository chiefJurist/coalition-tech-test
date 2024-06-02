/** @type {import('tailwindcss').Config} */
export default {
    content: [
        'src/App.vue',
        'src/components/HeaderNav.vue',
        'src/views/PatientsView.vue',
        'src/components/PatientsList.vue',
        'src/components/DiagnosisHistory.vue',
        'src/components/DiagnosticList.vue',
        'src/components/JessicaProfile.vue',
        'src/components/LabResults.vue'
    ],
    theme: {
        extend: {
            //CUSTOM FONT
            fontFamily: {
                manrope: ['Manrope']
            },

            //CUSTOM COLOR
            colors: {
                'custom-one': '#CBC8D4',
                'custom-two': '##072635',
                'custom-three': '#707070',
                'custom-four': '#01F0D0',
                'custom-five': '#F4F0FE',
                'custom-six': '#E66FD2',
                'custom-seven': '#8C6FE6',
                'custom-eight': '#E0F3FA',
                'custom-nine': '#FFE6E9',
                'custom-ten': '#FFE6F1'
            }
        }
    },
    plugins: []
}

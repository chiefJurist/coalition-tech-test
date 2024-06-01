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
                'custom-one': '#F6F7F8',
                'custom-two': '##072635',
                'custom-three': '#707070',
                'custom-four': '#01F0D0',
                'custom-five': '#F4F0FE'
            }
        }
    },
    plugins: []
}

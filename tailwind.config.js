/** @type {import('tailwindcss').Config} */
export default {
    content: ['src/App.vue', 'src/components/HeaderNav.vue', 'src/views/PatientsView.vue'],
    theme: {
        extend: {
            //CUSTOM FONT
            fontFamily: {
                manrope: ['Manrope']
            }
        }
    },
    plugins: []
}

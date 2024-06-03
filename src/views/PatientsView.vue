<script>
import PatientsList from '../components/PatientsList.vue'
import Diagnosis from '../components/DiagnosisHistory.vue'
import DiagnosticList from '../components/DiagnosticList.vue'
import Profile from '../components/JessicaProfile.vue'
import Results from '../components/LabResults.vue'

export default {
    name: 'PatientsView',
    components: { PatientsList, Diagnosis, DiagnosticList, Profile, Results }
}
</script>
<template>
    <div class="bg-custom-one grid grid-cols-4 gap-5 p-5">
        <!--Patients List-->
        <div class="h-custom">
            <PatientsList></PatientsList>
        </div>

        <!--Diagnosis and Diagnostic-->
        <div class="col-span-2 h-custom">
            <div><Diagnosis></Diagnosis></div>
            <div><DiagnosticList></DiagnosticList></div>
        </div>

        <!--More Info on Patient-->
        <div class="h-custom">
            <div><Profile></Profile></div>
            <div><Results></Results></div>
        </div>
    </div>
</template>

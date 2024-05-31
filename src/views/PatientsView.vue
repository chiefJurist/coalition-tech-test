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
    <div>
        <!--Patients List-->
        <div>
            <PatientsList></PatientsList>
        </div>

        <!--Diagnosis and Diagnostic-->
        <div>
            <div><Diagnosis></Diagnosis></div>
            <div><DiagnosticList></DiagnosticList></div>
        </div>

        <!--More Info on Patient-->
        <div>
            <div><Profile></Profile></div>
            <div><Results></Results></div>
        </div>
    </div>
</template>

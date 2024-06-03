<template>
    <div class="my-5 d-list-gen-con">
        <!--Diagnostic List Heading-->
        <div class="d-list-header">Diagnostic List</div>
        <div class="d-list-header-con">
            <span class="font-bold d-list-prob">Problem/Diagnosis</span>
            <span class="font-bold d-list-des">Description</span>
            <span class="font-bold d-list-stat">Status</span>
        </div>

        <!--Diagnostic List-->
        <div class="relative">
            <!-- Vertical Progress Bar -->
            <div class="progress-bar-con">
                <div class="progress-bar" style="height: 55%"></div>
            </div>
            <div class="d-con">
                <span class="d-list-prob">Hypertension</span>
                <span class="d-list-des">Chronic high blood pressure</span>
                <span class="d-list-stat">Under Observation</span>
            </div>
            <div class="d-con">
                <span class="d-list-prob">Type 2 Diabetes</span>
                <span class="d-list-des">Insulin resistance and elevated blood sugar</span>
                <span class="d-list-stat">Cured</span>
            </div>
            <div class="d-con">
                <span class="d-list-prob">Asthma</span>
                <span class="d-list-des">Recurrent episodes of brochial constriction</span>
                <span class="d-list-stat">Inactive</span>
            </div>
        </div>
    </div>
</template>

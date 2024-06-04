<script>
export default {
    data() {
        return {
            result: '',
            patientName: '',
            dob: '',
            gender: '',
            contactInfo: '',
            emergencyContact: '',
            insuranceProvider: '',
            icon: ''
        }
    },

    mounted() {
        //Fetching The Data
        fetch('/data/db.json')
            //fetching the respose
            .then((response) => response.json())
            //fetching the actual data and populating the result property
            .then((data) => {
                ;(this.result = data),
                    (this.patientName = this.result[0].name),
                    (this.dob = this.result[0].date_of_birth),
                    (this.gender = this.result[0].gender),
                    (this.contactInfo = this.result[0].phone_number),
                    (this.emergencyContact = this.result[0].emergency_contact),
                    (this.insuranceProvider = this.result[0].insurance_type)

                //setting the gender icon
                if (this.gender == 'Male') {
                    this.icon = '/img/male-icon.png'
                } else {
                    this.icon = '/img/female-icon.png'
                }
            })
            //catching errors
            .catch((error) => console.error(error))
    }
}
</script>

<template>
    <div class="profile-gen-con">
        <!--Profile Image-->
        <div class="flex justify-center">
            <img src="/img/jessica-taylor.png" alt="jessica" />
        </div>

        <!--Profile Name-->
        <div class="profile-name">{{ this.patientName }}</div>

        <!--Profile Details-->
        <div class="profile-info-con">
            <div class="profile-info-marker">
                <img src="/img/calender.png" alt="calendar" />
            </div>
            <div class="text-sm">
                <div class="">Date Of Birth</div>
                <div class="font-bold">{{ this.dob }}</div>
            </div>
        </div>
        <div class="profile-info-con">
            <div class="profile-info-marker">
                <img :src="this.icon" alt="female" />
            </div>
            <div class="text-sm">
                <div>Gender</div>
                <div class="font-bold">{{ this.gender }}</div>
            </div>
        </div>
        <div class="profile-info-con">
            <div class="profile-info-marker">
                <img src="/img/phone-icon.png" alt="phone" />
            </div>
            <div class="text-sm">
                <div>Contact Info</div>
                <div class="font-bold">{{ this.contactInfo }}</div>
            </div>
        </div>
        <div class="profile-info-con">
            <div class="profile-info-marker">
                <img src="/img/phone-icon.png" alt="phone" />
            </div>
            <div class="text-sm">
                <div>Emergency Contacts</div>
                <div class="font-bold">{{ this.emergencyContact }}</div>
            </div>
        </div>
        <div class="profile-info-con">
            <div class="profile-info-marker">
                <img src="/img/insurance-icon.png" alt="insurance" />
            </div>
            <div class="text-sm">
                <div>Insurance Provider</div>
                <div class="font-bold">{{ this.insuranceProvider }}</div>
            </div>
        </div>
        <div class="patient-show-more">Show All Information</div>
    </div>
</template>

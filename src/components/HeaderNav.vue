<script>
//
</script>
<template>
    <div class="header-positioner">
        <div class="header-con">
            <div class="-ml-8">
                <img src="/img/test-logo.png" alt="test logo" />
            </div>

            <!--Nav Links-->
            <div class="flex justify-between items-center gap-2">
                <div class="nav-link">
                    <div><img src="/public/img/home.png" alt="overview" /></div>
                    <div class="nav-link-text">Overview</div>
                </div>

                <router-Link
                    :to="{ name: 'Patients' }"
                    exact-active-class=" bg-custom-four nav-link"
                >
                    <div><img src="/public/img/group.png" alt="patients" /></div>
                    <div class="nav-link-text">Patients</div>
                </router-Link>

                <div class="nav-link">
                    <div><img src="/public/img/calender.png" alt="schedule" /></div>
                    <div class="nav-link-text">Schedule</div>
                </div>

                <div class="nav-link">
                    <div><img src="/public/img/chat-bubble.png" alt="message" /></div>
                    <div class="nav-link-text">Message</div>
                </div>

                <div class="nav-link">
                    <div><img src="/public/img/credit-card.png" alt="transactions" /></div>
                    <div class="nav-link-text">Transactions</div>
                </div>
            </div>

            <!--User-->
            <div class="user-con">
                <div>
                    <img src="/img/jose-simmons.png" alt="jose-simmons" />
                </div>
                <div class="doctor">
                    <div class="doctor-name">Dr. Jose Simmons</div>
                    <div class="doctor-position">General Practitioner</div>
                </div>
                <div>
                    <button class="pr-3"><img src="/img/settings.png" alt="settings" /></button>
                    <button class=""><img src="/img/more.png" alt="more" /></button>
                </div>
            </div>
        </div>
    </div>
</template>

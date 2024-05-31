<script>
// eslint-disable-next-line no-undef, no-unused-vars
import { RouterLink } from 'vue-router'

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
                <RouterLink to="/overview" class="nav-link" exact-active-class=" bg-custom-four">
                    <div><img src="/img/home.png" alt="overview" /></div>
                    <div class="nav-link-text">Overview</div>
                </RouterLink>

                <RouterLink to="/" exact-active-class=" bg-custom-four" class="nav-link">
                    <div><img src="/img/group.png" alt="patients" /></div>
                    <div class="nav-link-text">Patients</div>
                </RouterLink>

                <RouterLink to="/schedule" exact-active-class=" bg-custom-four" class="nav-link">
                    <div><img src="/img/calender.png" alt="schedule" /></div>
                    <div class="nav-link-text">Schedule</div>
                </RouterLink>

                <RouterLink to="/message" exact-active-class=" bg-custom-four" class="nav-link">
                    <div><img src="/img/chat-bubble.png" alt="message" /></div>
                    <div class="nav-link-text">Message</div>
                </RouterLink>

                <RouterLink
                    to="/transactions"
                    exact-active-class=" bg-custom-four"
                    class="nav-link"
                >
                    <div><img src="/img/credit-card.png" alt="transactions" /></div>
                    <div class="nav-link-text">Transactions</div>
                </RouterLink>
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

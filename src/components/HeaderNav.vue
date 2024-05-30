<script>
//
</script>
<template>
    <div class="bg-custom-one flex justify-center">
        <div class="flex justify-around items-center w-11/12 bg-white rounded-full my-4 p-3">
            <div class="-ml-8">
                <img src="/img/test-logo.png" alt="test logo" />
            </div>

            <!--Nav Links-->
            <div class="">
                <ul class="flex justify-between items-center gap-2">
                    <li class="nav-link">
                        <div><img src="/public/img/home.png" alt="overview" /></div>
                        <div class="nav-link-text">Overview</div>
                    </li>

                    <router-Link
                        :to="{ name: 'Patients' }"
                        exact-active-class=" bg-custom-four nav-link"
                    >
                        <div><img src="/public/img/group.png" alt="patients" /></div>
                        <div class="nav-link-text">Patients</div>
                    </router-Link>

                    <li class="nav-link">
                        <div><img src="/public/img/calender.png" alt="schedule" /></div>
                        <div class="nav-link-text">Schedule</div>
                    </li>

                    <li class="nav-link">
                        <div><img src="/public/img/chat-bubble.png" alt="message" /></div>
                        <div class="nav-link-text">Message</div>
                    </li>

                    <li class="nav-link">
                        <div><img src="/public/img/credit-card.png" alt="transactions" /></div>
                        <div class="nav-link-text">Transactions</div>
                    </li>
                </ul>
            </div>

            <!--User-->
            <div class="flex justify-evenly gap-2 items-center">
                <div>
                    <img src="/img/jose-simmons.png" alt="jose-simmons" />
                </div>
                <div class="border-r border-custom-one pr-2">
                    <div class="font-manrope font-bold text-custom-two text-sm">
                        Dr. Jose Simmons
                    </div>
                    <div class="font-manrope text-custom-three text-sm">General Practitioner</div>
                </div>
                <div>
                    <button class="pr-3"><img src="/img/settings.png" alt="settings" /></button>
                    <button class=""><img src="/img/more.png" alt="more" /></button>
                </div>
            </div>
        </div>
    </div>
</template>

<template>
    <div class="time deal-timer product-deal-timer mx-md-0 mx-auto" v-if="remainingTime">
        <div class="product-title">
            <h4>{{ $t("Hurry up! Sales Ends In") }}</h4>
        </div>
        <ul>
            <li>
                <div class="counter d-block">
                    <div class="days d-block">
                        <h5>{{ remainingTime.days }}</h5>
                    </div>
                    <h6>{{ $t("Days") }}</h6>
                </div>
            </li>
            <li>
                <div class="counter d-block">
                    <div class="hours d-block">
                        <h5>{{ remainingTime.hours }}</h5>
                    </div>
                    <h6>{{ $t("Hours") }}</h6>
                </div>
            </li>
            <li>
                <div class="counter d-block">
                    <div class="minutes d-block">
                        <h5>{{ remainingTime.minutes }}</h5>
                    </div>
                    <h6>{{ $t("Min") }}</h6>
                </div>
            </li>
            <li>
                <div class="counter d-block">
                    <div class="seconds d-block">
                        <h5>{{ remainingTime.seconds }}</h5>
                    </div>
                    <h6>{{ $t("Sec") }}</h6>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
let props = defineProps({
    startDate: String,
    endDate: String
})

let remainingTime = ref({});
function updateTimer() {
    if (props.startDate && props.endDate) {
        const startDateTime = new Date(props.startDate).getTime();
        const endDateTime = new Date(props.endDate).getTime();
        const now = new Date().getTime();

        let targetDate = endDateTime;

        if (now < startDateTime) {
            targetDate = startDateTime;
        } else if (now > endDateTime) {
            remainingTime.value = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        } else {
            calculateTimeDifference(targetDate);
        }
    }
};

function calculateTimeDifference(targetDate) {
    const now = new Date().getTime();
    const timeDiff = targetDate - now;

    remainingTime.value = {
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDiff % (1000 * 60)) / 1000)
    };
};

onMounted(() => {
    if (props.startDate && props.endDate) {
        const startDateTime = new Date(props.startDate).getTime();
        const endDateTime = new Date(props.endDate).getTime();
        const now = new Date().getTime();
        remainingTime.value = null;
        if (now > startDateTime && endDateTime > now) {
            updateTimer(); 
            // Update the timer every second
            const timerInterval = setInterval(() => {
                updateTimer();
            }, 1000);
        }
    }
})
</script>

<template>
    <div>
        <h1>This event is by: {{ person.name }}</h1>
        <p>This product is named: {{ $a("welcome") }}</p>
    </div>
</template>
<script setup>
import { useTranslation } from "i18next-vue";
const props = defineProps({
    person: Object
})
const $a  = useTranslation().t;
</script>
<script>
    export default {
        data() {
            return {
                name: "Nguyen Van Vuong"
            }
        },
        created() {
            console.log(this.name);
            console.log(this.$a('welcome'));
        }
    }
</script>

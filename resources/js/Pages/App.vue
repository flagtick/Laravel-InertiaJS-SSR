<template>
    <div>
        <h1>This event is by: {{ person.name }}</h1>
        <p>This product is named: {{ name }}</p>
    </div>
</template>
<script setup>
const props = defineProps({
    person: Object
})
</script>
<script>
    export default {
        data() {
            return {
                name: "Nguyen Van Vuong"
            }
        }
    }
</script>

<template>
    <svg class="p-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        props: ['name']
    }
</script>

<style scoped lang="scss">
    .p-icon {
        width: 1em;
        height: 1em;
    }
</style>
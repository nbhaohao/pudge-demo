<template>
    <button class="p-button" :class="{[`icon-${iconPosition}`]: true}">
        <p-icon class="p-icon-in-button" v-if="icon" :name="icon"></p-icon>
        <p-icon class="loading" name="loading"></p-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: '',
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                   return value === 'left' || value === 'right'
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }
    .p-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        line-height: 1;
        &:hover {border-color: var(--border-color-hover);}
        > .p-icon-in-button {order: 1;margin-right: .3em;}
        > .content {order: 2;}
        &:active {background-color: var(--button-active-bg);}
        &:focus {outline: none;}
        &.icon-right {
            > .p-icon-in-button {order: 2;margin-left: .3em;margin-right: 0;}
            > .content {order: 1;}
        }
        .loading {
            animation: spin 1.6s infinite linear;
            animation-fill-mode:forwards;
            -webkit-backface-visibility: hidden;
            -webkit-transform-style: preserve-3d;
        }
    }
</style>
<template>
    <div class="p-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.checkIsChildrenRight()
        },
        methods: {
            checkIsChildrenRight() {
                for (let node of this.$el.children) {
                    let nodeName = node.nodeName.toLocaleLowerCase()
                    if (nodeName === 'button') {
                        continue
                    }
                    console.warn(`p-button-group 的子元素应该为 p-button, 此处检测到 ${nodeName}`)
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .p-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .p-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
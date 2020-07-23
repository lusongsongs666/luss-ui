<template>
    <transition name="toast">
        <div class="lu-toast" v-if="show">
            {{ text }}
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Toast"
    }
</script>

<style scoped>
    .lu-toast{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px 15px;
        max-width: 70vw;
        font-size: 16px;
        color: #fff;
        background-color: #040B29;
        border-radius: 4px;
        z-index: 2000;
    }

    .toast-enter,
    .toast-leave-to{
        opacity: 0;
    }
    .toast-enter-active,
    .toast-leave-active{
        transition: all 0.4s ease;
    }
</style>

<template>
    <div class="mt-16">
        <h1 class="text-4xl font-bold text-primary xl:text-center lg:text-center text-left mx-4 xl;mb-8 lg:mb-8 mb-0">Продукция</h1>
        <Slider />
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
export default {
    name: 'the-variations',
    data() {
        return {

        }
    },
    components: {
        Slider
    }
}
</script>
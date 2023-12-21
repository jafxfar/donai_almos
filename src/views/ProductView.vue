<template>
    <div class="">
        <Products />
    </div>
</template>

<script>
import Products from "@/components/Products.vue"
export default {
    components: {
        Products
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>
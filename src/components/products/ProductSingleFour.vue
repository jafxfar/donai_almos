<template>
    <div class="xl:mx-20 lg:mx-20 mx-2">
        <div class="xl:hidden lg:hidden flex">
            <img class="w-1/2" src="@/assets/product/4.png" alt="">
            <img class="w-1/2" src="@/assets/product/4_6.png" alt="">

        </div>
        <h1 class="mx-4 xl:text-4xl lg:text-4xl text-xl text-one font-semibold first-letter:">Абрикосовые косточки и ядро
        </h1>
        <div class="mx-4 flex xl:flex-row lg:flex-row flex-col xl:my-8 lg:my-8 my-2">
            <h3 class="xl:w-1/2 lg:w-1/2 w-full text-sm font-medium ">Абрикосовые косточки являются целителем человеческих
                клеток. В них присутствуют витамины, минералы и другие биологически активные вещества, которые приносят
                пользу здоровью. В абрикосовых косточках можно найти витамин Е, который является мощным антиоксидантом и
                способствует защите клеток от действия свободных радикалов.
                Кроме того, абрикосовые косточки содержат минералы, такие как кальций и магний, которые поддерживают
                здоровье костей и мышц. Они также богаты ненасыщенными жирными кислотами, которые являются важными для
                нормальной работы организма. Абрикосовые косточки полезны при раковых заболеваниях.
            </h3>
            <div class="xl:flex lg:flex hidden border-r-4 rounded-2xl border-one h-11/12 mx-5"></div>
            <div class="xl:hidden lg:hidden flex rounded-2xl bg-one w-full h-1.5 my-2"></div>
            <div class="xl:w-1/2 lg:w-1/2 w-full flex flex-col">
                <h1 class="text-lg font-medium">Энергитическая свежость в 100 гр</h1>
                <span class="flex flex-row my-1">
                    <p class="text-sm mr-20  text-gray-400">Калорий ккал-440</p>
                    <p class="text-sm text-gray-400">Белки-14.0</p>
                </span>
                <span class="flex flex-row my-1">
                    <p class="text-sm mr-28 text-gray-400">Жиры-27.7</p>
                    <p class="text-sm ml-1 text-gray-400">Углеводы-56.3</p>
                </span>
                <h1 class="text-lg font-medium my-1">HS CODE</h1>
                <p class="text-sm text-gray-400">0813 </p>
            </div>
        </div>
        <div class="xl:flex lg:flex hidden w-11/12 justify-center items-center">
            <img class="w-1/2" src="@/assets/product/4.png" alt="">
            <img src="@/assets/product/4_6.png" class="w-1/2" alt="">
        </div>
        <Slider />
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
export default {
    name: 'single-slider',
    data() {
        return {

        }
    },
    components: {
        Slider
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>


.
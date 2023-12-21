<template>
    <div class="xl:mx-20 lg:mx-20 mx-2">
        <div class="xl:hidden lg:hidden flex">
            <img src="@/assets/product/10.png" alt="">
        </div>
        <h1 class="mx-4 xl:text-4xl lg:text-4xl text-xl text-one font-semibold first-letter:">Шиповник свежий </h1>
        <div class="mx-4 flex xl:flex-row lg:flex-row flex-col xl:my-8 lg:my-8 my-2">
            <h3 class="xl:w-1/2 lg:w-1/2 w-full text-sm font-medium ">Свежий шиповник - это природное чудо, богатство
                полезных веществ, которое с самых давних времен ценилось за свои уникальные целебные свойства. Еще в XV веке
                в Таджикистане его плоды считались настоящим сокровищем и выдавались для лечения только знатным людям.
                Сегодня мы знаем, что свежий шиповник - настоящий кладезь сахаров, пектиновых и дубильных веществ, лимонной
                и яблочной кислот, а также других органических соединений.
                Также шиповник является надежным союзником организма в поддержании здоровья. Он помогает укрепить иммунитет,
                улучшить работу желудочно-кишечного тракта, антиоксидантно воздействует на клетки, защищая организм от
                вредного воздействия свободных радикалов
            </h3>
            <div class="xl:flex lg:flex hidden border-r-4 rounded-2xl border-one h-11/12 mx-5"></div>
            <div class="xl:hidden lg:hidden flex rounded-2xl bg-one w-full h-1.5 my-2"></div>
            <div class="xl:w-1/2 lg:w-1/2 w-full flex flex-col">
                <h1 class="text-lg font-medium">Энергитическая свежость в 100 гр</h1>
                <span class="flex flex-row my-1">
                    <p class="text-sm mr-20  text-gray-400">Калорий ккал-110</p>
                    <p class="text-sm text-gray-400">Белки-1.6</p>
                </span>
                <span class="flex flex-row my-1">
                    <p class="text-sm mr-28 text-gray-400">Жиры-0.7</p>
                    <p class="text-sm ml-1 text-gray-400">Углеводы-22.4</p>
                </span>
                <h1 class="text-lg font-medium my-1">HS CODE</h1>
                <p class="text-sm text-gray-400">080910 </p>
            </div>
        </div>
        <div class="xl:flex lg:flex hidden w-11/12 justify-center items-center">
            <img src="@/assets/product/10.png" class="w-1/2" alt="">
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


<style scoped>
p {
    color: #7E7E7E;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 20px;
    word-wrap: break-word
}
</style>
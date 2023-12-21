<template>
    <div class="flex flex-col justify-between w-full" id="AboutUS">
        <div class="flex w-full">
            <img src="../assets/AboutUs.png" class="w-full" alt="">
        </div>
        <div class="flex xl:mx-20 lg:mx-24 mx-4 ">
            <div class="font flex flex-col text-left">
                <h1 class="text-left  xl:text-5xl lg:text-5xl text-2xl font-bold text-one xl:my-8 lg:my-7 my-2">О компании
                </h1>
                <p class="my-2 xl:text-xl lg:text-lg text-md text-one">OOO "Донаи Алмос" - это прогрессивная экспортная
                    компания, чья деятельность ориентирована на поставку первоклассных натуральных продуктов из сердца
                    Таджикистана в страны по всему миру. Мы работаем в сегменте B2B, стремясь удовлетворить потребности
                    клиентов в свежих, сушеных и переработанных плодоовощах.
                </p>
                <RouterLink to="/aboutUs">
                    <div class="flex justify-end ">
                        <button style="font-size: 14px;"
                            class="bg-one  text-white rounded-lg xl:w-2/12 lg:w-2/12 w-1/3  px-4 py-2 my-2">Подробнее</button>
                    </div>
                </RouterLink>

            </div>
        </div>

    </div>
    <div class="flex justify-center items-center">
        <hr class="bg-one w-11/12 p-0.5 xl:my-12 lg:my-10 my-4 rounded-2xl ">
    </div>
</template>

<script>
export default {
    name: 'aboutUS'
}
</script>
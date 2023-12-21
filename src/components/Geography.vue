<template>
    <div class=" xl:flex lg:flex hidden flex-row justify-between w-full mb-16">
        <div class="flex w-1/2 justify-center">
            <div class="font-semibold flex flex-col ">
                <h1 class="text-center text-5xl font-bold text-one mb-8 mt-2">География экспорта</h1>
                <ul typeof="CIRCLE">
                    <li class="flex flex-row text-one" v-for="country in countries" :key="country">
                        <svg class="mt-2 mr-2" height="10" width="10">
                            <circle cx="5" cy="5" r="2" stroke="#2A5C29" stroke-width="3" fill="#2A5C29" />
                        </svg> {{ country }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex w-1/2 mt-2 justify-center">
            <img src="../assets/map.png" alt="">
        </div>
    </div>
    <div class="xl:hidden lg:hidden flex flex-col justify-between w-full mb-16">
        <div class="font-semibold mx-4 w-full mb-2">
            <h1 class="text-2xl font-bold text-one my-2">География экспорта</h1>
            <p class=" text-one text-sm ">Узбекистан, Казахстан, Россия, Азербайджан, Грузия, Германия, Турция, Ирак ,Оман, ОАЭ, Афганистан</p>
        </div>
        <div class="mx-4 w-11/12">
            <img src="../assets/map.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'the-geography',
    data() {
        return {
            countries: [
                'Узбекистан',
                'Казахстан',
                'Россия',
                'Азербайджан',
                'Грузия',
                'Германия',
                'Турция',
                'Ирак',
                'Оман',
                'ОАЭ',
                'Афганистан'
            ]
        }
    }
}

</script>
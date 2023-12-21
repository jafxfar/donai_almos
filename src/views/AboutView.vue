<template>
    <div class="flex flex-col justify-between w-full mb-8" id="AboutUS">
        <div class="flex justify-center ">
            <img class="w-full pb-8" src="../assets/partnerView.png" alt="">
        </div>
        <div class="flex xl:mx-64 flex-wrap lg:mx-64 mx-4 ">
            <div class="font-semibold flex flex-col text-left">
                <h1 class="text-left  xl:text-5xl lg:text-5xl text-2xl font-bold text-one xl:my-8 lg:my-7 my-2">О компании
                </h1>
                <p class="my-2 xl:text-xl lg:text-lg text-md text-one"><span class="font-bold">OOO "Донаи Алмос"</span> -
                    это прогрессивная экспортная
                    компания, чья деятельность ориентирована на поставку первоклассных натуральных продуктов из сердца
                    Таджикистана в страны по всему миру. Мы работаем в сегменте B2B, стремясь удовлетворить потребности
                    клиентов в свежих, сушеных и переработанных плодоовощах.
                </p>
                <p class="my-2 xl:text-xl lg:text-lg text-md text-one"><span class="font-bold"> Современные
                        Технологии:</span> Мы используем
                    передовые
                    технологии переработки, чтобы обеспечить стабильно высокий стандарт качества в каждой поставке.</p>
                <p class="my-2 xl:text-xl lg:text-lg text-md text-one"><span class="font-bold">Глобальная
                        Доступность:</span> Наша компания гордится
                    широким географическим охватом, обеспечивая стабильные поставки в различные страны мира.</p>
                <p class="my-2 xl:text-xl lg:text-lg text-md text-one"><span class="font-bold">Строгий Контроль
                        Качества:</span> Мы тщательно следим за
                    качеством продукции, начиная с момента посева и до момента отправки, чтобы гарантировать свежесть и
                    соответствие высоким стандартам.</p>
                <p class="my-2 xl:text-xl lg:text-lg text-md text-one"><span class="font-bold">Почему выбирают нас:</span>
                    Надежность и Профессионализм: Мы строим долгосрочные отношения с клиентами, обеспечивая надежные
                    поставки и высокий уровень профессионализма в каждой сделке.</p>
                <p class="my-2 xl:text-xl lg:text-lg text-md text-one"><span class="font-bold">Индивидуальный Подход:</span>
                    Мы готовы предложить нашим
                    клиентам индивидуальные решения, учитывая их уникальные потребности и требования.</p>
                <p class="my-2 xl:text-xl lg:text-lg text-md text-one"> Присоединитесь к <i class="font-bold">OOO "Донаи
                        Алмос"</i> и откройте для себя
                    мир качественных и вкусных плодов и овощей, которые приносят радость и пользу вашему бизнесу!</p>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center">
        <hr class="bg-one w-11/12 p-0.5 xl:my-12 lg:my-10 my-4 rounded-2xl ">
    </div>
    <div class="flex justify-center flex-row">
        <div class="modal-content xl:w-1/4 lg:w-1/4 w-3/4 flex justify-center py-4 text-left px-2 ">
            <!-- Форма пополнения -->
            <form class="flex w-full mt-2 px-2 flex-col gap-4" name="submit-to-google-sheet flex w-full">
                <div class="flex justify-start w-full items-start my-2">
                    <h1 class="text-xl font-medium">Оформить заказ</h1>
                </div>
                <input type="text" name="name" v-model="name"
                    class="py-2 px-4 w-full border border-one rounded-lg placeholder:text-sm focus:outline-none "
                    placeholder="Введите ваше ФИО">
                <input :class="{ 'error': error }" @input="validateInput" type="text"
                    class="py-2 px-4 w-full border border-one rounded-lg placeholder:text-sm focus:outline-none"
                    placeholder="Введите ваш номер" name="number" v-model="number" />
                <div class="text-red-600 " v-if="error">{{ error }}</div>
                <input type="text" name="product" v-model="product"
                    class="py-2 px-4 w-full border border-one rounded-lg placeholder:text-sm focus:outline-none"
                    placeholder="Выберите продукт">
                <div class="flex flex-row w-full gap-4">
                    <button type="submit" @click="hideModal"
                        class="bg-white hover:bg-gray-100 border border-gray-200 text-black font-bold py-2 w-1/2 rounded-lg">
                        Отмена
                    </button>
                    <button @click="submitForm()" type="submit"
                        class="bg-primary hover:bg-yellow-600 text-white font-bold py-2 w-1/2 rounded-lg">
                        Оформить
                    </button>
                </div>
            </form>
        </div>
        <div class="w-1/4 xl:flex lg:flex hidden">
            <img src="../assets/productView.png" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'hero-section',
    data() {
        return {
            inputValue: '',
            error: "",
            name: '',
            email: '',
            phone: '',
            activate: false,
        }
    },
    methods: {
        validateInput() {
            const value = this.phoneNumber;
            const isValid = /^[0-9+]*$/.test(value);

            if (!isValid) {
                this.error = "Введите номер правильно";
            } else {
                this.error = "";
            }
        },
        async submitForm() {
            try {
                const scriptURL =
                    'https://script.google.com/macros/s/AKfycbwjcOtXciq8WIbHk_sRLOGhJExCMttgaYNLhWmhw8IwpHo-VPxSpNQLcJuOQ8bA9Ull/exec';
                const form = document.forms['submit-to-google-sheet'];

                const response = await axios.post(scriptURL, new FormData(form));
                console.log(response);
            } catch (error) {
                console.log(error);
            }

        },
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>
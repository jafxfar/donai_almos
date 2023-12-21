<template>
  <div class="background h-11/12 flex flex-row w-full justify-between ">
    <div
      class="xl:ml-20 lg:ml-20 xl:mt-40 lg:my-40 my-8 mx-4 flex flex-col  xl:justify-start lg:justify-start justify-center items-start">
      <h1 style="font-family: Oleo Script Swash Caps;"
        class=" text-center xl:text-6xl lg:text-6xl text-2xl font-bold text-primary">Donai Almos</h1>
      <p style="font-family: Oleo Script Swash Caps;"
        class="text-center xl:text-3xl lg:text-3xl text-lg font-semibold text-primary mt-2">Best fruits from Tajikistan
      </p>
      <button @click="showModal"
        class="py-2 xl:px-8 lg:px-8 px-2 xl:text-xl lg:text-xl text-xs bg-primary rounded-lg text-white xl:mt-8 lg:mt-8 mt-2">Оформить
        заказ</button>
      <div v-if="isModalVisible" class=" fixed inset-0 flex items-center justify-center z-50 ">
        <!-- Apply background styles to the entire content -->
        <div :class="{ 'bg-gray-900 opacity-50': isModalVisible }" class="modal-overlay absolute w-full h-full"></div>

        <div
          class="xl:w-1/3 lg:w-1/3 w-5/6 modal-containe flex justify-center items-center  rounded-xl shadow-lg z-50 overflow-y-auto  bg-amber-50">
          <div class="modal-content w-full flex justify-center py-4 text-left px-2 ">
            <!-- Форма пополнения -->
            <form @submit="sendData" class="flex w-full mt-2 px-2 flex-col gap-4"
              name="submit-to-google-sheet flex w-full">
              <div class="flex justify-start w-full items-start my-2">
                <h1 class="text-xl font-medium">Оформить заказ</h1>
              </div>
              <input type="text" name="full_name"
                class="py-2 px-4 w-full border border-one rounded-lg placeholder:text-sm focus:outline-none "
                placeholder="Введите ваше ФИО" v-model="full_name" id="full_name">
              <input :class="{ 'error': error }" @input="validateInput" type="text"
                class="py-2 px-4 w-full border border-one rounded-lg placeholder:text-sm focus:outline-none"
                placeholder="Введите ваш номер" v-model="phone" id="phone" />
              <div class="text-red-600 " v-if="error">{{ error }}</div>
              <input type="text" id="product" name="product" v-model="product" required
                class="py-2 px-4 w-full border border-one rounded-lg placeholder:text-sm focus:outline-none"
                placeholder="Выберите продукт">
              <div class="flex flex-row w-full gap-4">
                <button @click="hideModal"
                  class="bg-white hover:bg-gray-100 border border-gray-200 text-black font-bold py-2 w-1/2 rounded-lg">
                  Отмена
                </button>
                <button type="submit" class="bg-primary hover:bg-yellow-600 text-white font-bold py-2 w-1/2 rounded-lg">
                  Оформить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
      isFormVisable: false,
      isModalVisible: false,
      amount: null,
      error: "",
      full_name: '',
      product: '',
      phone: '',
      activate: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    validateInput() {
      const value = this.phone;
      const isValid = /^[0-9+]*$/.test(value);

      if (!isValid) {
        this.error = "Введите номер правильно";
      } else {
        this.error = "";
      }
    },
    async sendData() {
      try {
        const apiUrl = 'http://92.63.177.68:9900/api/feedback';
        const headers = {
          'Authorization': 'Bearer 6348045652:AAH1fWcncszKjLCXJvlaaps7WtZrEO-LuTw',
          'Content-Type': 'application/json',
        };
        const response = await axios.post(apiUrl, this.form, { headers });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }


  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,700;1,800&family=Oleo+Script+Swash+Caps:wght@400;700&display=swap');

.background {
  background-image: url('../assets/almosMain.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<template>
  <div class="home">
    <HeroSection />
    <Variation />
    <AboutUs />
    <WhyChooseUs />
    <Geography />
    <Contact />
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue"
import Variation from "@/components/Variation.vue";
import Geography from "@/components/Geography.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import AboutUs from "@/components/AboutUs.vue";
import HeroSection from "@/components/HeroSection.vue"
export default {
  name: 'HomeView',
  components: {
    Contact,
    HeroSection,
    AboutUs,
    WhyChooseUs,
    Geography,
    Variation
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<template>
    <CountriesList v-for="country in countries" :country="country" :key="country.id" />
</template>

<script>
import CountriesList from './../components/CountriesList.vue'
export default {
    data() {
        return {
            countries: []
        }
    },
    components: {
        CountriesList,
    },
    methods: {
        async getCountries() {
            const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
            const finalRes = await res.json();
            finalRes.forEach(
                (el) => {
                    //console.log(el);
                    this.countries.push(el);
                }
            );
            console.log(this.countries);

        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.getCountries()
        })
    }

}
</script>

<style>
</style>
<template>
    <CountriesDetails v-for="countryDetail in countryDetails" :countryDetail="countryDetail" :key="countryDetail.id"/>
</template>

<script>
import CountriesDetails from './../components/CountriesDetails.vue'
export default {
    components: {
        CountriesDetails,
    },
    data() {
        return {
            id: null,
            countryDetails: []
        }
    },
    methods: {
        async getCountries() {
            const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
            const finalRes = await res.json();
            finalRes.forEach(
                (el) => {
                    if (el.alpha2Code === this.id) {
                        this.countryDetails.push(el);
                    }
                }
            );
            //console.log(this.countryDetails);

        }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.$nextTick(function () {
            this.getCountries()
        })
    }
}
</script>

<style>
</style>
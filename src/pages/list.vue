<template>
    <div class="countries">
        <ul class="countries__list list-group">
            <CountriesList v-for="country in countries" :country="country" :key="country.id" />
        </ul>
        <div class="countries__detail list-group">
            <router-view />
        </div>
    </div>
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
            //Pregunta--> Como puedo capturar el error con esta sintaxis?
            await fetch("https://ih-countries-api.herokuapp.com/countries")
            const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
            const finalRes = await res.json();
            finalRes.forEach(
                (el) => {
                    //console.log(el);
                    this.countries.push(el);
                }
            );
            //console.log(this.countries);

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
.countries {
    display: flex;
}
.countries > * {
    width: 50%;
}
.countries__list {
    height:600px;
    overflow-y:auto; 
}
</style>
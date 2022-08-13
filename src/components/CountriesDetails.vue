<template>
    <div class="country-detail">
        <img class="country-detail__image" :src="'https://flagcdn.com/w320/' + this.flagsLowercase + '.png'" />
        <h2 class="country-detail__name">{{ countryDetail.name.common }}</h2>
        <ul class="country-detail__list list-group">
            <li class="list-group-item">
                <label>Capital</label>
                <span>{{  countryDetail.capital[0] }}</span>
            </li>
            <li class="list-group-item">
                <label>Area</label>
                <span>{{ countryDetail.area }} km2</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CountriesList',
    props: {
        countryDetail: Object
    },
    data() {
        return {
            flags: this.countryDetail.alpha2Code,
            flagsLowercase: "",
        }
    },
    methods: {
        lowercase() {
            this.flagsLowercase = this.flags.toLowerCase();
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.lowercase();
        })
    }
}

</script>

<style>
.country-detail {
    display:flex;
    flex-direction: column;
    padding:50px;
    justify-content: center;
    align-items: center;
}
.country-detail__image {
    width:100%;
    max-width: 400px;
}
.country-detail__list {
    width:100%;
}
.country-detail__list li {
    display:flex;
    width:100%;
    justify-content: space-between; 
    padding:10px 50px;
    border:none; 
    border-bottom: 1px solid lightgrey;
}
.country-detail__name + .country-detail__list {
    padding-top:50px;
}
</style>
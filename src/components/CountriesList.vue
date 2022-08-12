<template>
  <li class="country__list-item list-group-item">
    <img class="country__image" :src="'https://flagcdn.com/w320/' + this.flagsLowercase + '.png'" />
    <router-link class="country__link" :to="'/details/' + this.flags">{{ country.name.common }} </router-link>
  </li>
</template>
+
<script>
export default {
  name: 'CountriesList',
  props: {
    country: Object
  },
  data() {
    return {
      flags: this.country.alpha2Code,
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
.country__list-item {
  text-align: center;
  padding:20px;
}
.country__list-item:first-child{
  padding-top:50px;
}
.country__list-item:last-child {
  padding-bottom:50px;
}
.country__list-item:hover {
  background-color:lightcyan!important;
  cursor:pointer;
}

.country__image {
  width: 100%;
  max-width: 100px;
  display: inline-block;
}
.country__link{
  display:block;
  color:grey;
  text-decoration: none;
}
.country__link:hover {
  color:grey;
  text-decoration: underline;
}
.country__image + .country__link {
  margin-top:20px; 
}
</style>
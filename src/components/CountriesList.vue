<template>
  <ul class="list-group">
    <li class="list-group-item">
      <img class="country__image" :src="'https://flagcdn.com/w320/'+this.flagsLowercase+'.png'" />
      <p class="country__name">{{ country.name.common }} - {{ flagsLowercase }} </p>
    </li>
  </ul>
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
       this.flagsLowercase=this.flags.toLowerCase();
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
.list-group-item {
  text-align: center;
}
.country__image {
  width:100%;
  max-width: 100px;
  display:inline-block;
}
</style>
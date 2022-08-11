<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link  class="navbar-brand" to="/">LAB - WikiCountries</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style>
.navbar {
    background-color: blue; 
}
.navbar-brand,
.navbar-brand:hover {
    color: white!important;;
}
.navbar-toggler,
.navbar-toggler-icon {
    background-color: white;
}
</style>
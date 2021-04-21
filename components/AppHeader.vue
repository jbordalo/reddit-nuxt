<template>
    <div>
        <b-navbar toggleable="lg" type="white" variant="danger">
            <b-navbar-brand href="#" to="/">Reddit</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <!-- TODO?? NUXT LINK OR ?? -->
                    <!-- <b-nav-item to="/">Home</b-nav-item> -->
                    <b-nav-item to="/subreddits">Subreddits</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                    <b-nav-item to="/secret">Secret</b-nav-item>
                    <!-- <nuxt-link to="/">Home</nuxt-link>
                    <nuxt-link to="/posts">Posts</nuxt-link>
                    <nuxt-link to="/about">About</nuxt-link> -->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" src="~/assets/css/header.scss" scoped>
</style>
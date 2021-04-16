<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#" to="/">Reddit</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <!-- TODO?? NUXT LINK OR ?? -->
                    <!-- <b-nav-item to="/">Home</b-nav-item> -->
                    <b-nav-item to="/subreddits">Subreddits</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
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

<style lang="scss" scoped>
/* TODO MOVE TO SINGLE FILE */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px dotted #ccc;
    ul {
        display: flex;
    }

    a {
        display: inline-block;
        background: #333;
        color: #fff;
        padding: 0.3rem 1rem;
        margin-right: 0.5rem;
    }
}

.header .title {
    font-size: 3rem;
    color: #ffffff;
}
</style>
<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Reddit</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <!-- TODO?? NUXT LINK OR ?? -->
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/subreddits">Subreddits</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                    <!-- <b-nav-item href="#"
                        ><nuxt-link to="/">Home</nuxt-link></b-nav-item
                    >
                    <nuxt-link to="/posts">Posts</nuxt-link>
                    <nuxt-link to="/about">About</nuxt-link> -->
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input
                            size="sm"
                            class="mr-sm-2"
                            placeholder="Search"
                        ></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit"
                            >Search</b-button
                        >
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px dotted #ccc;
}
.header .title {
    font-size: 3rem;
    color: #526488;
}
.header ul {
    display: flex;
}
.header a {
    display: inline-block;
    background: #333;
    color: #fff;
    padding: 0.3rem 1rem;
    margin-right: 0.5rem;
}
</style>
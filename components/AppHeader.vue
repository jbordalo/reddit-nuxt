<template>
    <div>
        <b-navbar toggleable="lg" type="white" variant="danger">
            <b-navbar-brand href="#" to="/">Reddit</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/subreddits">Subreddits</b-nav-item>
                    <b-nav-item to="/profile">Profile</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item
                        id="loginStatusBtn"
                        :class="{
                            'loginStatusBtn--green': $auth.loggedIn,
                            'loginStatusBtn--red': !$auth.loggedIn,
                        }"
                    >
                    </b-nav-item>
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <a href="#">{{
                                $auth.loggedIn ? $auth.user.name : "User"
                            }}</a>
                        </template>

                        <div v-if="!$auth.loggedIn">
                            <b-dropdown-item to="/login" href="#"
                                >Log in</b-dropdown-item
                            >
                            <b-dropdown-item to="/register" href="#"
                                >Register</b-dropdown-item
                            >
                        </div>
                        <div v-else>
                            <b-dropdown-item @click.native="logout" href="#"
                                >Log out</b-dropdown-item
                            >
                        </div>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    methods: {
        async logout() {
            await this.$auth.logout();
        },
    },
});
</script>

<style lang="scss" src="~/assets/css/header.scss" scoped>
</style>
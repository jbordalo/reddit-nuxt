<template>
    <div class="container mt-4">
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Enter email"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Username:"
                label-for="input-2"
            >
                <b-form-input
                    id="input-2"
                    type="text"
                    v-model="form.username"
                    placeholder="Enter name"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-3"
                label="Password:"
                label-for="input-3"
            >
                <b-form-input
                    id="input-3"
                    type="password"
                    v-model="form.password"
                    placeholder="Enter password"
                    required
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Register</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// import axios from "axios";

type RegisterForm = {
    email: string;
    username: string;
    password: string;
};

@Component({ name: "Register" })
export default class Register extends Vue {
    form: RegisterForm = { email: "", username: "", password: "" };
    error: string = "";

    async onSubmit() {
        const formData = JSON.stringify(this.form);
        console.log(formData);
        try {
            const registerResponse = await this.$axios.post("register", {
                username: this.form.username,
                email: this.form.email,
                password: this.form.password,
            });

            console.log("Register response: ");
            console.log(registerResponse);

            const loginResponse = await this.$auth.loginWith("local", {
                data: {
                    email: this.form.email,
                    password: this.form.password,
                },
            });

            console.log("Log in response: ");
            console.log(loginResponse);

            console.log(this.$auth.loggedIn);
            console.log(this.$auth.user);

            this.$router.push("/");
        } catch (e) {
            this.error = e.response.data.message;
            alert(this.error);
        }
    }
    onReset() {
        // Reset our form values
        this.form.email = "";
        this.form.username = "";
        this.form.password = "";
    }

    head() {
        return {
            title: "Register",
        };
    }
}
</script>

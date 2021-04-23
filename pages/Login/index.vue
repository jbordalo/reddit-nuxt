<template>
    <div class="container mt-4">
        <b-form @submit.prevent="onSubmit">
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
                id="input-group-3"
                label="Password:"
                label-for="input-2"
            >
                <b-form-input
                    id="input-2"
                    type="password"
                    v-model="form.password"
                    placeholder="Enter password"
                    required
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Log in</b-button>
        </b-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

type LoginForm = {
    email: string;
    password: string;
};

@Component({ name: "Login" })
export default class Login extends Vue {
    form: LoginForm = { email: "", password: "" };
    error: string = "";

    async onSubmit() {
        const formData = JSON.stringify(this.form);
        console.log(formData);
        try {
            await this.$auth.loginWith("local", {
                data: {
                    email: this.form.email,
                    password: this.form.password,
                },
            });

            console.log(this.$auth.loggedIn);
            console.log(this.$store.state.auth.loggedIn);

            // this.$router.push("/");
        } catch (e) {
            this.error = e.response.data.message;
            alert(this.error);
        }
    }

    head() {
        return {
            title: "Login",
        };
    }
}
</script>

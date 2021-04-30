<template>
    <div class="container mt-4">
        <b-alert v-model="error" variant="danger">Wrong credentials!</b-alert>
        <b-form @submit.prevent="onSubmit">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                    @focus="error = false"
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
                    @focus="error = false"
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
    error: boolean = false;

    async onSubmit() {
        try {
            this.$auth
                .loginWith("local", {
                    data: {
                        email: this.form.email,
                        password: this.form.password,
                    },
                })
                .then((res) => {
                    if (res) {
                        this.$auth
                            .setUserToken(res.data.token)
                            .then(() => this.$router.push("/profile"));
                    }
                })
                .catch((err) => {
                    this.error = true;
                    console.log(err);
                });

            // this.$auth.setUserToken("local", "Bearer " + res.data.token);

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

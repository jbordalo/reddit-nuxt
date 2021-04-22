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
import { Vue } from "nuxt-property-decorator";

type LoginForm = {
    email: string;
    password: string;
};

export default class AppLogin extends Vue {
    form: LoginForm = { email: "", password: "" };

    onSubmit() {
        const formData = JSON.stringify(this.form);
        console.log(formData);
    }

    head() {
        return {
            title: "Login",
        };
    }
}
</script>

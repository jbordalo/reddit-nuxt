<template>
    <div class="container mt-4">
        <b-alert v-model="error" variant="danger">Invalid credentials!</b-alert>
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

            <b-form-group id="input-group-4" label="Age:" label-for="input-4">
                <b-form-input
                    id="input-4"
                    type="number"
                    v-model="form.age"
                    placeholder="18"
                    min="18"
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

type RegisterForm = {
    email: string;
    username: string;
    password: string;
    age: number;
};

@Component({ name: "Register" })
export default class Register extends Vue {
    form: RegisterForm = { email: "", username: "", password: "", age: 18 };
    error: boolean = false;

    computeDate(event: any) {
        console.log(event);
    }

    async onSubmit() {
        try {
            const registerResponse = await this.$axios.post("users", {
                name: this.form.username,
                email: this.form.email,
                password: this.form.password,
                age: this.form.age,
            });

            console.log("Register response: ");
            console.log(registerResponse);

            this.$router.push("/login");
        } catch (e) {
            alert(e.response.data.message);
            this.error = true;
        }
    }
    onReset() {
        // Reset our form values
        this.form.email = "";
        this.form.username = "";
        this.form.password = "";
        this.form.age = 18;
    }

    head() {
        return {
            title: "Register",
        };
    }
}
</script>

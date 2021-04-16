<template>
    <div>
        <template>
            <div>
                <b-form @submit.prevent="onSubmit">
                    <b-form-group label="Subreddit:">
                        <b-form-input
                            v-model="text"
                            placeholder="Enter subreddit"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Search</b-button>
                </b-form>
            </div>
        </template>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SearchSubreddits extends Vue {
    text: string = "";

    onSubmit() {
        this.$emit("search-text", this.text);
        this.text = "";
    }
}
</script>

<style scoped>
</style>
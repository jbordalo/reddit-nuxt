<template>
    <div>
        <template>
            <div>
                <b-form>
                    <b-form-group label="Subreddit:">
                        <b-form-input
                            v-model="text"
                            placeholder="Enter subreddit"
                            @keydown.prevent.enter
                            required
                        ></b-form-input>
                    </b-form-group>
                </b-form>
            </div>
        </template>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Debounce } from "vue-debounce-decorator";

@Component
export default class SearchSubreddits extends Vue {
    text: string = "";

    onSubmit() {
        this.$emit("search-text", this.text);
        this.text = "";
    }

    @Watch("text")
    @Debounce(250)
    debounce() {
        this.$emit("search-text", this.text);
    }
}
</script>

<style lang="scss" scoped>
</style>
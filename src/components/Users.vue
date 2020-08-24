<template lang="pug">
	h1 Hello Word
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import gql from 'graphql-tag';

@Component({
	name: 'Users',
})
export default class Users extends Vue {
	constructor() { super(); }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>

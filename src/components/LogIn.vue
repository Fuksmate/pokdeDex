<template>
  <i-modal
    :hideOnClickOutside="false"
    :showClose="false"
    v-model="visible"
    size="sm"
  >
    <template #header>
      Hello
    </template>
    <i-form v-model="schema">
      <i-form-group name="group">
        <i-form-group required>
          <i-form-label>Nickname</i-form-label>
          <i-input name="nickname" placeholder="Nickname..." />
          <i-form-error for="nickname" />
        </i-form-group>
      </i-form-group>
    </i-form>
    <template #footer>
      <i-button @click="setNickname" type="button">Log in</i-button>
    </template>
  </i-modal>
</template>

<script>
export default {
  data() {
    return {
      visible: true, //channge to true
      schema: this.$inkline.form({
        group: {
          nickname: {
            validators: [{ name: 'required' }],
          },
        },
      }),
    }
  },
  methods: {
    setNickname() {
      const isNickname = this.schema.group.nickname.value
      localStorage.name = this.schema.group.nickname.value
      isNickname && (this.visible = false)
    },
  },
}
</script>

<style></style>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useUserStore } from '@/store/userStore';
import { useRoute, useRouter } from 'vue-router';
import { useLocale } from 'vuetify';
import { register } from '@/api/user';

const { t } = useLocale();
const formRules = reactive({
  username: [
    (value: string) => {
      if (value) return true;
      return t('username required');
    }
  ],
  password: [
    (value: string) => {
      if (value) return true;
      return t('password required');
    }
  ]
});
const formModel = reactive({
  username: 'admin',
  password: ''
});

const userStore = useUserStore();
const router = useRouter();
const submiting = ref(false);
const formValid = ref(false);
const handleSubmit = async () => {
  if (formValid.value === true) {
    submiting.value = true;
    try {
      const { data } = await register(formModel);
      const { access_token } = data;
      submiting.value = false;
      userStore.setToken(access_token);
      router.replace('/');
    } catch (error) {
      submiting.value = false;
      console.log(error);
    }
  }
};
</script>

<template>
  <VForm v-model="formValid" @submit.prevent>
    <VRow class="d-flex mb-3">
      <VCol cols="12">
        <VLabel class="mb-1">{{ $t('username') }}</VLabel>
        <VTextField
          variant="outlined"
          color="primary"
          name="username"
          :rules="formRules.username"
          v-model="formModel.username"
        />
      </VCol>
      <VCol cols="12">
        <VLabel class="mb-1">{{ $t('email') }}</VLabel>
        <VTextField variant="outlined" type="email" hide-details color="primary"></VTextField>
      </VCol>
      <VCol cols="12">
        <VLabel class="mb-1">{{ $t('password') }}</VLabel>
        <VTextField
          variant="outlined"
          type="password"
          color="primary"
          :rules="formRules.password"
          v-model="formModel.password"
        />
      </VCol>
      <VCol cols="12">
        <VBtn
          :loading="submiting"
          type="submit"
          color="primary"
          size="large"
          block
          flat
          @click="handleSubmit"
        >
          {{ $t('sign_up') }}
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

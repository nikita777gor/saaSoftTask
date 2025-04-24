<script setup lang="ts">
import type {
  TAccountRecord,
  IAccount
} from '@/types/accountFormTypes.ts'

import { InputText, Password, Select } from 'primevue'

import { computed, ref, watch } from 'vue'
import { useAccountStore } from '@/stores/AccountStore.ts';


const props = defineProps<IAccount>();

const accountStore = useAccountStore();

const formRecordTypes: TAccountRecord[] = ['LDAP', 'Локальная'];
const accountData = ref({...props});

const showPassword = computed(() => accountData.value.record === 'Локальная' ? true : false);

watch(accountData.value, () => {
  accountStore.editAccount(accountData.value);
})

</script>

<template>

  <Transition name="show" appear>

    <form @focusout="accountStore.validationAccountsData(accountData.id)" class="grid grid-cols-12 gap-4 h-">

      <InputText @input="($event: any) => accountData.markers = accountStore.unparseAccountMarkers($event.target.value)"
                 :value="accountStore.parseAccountMarkers(accountData.markers)"
                 maxlength="50" class="w-full col-span-3"/>
      <Select v-model="accountData.record" :invalid="accountData.errors.record" @change="accountStore.validationAccountsData(accountData.id)"
              value="accountRecord" :options="formRecordTypes" class="w-full col-span-2"/>
      <div class="col-span-6">
        <div class="grid grid-cols-2 gap-4">
          <InputText v-model="accountData.login" :invalid="accountData.errors.login"
                     maxlength="100" class="w-full transition" :class="!showPassword ? 'col-span-2' : 'col-span-1'"/>
          <Password v-if="showPassword" v-model="accountData.password" :value="password" :invalid="accountData.errors.password"
                    maxlength="100" :feedback="false" toggle-mask class="w-full"/>
        </div>

      </div>
      <div class="flex items-center justify-center">
        <i @click="accountStore.removeAccount(accountData.id)" class="pi pi-trash text-2xl cursor-pointer text-slate-500"></i>
      </div>


    </form>

  </Transition>

</template>

<style scoped>

.show-enter-active{
  animation: show 0.3s;
}

@keyframes show {
  from{
    opacity: 0;
    transform: scale(0.95);
  }
  to{
    opacity: 1;
    transform: scale(1);
  }
}


</style>

<script setup lang="ts">
import AccountFormItem from '@/components/AccountForm/AccountFormItem.vue'
import { onMounted } from 'vue'

import { useAccountStore } from '@/stores/AccountStore.ts';

const accountStore = useAccountStore();


onMounted(() => {
  accountStore.getAccountsData();
})
</script>

<template>

    <div class="flex items-center gap-4 mt-8 mb-6">
      <h3 class="text-2xl font-semibold text-slate-700">Учетные записи</h3>
      <i @click="accountStore.createAccount()" class="pi pi-plus border border-solid border-slate-300 rounded-xl p-4 text-slate-600 cursor-pointer"></i>
    </div>

    <div class="flex items-center gap-2 mb-7">
      <i class="pi pi-question-circle text-3xl text-slate-500"></i>
      <p class="text-slate-500 font-medium">Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</p>
    </div>

    <div v-if="accountStore.accountsData.length > 0">

      <div class="grid grid-cols-12 gap-4 mb-4">
        <p class="text-slate-400 text-sm col-span-3">Метки</p>
        <p class="text-slate-400 text-sm col-span-2">Тип записи</p>
        <div class="grid grid-cols-2 col-span-6 gap-4">
          <p class="text-slate-400 text-sm">Логин</p>
          <p class="text-slate-400 text-sm">Пароль</p>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <AccountFormItem v-for="account in accountStore.accountsData"
                         :key="account.id" :id="account.id" :markers="account.markers" :record="account.record"
                         :login="account.login" :password="account.password" :errors="account.errors"/>
      </div>

    </div>

    <div class="flex justify-center" v-else>
      <h1 class="text-xl font-bold">В таблице нет записей</h1>
    </div>

</template>

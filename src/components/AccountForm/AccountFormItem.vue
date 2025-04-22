<script setup lang="ts">

import { InputText, Password, Select } from 'primevue'

import { TAccountFormRecord } from '@/components/AccountForm/accountFormTypes.ts';

const accountFormRecord: TAccountFormRecord[] = ['LDAP', 'Локальная'];

</script>

<template>

  <div class="grid grid-cols-12 gap-4 h-">

    <InputText maxlength="50" class="w-full col-span-3"/>
    <Select :options="accountFormRecord" class="w-full col-span-2"/>
    <div class="col-span-6 grid grid-cols-2 gap-4">
      <InputText maxlength="100" class="w-full"/>
      <Password maxlength="100" :feedback="false" toggle-mask class="w-full"/>
    </div>
    <div class="flex items-center justify-center">
      <i class="pi pi-trash text-2xl cursor-pointer text-slate-500"></i>
    </div>


  </div>

</template>

<style scoped>

</style>

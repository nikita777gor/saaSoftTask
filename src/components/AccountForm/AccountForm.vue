<script setup lang="ts">
import AccountFormItem from '@/components/AccountForm/AccountFormItem.vue'

</script>

<template>

  <div class="flex items-center gap-4 mt-8 mb-6">
    <h3 class="text-2xl font-semibold text-slate-700">Учетные записи</h3>
    <i class="pi pi-plus border border-solid border-slate-300 rounded-xl p-4 text-slate-600 cursor-pointer"></i>
  </div>

  <div class="flex items-center gap-2 mb-7">
    <i class="pi pi-question-circle text-3xl text-slate-500"></i>
    <p class="text-slate-500 font-medium">Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;</p>
  </div>

  <div>

    <div class="grid grid-cols-12 gap-4 mb-4">
      <p class="text-slate-400 text-sm col-span-3">Метки</p>
      <p class="text-slate-400 text-sm col-span-2">Тип записи</p>
      <div class="grid grid-cols-2 col-span-6 gap-4">
        <p class="text-slate-400 text-sm">Логин</p>
        <p class="text-slate-400 text-sm">Пароль</p>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <AccountFormItem/>
      <AccountFormItem/>
    </div>

  </div>

</template>

import { defineStore } from 'pinia';
import { ref } from 'vue'

import type { IAccount, TAccountMarker } from '@/types/accountFormTypes.ts'

export const useAccountStore = defineStore('accountStore', () => {

  const accountsData = ref<IAccount[]>([]);

  const parseAccountMarkers = (markers: TAccountMarker[]):string => {
    return markers.reduce((acc, item, index, array) => {
      if(index === array.length - 1) {
        return acc + item.text
      }else{
        return acc + (item.text + "; ")
      }
    }, '')
  }
  const unparseAccountMarkers = (markers: string):TAccountMarker[] => {
    const unparseMarkers:TAccountMarker[] = [];
    markers.split("; ").forEach((marker) => {
      unparseMarkers.push({text: marker});
    })
    return unparseMarkers;
  }

  // Крайне простая валидация в реальном проекте предусматривается отдельный хелпер для валидации
  const validationAccountsData = (id:number):void => {
    console.log('validation')
    const account:IAccount | undefined = accountsData.value.find((item) => item.id === id)
    if(typeof account === 'undefined') {
      return;
    }
    if(!account.record){
      account.errors.record = true;
    }else{
      account.errors.record = false;
    }

    if(!account.login){
      account.errors.login = true;
    }else{
      account.errors.login = false;
    }

    if(account.record === 'Локальная' && !account.password){
      account.errors.password = true;
    }else{
      account.errors.password = false;
    }

    console.log(!Object.values(account.errors).includes(true))
    console.log(account.errors)

    setAccountsData()

  }


  const getAccountsData = ():void => {
    const data: string | null = localStorage.getItem('accountsData');

    if(!data){
      accountsData.value = [];
      return;
    }
    accountsData.value = JSON.parse(data);
  }

  const setAccountsData = () => {
    const noErrorData:IAccount[] = [];
    accountsData.value.forEach((account) => {
      if(!Object.values(account.errors).includes(true)){
        console.log('при сохранении возникли ошибка')
        noErrorData.push(account);
      }
    })

    localStorage.setItem('accountsData', JSON.stringify(noErrorData));
  }

  const createAccount = ():void => {

    if(accountsData.value.length > 0){
      validationAccountsData(accountsData.value[accountsData.value.length -1].id);
    }

    for(const account of accountsData.value){
      if(Object.values(account.errors).includes(true)){
        alert('Для создания новой записи закончите заполнение старой')
        return;
      }
    }

    accountsData.value.push({id: Date.now(), record: 'Локальная', markers: [{text: ''}], login: '', password: '', errors: {record: false, login: false, password: false}} as IAccount);
  }

  const removeAccount = (id: number):void => {
    const removeIndex = accountsData.value.findIndex((account) => account.id === id);
    accountsData.value.splice(removeIndex, 1);
    setAccountsData();
  }

  const editAccount = (data:IAccount):void => {
    if(data.record === 'LDAP'){
      data.password = null
    }
    const findAccount = accountsData.value.findIndex((account) => account.id === data.id);
    accountsData.value[findAccount] = data;
  }


  return {
    accountsData,
    parseAccountMarkers,
    unparseAccountMarkers,
    validationAccountsData,
    getAccountsData,
    setAccountsData,
    createAccount,
    removeAccount,
    editAccount
  }
})

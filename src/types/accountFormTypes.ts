export type TAccountRecord = 'Локальная' | 'LDAP';
export type TAccountMarker = {text: string};

export interface IAccountErrors{
  record: boolean,
  login: boolean,
  password: boolean
}

export interface IAccount{
    id: number,
    markers: TAccountMarker[]
    record: TAccountRecord,
    login: string,
    password: string | null,
    errors: IAccountErrors
}



/// <reference types="vite/client" />

/*
 * CSS Modules: явная типизация.
 * TS 7 при нескольких совпавших wildcard-паттернах выбирает *.css (пустой модуль),
 * поэтому повторяем декларацию *.module.css здесь — после vite/client, чтобы она победила.
 */
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

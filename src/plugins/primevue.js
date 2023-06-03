import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dock from "primevue/dock";
import RadioButton from 'primevue/radiobutton';
import SelectButton from 'primevue/selectbutton'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("Dock",Dock)
    nuxtApp.vueApp.component("RadioButton",RadioButton)
    nuxtApp.vueApp.component("SelectButton",SelectButton)
});
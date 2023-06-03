import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

import Dock from "primevue/dock";
import RadioButton from 'primevue/radiobutton';

import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Listbox from 'primevue/listbox';
import SelectButton from 'primevue/selectbutton';
import DataView from 'primevue/dataview';
import Paginator from 'primevue/paginator';
import DeferredContent from 'primevue/deferredcontent';
import ScrollPanel from 'primevue/scrollpanel';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Tooltip from 'primevue/tooltip';
import ContextMenu from 'primevue/contextmenu';
import TabMenu from 'primevue/tabmenu';
import Image from 'primevue/image';
import ProgressSpinner from 'primevue/progressspinner';
import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice'


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Button", Button);

    nuxtApp.vueApp.component("Dock",Dock)
    nuxtApp.vueApp.component("RadioButton",RadioButton)
    nuxtApp.vueApp.component("SelectButton",SelectButton)

    nuxtApp.vueApp.component("Checkbox", Checkbox);
    nuxtApp.vueApp.component("Dropdown", Dropdown);
    nuxtApp.vueApp.component("InputSwitch", InputSwitch);
    nuxtApp.vueApp.component("InputText", InputText);
    nuxtApp.vueApp.component("Listbox", Listbox);
    nuxtApp.vueApp.component("SelectButton", SelectButton);
    nuxtApp.vueApp.component("DataView", DataView);
    nuxtApp.vueApp.component("Paginator", Paginator);
    nuxtApp.vueApp.component("DeferredContent", DeferredContent);
    nuxtApp.vueApp.component("ScrollPanel", ScrollPanel);
    nuxtApp.vueApp.component("Splitter", Splitter);
    nuxtApp.vueApp.component("SplitterPanel", SplitterPanel);
    nuxtApp.vueApp.component("Tooltip", Tooltip);
    nuxtApp.vueApp.component("ContextMenu", ContextMenu);
    nuxtApp.vueApp.component("TabMenu", TabMenu);
    nuxtApp.vueApp.component("ScrollPanel", ScrollPanel);
    nuxtApp.vueApp.component("Image", Image);
    nuxtApp.vueApp.component("ProgressSpinner", ProgressSpinner);
    nuxtApp.vueApp.component("Terminal", Terminal);
    nuxtApp.vueApp.component("TerminalService", TerminalService);
    
    //other components that you need

});

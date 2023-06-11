import * as components from './components'

const defaultComponents = components?.default;

// component name and setup in entry file
const tailwindYou = {
    install(Vue) {
        Object.keys(defaultComponents).forEach(name =>{
           Vue.component(name, defaultComponents[name]);
            });  
    },
}
export default tailwindYou;

// exposing individual components for treeshaking
export { UBadge } from "./components/Badge";
export { UButton } from "./components/Button";
export { UCard } from "./components/Card";
export { UShape } from "./components/Shape";

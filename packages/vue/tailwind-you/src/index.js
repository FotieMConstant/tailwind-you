import * as components from './components'

const defaultComponent = components?.default;
const vueComponents = {
    install(Vue) {
        Object.keys(defaultComponent).forEach(name =>{
           Vue.components(name, defaultComponent[name]);
            });  
    },
}
export default vueComponents;

export { SButton } from "./components/Button";
export { SCard } from "./components/Card";
export { SShape } from "./components/Shape";

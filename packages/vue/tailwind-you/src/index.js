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

export { TYBadge } from "./components/Badge";

export { TYButton } from "./components/Button";
export { TYCard } from "./components/Card";
export { TYShape } from "./components/Shape";

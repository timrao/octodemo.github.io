/// <reference types="vite/client" />

/**定义扩展属性 */
interface ImportMetaEnv {
    readonly VITE_PRODUCT_LINK_1: string;
    readonly VITE_PRODUCT_PRICE_1: string;

    readonly VITE_PRODUCT_LINK_2: string;
    readonly VITE_PRODUCT_PRICE_2: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
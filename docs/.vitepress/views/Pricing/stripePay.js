//直接配置strip收银支付链接
const paymentURL = {
    'link_9.99': import.meta.env.VITE_PRODUCT_LINK_1,
    'link_21.99': import.meta.env.VITE_PRODUCT_LINK_2
}

//定义价格套餐
export const prices = [
    import.meta.env.VITE_PRODUCT_PRICE_1,
    import.meta.env.VITE_PRODUCT_PRICE_2
];

/**
 * 跳转付款界面
 * @param {*} PRICE_ID 
 * @returns 
 */
export function getStripePayUrl(PRICE_ID) {
    const payment_url = paymentURL[`link_${PRICE_ID}`];
    if (!payment_url) {
        return alert('invalid payment_url');
    }

    try {
        window.open(payment_url, "_blank");
    } catch (err) {
        console.error(err);
    }
}
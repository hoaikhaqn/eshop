export const formatCurrency = (money) =>{
    return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(money)
}
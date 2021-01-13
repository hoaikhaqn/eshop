export const formatCurrency = (money) => {
    return new Intl.NumberFormat('vi-VI', {
        style: 'currency',
        currency: 'VND'
    }).format(money)
}
export const toCapitalize = (string) => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}
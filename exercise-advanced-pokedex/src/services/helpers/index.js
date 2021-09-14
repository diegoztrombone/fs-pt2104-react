export const catcher = fn => async (...args) => {
    try {
        return await fn(...args)
    } catch (error) {
        console.log('> something went wrong')
        return false
    }
}
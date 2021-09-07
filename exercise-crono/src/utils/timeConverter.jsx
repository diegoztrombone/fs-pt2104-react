export default (crono, str, n, cronoDiv, moduleDiv) => {
    if(!cronoDiv || !moduleDiv) {
        return (str + Math.floor(crono)).slice(n)
    }
    return (str + Math.floor((crono/cronoDiv) % moduleDiv)).slice(n)
    
}
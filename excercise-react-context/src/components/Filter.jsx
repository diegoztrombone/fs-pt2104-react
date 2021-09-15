import List from "./List"
export default ({country, search}) => {
    return country.map((filterCountry, i) => {
        if(filterCountry.name.includes(search)) {
            return <List data={filterCountry} key={i} />;
        }
        return <List data={country} id={i} />  
    })
}

/* 
if(filterCountry.name.includes(search)) {
            return <List data={filterCountry} key={i} />;
        }
*/
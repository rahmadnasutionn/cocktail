// import drinks from './drinks.js';

class DataSource {
    static searchDrinks(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.drinks) {
                    return Promise.resolve(responseJson.drinks);
                } else {
                    return Promise.reject(`${keyword} not found`);
                }
            });
    }
}

export default DataSource;
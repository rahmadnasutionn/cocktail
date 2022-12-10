import DataSource from '../data/data-source.js';
import '../component/search-bar.js';
import '../component/drink-list.js';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const drinkList = document.querySelector('drink-list');

    const onButtonSearchClicked = async() => {
        try {
            const result = await DataSource.searchDrinks(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult = (results) => {
        drinkList.drinks = results;
    };

    const fallbackResult = (message) => {
        drinkList.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
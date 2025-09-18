import {generateYear} from "./helpers/yearGenerateHelper";
import {renderPreviousSearches} from "./ui/renderPreviousSearches";
import {bindSearchEvents} from "./events/searchEvents";
import {bindPopupEvents} from "./events/popupEvents";

function init():void {

    generateYear(1960, 2025);
    renderPreviousSearches();
    bindSearchEvents();
    bindPopupEvents();

}

init();
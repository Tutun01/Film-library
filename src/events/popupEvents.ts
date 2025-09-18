import {closePopupHandler} from "../handlers/closePopupHandler";

export function bindPopupEvents():void{

    const popup = document.getElementById("singleMoviePopup") as HTMLDivElement;

    popup.addEventListener("click", closePopupHandler);
}
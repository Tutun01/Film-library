export function closePopupHandler( e:any):void{
    const popup = document.getElementById("singleMoviePopup") as HTMLDivElement;

    if (e.target === popup )  {
        popup.style.display = "none";
    }

}
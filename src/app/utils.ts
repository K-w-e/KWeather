export class utils{
    constructor(){}

    static SetGraphic(description, div){
        if(description=="clear sky")
          div.classList.add("clear_sky");
        else if(description=="few clouds")
          div.classList.add("few_clouds");
        else if(description=="scattered clouds")
            div.classList.add("scattered_clouds");
        else if(description=="broken clouds")
            div.classList.add("broken_clouds");
        else if(description=="rain" || description.includes("rain"))
            div.classList.add("rain");
        else if(description=="overcast clouds")
            div.classList.add("broken_clouds");
        else if(description=="mist")
            div.classList.add("mist");
        else 
            div.classList.add("any");
      }

    static  checkIcon(desT): string{
      if(desT=="clear sky")
        return "assets/img/sun.png";
      else if(desT=="few clouds")
        return "assets/img/cloud-sunMore.png";
      else if(desT=="broken clouds" || desT=="scattered clouds" || desT=="overcast clouds")
        return "assets/img/cloud.png";
      else if(desT.includes("rain"))
        return "assets/img/rain.png";
      else if(desT.includes("snow"))
        return "assets/img/snow.png";
      else 
        return "assets/img/any.png";
    }

    static UtilDate(date){
        let aNumber : number = Number(date);
        if(aNumber<10)
          return "0"+aNumber;
        else
          return aNumber;
        }

}


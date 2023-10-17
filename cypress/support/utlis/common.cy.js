export const Generate_app_id=(min, max)=> {
    var random= Math.floor(Math.random() * (max - min) ) + min;
    return random
  }
  
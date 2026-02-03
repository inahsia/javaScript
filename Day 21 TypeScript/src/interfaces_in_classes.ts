interface TakePhoto{
  cameraMode:string
  filter:string
  burst:number
}

interface Story{
  createStory():void
}

class Instagram implements TakePhoto,story{
  constructor(
    public filter:string,
    public burst:number,
    public cameraMode:string
  ){

  }

  reateStory():void{
    console.log("this is it")
  }
}


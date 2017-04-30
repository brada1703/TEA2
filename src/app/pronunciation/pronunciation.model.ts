export class Pronunciation {
  public name: string;
  public phonetics: string;
  public definition: string;
  public imagePath: string;
  public videoPath: string;

  constructor(name: string, phonetics: string, definition: string, imagePath: string, videoPath: string) {
    this.name = name;
    this.phonetics = phonetics;
    this.definition = definition;
    this.imagePath = imagePath;
    this.videoPath = videoPath;
  }
}

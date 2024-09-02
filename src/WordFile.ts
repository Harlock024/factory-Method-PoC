import { file } from "./file";

export class WordFile implements file {
  open(): void {
    console.log("open word file (.docx)");
  }
}

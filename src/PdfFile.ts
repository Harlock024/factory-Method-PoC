import { file } from "./file";

export class PdfFile implements file {
  open(): void {
    console.log("open pdf file (.pdf)");
  }
}

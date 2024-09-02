import { file } from "./file";
import { WordFile } from "./WordFile";
import { PdfFile } from "./PdfFile";
import { TxtFile } from "./TxtFile";

export class FactoyFile {
  static createFile(type: string): file | null {
    if (type === "word") {
      return new WordFile();
    } else if (type === "pdf") {
      return new PdfFile();
    } else if (type === "txt") {
      return new TxtFile();
    }
    return null;
  }
}

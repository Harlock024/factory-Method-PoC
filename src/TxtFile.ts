import { file } from "./file";

export class TxtFile implements file {
  open(): void {
    console.log("open txt file (.txt)");
  }
}

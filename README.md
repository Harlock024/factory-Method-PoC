# Factory Method - PoC


- **Interface**

``` typescript

export interface file {
  open(): void;
}

```


- **Productos concretos**

```typescript
 class WordFile implements file {
  open(): void {
    console.log("open word file (.docx)");
  }
}

class PdfFile implements file {
  open(): void {
    console.log("open pdf file (.pdf)");
  }
}

class TxtFile implements file {
  open(): void {
    console.log("open txt file (.txt)");
  }
}

```


- **Creadores**

```typescript
class FactoyFile {
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

```

- **Uso de Patron**

```typescript

const file_1 = FactoyFile.createFile("word");
file_1?.open();
const file_2 = FactoyFile.createFile("pdf");
file_2?.open();
const file_3 = FactoyFile.createFile("txt");
file_3?.open();



```

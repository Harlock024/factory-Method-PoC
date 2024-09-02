import { FactoyFile } from "./FactoryFile";

const file_1 = FactoyFile.createFile("word");
file_1?.open();
const file_2 = FactoyFile.createFile("pdf");
file_2?.open();
const file_3 = FactoyFile.createFile("txt");
file_3?.open();

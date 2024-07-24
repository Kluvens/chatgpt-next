import fs from "fs";

export function getQnAData() {
  const filePath = "app/data/qna.json";
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

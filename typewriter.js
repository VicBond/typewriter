const sentence = "Learn as if you will live forever, live like you will die tomorrow.\n";
const text = sentence.slice(" ");


let delay = 500;
for (const char of text) {
  setTimeout(() => {
    process.stdout.write(char);
  },delay);
  delay += 500;

}
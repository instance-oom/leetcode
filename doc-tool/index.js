const fs = require('fs');
const path = require('path');

if (process.argv.length !== 3) {
  console.log('Please provider mode: [Easy | Medium | Hard]');
  process.exit(0);
}

let docType = process.argv[2];
if (docType !== 'Easy' && docType !== 'Medium' && docType !== 'Hard') {
  console.log(`Invalid mode '${docType}'. Accept value: [Easy | Medium | Hard]`);
  process.exit(0);
}

function main(mode) {
  console.log(`Begin to generate ${mode} docs`);
  let dirPath = path.join(__dirname, `./../${mode}`);
  let files = fs.readdirSync(dirPath);
  let docContent = [`# Leetcode With ${mode} Difficulty`, 'Question List', '', '| |Name|Difficulty| JavaScript |', '|---|:----|:----|:---:'];
  for (let fileName of files) {
    let number = fileName.split('_')[0];
    let url = fs.readFileSync(path.join(dirPath, fileName)).toString().split('\r\n')[0].replace('// ', '');
    let questionName = url.replace('https://leetcode.com/problems/', '').split('/')[0];
    let item = `${number}|[${toCamelCase(questionName)}](${url})|${mode}|[:heavy_check_mark: Done](https://github.com/lon-yang/leetcode/blob/master/${mode}/${encodeURIComponent(fileName)})`;
    docContent.push(item);
  }

  let docPath = path.join(__dirname, `./../docs/${mode}.md`);
  if (fs.existsSync(docPath)) {
    fs.unlinkSync(docPath);
  }
  fs.writeFileSync(docPath, docContent.join('\r\n'));

  genReadMe();
}

function genReadMe() {
  console.log(`Begin to generate README.md`);
  let content = ['# Leetcode', ''];
  let paths = [{
    mode: 'Easy',
    path: path.join(__dirname, './../Easy')
  }, {
    mode: 'Medium',
    path: path.join(__dirname, './../Medium')
  }, {
    mode: 'Hard',
    path: path.join(__dirname, './../Hard')
  }];
  for (let dirPath of paths) {
    let count = 0;
    if (fs.existsSync(dirPath.path)) {
      count = fs.readdirSync(dirPath.path).length;
    }
    content.push(`<h4><a href="https://github.com/lon-yang/leetcode/blob/master/docs/${dirPath.mode}.md">${dirPath.mode}</a>  (Done: ${count})</h4>`)
  }
  let readmePath = path.join(__dirname, './../README.md');
  if (fs.existsSync(readmePath)) {
    fs.unlinkSync(readmePath);
  }
  fs.writeFileSync(readmePath, content.join('\r\n'));
}

function toCamelCase(name) {
  var arr = name.split('-');
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item.replace(/i/g, '') === '') {
      arr[i] = item.toUpperCase();
    } else {
      arr[i] = item.split('')[0].toUpperCase() + item.substr(1);
    }
  }
  return arr.join(' ');
}

main(docType);
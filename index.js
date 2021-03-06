const fs = require("fs");
const path = require("path");

const dirPath = path.join(process.cwd(), 'input');
const filesPath = fs.readdirSync(dirPath);

const unit = process.env.unit || 'rpx'
let files = filesPath.map(item => {
  const itemName = item
  const itemPath = path.join(dirPath, item)
  const itemFile = fs.readFileSync(itemPath, 'utf8')
  let itemFileLines = itemFile.split('\n')
  itemFileLines = itemFileLines.map(line => {
    const regExp = new RegExp(`(\\d+)${unit}`, 'g')
    if (line.indexOf(unit) > -1) {
      if (line.indexOf('calc') > -1) {
        return line.replace(regExp, `$1vmin / 7.5`)
      } else {
        return line.replace(regExp, `calc($1vmin / 7.5)`)
      }
    }
    return line
  })
  try {
    fs.writeFileSync(path.join(process.cwd(), 'output', itemName), itemFileLines.join('\n'))
    console.log(`${itemName} 转译成功`)
  } catch (error) {
    console.log(error)
  }
})


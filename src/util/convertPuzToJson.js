function isPuz(bytes) {
  const magic = "ACROSS&DOWN";
  for (let i = 0; i < magic.length; i += 1) {
    if (bytes[2 + i] !== magic.charCodeAt(i)) return false;
  }
  return bytes[2 + magic.length] === 0;
}

class PuzReader {
  constructor(buf) {
    this.buf = buf;
  }

  readShort(ix) {
    // eslint-disable-next-line
    return this.buf[ix] | (this.buf[ix + 1] << 8);
  }

  readString() {
    const result = [];
    while (true) {
      const c = this.buf[(this.ix += 1)];
      if (c === 0) break;
      result.push(String.fromCodePoint(c));
    }
    return result.join("");
  }

  toJson() {
    const json = {};
    const w = this.buf[0x2c];
    const h = this.buf[0x2d];
    const scrambled = this.readShort(0x32);
    // eslint-disable-next-line
    if (scrambled & 0x0004) {
      // throw new ScrambledError;
    }
    json.size = { cols: w, rows: h };
    const grid = [];
    for (let i = 0; i < w * h; i += 1) {
      grid.push(String.fromCodePoint(this.buf[0x34 + i]));
    }
    json.grid = grid;
    this.ix = 0x34 + 2 * w * h;
    json.title = this.readString();
    json.author = this.readString();
    json.copyright = this.readString();
    const across = [];
    const down = [];
    const gridnums = [];
    let label = 1;
    for (let i = 0; i < w * h; i += 1) {
      if (grid[i] === ".") {
        gridnums.push(0);
        continue;
      }
      let inc = 0;
      if (i % w === 0 || grid[i - 1] === ".") {
        across.push(`${label}. ${this.readString()}`);
        inc = 1;
      }
      if (i < w || grid[i - w] === ".") {
        down.push(`${label}. ${this.readString()}`);
        inc = 1;
      }

      if (i % w === 0 || grid[i - 1] === ".") {
        gridnums.push(label);
      } else if (i < w || grid[i - w] === ".") {
        gridnums.push(label);
      } else {
        gridnums.push(0);
      }

      label += inc;
    }
    json.clues = { across, down };
    json.gridnums = gridnums;
    return json;
  }
}

export default async function convertPuzToJson(files) {
  const file = files[0];
  if (!file) {
    return null;
  }
  const fileType = file.name.slice(file.name.lastIndexOf("."));
  const reader = new FileReader();

  if (fileType === ".puz") {
    return new Promise(resolve => {
      reader.onload = e => {
        const bytes = new Uint8Array(e.target.result);
        let puz;
        if (isPuz(bytes)) {
          puz = new PuzReader(bytes).toJson();
        } else {
          puz = JSON.parse(new TextDecoder().decode(bytes));
        }
        resolve(puz);
      };
      reader.readAsArrayBuffer(file);
    });
  }
  return null;
}

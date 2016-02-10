var properties = require(`properties-parser`);
var write = require(`fs-writefile-promise`);
var path = require(`path`);
var FS = require(`q-io/fs`);
var src = `locales`;

function getListLocales() {
  return new Promise((resolve, reject) => {
    FS.listDirectoryTree(path.join(process.cwd(), src)).then((dirTree) => {
      var list = [];

      dirTree.forEach((i) => {
        var that = i.split(src + `/`);

        if (that[1]) {
          list.push(that[1]);
        }
      });
      return resolve(list);
    }).catch((e) => {
      console.log(e);
      reject(e);
    });
  });
}

function writeFile(entries) {
  entries.reduce((prevEntry, entry) => {
    write(path.join(process.cwd(), src, entry.locale + `.json`), JSON.stringify(entry.content, null, 2), `utf-8`)
    .then((filename) => {
      console.log(`Done writing: ` + filename);
    }).catch((e) => {
      console.log(e);
    });
  }, {});
}

function getContentMessages(locale) {
  return new Promise((resolve, reject) => {
    properties.read(path.join(process.cwd(), src, locale, `messages.properties`), (messageError, messageProperties) => {
      if (messageError && messageError.code !== `ENOENT`) {
        return reject(messageError);
      }
      resolve({content: messageProperties || {}, locale: locale});
    });
  });
}

function processMessageFiles(locales) {
  return Promise.all(locales.map(getContentMessages));
}

getListLocales().then(processMessageFiles)
.then(writeFile).catch((err) => {
  console.error(err);
});

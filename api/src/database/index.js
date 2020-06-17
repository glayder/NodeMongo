var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/novobanco', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conexão com MongoDB realizada com sucessos!");
}).catch((erro) => {
  console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;

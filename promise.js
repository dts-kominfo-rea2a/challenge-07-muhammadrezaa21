const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const dataTheaterIXX = await promiseTheaterIXX();
  const dataTheaterVGC = await promiseTheaterVGC();
  const dataHasilEmosi = [];
  dataTheaterIXX.forEach((e) => dataHasilEmosi.push(e.hasil));
  dataTheaterVGC.forEach((e) => dataHasilEmosi.push(e.hasil));

  return dataHasilEmosi.filter((e) => e === emosi).length;
};

module.exports = {
  promiseOutput,
};

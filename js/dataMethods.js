const fs = require("fs");

const addPerson = (id, firstName, lastName, age, city) => {
  const allData = loadData();
  const duplicatedData = allData.filter((obj) => obj.id === id);

  if (duplicatedData.length === 0) {
    allData.push({
      id: id,
      fname: firstName,
      lname: lastName,
      age: age,
      city: city,
    });
    saveData(allData);
  } else {
    console.log("Unavailable Id");
  }
};

//   ///////////////////////////////////////////////////////////////////////////////
const loadData = () => {
  try {
    const dataJson = fs.readFileSync("persons.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

//   ///////////////////////////////////////////////////////////////////////////////
const saveData = (allData) => {
  const allDataJson = JSON.stringify(allData);
  fs.writeFileSync("persons.json", allDataJson);
};

//   ///////////////////////////////////////////////////////////////////////////////
const deleteData = (id) => {
  const allData = loadData();
  const dataToKeep = allData.filter((obj) => obj.id !== id);
  saveData(dataToKeep);
};

//   ///////////////////////////////////////////////////////////////////////////////
const readData = (id) => {
  const allData = loadData();
  const itemNeeded = allData.find((obj) => obj.id == id);
  if (itemNeeded) {
    console.log(itemNeeded);
  } else {
    console.log("Id not found");
  }
};

//   ///////////////////////////////////////////////////////////////////////////////
const listData = () => {
  const allData = loadData();
  allData.forEach((obj) => {
    console.log(obj.fname, obj.age, obj.city);
  });
};

//   ///////////////////////////////////////////////////////////////////////////////

module.exports = {
  addPerson,
  deleteData,
  readData,
  listData,
};

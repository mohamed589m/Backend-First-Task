const dataMethods = require("./dataMethods");
const yargs = require("yargs");

//   ///////////////////////////////////////////////////////////////////////////////
yargs.command({
  command: "add",
  describe: "to add and item",
  builder: {
    fname: {
      describe: "This is the first name description in add command",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "This is the last name description in add command",
      demandOption: true,
      type: "strind",
    },
  },
  handler: (x) => {
    dataMethods.addPerson(x.id, x.fname, x.lname, x.age, x.city);
  },
});

//   ///////////////////////////////////////////////////////////////////////////////
yargs.command({
  command: "delete",
  describe: "to delete an item",
  handler: (x) => {
    dataMethods.deleteData(x.id);
  },
});

//   ///////////////////////////////////////////////////////////////////////////////
yargs.command({
  command: "read",
  describe: "to read an item",
  builder:{
    id:{
      describe:"This is the id in read command",
      demandOption:true,
      type:"string"
    }
  },
  handler:(x)=>{
    dataMethods.readData(x.id)
  }
});
//   ///////////////////////////////////////////////////////////////////////////////
yargs.command({
  command: "list",
  describe: "to list the data",
  handler:()=>{
    dataMethods.listData()
  }
})

yargs.parse();

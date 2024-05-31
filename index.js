// https://mongoosejs.com/
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log(err));

// Schema (Shape of a Document)
// Document, Collection, Database

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isMarried: Boolean,
  salary: Number,
  gender: String,
});

const User = mongoose.model("User", userSchema);

// async function storeInformation() {
//   const user = new User({
//     name: "Rio",
//     age: 6,
//     isMarried: false,
//     salary: 60000,
//     gender: "Male",
//   });

//   await user.save();
//   console.log(user);
// }
// storeInformation();

async function fetchInformation() {
  ///////////////////////////////////////////////
  // Query API Select, Sort, Limit, Count Documents
  //find by id
  // const users = await User.findById("665965b74e9eb20b4cc37db4");

  //find marriedd false and select only the name and salary
  // const users = await User.find({ isMarried: false }).select("name salary");

  //find marriedd false and exclude the name and salary
  // const users = await User.find({ isMarried: false }).select("-name -salary");

  //find marriedd false and select the name and salary and sort salary ascending order
  // const users = await User.find({ isMarried: false })
  //   .select("name salary")
  //   .sort("salary");

  //select marriedd false and select the name and salary and sort salary descending order
  // const users = await User.find({ isMarried: false })
  //   .select("name salary")
  //   .sort("-salary");

  // //limit the retrieve data
  // const users = await User.find({ isMarried: false })
  //   .select("name salary")
  //   .sort("-salary")
  //   .limit(2);
  //limit the retrieve data

  // count
  // const users = await User.find({ isMarried: false }).countDocuments();

  ///////////////////////////////////////
  // Complex Query Comparison Operators
  // comparison Operator
  // eq
  // ne
  // gt
  // gte
  // lt
  // lte
  // in
  // nin

  //select users age greater than 30
  // const users = await User.find({ age: { $gt: 30 } });

  //select users age greater than equal  30
  // const users = await User.find({ age: { $gte: 30 } });

  //select users age less than equal  30
  // const users = await User.find({ age: { $lt: 30 } });

  //select users age less than equal  30
  // const users = await User.find({ age: { $lte: 30 } });

  //select users age not equal  30
  // const users = await User.find({ age: { $ne: 30 } });

  //select users age  equal  30
  // const users = await User.find({ age: { $eq: 30 } });

  //select users salary  in  35000, 80000, 60000
  // const users = await User.find({ salary: { $in: [35000, 80000, 60000] } });

  //select users salary not in  35000, 80000, 60000
  // const users = await User.find({ salary: { $nin: [35000, 80000, 60000] } });

  /////////////
  // Complex Query  Or Operations
  // const users = await User.find().or([{ isMarried: false }, { age: 30 }]);

  // Complex Query  and  Operations
  // const users = await User.find().and([{ isMarried: true }, { age: 30 }]);

  //////////////////////////////
  // Exercise Advanced Query

  // Problem I will solve

  // Find those users whose age is greather than 40 or they are ummarried
  // const users = await User.find().or([
  //   { age: { $gt: 40 } },
  //   { isMarried: false },
  // ]);

  // Find only name
  // const users = await User.find()
  //   .or([{ age: { $gt: 40 } }, { isMarried: false }])
  //   .select("name");

  // Sorted them by name asc
  // const users = await User.find()
  //   .or([{ age: { $gt: 40 } }, { isMarried: false }])
  //   .select("name")
  //   .sort("name");

  // Sorted them by name desc
  // const users = await User.find()
  //   .or([{ age: { $gt: 40 } }, { isMarried: false }])
  //   .select("name")
  //   .sort("-name");

  // console.log(users);

  ///////////////////////////////////
  // Update a document (Way 1)
  // const user = await User.findById("665965458c8159af3d91c17e");
  // user.isMarried = true;
  // await user.save();

  // Update a document (Way 2)
  // const user = await User.findByIdAndUpdate(
  //   "665965458c8159af3d91c17e",
  //   {
  //     age: 45,
  //     isMarried: true,
  //   },
  //   { new: true, runValidators: true }
  // );

  /////////////////////////////////
  // Delete documents  to one user
  // await User.deleteOne({ _id: "665964b4ec57072aa2212470" });

  // Delete documents multiple users
  await User.deleteMany({ isMarried: false });
}

fetchInformation();

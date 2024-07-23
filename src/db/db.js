const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://ReshmaScriptlanes:Reshmascriptlanes@cluster0.x6u54l9.mongodb.net/?retryWrites=true&w=majority`
  // `mongodb+srv://ReshmaScriptlanes:ReshmaScript@16@cluster0.x6u54l9.mongodb.net/?retryWrites=true&w=majority`
).then(res=>{
  console.log("connected");
});

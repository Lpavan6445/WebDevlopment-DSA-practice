const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const verificationEmail = require("./verificationemail");
const welcomeEmail = require("./welcomeemail");
const adminEmail = require("./adminemail");

  module.exports = function () {
                  // Some code that registers the user
                    const user = { firstName: "Dhaval" };

                    eventEmitter.on("reg", verificationEmail);
                    eventEmitter.on("reg", welcomeEmail);
                    eventEmitter.on("reg", adminEmail);

                    eventEmitter.emit("reg", user); // events.user registered.map(func => func())
                  };

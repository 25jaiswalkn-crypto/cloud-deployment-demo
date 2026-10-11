const express = require("express");
const os = require("os");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "1.0.0";
const INSTANCE_ID = process.env.INSTANCE_ID || os.hostname();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Cloud deployment demo is running",
    version: APP_VERSION,
    hostname: os.hostname(),
    instanceId: INSTANCE_ID,
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    hostname: os.hostname(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Instance ID: ${INSTANCE_ID}`);
});

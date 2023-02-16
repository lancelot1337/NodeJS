"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = require("http");
const server = (0, http_1.createServer)((request, response) => {
    const stream = fs_1.default.createReadStream(__filename);
    stream.on("data", (chunk) => {
        response.write(chunk);
    });
    stream.on("end", () => {
        response.end();
    });
});
server.listen(1234, () => console.log("server started!!!"));

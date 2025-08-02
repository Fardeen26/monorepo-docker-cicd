import { client } from "@repo/db/client";
import express from "express";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.post("/user", async (req, res) => {
    const { username, password } = req.body;
    const user = await client.user.create({
        data: {
            username,
            password,
        },
    });
    res.json(user);
});
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});

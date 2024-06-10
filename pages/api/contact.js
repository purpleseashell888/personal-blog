import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input!" });
      return;
    }

    // store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://lili:aaChrfU2Jzbj5ehw@cluster0.owfwwys.mongodb.net/my-site?retryWrites=true&w=majority&appName=Cluster0"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("message").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Storing message successfully!", message: newMessage });
  }

  if (req.method === "GET") {
    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://lili:aaChrfU2Jzbj5ehw@cluster0.owfwwys.mongodb.net/my-site?retryWrites=true&w=majority&appName=Cluster0"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    async function getAllDocuments(client, collection, sort) {
      const db = client.db();

      const documents = await db
        .collection(collection)
        .find()
        .sort(sort)
        .toArray();

      return documents;
    }

    try {
      const documents = await getAllDocuments(client, "message", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Getting comments failed." });
      return;
    }
    client.close();
  }

  if (req.method === "DELETE") {
    let client;

    const { id } = req.body;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://lili:aaChrfU2Jzbj5ehw@cluster0.owfwwys.mongodb.net/my-site?retryWrites=true&w=majority&appName=Cluster0"
      );
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }
    const db = client.db();

    try {
      result = await db.collection("message").deleteOne({ _id: id });
      res.status(201).json({ message: "Message deleted successfully!" });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Could not delete." });
      return;
    }
    client.close();
  }
}

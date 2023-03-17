import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      !name.trim() === '' ||
      !message ||
      !message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input' });
    }

    //Store in data base
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        'mongodb+srv://pupok:qwer1234@cluster0.ouy48hb.mongodb.net/my-site?retryWrites=true&w=majority'
      );
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' });
      return;
    }

    const db = client.db('my-site');
    let result;
    try {
      result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      res.status(500).json({ message: 'Could not insert to database' });
      return;
    }
    client.close();
    console.log(newMessage);
    res.status(201).json({ message: newMessage });
  }
}

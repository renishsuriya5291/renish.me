import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('experience');
    const experience = await collection.find({}).toArray();
    return new Response(JSON.stringify({ experience }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch experience' }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('experience');
    const { role, company,  description } = await request.json();

    const result = await collection.insertOne({ role, company,  description, createdAt: new Date() });
    return new Response(JSON.stringify({ success: true, experience: result.ops[0] }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to add experience' }), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('experience');
    const { id, role, company,  description } = await request.json();

    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { role, company,  description } });
    return new Response(JSON.stringify({ success: true, message: 'Updated' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update experience' }), { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('experience');
    const { id } = await request.json();


    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return new Response(JSON.stringify({ success: true, message: 'Deleted' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete experience' }), { status: 500 });
  }
}

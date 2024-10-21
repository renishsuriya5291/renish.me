import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('technologies');
    const technologies = await collection.find({}).toArray();
    return new Response(JSON.stringify({ technologies }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch technologies' }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('technologies');
    const { technology } = await request.json();

    const result = await collection.insertOne({ name:technology, createdAt: new Date() });
    return new Response(JSON.stringify({ success: true, technology: result.ops[0] }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to add technology' }), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('technologies');
    const { id, technology } = await request.json();

    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { name:technology } });
    return new Response(JSON.stringify({ success: true, modifiedCount: result.modifiedCount }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update technology' }), { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('technologies');
    const { id } = await request.json();

    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return new Response(JSON.stringify({ success: true, deletedCount: result.deletedCount }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete technology' }), { status: 500 });
  }
}

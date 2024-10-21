import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb'; // Ensure this is imported

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase'); // Change 'myDatabase' to your actual database name
    const collection = db.collection('projects');
    const projects = await collection.find({}).toArray();
    return new Response(JSON.stringify({ projects }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch projects' }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('projects');
    const { title, description, liveProjectUrl } = await request.json();

    const result = await collection.insertOne({ title, description, liveProjectUrl, createdAt: new Date() });
    return new Response(JSON.stringify({ success: true, project: result.ops[0] }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to add project' }), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('projects');
    const { id, title, description, liveProjectUrl } = await request.json();

    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { title, description, liveProjectUrl } });
    return new Response(JSON.stringify({ success: true, modifiedCount: result.modifiedCount }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update project' }), { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('projects');
    const { id } = await request.json();
    if (!id) {
      return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 });
    }

    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return new Response(JSON.stringify({ success: true, deletedCount: result.deletedCount }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete project' }), { status: 500 });
  }
}

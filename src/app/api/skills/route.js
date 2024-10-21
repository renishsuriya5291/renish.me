import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('skills');
    const skills = await collection.find({}).toArray();
    return new Response(JSON.stringify({ skills }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch skills' }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('skills');
    const { skill } = await request.json();

    const result = await collection.insertOne({ name: skill, createdAt: new Date() });

    return new Response(JSON.stringify({ success: true, skill: 'skill added' }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to add skill' }), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('skills');
    const { id, skill } = await request.json();

    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { name: skill } });
    return new Response(JSON.stringify({ success: true, message: 'Skill updated'}), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update skill' }), { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('skills');
    const { id } = await request.json();

    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return new Response(JSON.stringify({ success: true, deletedCount: result.deletedCount }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete skill' }), { status: 500 });
  }
}

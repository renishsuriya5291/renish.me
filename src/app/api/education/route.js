import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('education');
    const education = await collection.find({}).toArray();
    return new Response(JSON.stringify({ education }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch education' }), { status: 500 });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('education');
    const { degree, fieldOfStudy, institution, duration, description } = await request.json();

    const result = await collection.insertOne({ degree, fieldOfStudy, institution, duration, description, createdAt: new Date() });
    return new Response(JSON.stringify({ success: true, education: result.ops[0] }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to add education' }), { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('education');
    const { id, degree, fieldOfStudy, institution, duration, description } = await request.json();

    const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { degree, fieldOfStudy, institution, duration, description } });
    return new Response(JSON.stringify({ success: true, modifiedCount: result.modifiedCount }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update education' }), { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const client = await clientPromise;
    const db = client.db('myDatabase');
    const collection = db.collection('education');
    const { id } = await request.json();

    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return new Response(JSON.stringify({ success: true, deletedCount: result.deletedCount }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete education' }), { status: 500 });
  }
}

import { put } from '@vercel/blob';

/**
 * Vercel Route Handler for Form Submissions
 * Place in: src/app/api/submit-form/route.js
 */
export async function POST(request) {
  try {
    const form = await request.formData();
    const file = form.get('file');

    if (!file) {
      return new Response('No data provided', { status: 400 });
    }

    // Save the JSON payload to Vercel Blob storage
    // Use 'public' access for simple retrieval via URL
    const blob = await put(file.name, file, { 
      access: 'public',
      addRandomSuffix: true // Prevents name collisions
    });

    return Response.json(blob);
  } catch (error) {
    console.error('Blob upload error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

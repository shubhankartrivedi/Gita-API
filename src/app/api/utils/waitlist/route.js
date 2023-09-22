import { NextResponse } from 'next/server';
import addToWaitlist from '@/lib/mongodb/functions/addWaitlist';
import isEmailValid from '@/utils/checkEmail';

export async function POST(request) {
  const data = await request.json();
  const { name, email, token } = data;

  if (!email || !name) {
    return NextResponse.json({ error: 'Missing name or email' }, { status: 400 });
  }
  if (!isEmailValid(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  // Verify the reCAPTCHA token with the Google reCAPTCHA API
  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY; // Replace with your reCAPTCHA secret key
  const recaptchaResponse = token;

  try {
    const recaptchaVerificationResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecretKey}&response=${recaptchaResponse}`,
    });

    const recaptchaVerificationData = await recaptchaVerificationResponse.json();

    if (recaptchaVerificationData.success) {
      // reCAPTCHA verification succeeded, add to the waitlist
    //   await addToWaitlist(data);
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      // reCAPTCHA verification failed
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return NextResponse.json({ error: 'Error verifying reCAPTCHA' }, { status: 500 });
  }
}

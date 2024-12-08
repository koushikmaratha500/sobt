import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, userName, userEmail, categoryId, userMobile, userCity, userState, userCountry } = body;

    const { data, error } = await supabase
      .from('saas_feature')
      .insert([
        {
          title,
          description,
          user_name: userName,
          user_email: userEmail,
          category: categoryId || 1,
          user_mobile: userMobile,
          user_city: userCity,
          user_state: userState,
          user_country: userCountry
        },
      ])
      .select('id')
      .single();

    if (error) throw error;

    return NextResponse.json({ 
      success: true, 
      id: data.id 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create feature request. '+error },
      { status: 500 }
    );
  }
}

// export const dynamic = "force-static";
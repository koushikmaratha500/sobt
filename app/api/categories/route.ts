import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('saas_category')
      .select('*')
      .order('category_name');

    if (error) throw error;
    
    return NextResponse.json({ 
      categories: data 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

export const dynamic = "force-static";
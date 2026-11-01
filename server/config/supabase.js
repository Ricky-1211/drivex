import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabaseUrl = process.env.SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl) {
    throw new Error("SUPABASE_URL is required to use Supabase Storage.");
}

if (!supabasePublishableKey) {
    throw new Error("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY is required to use Supabase Storage.");
}

export const SUPABASE_STORAGE_BUCKET = process.env.SUPABASE_STORAGE_BUCKET || "drive-bucket";

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
});
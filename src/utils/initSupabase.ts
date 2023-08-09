import { createClient } from "@supabase/supabase-js";

const apiUrl: string = import.meta.env.VITE_SUPABASE_URL;
const apiKey: string = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(apiUrl, apiKey);

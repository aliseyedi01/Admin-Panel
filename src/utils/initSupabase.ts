import { createClient } from "@supabase/supabase-js";

const apiUrl: string = import.meta.env.VITE_SUPABASE_URL;
const apiKey: string = import.meta.env.VITE_SUPABASE_API_KEY;
console.log(apiUrl);
console.log(apiKey);

export const supabase = createClient(apiUrl, apiKey);

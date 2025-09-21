
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://jtnihwefmxgpbyoaghgf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0bmlod2VmbXhncGJ5b2FnaGdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0NDQ5NzMsImV4cCI6MjA3NDAyMDk3M30.JPFnMjOVh1Vd9U008t-wOapvZJLuqUqjdlJfqYP2pto";

export const supabase = createClient(supabaseUrl, supabaseKey);

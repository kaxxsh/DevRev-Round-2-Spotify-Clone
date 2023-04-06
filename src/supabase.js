import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tdnaejkbbipxrknnxwoa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbmFlamtiYmlweHJrbm54d29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1OTY1MzgsImV4cCI6MTk5NjE3MjUzOH0.qSPC8iz6wQfyIG4DenRE3vatBVrN5NqwQBr-v293b3w";
export default createClient(supabaseUrl, supabaseKey);

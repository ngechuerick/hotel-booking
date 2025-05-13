import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://luyfbsblgucgyftnytkh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1eWZic2JsZ3VjZ3lmdG55dGtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMjUxNTgsImV4cCI6MjA2MjYwMTE1OH0.H5J-GGLyMI1xTK6sdgf5Tqq2KxIDmvGTugSagzl1k7s";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

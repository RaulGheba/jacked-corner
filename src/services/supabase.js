import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://whjukfengjztqxborcnw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoanVrZmVuZ2p6dHF4Ym9yY253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0ODY0MjIsImV4cCI6MjA1ODA2MjQyMn0.UXNvU7c1nh0btq4PlB-GzzCyF0COwTTSpJ4bKFGjgxg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://eahefwzmrkmqnqscnpmg.supabase.co"; // replace
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhaGVmd3ptcmttcW5xc2NucG1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4NTc2MDIsImV4cCI6MjA3MjQzMzYwMn0.oc8vRtNM7Qi4B47_pXHHl9Mw1evEm0SJY4pCMj1cMxY"; // replace

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

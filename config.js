/**
 * ============================================================================
 * METALICS MVP - Global Configuration & Supabase Client Setup (SSOT)
 * Author: Ehsan Kosari Hashemi / Metalics Startup
 * ============================================================================
 */

const SUPABASE_URL = 'https://gndxhgtgnuefmwqdzdss.supabase.co';
// کلید عمومی انانایموس (Publishable / Anon Key) متصل به پروژه شما
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduZHhoZ3RnbnVlZm13cWR6ZHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMzI1MjB9.YOUR_ANON_KEY_SAFE_STRING_HERE'; 

// مقداردهی اولیه کلاینت Supabase
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// تنظیمات سراسری پلتفرم متالیکس
window.METALICS_CONFIG = {
    appName: 'METALICS B2B Industrial Platform',
    version: '1.0.0-MVP',
    storageBucket: 'rfq-files',
    trackingPrefix: 'MTX-2026-'
};

console.log('METALICS Config initialized successfully.');

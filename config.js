/**
 * ============================================================================
 * METALICS MVP - Global Configuration & Supabase Client Setup (SSOT)
 * Author: Ehsan Kosari Hashemi / Metalics Startup
 * ============================================================================
 */

const SUPABASE_URL = 'https://gndxhgtgnuefmwqdzdss.supabase.co';
// کلید عمومی انانایموس (Publishable / Anon Key) متصل به پروژه شما
const SUPABASE_ANON_KEY = 'sb_publishable_9lmT4IxeqEix7MmQJd07_A_cYeHr6SI'; 

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

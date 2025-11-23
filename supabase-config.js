// supabase-config.js
// Configuración de Supabase para Rainloud Marketplace

// 📝 INSTRUCCIONES:
// 1. Ve a tu proyecto en Supabase: https://app.supabase.com/
// 2. Clic en "Project Settings" (⚙️) en el menú lateral
// 3. Clic en "API" 
// 4. Copia el "Project URL" y la "anon/public key"
// 5. Pega los valores abajo:

const SUPABASE_URL = 'https://epvrvfqjnbfsytkqqlki.supabase.co';
const SUPABASE_KEY = 'sb_publishable_6Ckv64pwYGOR65Yh-lkQ8g_DtdpRpx4';

// Ejemplo de cómo se vería:
// const SUPABASE_URL = 'https://xyzabcdefgh.supabase.co';
// const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

// NO COMPARTAS ESTAS CREDENCIALES PÚBLICAMENTE
// (Aunque la anon key es segura para usar en el navegador)

// ============================================
// ESTRUCTURA DE LA BASE DE DATOS
// ============================================

/*
TABLA: products
- id (int8, primary key, auto-increment)
- name (text)
- category (text)
- description (text)
- price (int8)
- has_discount (bool)
- original_price (int8, nullable)
- discount_percent (int8, nullable)
- images (jsonb) - Array de URLs de imágenes
- seller_id (text)
- seller_name (text)
- seller_location (text)
- seller_whatsapp (text)
- seller_photo (text, nullable)
- created_at (timestamptz)

TABLA: sellers
- id (text, primary key)
- name (text)
- location (text)
- whatsapp (text)
- photo (text, nullable)
- created_at (timestamptz)

POLÍTICAS RLS (Row Level Security):
- Enable read access for all users (SELECT)
- Enable insert for all users (INSERT)
- Enable update for all users (UPDATE)
- Enable delete for all users (DELETE)
*/
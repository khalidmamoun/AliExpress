import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nweezbuwcjthzfwvfpzg.supabase.co'
const supabaseKey = 'sb_publishable_K7IZvY4wCpMt_G6Q-gNbfg_cxLPPype'

export const supabase = createClient(supabaseUrl, supabaseKey)

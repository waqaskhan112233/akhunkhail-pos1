
import { supabase } from '../../../utils/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    let { data, error } = await supabase.from('products').select('*');
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }
  else if (req.method === 'POST') {
    const { name, price, stock } = req.body;
    const { data, error } = await supabase.from('products').insert([{ name, price, stock }]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }
  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

import { Injectable } from '@angular/core';
import { createClient, PostgrestSingleResponse, SupabaseClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { Runner } from '../interface/runner';
import { environment } from 'src/enviroment';

@Injectable({
  providedIn: 'root',
})
export class RunnersService {
  private supabaseUrl = environment.supabaseUrl;
  private supabaseKey = environment.supabaseKey;
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  // Devuelve el objeto SupabaseClient
  getSupabase() {
    return this.supabase;
  }

  // Devuelve una lista de todos los corredores
  getRunners() {
    return this.supabase.from('runners').select('*');
  }

  // Devuelve un corredor por su id
  getRunner(id: number) {
    return this.supabase.from('runners').select('*').eq('id', id);
  }

  // Devuelve el número de corredores
  getNumberOfRunners() {
    return this.supabase.from('runners').select('*', { count: 'exact' });
  }

  // Elimina un corredor por su id
  deleteRunnerById(id: number) {
    return this.supabase.from('runners').delete().eq('id', id);
  }

  // Crea un nuevo corredor
  createRunner(runner: Runner) {
    return this.supabase.from('runners').insert([runner]);
  }

  updateRunnerById(id: number, runner: Runner) {
    console.log('runners.server.ts - updateRunnerById() - runner:',
    runner);
    return this.supabase
      .from('runners')
      .update(runner)
      .match({ id: id });
  }
  

}
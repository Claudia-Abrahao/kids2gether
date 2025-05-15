'use client';

import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import CadastroForm from '@/components/CadastroForm';
import ComunidadeBanner from '@/components/ComunidadeBanner';
import ComunidadeIntro from '@/components/ComunidadeIntro';
import HistoriasMural from '@/components/HistoriasMural';
import FormularioHistoria from '@/components/FormularioHistoria';
import BlocoDicas from '@/components/BlocoDicas';

export default function Comunidade() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCadastro, setShowCadastro] = useState(false);
  const [showFormularioHistoria, setShowFormularioHistoria] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleGuestAccess = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            {showCadastro ? (
              <section id="cadastro">
                <CadastroForm onSuccess={() => setShowCadastro(false)} />
              </section>
            ) : (
              <LoginForm 
                onLogin={handleLogin}
                onShowCadastro={() => setShowCadastro(true)}
                onGuestAccess={handleGuestAccess}
              />
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <ComunidadeBanner onShowCadastro={() => setShowCadastro(true)} />
      
      <div className="container mx-auto px-4 py-12">
        <ComunidadeIntro />
        
        <div className="mt-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Histórias da Comunidade</h2>
            <button
              onClick={() => setShowFormularioHistoria(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              Compartilhar minha história
            </button>
          </div>
          
          <HistoriasMural />
        </div>

        <div className="mt-16">
          <BlocoDicas />
        </div>
      </div>

      {showFormularioHistoria && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <FormularioHistoria onClose={() => setShowFormularioHistoria(false)} />
          </div>
        </div>
      )}

      {showCadastro && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <CadastroForm onSuccess={() => setShowCadastro(false)} />
          </div>
        </div>
      )}
    </main>
  );
} 
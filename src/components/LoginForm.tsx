import { useState } from 'react';

interface LoginFormProps {
  onLogin: () => void;
  onShowCadastro: () => void;
  onGuestAccess: () => void;
}

const LoginForm = ({ onLogin, onShowCadastro, onGuestAccess }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de autenticação com Firebase
    onLogin();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Bem-vindo à Comunidade Kids2gether</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Entrar
        </button>
      </form>

      <div className="mt-6 text-center space-y-4">
        <button
          onClick={onShowCadastro}
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          Primeiro acesso? Clique aqui para se cadastrar
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">ou</span>
          </div>
        </div>

        <button
          onClick={onGuestAccess}
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          Entrar sem login
        </button>
      </div>
    </div>
  );
};

export default LoginForm; 
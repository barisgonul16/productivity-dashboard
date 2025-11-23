import { useState } from 'react';
import { api } from './services/api';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<any>(null);

  const login = async () => {
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.access_token);
      setUser(res.data);
      setMessage('Hoş geldin, ' + res.data.name + '!');
    } catch (e: any) {
      setMessage(e.response?.data?.message || 'Giriş başarısız');
    }
  };

  const register = async () => {
    try {
      await api.post('/auth/register', { email, password, name });
      setMessage('Kayıt başarılı! Şimdi giriş yap.');
    } catch (e: any) {
      setMessage(e.response?.data?.message || 'Kayıt başarısız');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Productivity Dashboard</h1>

        {user ? (
          <div className="text-center">
            <p className="text-2xl mb-4">Hoş geldin, {user.name}!</p>
            <button onClick={() => setUser(null)} className="bg-red-600 text-white px-6 py-3 rounded">
              Çıkış Yap
            </button>
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Ad Soyad (sadece kayıt için)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mb-3 border rounded"
            />
            <input
              type="email"
              placeholder="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-3 border rounded"
            />
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border rounded"
            />

            <div className="flex gap-3">
              <button onClick={login} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded">
                Giriş Yap
              </button>
              <button onClick={register} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded">
                Kayıt Ol
              </button>
            </div>
          </>
        )}

        {message && <p className="mt-6 text-center text-lg font-semibold">{message}</p>}
      </div>
    </div>
  );
}

export default App;
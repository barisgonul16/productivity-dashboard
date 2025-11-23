import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="h-16 hover:scale-110 transition-transform" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-16 animate-spin-slow" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Frontend Hazır!</h1>
        <p className="text-gray-600 mb-6">Tailwind CSS çalışıyor 🎉</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Sayı: {count}
        </button>
      </div>
    </div>
  )
}

export default App
import { api } from './services/api';
import { useState } from 'react';

// ... diğer kodlar

const [message, setMessage] = useState('');

const testBackend = async () => {
  try {
    const res = await api.get('/');
    setMessage(res.data);
  } catch (e) {
    setMessage('Bağlantı hatası');
  }
};

// return içinde:
<div className="text-center">
  <button 
    onClick={testBackend}
    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-xl"
  >
    Backend Test Et
  </button>
  {message && <p className="mt-4 text-2xl font-bold text-green-600">{message}</p>}
</div>
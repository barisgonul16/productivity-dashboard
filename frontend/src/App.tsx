import { useState } from 'react'
import { api } from './services/api'

function App() {
  const [message, setMessage] = useState('')

  const testBackend = async () => {
    try {
      const res = await api.get('/')
      setMessage(res.data)
    } catch (e: any) {
      console.error(e)
      setMessage('Hata: ' + (e.message || 'Bağlantı kurulamadı'))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Backend Canlı!</h1>
        <button
          onClick={testBackend}
          className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-4 px-10 rounded-xl transition"
        >
          Backend Test Et
        </button>
        {message && (
          <p className="mt-8 text-3xl font-bold text-green-600 animate-pulse">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default App
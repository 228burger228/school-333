import React, { useState } from 'react';
import {
  X,
  User,
  Mail,
  Calendar,
  GraduationCap,
  CheckCircle2,
  LogOut,
  Sparkles
} from 'lucide-react';

export default function AuthModal({
  isOpen,
  onClose,
  user,
  onLogin,
  onLogout,
  favoritesCount
}) {
  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    intakeYear: user ? user.intakeYear : '2026/2027',
    targetDegree: user ? user.targetDegree : 'bachelor'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const userData = {
      name: formData.name,
      email: formData.email || `${formData.name.toLowerCase().replace(/\s+/g, '')}@student.eu`,
      intakeYear: formData.intakeYear,
      targetDegree: formData.targetDegree,
      registeredAt: new Date().toLocaleDateString()
    };

    onLogin(userData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {user ? (
          /* Profile Logged-in View */
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-md">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">{user.name}</h3>
                <p className="text-xs text-slate-400">{user.email}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Год поступления:</span>
                <span className="font-bold text-slate-900">{user.intakeYear}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Уровень:</span>
                <span className="font-bold text-slate-900 capitalize">
                  {user.targetDegree === 'bachelor' ? 'Бакалавриат' : 'Магистратура'}
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-center text-xs">
                <span className="text-slate-500 font-medium">Сохранено ВУЗов:</span>
                <span className="font-bold text-rose-600">{favoritesCount}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs sm:text-sm font-bold transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Выйти из аккаунта</span>
            </button>
          </div>
        ) : (
          /* Registration Form View */
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Личный кабинет абитуриента
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
              Создать профиль
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Сохраняйте понравившиеся университеты, отслеживайте дедлайны и возвращайтесь к результатам тестов.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Ваше имя:
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Например: Александр"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email (для сохранения прогресса):
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Год набора:
                  </label>
                  <select
                    value={formData.intakeYear}
                    onChange={(e) => setFormData({ ...formData, intakeYear: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="2026/2027">2026 / 2027</option>
                    <option value="2027/2028">2027 / 2028</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Ступень:
                  </label>
                  <select
                    value={formData.targetDegree}
                    onChange={(e) => setFormData({ ...formData, targetDegree: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="bachelor">Бакалавриат</option>
                    <option value="master">Магистратура</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 transition-all"
              >
                Сохранить профиль и войти
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

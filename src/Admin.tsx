import React, { useState } from 'react';
import { useTestimonials, Testimonial } from './hooks/useTestimonials';
import { ArrowLeft, Plus, Edit, Trash2, X, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Admin() {
  const { testimonials, addTestimonial, updateTestimonial, removeTestimonial } = useTestimonials();
  
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Partial<Testimonial>>({});

  const handleEdit = (t: Testimonial) => {
    setIsEditing(true);
    setCurrentTestimonial(t);
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esse depoimento?")) {
      removeTestimonial(id);
    }
  };

  const handleAdd = () => {
    setIsEditing(true);
    setCurrentTestimonial({ quote: '', author: '', service: '' });
  };

  const handleSave = () => {
    if (!currentTestimonial.quote || !currentTestimonial.author || !currentTestimonial.service) {
      alert("Preencha todos os campos!");
      return;
    }

    if (currentTestimonial.id) {
      updateTestimonial(currentTestimonial as Testimonial);
    } else {
      addTestimonial(currentTestimonial as Omit<Testimonial, 'id'>);
    }
    
    setIsEditing(false);
    setCurrentTestimonial({});
  };

  return (
    <div className="bg-blush-sand text-warm-ink font-body min-h-screen p-6 md:p-12">
      <Link to="/" className="inline-flex items-center text-bordeaux hover:text-bordeaux/70 mb-8 transition-colors">
        <ArrowLeft size={20} className="mr-2" />
        Voltar para a Home
      </Link>
      
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-10 border-b border-warm-ink/10 pb-6">
          <h1 className="font-display text-3xl text-bordeaux font-medium">Gerenciar Depoimentos</h1>
          <button 
            onClick={handleAdd}
            className="bg-bordeaux text-white px-5 py-2.5 rounded-full flex items-center hover:bg-bordeaux/90 transition-colors"
          >
            <Plus size={18} className="mr-2" />
            Novo Depoimento
          </button>
        </div>

        {isEditing && (
          <div className="bg-dusty-rose/10 p-6 rounded-2xl mb-10 border border-dusty-rose/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-xl text-bordeaux">{currentTestimonial.id ? 'Editar' : 'Adicionar'} Depoimento</h2>
              <button onClick={() => setIsEditing(false)} className="text-warm-ink/60 hover:text-bordeaux">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Autor</label>
                <input 
                  type="text" 
                  value={currentTestimonial.author || ''}
                  onChange={(e) => setCurrentTestimonial({...currentTestimonial, author: e.target.value})}
                  className="w-full border border-warm-ink/20 rounded-xl px-4 py-2 bg-white" 
                  placeholder="Nome do cliente"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Serviço/Tratamento</label>
                <input 
                  type="text" 
                  value={currentTestimonial.service || ''}
                  onChange={(e) => setCurrentTestimonial({...currentTestimonial, service: e.target.value})}
                  className="w-full border border-warm-ink/20 rounded-xl px-4 py-2 bg-white"
                  placeholder="Ex: Numerologia Online"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Depoimento</label>
                <textarea 
                  rows={4}
                  value={currentTestimonial.quote || ''}
                  onChange={(e) => setCurrentTestimonial({...currentTestimonial, quote: e.target.value})}
                  className="w-full border border-warm-ink/20 rounded-xl px-4 py-2 bg-white resize-none"
                  placeholder="Escreva o depoimento aqui..."
                ></textarea>
              </div>

              <div className="flex justify-end pt-2">
                <button 
                  onClick={handleSave}
                  className="bg-bordeaux text-white px-6 py-2.5 rounded-full flex items-center hover:bg-bordeaux/90 transition-colors"
                >
                  <Save size={18} className="mr-2" />
                  Salvar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {testimonials.length === 0 ? (
            <p className="text-center text-warm-ink/60 py-8">Nenhum depoimento cadastrado.</p>
          ) : (
            testimonials.map((t) => (
              <div key={t.id} className="border border-warm-ink/10 rounded-2xl p-6 flex justify-between items-start hover:border-dusty-rose/40 transition-colors">
                <div className="pr-6">
                  <p className="italic text-warm-ink/80 mb-3">"{t.quote}"</p>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-bordeaux">{t.author}</span>
                    <span className="text-warm-ink/40">•</span>
                    <span className="text-sm font-medium text-warm-ink/60">{t.service}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={() => handleEdit(t)} 
                    className="p-2 text-warm-ink/40 hover:text-bordeaux hover:bg-dusty-rose/10 rounded-full transition-colors"
                    title="Editar"
                  >
                    <Edit size={18} />
                  </button>
                  <button 
                    onClick={() => handleDelete(t.id)} 
                    className="p-2 text-warm-ink/40 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    title="Excluir"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RefObject } from "react";

interface FormSectionProps {
  formRef: RefObject<HTMLElement>;
  formHighlight: boolean;
  formData: {
    name: string;
    age: string;
    city: string;
    request: string;
    contact: string;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const FormSection = ({ formRef, formHighlight, formData, setFormData, handleSubmit }: FormSectionProps) => {
  return (
    <>
      <section ref={formRef} className="py-12 md:py-20 px-4 bg-white/95 relative backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-primary mb-6">
            Если время настало — я буду рядом
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Оставь заявку, обсудим формат
          </p>
          
          <Card className={`p-6 md:p-8 border-2 border-accent/30 bg-gradient-to-br from-white to-secondary/5 form-highlight ${formHighlight ? 'active' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-primary">Имя *</label>
                <Input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Как к тебе обращаться?"
                  className="border-2 h-12 md:h-14"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">Возраст</label>
                  <Input 
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    placeholder="Необязательно"
                    className="border-2 h-12 md:h-14"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">Город</label>
                  <Input 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    placeholder="Необязательно"
                    className="border-2 h-12 md:h-14"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-primary">Запрос</label>
                <Textarea 
                  value={formData.request}
                  onChange={(e) => setFormData({...formData, request: e.target.value})}
                  placeholder="Что привело тебя сюда?"
                  className="border-2 min-h-[100px] md:min-h-32"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-primary">Контакт *</label>
                <Input 
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  placeholder="Telegram / WhatsApp / Email"
                  className="border-2 h-12 md:h-14"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white text-lg h-12 md:h-14 submit-button">
                Отправить заявку
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                Отправляя форму, соглашаешься на обработку данных
              </p>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 bg-primary/5 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Анна Ветрюк. Психологическая помощь.
          </p>
        </div>
      </footer>
    </>
  );
};

export default FormSection;

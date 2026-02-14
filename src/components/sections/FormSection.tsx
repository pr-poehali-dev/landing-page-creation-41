import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RefObject, useState } from "react";

interface FormData {
  name: string;
  age: string;
  city: string;
  request: string;
  contact: string;
}

interface FormSectionProps {
  formRef: RefObject<HTMLElement>;
  formHighlight: boolean;
  formData: FormData;
  setFormData: (data: FormData) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const FormSection = ({ formRef, formHighlight, formData, setFormData, handleSubmit }: FormSectionProps) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [marketingOpen, setMarketingOpen] = useState(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [agreedOffer, setAgreedOffer] = useState(false);
  const [agreedMarketing, setAgreedMarketing] = useState(false);
  return (
    <>
      <section id="contact" ref={formRef} className="py-12 md:py-20 px-4 bg-[#111722] relative backdrop-blur-sm border-t-2 border-[#C89A5A]/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#F7BA72] mb-6 hero-text-glow">
            Если время настало — я буду рядом
          </h2>
          <p className="text-xl text-center text-[#FFDEB5]/80 mb-12">
            Оставь заявку, обсудим формат
          </p>
          
          <Card className={`p-6 md:p-8 border-2 border-[#C89A5A]/40 bg-gradient-to-br from-[#1C2330] to-[#C89A5A]/10 form-highlight shadow-[0_0_30px_rgba(247,186,114,0.15)] ${formHighlight ? 'active' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-[#FFDEB5]">Имя *</label>
                <Input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Как к тебе обращаться?"
                  className="border-2 border-[#C89A5A]/30 bg-[#111722]/50 text-[#FFDEB5] placeholder:text-[#FFDEB5]/40 h-12 md:h-14 focus:border-[#F7BA72]"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#FFDEB5]">Возраст</label>
                  <Input 
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    placeholder="Необязательно"
                    className="border-2 border-[#C89A5A]/30 bg-[#111722]/50 text-[#FFDEB5] placeholder:text-[#FFDEB5]/40 h-12 md:h-14 focus:border-[#F7BA72]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#FFDEB5]">Город</label>
                  <Input 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    placeholder="Необязательно"
                    className="border-2 border-[#C89A5A]/30 bg-[#111722]/50 text-[#FFDEB5] placeholder:text-[#FFDEB5]/40 h-12 md:h-14 focus:border-[#F7BA72]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#FFDEB5]">Запрос</label>
                <Textarea 
                  value={formData.request}
                  onChange={(e) => setFormData({...formData, request: e.target.value})}
                  placeholder="Что привело тебя сюда?"
                  className="border-2 border-[#C89A5A]/30 bg-[#111722]/50 text-[#FFDEB5] placeholder:text-[#FFDEB5]/40 min-h-[100px] md:min-h-32 focus:border-[#F7BA72]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[#FFDEB5]">Контакт *</label>
                <Input 
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  placeholder="Telegram / WhatsApp / Email"
                  className="border-2 border-[#C89A5A]/30 bg-[#111722]/50 text-[#FFDEB5] placeholder:text-[#FFDEB5]/40 h-12 md:h-14 focus:border-[#F7BA72]"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="privacy"
                    checked={agreedPrivacy}
                    onCheckedChange={(checked) => setAgreedPrivacy(checked as boolean)}
                    required
                    className="border-[#C89A5A]"
                  />
                  <label htmlFor="privacy" className="text-sm text-[#FFDEB5]/80 leading-relaxed cursor-pointer">
                    Я согласен(а) с{' '}
                    <button
                      type="button"
                      onClick={() => setPrivacyOpen(true)}
                      className="text-[#F7BA72] hover:underline font-medium"
                    >
                      политикой конфиденциальности
                    </button>
                    {' '}и обработкой персональных данных *
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="offer"
                    checked={agreedOffer}
                    onCheckedChange={(checked) => setAgreedOffer(checked as boolean)}
                    required
                    className="border-[#C89A5A]"
                  />
                  <label htmlFor="offer" className="text-sm text-[#FFDEB5]/80 leading-relaxed cursor-pointer">
                    Я согласен(а) с условиями{' '}
                    <button
                      type="button"
                      onClick={() => setOfferOpen(true)}
                      className="text-[#F7BA72] hover:underline font-medium"
                    >
                      договора оферты
                    </button>
                    {' '}*
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="marketing"
                    checked={agreedMarketing}
                    onCheckedChange={(checked) => setAgreedMarketing(checked as boolean)}
                    className="border-[#C89A5A]"
                  />
                  <label htmlFor="marketing" className="text-sm text-[#FFDEB5]/80 leading-relaxed cursor-pointer">
                    Я согласен(а) на получение{' '}
                    <button
                      type="button"
                      onClick={() => setMarketingOpen(true)}
                      className="text-[#F7BA72] hover:underline font-medium"
                    >
                      рекламной рассылки
                    </button>
                  </label>
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full hero-gradient-bg text-[#111722] hover:brightness-110 text-lg h-12 md:h-14 submit-button font-semibold shadow-[0_0_25px_rgba(247,186,114,0.4)] border-2 border-[#C89A5A]"
                disabled={!agreedPrivacy || !agreedOffer}
              >
                Отправить заявку
              </Button>
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

      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Политика конфиденциальности</DialogTitle>
            <DialogDescription>
              Информация об обработке персональных данных
            </DialogDescription>
          </DialogHeader>
          <div className="prose prose-sm max-w-none mt-4">
            <p className="text-muted-foreground">
              Здесь будет размещён текст политики конфиденциальности.
            </p>
            <p className="text-muted-foreground mt-4">
              Пожалуйста, добавьте свой текст политики конфиденциальности в этот раздел.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={offerOpen} onOpenChange={setOfferOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Договор оферты</DialogTitle>
            <DialogDescription>
              Условия предоставления услуг
            </DialogDescription>
          </DialogHeader>
          <div className="prose prose-sm max-w-none mt-4">
            <p className="text-muted-foreground">
              Здесь будет размещён текст договора оферты.
            </p>
            <p className="text-muted-foreground mt-4">
              Пожалуйста, добавьте свой текст договора оферты в этот раздел.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={marketingOpen} onOpenChange={setMarketingOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Согласие на рекламную рассылку</DialogTitle>
            <DialogDescription>
              Информация о маркетинговых коммуникациях
            </DialogDescription>
          </DialogHeader>
          <div className="prose prose-sm max-w-none mt-4">
            <p className="text-muted-foreground">
              Здесь будет размещён текст согласия на рекламную рассылку.
            </p>
            <p className="text-muted-foreground mt-4">
              Пожалуйста, добавьте свой текст согласия на рекламную рассылку в этот раздел.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormSection;
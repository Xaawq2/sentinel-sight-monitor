
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Calendar, Database, Map, Search, ChartBar } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

const Index = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.success'),
      description: t('contact.successDesc'),
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-50 via-forest-50 to-ocean-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-earth-200 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-gradient-to-br from-forest-500 to-forest-600 rounded-lg flex items-center justify-center">
              <Map className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-forest-800">EcoMonitor</span>
          </div>
          <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
            <a href="#how-it-works" className="text-earth-700 hover:text-forest-600 transition-colors">{t('nav.howItWorks')}</a>
            <a href="#features" className="text-earth-700 hover:text-forest-600 transition-colors">{t('nav.features')}</a>
            <a href="#demo" className="text-earth-700 hover:text-forest-600 transition-colors">{t('nav.demo')}</a>
            <a href="#technology" className="text-earth-700 hover:text-forest-600 transition-colors">{t('nav.technology')}</a>
            <a href="#contact" className="text-earth-700 hover:text-forest-600 transition-colors">{t('nav.contact')}</a>
          </div>
          <LanguageToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-forest-900 mb-6 leading-tight">
              {t('hero.title1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-ocean-600">
                {t('hero.title2')}
              </span>
              <span className="block text-4xl md:text-5xl">{t('hero.title3')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-earth-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white px-8 py-4 text-lg">
                {t('hero.viewDemo')}
              </Button>
              <Button size="lg" variant="outline" className="border-forest-600 text-forest-700 hover:bg-forest-50 px-8 py-4 text-lg">
                {t('hero.getStarted')}
              </Button>
            </div>
          </div>
          <div className="mt-12 animate-pulse-subtle">
            <ArrowDown className="w-8 h-8 text-forest-600 mx-auto" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-forest-900 mb-16">{t('howItWorks.title')}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Database className="w-12 h-12 text-ocean-600" />,
                title: t('howItWorks.step1.title'),
                description: t('howItWorks.step1.desc')
              },
              {
                icon: <Search className="w-12 h-12 text-forest-600" />,
                title: t('howItWorks.step2.title'),
                description: t('howItWorks.step2.desc')
              },
              {
                icon: <ChartBar className="w-12 h-12 text-soil-600" />,
                title: t('howItWorks.step3.title'),
                description: t('howItWorks.step3.desc')
              },
              {
                icon: <Map className="w-12 h-12 text-earth-600" />,
                title: t('howItWorks.step4.title'),
                description: t('howItWorks.step4.desc')
              }
            ].map((step, index) => (
              <Card key={index} className="text-center border-earth-200 hover:shadow-lg transition-shadow bg-white/80">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl text-forest-800">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-earth-700">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-forest-900 mb-16">{t('features.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('features.1.title'),
                description: t('features.1.desc'),
                color: "ocean"
              },
              {
                title: t('features.2.title'),
                description: t('features.2.desc'),
                color: "forest"
              },
              {
                title: t('features.3.title'), 
                description: t('features.3.desc'),
                color: "soil"
              },
              {
                title: t('features.4.title'),
                description: t('features.4.desc'),
                color: "earth"
              },
              {
                title: t('features.5.title'),
                description: t('features.5.desc'),
                color: "ocean"
              },
              {
                title: t('features.6.title'),
                description: t('features.6.desc'),
                color: "forest"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-earth-200 hover:shadow-lg transition-all hover:-translate-y-1 bg-white/80">
                <CardHeader>
                  <CardTitle className="text-xl text-forest-800 flex items-center gap-2">
                    <Badge className={`bg-${feature.color}-100 text-${feature.color}-700 hover:bg-${feature.color}-200`}>
                      {index + 1}
                    </Badge>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-earth-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-r from-forest-50 to-ocean-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-forest-900 mb-16">{t('demo.title')}</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-forest-800 mb-6">{t('demo.subtitle')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-forest-500 rounded-full"></div>
                  <span className="text-earth-700">{t('demo.feature1')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-ocean-500 rounded-full"></div>
                  <span className="text-earth-700">{t('demo.feature2')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-soil-500 rounded-full"></div>
                  <span className="text-earth-700">{t('demo.feature3')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-earth-500 rounded-full"></div>
                  <span className="text-earth-700">{t('demo.feature4')}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="p-6 bg-white shadow-2xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-forest-800">Environmental Monitor</h4>
                    <Badge className="bg-forest-100 text-forest-700">{t('demo.liveData')}</Badge>
                  </div>
                  <div className="h-48 bg-gradient-to-br from-forest-100 to-ocean-100 rounded-lg flex items-center justify-center">
                    <Map className="w-16 h-16 text-forest-400" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-forest-600">0.74</div>
                      <div className="text-sm text-earth-600">NDVI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-ocean-600">12%</div>
                      <div className="text-sm text-earth-600">Water</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-soil-600">68%</div>
                      <div className="text-sm text-earth-600">Soil</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-forest-900 mb-16">{t('technology.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Python", description: t('technology.python') },
              { name: "ArcGIS Pro", description: t('technology.arcgis') },
              { name: "PostgreSQL/PostGIS", description: t('technology.postgres') },
              { name: "Dash/Streamlit", description: t('technology.dash') }
            ].map((tech, index) => (
              <Card key={index} className="text-center border-earth-200 hover:shadow-lg transition-shadow bg-white/80">
                <CardHeader>
                  <CardTitle className="text-lg text-forest-800">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-earth-700 text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-earth-700 max-w-3xl mx-auto">
              {t('technology.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-forest-100 to-ocean-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-forest-900 mb-8">{t('contact.title')}</h2>
            <p className="text-center text-earth-700 mb-12 text-lg">
              {t('contact.subtitle')}
            </p>
            <Card className="bg-white/90 border-earth-200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-forest-800 mb-2">{t('contact.name')}</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-earth-200 focus:border-forest-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-forest-800 mb-2">{t('contact.email')}</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-earth-200 focus:border-forest-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-800 mb-2">{t('contact.organization')}</label>
                    <Input
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="border-earth-200 focus:border-forest-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest-800 mb-2">{t('contact.message')}</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="border-earth-200 focus:border-forest-500"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white py-3"
                  >
                    {t('contact.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-forest-400 to-forest-500 rounded-lg flex items-center justify-center">
                <Map className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">EcoMonitor</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-forest-200">
                {t('footer.copyright')}
              </p>
              <p className="text-forest-300 text-sm mt-1">
                {t('footer.powered')}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

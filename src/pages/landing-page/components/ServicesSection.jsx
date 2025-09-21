import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [calculatorData, setCalculatorData] = useState({
    projectType: 'web-app',
    complexity: 'medium',
    timeline: '3-months',
    features: []
  });

  const services = [
    {
      id: 'web-development',
      title: 'Web Application Development',
      icon: 'Globe',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: [
        'Responsive design for all devices',
        'Performance optimization',
        'SEO-friendly architecture',
        'Progressive Web App capabilities',
        'Third-party integrations',
        'Comprehensive testing'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
      startingPrice: 5000,
      timeline: '6-12 weeks',
      deliverables: [
        'Fully functional web application',
        'Source code and documentation',
        'Deployment and hosting setup',
        '30 days post-launch support',
        'Performance optimization report'
      ],
      successStory: {
        client: 'RetailCorp',
        result: '45% increase in conversion rates',
        description: 'E-commerce platform redesign that boosted sales by $2.3M annually'
      }
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      icon: 'Smartphone',
      description: 'Cross-platform mobile applications with native performance and user experience.',
      features: [
        'iOS and Android compatibility',
        'Native performance optimization',
        'Offline functionality',
        'Push notifications',
        'App store optimization',
        'Analytics integration'
      ],
      technologies: ['React Native', 'Flutter', 'Firebase', 'Redux', 'REST APIs'],
      startingPrice: 8000,
      timeline: '8-16 weeks',
      deliverables: [
        'Cross-platform mobile application',
        'App store submission assistance',
        'Backend API development',
        'User analytics dashboard',
        '60 days post-launch support'
      ],
      successStory: {
        client: 'PropertyPro',
        result: '50K+ downloads in 6 months',
        description: 'Real estate app with AR features achieving 4.7/5 rating'
      }
    },
    {
      id: 'api-development',
      title: 'API & Backend Development',
      icon: 'Server',
      description: 'Scalable backend systems and RESTful APIs for web and mobile applications.',
      features: [
        'RESTful API design',
        'Database optimization',
        'Authentication & authorization',
        'Real-time capabilities',
        'Microservices architecture',
        'Comprehensive documentation'
      ],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
      startingPrice: 4000,
      timeline: '4-8 weeks',
      deliverables: [
        'Scalable backend infrastructure',
        'API documentation',
        'Database design and setup',
        'Security implementation',
        'Performance monitoring setup'
      ],
      successStory: {
        client: 'MedTech Solutions',
        result: '99.9% uptime achieved',
        description: 'HIPAA-compliant healthcare API serving 5,000+ providers'
      }
    },
    {
      id: 'consulting',
      title: 'Technical Consulting',
      icon: 'Users',
      description: 'Strategic technical guidance and architecture planning for your projects.',
      features: [
        'Technology stack recommendations',
        'Architecture design and review',
        'Code quality assessment',
        'Performance optimization',
        'Team mentoring and training',
        'Project planning and estimation'
      ],
      technologies: ['Various based on project needs'],
      startingPrice: 150,
      timeline: 'Flexible',
      deliverables: [
        'Technical assessment report',
        'Architecture documentation',
        'Implementation roadmap',
        'Best practices guidelines',
        'Team training sessions'
      ],
      successStory: {
        client: 'StartupFlow Inc.',
        result: '$2M Series A funding secured',
        description: 'Technical guidance that helped build fundable MVP'
      }
    }
  ];

  const pricingFactors = {
    projectType: {
      'web-app': { multiplier: 1, label: 'Web Application' },
      'mobile-app': { multiplier: 1.6, label: 'Mobile Application' },
      'api-backend': { multiplier: 0.8, label: 'API/Backend' },
      'full-stack': { multiplier: 1.8, label: 'Full-Stack Solution' }
    },
    complexity: {
      'simple': { multiplier: 0.7, label: 'Simple' },
      'medium': { multiplier: 1, label: 'Medium' },
      'complex': { multiplier: 1.5, label: 'Complex' },
      'enterprise': { multiplier: 2.2, label: 'Enterprise' }
    },
    timeline: {
      '1-month': { multiplier: 1.3, label: '1 Month (Rush)' },
      '2-months': { multiplier: 1.1, label: '2 Months' },
      '3-months': { multiplier: 1, label: '3 Months' },
      '6-months': { multiplier: 0.9, label: '6+ Months' }
    }
  };

  const additionalFeatures = [
    { id: 'analytics', label: 'Advanced Analytics', price: 1500 },
    { id: 'payments', label: 'Payment Integration', price: 2000 },
    { id: 'auth', label: 'User Authentication', price: 1000 },
    { id: 'admin', label: 'Admin Dashboard', price: 2500 },
    { id: 'api', label: 'Third-party Integrations', price: 1800 },
    { id: 'testing', label: 'Automated Testing', price: 1200 }
  ];

  const calculatePrice = () => {
    const basePrice = 5000;
    const typeMultiplier = pricingFactors?.projectType?.[calculatorData?.projectType]?.multiplier;
    const complexityMultiplier = pricingFactors?.complexity?.[calculatorData?.complexity]?.multiplier;
    const timelineMultiplier = pricingFactors?.timeline?.[calculatorData?.timeline]?.multiplier;
    
    const featuresPrice = calculatorData?.features?.reduce((total, featureId) => {
      const feature = additionalFeatures?.find(f => f?.id === featureId);
      return total + (feature ? feature?.price : 0);
    }, 0);

    return Math.round((basePrice * typeMultiplier * complexityMultiplier * timelineMultiplier) + featuresPrice);
  };

  const handleFeatureToggle = (featureId) => {
    setCalculatorData(prev => ({
      ...prev,
      features: prev?.features?.includes(featureId)
        ? prev?.features?.filter(id => id !== featureId)
        : [...prev?.features, featureId]
    }));
  };

  const handleGetQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-text-primary">
            Services & 
            <span className="text-primary"> Solutions</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Comprehensive development services tailored to your business needs. 
            From concept to deployment, I deliver solutions that drive growth and success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="bg-background rounded-lg shadow-testimonial hover:shadow-professional transition-professional overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={service?.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-headline text-text-primary">{service?.title}</h3>
                    <p className="text-text-secondary">{service?.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-accent text-text-primary mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service?.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Timeline */}
                <div className="flex justify-between items-center mb-6 p-4 bg-muted rounded-lg">
                  <div>
                    <div className="text-2xl font-headline text-primary">
                      ${service?.startingPrice?.toLocaleString()}+
                    </div>
                    <div className="text-sm text-text-secondary">Starting price</div>
                  </div>
                  <div className="text-right">
                    <div className="font-accent text-text-primary">{service?.timeline}</div>
                    <div className="text-sm text-text-secondary">Timeline</div>
                  </div>
                </div>

                {/* Success Story */}
                <div className="bg-success/5 border border-success/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="TrendingUp" size={16} className="text-success" />
                    <span className="font-accent text-success">Success Story</span>
                  </div>
                  <p className="text-sm text-text-secondary mb-1">
                    <strong>{service?.successStory?.client}:</strong> {service?.successStory?.result}
                  </p>
                  <p className="text-xs text-text-secondary">{service?.successStory?.description}</p>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => setSelectedService(service)}
                    iconName="Eye"
                    iconPosition="left"
                    className="flex-1"
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleGetQuote}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Calculator */}
        <div className="bg-background rounded-lg shadow-professional p-8">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl font-headline text-text-primary">
              Project Pricing Calculator
            </h3>
            <p className="text-text-secondary">
              Get an instant estimate for your project based on requirements and complexity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="space-y-6">
              {/* Project Type */}
              <div>
                <label className="block font-accent text-text-primary mb-3">Project Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(pricingFactors?.projectType)?.map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setCalculatorData(prev => ({ ...prev, projectType: key }))}
                      className={`p-3 rounded-lg border transition-professional text-left ${
                        calculatorData?.projectType === key
                          ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="font-accent">{value?.label}</div>
                      <div className="text-xs text-text-secondary">
                        {value?.multiplier}x multiplier
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Complexity */}
              <div>
                <label className="block font-accent text-text-primary mb-3">Complexity Level</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(pricingFactors?.complexity)?.map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setCalculatorData(prev => ({ ...prev, complexity: key }))}
                      className={`p-3 rounded-lg border transition-professional text-left ${
                        calculatorData?.complexity === key
                          ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="font-accent">{value?.label}</div>
                      <div className="text-xs text-text-secondary">
                        {value?.multiplier}x multiplier
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block font-accent text-text-primary mb-3">Timeline</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(pricingFactors?.timeline)?.map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setCalculatorData(prev => ({ ...prev, timeline: key }))}
                      className={`p-3 rounded-lg border transition-professional text-left ${
                        calculatorData?.timeline === key
                          ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="font-accent">{value?.label}</div>
                      <div className="text-xs text-text-secondary">
                        {value?.multiplier}x multiplier
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              <div>
                <label className="block font-accent text-text-primary mb-3">Additional Features</label>
                <div className="space-y-2">
                  {additionalFeatures?.map((feature) => (
                    <label
                      key={feature?.id}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-professional cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={calculatorData?.features?.includes(feature?.id)}
                        onChange={() => handleFeatureToggle(feature?.id)}
                        className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                      />
                      <div className="flex-1">
                        <span className="font-accent text-text-primary">{feature?.label}</span>
                      </div>
                      <span className="text-primary font-accent">+${feature?.price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-muted rounded-lg p-6 h-fit">
              <h4 className="font-headline text-text-primary mb-4">Estimated Price</h4>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Base Price:</span>
                  <span className="text-text-primary">$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Project Type:</span>
                  <span className="text-text-primary">
                    {pricingFactors?.projectType?.[calculatorData?.projectType]?.multiplier}x
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Complexity:</span>
                  <span className="text-text-primary">
                    {pricingFactors?.complexity?.[calculatorData?.complexity]?.multiplier}x
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Timeline:</span>
                  <span className="text-text-primary">
                    {pricingFactors?.timeline?.[calculatorData?.timeline]?.multiplier}x
                  </span>
                </div>
                {calculatorData?.features?.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Additional Features:</span>
                    <span className="text-text-primary">
                      +${calculatorData?.features?.reduce((total, featureId) => {
                        const feature = additionalFeatures?.find(f => f?.id === featureId);
                        return total + (feature ? feature?.price : 0);
                      }, 0)?.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-headline text-text-primary">Total Estimate:</span>
                  <span className="text-3xl font-headline text-primary">
                    ${calculatePrice()?.toLocaleString()}
                  </span>
                </div>
                <p className="text-xs text-text-secondary mt-2">
                  *Final price may vary based on specific requirements and scope changes
                </p>
              </div>

              <Button
                variant="default"
                fullWidth
                onClick={handleGetQuote}
                iconName="MessageCircle"
                iconPosition="left"
              >
                Get Detailed Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Service Detail Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-background rounded-lg shadow-professional max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-background border-b border-border p-6 flex justify-between items-center">
                <h3 className="text-xl font-headline text-text-primary">
                  {selectedService?.title}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="X"
                  onClick={() => setSelectedService(null)}
                />
              </div>
              
              <div className="p-6 space-y-6">
                <p className="text-text-secondary leading-relaxed">
                  {selectedService?.description}
                </p>

                <div>
                  <h4 className="font-accent text-text-primary mb-4">What's Included:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedService?.deliverables?.map((deliverable, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1" />
                        <span className="text-text-secondary">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-accent text-text-primary mb-4">Success Story</h4>
                  <div className="space-y-2">
                    <p className="text-text-primary">
                      <strong>{selectedService?.successStory?.client}</strong>
                    </p>
                    <p className="text-success font-accent">
                      {selectedService?.successStory?.result}
                    </p>
                    <p className="text-text-secondary">
                      {selectedService?.successStory?.description}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    variant="default"
                    onClick={handleGetQuote}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="flex-1"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedService(null)}
                    className="flex-1"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
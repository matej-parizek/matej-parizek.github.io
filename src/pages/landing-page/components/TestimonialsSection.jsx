import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Engineering Manager',
      company: 'TechCorp Solutions',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop',
      rating: 5,
      testimonial: `John consistently delivers high-quality solutions and mentors junior developers exceptionally well. His technical leadership has been instrumental in our product success. The microservices architecture he designed reduced our system downtime by 40% and improved overall performance significantly.`,
      project: 'Enterprise Platform Redesign',
      results: ['40% reduction in downtime', '50% performance improvement', '95% code coverage'],
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'CTO',
      company: 'StartupFlow Inc.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop',
      rating: 5,
      testimonial: `John was instrumental in building our core platform from the ground up. His ability to work independently and deliver complex features quickly was remarkable. The MVP he developed helped us secure $2M in Series A funding within just 6 months of launch.`,
      project: 'Collaborative Workspace Platform',
      results: ['$2M Series A funding secured', '10K+ concurrent users', '70% load time reduction'],
      date: '2023-08-22'
    },
    {
      id: 3,
      name: 'Lisa Rodriguez',
      role: 'Creative Director',
      company: 'Digital Agency Pro',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop',
      rating: 5,
      testimonial: `John's attention to detail and ability to translate designs into pixel-perfect, performant websites is outstanding. He delivered 25+ client projects with 100% on-time completion rate. His component library reduced our development time by 30% across all projects.`,
      project: 'Multi-Client Website Development',
      results: ['25+ projects delivered', '100% on-time completion', '30% faster development'],
      date: '2023-05-10'
    },
    {
      id: 4,
      name: 'David Park',role: 'Product Manager',company: 'MedTech Solutions',avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop',
      rating: 5,
      testimonial: `Exceptional work on our healthcare platform. The security and performance standards John implemented are outstanding. The HIPAA-compliant system he built now serves 5,000+ healthcare providers with 99.9% uptime and has passed all compliance audits.`,
      project: 'Healthcare Management SaaS',
      results: ['5,000+ active users', '99.9% uptime achieved', 'HIPAA compliance certified'],
      date: '2023-12-03'
    },
    {
      id: 5,
      name: 'Emma Thompson',role: 'CEO',company: 'PropertyPro',avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop',
      rating: 5,
      testimonial: `The AR features and smooth performance of our mobile app make it stand out in the competitive real estate market. John's innovative approach to mobile development resulted in 50,000+ downloads and a 4.7/5 rating within the first 6 months.`,
      project: 'Real Estate Mobile App',
      results: ['50K+ app downloads', '4.7/5 app store rating', '80% user engagement increase'],
      date: '2024-02-18'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonialData = testimonials?.[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-text-primary">
            Client Success Stories & 
            <span className="text-primary"> Testimonials</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real feedback from clients and colleagues who have experienced the impact of 
            collaborative development and results-driven solutions.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative bg-muted rounded-2xl p-8 md:p-12 shadow-professional mb-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Client Info */}
            <div className="text-center lg:text-left space-y-4">
              <div className="relative inline-block">
                <Image
                  src={currentTestimonialData?.avatar}
                  alt={currentTestimonialData?.name}
                  className="w-20 h-20 rounded-full mx-auto lg:mx-0 object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Quote" size={16} className="text-primary-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-headline text-text-primary">
                  {currentTestimonialData?.name}
                </h3>
                <p className="text-text-secondary">
                  {currentTestimonialData?.role}
                </p>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Image
                    src={currentTestimonialData?.companyLogo}
                    alt={currentTestimonialData?.company}
                    className="h-6 w-auto opacity-70"
                  />
                  <span className="text-sm text-text-secondary">
                    {currentTestimonialData?.company}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center lg:justify-start space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < currentTestimonialData?.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                  />
                ))}
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2 space-y-6">
              <blockquote className="text-lg text-text-primary leading-relaxed italic">
                "{currentTestimonialData?.testimonial}"
              </blockquote>

              {/* Project Details */}
              <div className="bg-background rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Briefcase" size={16} className="text-primary" />
                  <span className="font-accent text-text-primary">
                    Project: {currentTestimonialData?.project}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-accent text-text-primary">Key Results:</h4>
                  <div className="grid md:grid-cols-3 gap-2">
                    {currentTestimonialData?.results?.map((result, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-success" />
                        <span className="text-sm text-text-secondary">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background rounded-full shadow-testimonial hover:shadow-professional transition-professional flex items-center justify-center group"
          >
            <Icon name="ChevronLeft" size={20} className="text-text-secondary group-hover:text-primary transition-professional" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background rounded-full shadow-testimonial hover:shadow-professional transition-professional flex items-center justify-center group"
          >
            <Icon name="ChevronRight" size={20} className="text-text-secondary group-hover:text-primary transition-professional" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-professional ${
                index === currentTestimonial
                  ? 'bg-primary' :'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.id}
              className={`bg-card rounded-lg p-6 shadow-testimonial hover:shadow-professional transition-professional cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-accent text-text-primary">{testimonial?.name}</h4>
                    <p className="text-sm text-text-secondary">{testimonial?.role}</p>
                  </div>
                </div>

                <div className="flex space-x-1">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={14}
                      className={i < testimonial?.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>

                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                  "{testimonial?.testimonial?.substring(0, 120)}..."
                </p>

                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>{testimonial?.company}</span>
                  <span>{new Date(testimonial.date)?.toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-2xl font-headline text-primary">98%</div>
              <div className="text-sm text-text-secondary">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-headline text-primary">150+</div>
              <div className="text-sm text-text-secondary">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-headline text-primary">4.9/5</div>
              <div className="text-sm text-text-secondary">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-headline text-primary">100%</div>
              <div className="text-sm text-text-secondary">Project Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
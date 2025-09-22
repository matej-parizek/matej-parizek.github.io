import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';
import { sendEmail, initEmail } from '../../../utils/send-email';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  useEffect(() => {
    initEmail();
  }, []);

  const projectTypeOptions = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'api-backend', label: 'API/Backend Development' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'other', label: 'Other' }
  ];

  const budgetOptions = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-plus', label: '$50,000+' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const timelineOptions = [
    { value: 'asap', label: 'ASAP (Rush project)' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const availableTimeSlots = [
    { id: 1, date: '2024-09-20', time: '10:00 AM', available: true },
    { id: 2, date: '2024-09-20', time: '2:00 PM', available: true },
    { id: 3, date: '2024-09-21', time: '9:00 AM', available: false },
    { id: 4, date: '2024-09-21', time: '11:00 AM', available: true },
    { id: 5, date: '2024-09-21', time: '3:00 PM', available: true },
    { id: 6, date: '2024-09-22', time: '10:00 AM', available: true }
  ];

  const contactMethods = [
    {
      method: 'email',
      icon: 'Mail',
      title: 'Email',
      value: 'mat.parizek@seznam.cz',
      description: 'Best for detailed project discussions',
      responseTime: 'Within 24 hours'
    },
    {
      method: 'phone',
      icon: 'Phone',
      title: 'Phone',
      value: '+420 775 995 600',
      description: 'Quick questions and consultations',
      responseTime: 'Available 9 AM - 6 PM CET'
    },
    {
      method: 'linkedin',
      icon: 'Linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/matej-parizek',
      description: 'Professional networking and referrals',
      responseTime: 'Within 48 hours'
    }
  ];

    const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.message?.trim()) {
      newErrors.message = 'Please describe your project';
    } else if (formData?.message?.trim()?.length < 10) {
      newErrors.message = 'Please provide details about what you’d like to discuss (minimum 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await sendEmail(formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        preferredContact: 'email'
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactMethod = (method) => {
    switch (method) {
      case 'email':
        window.location.href = 'mailto:mat.parizek@seznam.cz';
        break;
      case 'phone':
        window.location.href = 'tel:+420775995600';
        break;
      case 'linkedin':
        window.open('https://linkedin.com/in/matej-parizek', '_blank');
        break;
      default:
        break;
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-success/10 border border-success/20 rounded-lg p-12 space-y-6">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto">
              <Icon name="CheckCircle" size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-headline text-text-primary">
              Thank You for Your Interest!
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              I've received your project inquiry and will respond within 24 hours with a detailed 
              proposal and next steps. In the meantime, feel free to schedule a free consultation call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/*
              <Button
                variant="default"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => setIsSubmitted(false)}
              >
               Schedule Consultation 
              </Button>
              */ }
              <Button
                variant="outline"
                iconName="ArrowLeft"
                iconPosition="left"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </Button>
             
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-text-primary">
            Let's Build Something 
            <span className="text-primary"> Amazing Together</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Ready to collaborate on your next software project? Get in touch to discuss opportunities, 
            share ideas, or explore how my Java and Spring Boot expertise can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-xl font-headline text-text-primary">Get In Touch</h3>
            
            {contactMethods?.map((contact) => (
              <div
                key={contact?.method}
                className="bg-muted rounded-lg p-6 hover:shadow-testimonial transition-professional cursor-pointer group"
                onClick={() => handleContactMethod(contact?.method)}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-professional">
                    <Icon name={contact?.icon} size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-accent text-text-primary group-hover:text-primary transition-professional">
                      {contact?.title}
                    </h4>
                    <p className="text-primary text-sm mb-1">{contact?.value}</p>
                    <p className="text-text-secondary text-sm mb-2">{contact?.description}</p>
                    <p className="text-xs text-text-secondary">{contact?.responseTime}</p>
                  </div>
                  <Icon name="ExternalLink" size={16} className="text-text-secondary group-hover:text-primary transition-professional" />
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            {/*
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-accent text-text-primary mb-4">Why Choose Me?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">24-hour response guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">100% confidential consultations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">1.5+ years proven experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="GraduationCap" size={16} className="text-primary" />
                  <span className="text-sm text-text-secondary">CTU Prague education</span>
                </div>
              </div>
            </div>
            */}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-headline text-text-primary mb-6">
                Project Inquiry Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    error={errors?.name}
                    required
                  />
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData?.email}
                    onChange={handleInputChange}
                    error={errors?.email}
                    required
                  />
                </div>

                <Input
                  label="Company/Organization"
                  name="company"
                  type="text"
                  placeholder="Your company name (optional)"
                  value={formData?.company}
                  onChange={handleInputChange}
                />
                  {/*

                <div className="grid md:grid-cols-3 gap-6">
                  <Select
                    label="Project Type"
                    options={projectTypeOptions}
                    value={formData?.projectType}
                    onChange={(value) => handleSelectChange('projectType', value)}
                    error={errors?.projectType}
                    placeholder="Select project type"
                    required
                  /> 
                  <Select
                    label="Budget Range"
                    options={budgetOptions}
                    value={formData?.budget}
                    onChange={(value) => handleSelectChange('budget', value)}
                    placeholder="Select budget range"
                  />
                  <Select
                    label="Timeline"
                    options={timelineOptions}
                    value={formData?.timeline}
                    onChange={(value) => handleSelectChange('timeline', value)}
                    placeholder="Select timeline"
                  />
                </div>
                  */}


                <div>
                  <label className="block font-accent text-text-primary mb-2">
                    Write to Me *
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Write your message here — let me know how I can help or what you’d like to discuss."
                    value={formData?.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-professional resize-none ${
                      errors?.message ? 'border-error' : 'border-border'
                    }`}
                    required
                  />
                  {errors?.message && (
                    <p className="text-error text-sm mt-1">{errors?.message}</p>
                  )}
                  <p className="text-xs text-text-secondary mt-1">
                    Minimum 10 characters. Current: {formData?.message?.length}
                  </p>
                </div>

                <div>
                  <label className="block font-accent text-text-primary mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'email', label: 'Email', icon: 'Mail' },
                      { value: 'phone', label: 'Phone Call', icon: 'Phone' }
                    ]?.map((method) => (
                      <label
                        key={method?.value}
                        className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-professional cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method?.value}
                          checked={formData?.preferredContact === method?.value}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-primary border-border focus:ring-primary"
                        />
                        <Icon name={method?.icon} size={16} className="text-text-secondary" />
                        <span className="text-text-primary">{method?.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="left"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Project Inquiry'}
                </Button>

                <p className="text-xs text-text-secondary text-center">
                  By submitting this form, you agree to be contacted regarding your inquiry.  
                  Your information will remain strictly confidential and will never be shared with third parties.
                </p>
              </form>
            </div>
            {/* Available Time Slots */}
            {/*
            <div className="mt-8 bg-background rounded-lg p-6 shadow-testimonial">
              <h4 className="font-headline text-text-primary mb-4">
                Available Consultation Slots
              </h4>
              <p className="text-text-secondary text-sm mb-4">
                Book a free 30-minute consultation to discuss your project in detail.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableTimeSlots?.map((slot) => (
                  <button
                    key={slot?.id}
                    onClick={() => setSelectedTimeSlot(slot?.id)}
                    disabled={!slot?.available}
                    className={`p-3 rounded-lg border text-left transition-professional ${
                      slot?.available
                        ? selectedTimeSlot === slot?.id
                          ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50' :'border-border bg-muted text-text-secondary cursor-not-allowed opacity-50'
                    }`}
                  >
                    <div className="font-accent text-sm">
                      {new Date(slot.date)?.toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="text-xs">{slot?.time}</div>
                    {!slot?.available && (
                      <div className="text-xs text-error">Booked</div>
                    )}
                  </button>
                ))}
              </div>

              {selectedTimeSlot && (
                <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-sm text-text-primary">
                    Selected slot: {availableTimeSlots?.find(s => s?.id === selectedTimeSlot)?.date} at{' '}
                    {availableTimeSlots?.find(s => s?.id === selectedTimeSlot)?.time}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    iconName="Calendar"
                    iconPosition="left"
                  >
                    Confirm Booking
                  </Button>
                </div>
              )}
            </div> 
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
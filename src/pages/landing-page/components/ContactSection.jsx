import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';
import { sendEmail, initEmail } from '../../../utils/send-email';
import { useStorage } from '../../../store/useStorage';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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

  const { contactMethods} = useStorage()

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
        phone: '',
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
              I have received your message and will get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            Contact
            <span className="text-primary"> Me </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            I'm always open to new ideas, collaborations, or meaningful conversations.  
            Feel free to reach out if you'd like to connect, share your thoughts,  
            or explore how we can work together to make an impact.
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


                <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Phone"
                  name="phone"
                  type="text"
                  placeholder="Your phone number (optional)"
                  value={formData?.phone}
                  onChange={handleInputChange}
                />

                <Input
                  label="Company/Organization"
                  name="company"
                  type="text"
                  placeholder="Your company name (optional)"
                  value={formData?.company}
                  onChange={handleInputChange}
                />
             </div> 
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
                    className={` w-full px-4 py-3 border rounded-lg focus:ring-2
                        bg-input text-white
                       focus:ring-primary focus:border-primary transition-professional resize-none${
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
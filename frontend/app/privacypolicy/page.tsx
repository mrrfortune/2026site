import { Shield, Lock, Eye, Database, UserCheck, Mail } from 'lucide-react';

export default function PrivacyPolicy(){
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "We collect information you provide directly to us when you use our services, including your name, email address, phone number, company name, and any other information you choose to provide.",
        "When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.",
        "We may collect information about how you interact with our services, including pages visited, links clicked, and other actions taken."
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide, maintain, and improve our services and respond to your requests and inquiries",
        "To send you technical notices, updates, security alerts, and support messages",
        "To communicate with you about products, services, offers, and events we think may interest you",
        "To monitor and analyze trends, usage, and activities in connection with our services",
        "To detect, prevent, and address technical issues and fraudulent activity",
        "To comply with legal obligations and protect our rights and the rights of others"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.",
        "We use encryption protocols to protect sensitive data in transit and at rest.",
        "Access to personal information is restricted to authorized personnel only who need it to perform their job functions.",
        "We regularly review and update our security practices to ensure the ongoing protection of your data."
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access: You have the right to request copies of your personal data.",
        "Rectification: You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.",
        "Erasure: You have the right to request that we erase your personal data under certain conditions.",
        "Restrict Processing: You have the right to request that we restrict the processing of your personal data under certain conditions.",
        "Data Portability: You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.",
        "Object: You have the right to object to our processing of your personal data under certain conditions."
      ]
    },
    {
      icon: Shield,
      title: "Third-Party Services",
      content: [
        "We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.",
        "These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.",
        "We may also share information when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request."
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl mb-4 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Last updated: December 22, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            At EchoShift, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you visit our website or use our services. Please read this privacy 
            policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="border-l-4 border-blue-600 dark:border-blue-400 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cookies Section */}
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900">
          <h3 className="text-xl mb-3 dark:text-white">Cookies and Tracking Technologies</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
            We use cookies and similar tracking technologies to track activity on our service and hold certain information. 
            Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
            if you do not accept cookies, you may not be able to use some portions of our service. For more information, 
            please see our <a href="/cookie-policy" className="text-blue-600 dark:text-blue-400 underline underline-offset-2">Cookie Policy</a>.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl mb-2 dark:text-white">Questions About This Policy?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-1 text-slate-600 dark:text-slate-300">
                <p>Email: <a href="mailto:privacy@echoshift.agency" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@echoshift.agency</a></p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Innovation Drive, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

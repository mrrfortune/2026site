import { Cookie, Info, Settings, ToggleLeft, Shield, CheckCircle } from 'lucide-react';

export default function CookiePolicy() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Strictly Necessary Cookies",
      description: "These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.",
      examples: [
        "Session cookies to maintain your login state",
        "Security cookies to authenticate users and prevent fraud",
        "Load balancing cookies to distribute traffic across servers"
      ],
      color: "blue"
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we use on our pages.",
      examples: [
        "Language preference cookies",
        "Region selection cookies",
        "User interface customization cookies",
        "Video player preferences"
      ],
      color: "purple"
    },
    {
      icon: Info,
      title: "Analytical/Performance Cookies",
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us understand which pages are popular and how visitors navigate around the site.",
      examples: [
        "Google Analytics cookies",
        "Page view tracking",
        "Session duration measurement",
        "Bounce rate analysis"
      ],
      color: "green"
    },
    {
      icon: ToggleLeft,
      title: "Targeting/Advertising Cookies",
      description: "These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant ads on other sites.",
      examples: [
        "Social media advertising cookies (Facebook, LinkedIn)",
        "Google Ads remarketing cookies",
        "Third-party ad network cookies",
        "Cross-site tracking for ad personalization"
      ],
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        border: "border-blue-600 dark:border-blue-400",
        bg: "bg-blue-100 dark:bg-blue-950",
        text: "text-blue-600 dark:text-blue-400",
        accent: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900"
      },
      purple: {
        border: "border-purple-600 dark:border-purple-400",
        bg: "bg-purple-100 dark:bg-purple-950",
        text: "text-purple-600 dark:text-purple-400",
        accent: "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900"
      },
      green: {
        border: "border-green-600 dark:border-green-400",
        bg: "bg-green-100 dark:bg-green-950",
        text: "text-green-600 dark:text-green-400",
        accent: "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900"
      },
      amber: {
        border: "border-amber-600 dark:border-amber-400",
        bg: "bg-amber-100 dark:bg-amber-950",
        text: "text-amber-600 dark:text-amber-400",
        accent: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="min-h-screen dark:bg-slate-950 pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6">
            <Cookie className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl mb-4 dark:text-white">
            Cookie Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Last updated: December 22, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            This Cookie Policy explains how EchoShift ("we", "us", or "our") uses cookies and similar technologies 
            when you visit our website. It explains what these technologies are, why we use them, and your rights 
            to control our use of them.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            By continuing to use our website, you consent to our use of cookies as described in this policy.
          </p>
        </div>

        {/* What Are Cookies Section */}
        <div className="mb-12 p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl mb-4 dark:text-white flex items-center gap-3">
            <Cookie className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            What Are Cookies?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            Cookies are small text files that are placed on your device when you visit a website. They are widely 
            used to make websites work more efficiently and provide information to website owners. Cookies allow 
            websites to remember your actions and preferences over time.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Similar technologies include web beacons, pixels, and local storage. These technologies serve similar 
            purposes to cookies and are also covered by this policy.
          </p>
        </div>

        {/* Types of Cookies */}
        <div className="mb-12">
          <h2 className="text-3xl mb-8 dark:text-white text-center">
            Types of Cookies We Use
          </h2>
          <div className="space-y-8">
            {cookieTypes.map((type, index) => {
              const Icon = type.icon;
              const colors = getColorClasses(type.color);
              return (
                <div key={index} className={`border-l-4 ${colors.border} pl-6`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl dark:text-white">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {type.description}
                  </p>
                  <div className={`p-4 ${colors.accent} rounded-lg border`}>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {type.examples.map((example, eIndex) => (
                        <li key={eIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-slate-400 dark:text-slate-600" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Managing Cookies Section */}
        <div className="mb-12 space-y-6">
          <h2 className="text-3xl dark:text-white">
            Managing Your Cookie Preferences
          </h2>
          
          <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl mb-3 dark:text-white">Browser Settings</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can set your browser to 
              refuse cookies or delete certain cookies. Generally, you can find these settings in the "Options" 
              or "Preferences" menu of your browser.
            </p>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <p><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</p>
              <p><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</p>
              <p><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</p>
              <p><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</p>
            </div>
          </div>

          <div className="p-6 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900">
            <h3 className="text-xl mb-3 dark:text-white flex items-center gap-2">
              <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              Important Note
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Please note that if you disable or refuse cookies, some parts of our website may become inaccessible 
              or not function properly. Strictly necessary cookies cannot be disabled as they are essential for 
              the website to function.
            </p>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="mb-12 p-6 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-200 dark:border-purple-900">
          <h3 className="text-xl mb-3 dark:text-white">Third-Party Cookies</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics, 
            deliver advertisements, and provide social media features. These third parties may collect information 
            about your online activities over time and across different websites.
          </p>
          <div className="space-y-2 text-slate-600 dark:text-slate-300">
            <p><strong>Google Analytics:</strong> Helps us understand how visitors use our website</p>
            <p><strong>Social Media Platforms:</strong> Enable social sharing and tracking</p>
            <p><strong>Advertising Networks:</strong> Deliver targeted advertisements based on your interests</p>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 underline">Google Analytics Opt-out Browser Add-on</a>.
          </p>
        </div>

        {/* Updates Section */}
        <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900">
          <h3 className="text-xl mb-3 dark:text-white">Updates to This Policy</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
            operational, legal, or regulatory reasons. We encourage you to review this policy periodically to 
            stay informed about our use of cookies.
          </p>
        </div>

        {/* Contact Section */}
        <div className="p-8 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shrink-0">
              <Cookie className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl mb-2 dark:text-white">Questions About Cookies?</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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
